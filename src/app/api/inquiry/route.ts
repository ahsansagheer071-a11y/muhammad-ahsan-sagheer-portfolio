import { NextResponse } from "next/server";

// Force dynamic execution on every request — never cache environment variables or responses
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const fetchCache = "force-no-store";

interface InquiryPayload {
  name: string;
  email: string;
  service: string;
  projectDetails: string;
  processImprovement?: string;
  timeline?: string;
  budget?: string;
  automationCategory?: string;
  sourceUrl?: string;
  bot_field_honey?: string; // Enhanced honeypot
  hp_company?: string;      // Legacy honeypot for compatibility
}

// In-memory sliding window rate limiter: Max 5 submissions per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean up expired entries periodically
  if (record && now > record.expiresAt) {
    rateLimitMap.delete(ip);
  }

  const currentRecord = rateLimitMap.get(ip);

  if (!currentRecord) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (currentRecord.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  currentRecord.count += 1;
  return false;
}

// Resilient API Key Extractor: checks all common variable names, casings, and trims accidental quotes/spaces
function getResendApiKey(): { key: string | null; source: string | null } {
  const candidates: [string, string | undefined][] = [
    ["RESEND_API_KEY", process.env.RESEND_API_KEY],
    ["resend_api_key", process.env.resend_api_key],
    ["RESEND_KEY", process.env.RESEND_KEY],
    ["resend_key", process.env.resend_key],
    ["RESEND_TOKEN", process.env.RESEND_TOKEN],
    ["RESEND_API", process.env.RESEND_API],
    ["NEXT_PUBLIC_RESEND_API_KEY", process.env.NEXT_PUBLIC_RESEND_API_KEY],
    ["NEXT_PUBLIC_RESEND_KEY", process.env.NEXT_PUBLIC_RESEND_KEY],
  ];

  for (const [name, val] of candidates) {
    if (val && typeof val === "string") {
      const cleaned = val.trim().replace(/^["']|["']$/g, "");
      if (cleaned.length > 0) {
        return { key: cleaned, source: name };
      }
    }
  }

  // Scan all environment variables for any containing "RESEND"
  for (const [name, val] of Object.entries(process.env)) {
    const norm = name.trim().toUpperCase();
    if (
      (norm.includes("RESEND") || norm.includes("RESEND_API")) &&
      val &&
      typeof val === "string"
    ) {
      const cleaned = val.trim().replace(/^["']|["']$/g, "");
      if (cleaned.length > 0) {
        return { key: cleaned, source: name };
      }
    }
  }

  return { key: null, source: null };
}

// Sender address sanitizer: ensures public webmail addresses (like @gmail.com) are not passed as Resend 'from'
function getFromEmail(): { email: string; isFallback: boolean; warning?: string } {
  const envFrom = process.env.RESEND_FROM_EMAIL?.trim().replace(/^["']|["']$/g, "");

  if (envFrom) {
    const lower = envFrom.toLowerCase();
    if (
      lower.includes("@gmail.com") ||
      lower.includes("@yahoo.com") ||
      lower.includes("@hotmail.com") ||
      lower.includes("@outlook.com")
    ) {
      return {
        email: "Portfolio Notification <onboarding@resend.dev>",
        isFallback: true,
        warning: `RESEND_FROM_EMAIL was set to a public webmail address (${envFrom}), which is not permitted by Resend. Falling back to onboarding@resend.dev.`,
      };
    }
    return { email: envFrom, isFallback: false };
  }

  return {
    email: "Portfolio Notification <onboarding@resend.dev>",
    isFallback: true,
  };
}

function getDestinationEmail(): string {
  const envTo = process.env.CONTACT_EMAIL?.trim().replace(/^["']|["']$/g, "");
  if (envTo && envTo.includes("@")) {
    return envTo;
  }
  return "ahsansagheer18@gmail.com";
}

// Live diagnostic health check endpoint (GET /api/inquiry)
export async function GET(request: Request) {
  const { key, source } = getResendApiKey();
  const hasApiKey = Boolean(key);
  const fromInfo = getFromEmail();
  const destinationEmail = getDestinationEmail();

  const url = new URL(request.url);
  const testPing = url.searchParams.get("test") === "true";

  let resendPingResult: Record<string, any> | null = null;

  // Optional live test ping to Resend API without revealing any secret characters
  if (testPing && key) {
    try {
      const resendCheck = await fetch("https://api.resend.com/api-keys", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });

      const checkData = await resendCheck.json().catch(() => ({}));
      resendPingResult = {
        httpStatus: resendCheck.status,
        authorized: resendCheck.ok,
        message: resendCheck.ok ? "API Key is active and verified by Resend" : checkData?.message || "Rejected by Resend",
      };
    } catch (err: any) {
      resendPingResult = {
        httpStatus: 0,
        authorized: false,
        message: err?.message || "Failed to contact Resend API",
      };
    }
  }

  // Safe list of detected environment variable keys (names only, NEVER values)
  const presentResendEnvNames = Object.keys(process.env).filter((k) =>
    k.toUpperCase().includes("RESEND")
  );

  return NextResponse.json({
    status: "online",
    configured: hasApiKey,
    keyDetected: hasApiKey,
    keySource: source,
    keyPrefix: hasApiKey && key ? key.substring(0, 3) + "..." : "none",
    keyFormatValid: hasApiKey && key ? key.startsWith("re_") : false,
    keyLength: hasApiKey && key ? key.length : 0,
    recipient: destinationEmail,
    sender: fromInfo.email,
    senderWarning: fromInfo.warning || null,
    vercelEnv: process.env.VERCEL_ENV || process.env.NODE_ENV || "unknown",
    presentResendEnvNames,
    resendPingResult,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    // 1. IP & Rate Limiting Check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous-client";

    if (isRateLimited(ip)) {
      console.warn(`[Rate Limit Exceeded]: IP ${ip}`);
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many submission attempts. Please wait a few minutes or contact ahsansagheer18@gmail.com directly.",
        },
        { status: 429 }
      );
    }

    // 2. Parse payload
    const body: InquiryPayload = await request.json();

    // 3. Smart Honeypot Handling (Never discard legitimate client inquiries)
    const honeypotValue = body.bot_field_honey || body.hp_company;
    let isPotentialBot = Boolean(honeypotValue && honeypotValue.trim() !== "");

    // 4. Server-Side Validation
    const { name, email, service, projectDetails } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (
      !projectDetails ||
      typeof projectDetails !== "string" ||
      projectDetails.trim().length < 5
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a brief description of your project (minimum 5 characters).",
        },
        { status: 400 }
      );
    }

    const destinationEmail = getDestinationEmail();
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
      dateStyle: "full",
      timeStyle: "long",
    });

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanService = service?.trim() || "AI Automation";
    const cleanTimeline = body.timeline?.trim() || "Flexible";
    const cleanBudget = body.budget?.trim() || "Not specified";
    const cleanCategory = body.automationCategory?.trim() || "General Inquiry";
    const cleanDetails = projectDetails.trim();
    const cleanImprovement = body.processImprovement?.trim() || "None specified";
    const originUrl = body.sourceUrl?.trim() || "/";

    // 5. Plain Text Fallback
    const textContent = `
New Project Inquiry Received

--------------------------------------------------
Sender Details:
• Name: ${cleanName}
• Email: ${cleanEmail}
• Submission Time: ${timestamp} (PKT)
• Origin Page: ${originUrl}
${isPotentialBot ? "• Warning: Honeypot field triggered (possible browser autofill or bot)" : ""}

Project Requirements:
• Service Needed: ${cleanService}
• Category / Focus: ${cleanCategory}
• Target Timeline: ${cleanTimeline}
• Estimated Budget: ${cleanBudget}

Project Overview:
${cleanDetails}

Process to Improve:
${cleanImprovement}
--------------------------------------------------
Reply directly to this email to contact ${cleanName}.
`.trim();

    // 6. Styled HTML Email Template
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#0c0d0e;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#f8fafc;">
  <div style="max-width:640px;margin:30px auto;background-color:#18181b;border:1px solid #27272a;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.5);">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0284c7 0%,#38bdf8 100%);padding:28px 32px;text-align:left;">
      <div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#0c0d0e;margin-bottom:6px;">
        PORTFOLIO INQUIRY &bull; NOTIFICATION
      </div>
      <h1 style="margin:0;font-size:24px;font-weight:800;color:#0c0d0e;line-height:1.2;">
        New Project Inquiry from ${cleanName}
      </h1>
    </div>

    <!-- Main Content -->
    <div style="padding:32px;">
      
      ${
        isPotentialBot
          ? `<div style="background-color:#451a03;border:1px solid #78350f;border-radius:8px;padding:12px;margin-bottom:20px;font-size:12px;color:#fef3c7;">
              Notice: Hidden honeypot field contained data. If this was a real user, browser autofill may have filled it.
            </div>`
          : ""
      }

      <!-- Sender Information Box -->
      <div style="background-color:#111113;border:1px solid #27272a;border-radius:12px;padding:20px;margin-bottom:24px;">
        <div style="font-size:11px;font-weight:700;color:#38bdf8;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">
          Client Information
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:6px 0;color:#a1a1aa;width:120px;">Name:</td>
            <td style="padding:6px 0;color:#f8fafc;font-weight:600;">${cleanName}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#a1a1aa;">Email:</td>
            <td style="padding:6px 0;">
              <a href="mailto:${cleanEmail}" style="color:#38bdf8;text-decoration:none;font-weight:600;">${cleanEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#a1a1aa;">Time:</td>
            <td style="padding:6px 0;color:#f8fafc;">${timestamp}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#a1a1aa;">Origin URL:</td>
            <td style="padding:6px 0;color:#71717a;font-family:monospace;font-size:12px;">${originUrl}</td>
          </tr>
        </table>
      </div>

      <!-- Project Scoping Details Box -->
      <div style="background-color:#111113;border:1px solid #27272a;border-radius:12px;padding:20px;margin-bottom:24px;">
        <div style="font-size:11px;font-weight:700;color:#38bdf8;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">
          Project Scope
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:6px 0;color:#a1a1aa;width:140px;">Service Needed:</td>
            <td style="padding:6px 0;color:#38bdf8;font-weight:700;">${cleanService}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#a1a1aa;">Category / Focus:</td>
            <td style="padding:6px 0;color:#f8fafc;">${cleanCategory}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#a1a1aa;">Target Timeline:</td>
            <td style="padding:6px 0;color:#f8fafc;">${cleanTimeline}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#a1a1aa;">Budget Range:</td>
            <td style="padding:6px 0;color:#f8fafc;font-weight:600;">${cleanBudget}</td>
          </tr>
        </table>
      </div>

      <!-- Project Overview Text -->
      <div style="margin-bottom:24px;">
        <div style="font-size:12px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">
          Project Description
        </div>
        <div style="background-color:#111113;border:1px solid #27272a;border-radius:12px;padding:16px;font-size:14px;line-height:1.6;color:#f8fafc;white-space:pre-wrap;">${cleanDetails}</div>
      </div>

      <!-- Process Improvement -->
      ${
        cleanImprovement !== "None specified"
          ? `
      <div style="margin-bottom:28px;">
        <div style="font-size:12px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">
          Process to Improve
        </div>
        <div style="background-color:#111113;border:1px solid #27272a;border-radius:12px;padding:16px;font-size:14px;line-height:1.6;color:#e4e4e7;white-space:pre-wrap;">${cleanImprovement}</div>
      </div>`
          : ""
      }

      <!-- Direct Action Button -->
      <div style="text-align:center;padding-top:10px;">
        <a href="mailto:${cleanEmail}?subject=Re:%20Project%20Inquiry%20%E2%80%94%20${encodeURIComponent(
      cleanService
    )}" style="display:inline-block;background-color:#38bdf8;color:#0c0d0e;padding:14px 32px;border-radius:30px;font-size:14px;font-weight:700;text-decoration:none;">
          Reply to ${cleanName} (${cleanEmail})
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color:#111113;padding:16px 32px;border-top:1px solid #27272a;text-align:center;font-size:12px;color:#71717a;">
      Muhammad Ahsan Sagheer &bull; Portfolio Lead Notification System
    </div>

  </div>
</body>
</html>
`.trim();

    // 7. Extract and Validate Resend API Key
    const { key: resendApiKey, source: keySource } = getResendApiKey();

    if (!resendApiKey) {
      console.error(
        "[Resend Error]: RESEND_API_KEY environment variable is missing or empty in Vercel runtime.\n" +
        "Lead content was logged securely to server console:\n" +
        textContent
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is currently awaiting API key configuration in Vercel. Please email ahsansagheer18@gmail.com directly.",
        },
        { status: 503 }
      );
    }

    const { email: fromEmail } = getFromEmail();

    const subjectPrefix = isPotentialBot ? "[Potential Autofill Flag] " : "";
    const emailSubject = `${subjectPrefix}New Project Inquiry: ${cleanService} — ${cleanName}`;

    // 8. Execute Resend API Call
    console.log(`[Resend Dispatch Attempt]: Using key from ${keySource}, recipient: ${destinationEmail}, sender: ${fromEmail}`);

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [destinationEmail],
        reply_to: cleanEmail,
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
      }),
    });

    const responseData = await resendResponse.json().catch(() => ({}));

    // 9. Strict Failure Handling — NEVER return success if Resend rejects
    if (!resendResponse.ok) {
      console.error("[Resend API Error Response]:", {
        status: resendResponse.status,
        statusText: resendResponse.statusText,
        error: responseData,
        recipient: destinationEmail,
        from: fromEmail,
      });

      let userErrorMessage =
        "Unable to send your inquiry at this moment. Please email ahsansagheer18@gmail.com directly.";

      if (resendResponse.status === 403) {
        userErrorMessage =
          "Email service authorization error. Please reach out to ahsansagheer18@gmail.com directly.";
      } else if (resendResponse.status === 401 || resendResponse.status === 400) {
        userErrorMessage =
          "Email service authentication issue. Please reach out to ahsansagheer18@gmail.com directly.";
      } else if (resendResponse.status === 429) {
        userErrorMessage =
          "Email service rate limit reached. Please email ahsansagheer18@gmail.com directly.";
      }

      return NextResponse.json(
        {
          success: false,
          error: userErrorMessage,
          debugCode: responseData?.name || `HTTP_${resendResponse.status}`,
          debugMessage: responseData?.message || undefined,
        },
        { status: 502 }
      );
    }

    // 10. Genuine Verified Success
    console.log("[Resend Dispatch Success]:", {
      emailId: responseData?.id,
      recipient: destinationEmail,
      clientName: cleanName,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thanks — your project details have been sent. I’ll get back to you shortly.",
      emailId: responseData?.id,
    });
  } catch (error: any) {
    console.error("[Inquiry API Unexpected Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred while processing your inquiry. Please email ahsansagheer18@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
