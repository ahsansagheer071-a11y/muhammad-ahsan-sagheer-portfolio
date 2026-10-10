import { NextResponse } from "next/server";

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
  hp_company?: string; // Honeypot field for bot protection
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

export async function POST(request: Request) {
  try {
    // 1. IP & Rate Limiting Check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous-client";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many submission attempts. Please wait a few minutes or send an email directly.",
        },
        { status: 429 }
      );
    }

    // 2. Parse payload
    const body: InquiryPayload = await request.json();

    // 3. Spam Protection: Honeypot check
    if (body.hp_company && body.hp_company.trim() !== "") {
      // Silently return success to neutralize spam bots without sending email
      return NextResponse.json({
        success: true,
        message: "Inquiry received successfully.",
      });
    }

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
          error: "Please provide a brief description of your project.",
        },
        { status: 400 }
      );
    }

    const destinationEmail = process.env.CONTACT_EMAIL || "ahsansagheer18@gmail.com";
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

Project Requirements:
• Service Needed: ${cleanService}
• Automation Intent: ${cleanCategory}
• Target Timeline: ${cleanTimeline}
• Estimated Budget: ${cleanBudget}

Project Overview:
${cleanDetails}

Process to Improve:
${cleanImprovement}
--------------------------------------------------
Reply directly to this email to contact the client.
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

    // 7. Email Dispatcher via Resend REST API
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const fromEmail =
        process.env.RESEND_FROM_EMAIL ||
        "Muhammad Portfolio <onboarding@resend.dev>";

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey.trim()}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [destinationEmail],
          reply_to: cleanEmail,
          subject: `New Project Inquiry: ${cleanService} — ${cleanName}`,
          text: textContent,
          html: htmlContent,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json().catch(() => ({}));
        console.error("[Resend API Error]:", errorData);

        // Securely log email content on server so no inquiry is ever lost
        console.log("[INQUIRY BACKUP LOG]:\n", textContent);

        return NextResponse.json({
          success: true,
          message:
            "Thanks — your project details have been sent. I’ll get back to you shortly.",
        });
      }
    } else {
      // In development or when RESEND_API_KEY is not yet populated in Vercel
      console.log(
        "==================================================\n" +
        "⚡ [NEW INQUIRY RECEIVED — RESEND_API_KEY PENDING] ⚡\n" +
        `To: ${destinationEmail}\n` +
        `Reply-To: ${cleanEmail}\n` +
        textContent +
        "\n=================================================="
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thanks — your project details have been sent. I’ll get back to you shortly.",
    });
  } catch (error) {
    console.error("[Inquiry API Unexpected Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred while sending your inquiry. Please try again or email ahsansagheer18@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
