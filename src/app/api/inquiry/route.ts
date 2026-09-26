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

export async function POST(request: Request) {
  try {
    const body: InquiryPayload = await request.json();

    // 1. Spam Protection: Honeypot check
    if (body.hp_company && body.hp_company.trim() !== "") {
      // Silently return success to trick spam bots without sending email
      return NextResponse.json({
        success: true,
        message: "Inquiry received successfully.",
      });
    }

    // 2. Validation
    const { name, email, service, projectDetails } = body;

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!projectDetails || projectDetails.trim().length < 5) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a brief description of your project.",
        },
        { status: 400 }
      );
    }

    const destinationEmail = "ahsansagheer071@gmail.com";
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
      dateStyle: "full",
      timeStyle: "long",
    });

    const emailContent = `
New Project Inquiry Received

--------------------------------------------------
Sender Details:
• Name: ${name.trim()}
• Email: ${email.trim()}
• Submission Time: ${timestamp} (PKT)
• Origin Page: ${body.sourceUrl || "/"}

Project Requirements:
• Service Needed: ${service || "AI Automation"}
• Timeline: ${body.timeline || "Flexible"}
• Budget Range: ${body.budget || "Not specified"}
• Automation Intent: ${body.automationCategory || "General Inquiry"}

Project Overview:
${projectDetails.trim()}

Process to Improve:
${body.processImprovement?.trim() || "Not specified"}
--------------------------------------------------
`.trim();

    // 3. Email Dispatcher
    // Uses RESEND_API_KEY if configured in environment variables (Vercel / .env.local)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "Portfolio Inquiry <onboarding@resend.dev>",
            to: [destinationEmail],
            reply_to: email.trim(),
            subject: `New Inquiry: ${service} — ${name.trim()}`,
            text: emailContent,
          }),
        });

        if (!resendResponse.ok) {
          const errData = await resendResponse.json();
          console.error("[Resend Error]:", errData);
          // Still log inquiry to server console so no lead is lost
          console.log("[INQUIRY BACKUP LOG]:\n", emailContent);
        }
      } catch (emailErr) {
        console.error("[Email Dispatch Error]:", emailErr);
        console.log("[INQUIRY BACKUP LOG]:\n", emailContent);
      }
    } else {
      // In development or when API key is pending, securely log the inquiry
      console.log(
        "==================================================\n" +
        "⚡ [NEW INQUIRY RECEIVED] ⚡\n" +
        emailContent +
        "\n=================================================="
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thanks — your project details have been sent. I’ll get back to you shortly.",
    });
  } catch (error) {
    console.error("[Inquiry API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred while sending your inquiry. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
