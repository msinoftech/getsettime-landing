import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, department, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const isNewsletter = department === "Newsletter" || name === "Newsletter Subscriber";

    const subject = isNewsletter
      ? "New Newsletter Subscription"
      : "New Inquiry via Contact Form";

    const headerTitle = isNewsletter
      ? "New Newsletter Subscription"
      : "New Contact Inquiry";

    const footerNote = isNewsletter
      ? "This email was sent from your website newsletter subscription form."
      : "Sent from GetSetTime CRM System • Do not share customer data";

    const inquiryDate = new Date().toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const mailtoLink = `mailto:${encodeURIComponent(email)}`;
    const whatsappLink = `https://wa.me/${String(phone || "").replace(/\D/g, "")}`;

    const htmlBody = isNewsletter
      ? `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 24px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <div style="background: linear-gradient(135deg, #4b39f4 0%, #1de4a9 100%); padding: 24px 28px; border-radius: 12px 12px 0 0;">
              <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px; color: white;">✉</span>
                <div style="margin-left: 12px;">
                  <h2 style="margin: 0; font-size: 22px; font-weight: bold; color: #ffffff;">${headerTitle}</h2>
                  <p style="margin: 6px 0 0; font-size: 14px; color: rgba(255,255,255,0.9);">A new user has subscribed to your newsletter</p>
                </div>
              </div>
            </div>
            <div style="padding: 24px 28px;">
              <div style="display: inline-block; background-color: #edf2f7; color: #4a5568; font-size: 13px; padding: 6px 12px; border-radius: 6px; margin-bottom: 20px;">Lead Source: Newsletter Form</div>
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 14px;">
                <tr><td style="padding: 8px 0; color: #6b7280; width: 100px;">Email</td><td style="padding: 8px 0; font-weight: bold; color: #1d1b30;">${email}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">Date</td><td style="padding: 8px 0; font-weight: bold; color: #1d1b30;">${inquiryDate}</td></tr>
              </table>
              <div style="margin-top: 24px;">
                <a href="mailto:${encodeURIComponent(email)}" style="display: inline-block; background-color: #4b39f4; color: #ffffff; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px;">Reply via Email</a>
              </div>
            </div>
          </div>
          <p style="text-align: center; color: #a0a0a0; font-size: 12px; margin-top: 20px;">${footerNote}</p>
        </div>`
      : `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 24px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <div style="background: linear-gradient(135deg, #4b39f4 0%, #1de4a9 100%); padding: 24px 28px; border-radius: 12px 12px 0 0;">
              <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px; color: white;">✉</span>
                <div style="margin-left: 12px;">
                  <h2 style="margin: 0; font-size: 22px; font-weight: bold; color: #ffffff;">${headerTitle}</h2>
                  <p style="margin:0; font-size: 14px; color: rgba(255,255,255,0.9);">You received a new message from your website</p>
                </div>
              </div>
            </div>
            <div style="padding: 24px 28px;">
              <div style="display: inline-block; background-color: #edf2f7; color: #4a5568; font-size: 13px; padding: 6px 12px; border-radius: 6px; margin-bottom: 20px;">Lead Source: Website Form</div>
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 14px;">
                <tr><td style="padding: 8px 0; color: #6b7280; width: 100px;">Name</td><td style="padding: 8px 0; font-weight: bold; color: #1d1b30;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0; font-weight: bold; color: #1d1b30;">${email}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">Phone</td><td style="padding: 8px 0; font-weight: bold; color: #1d1b30;">${phone || "—"}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">Department</td><td style="padding: 8px 0; font-weight: bold; color: #1d1b30;">${department}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">Date</td><td style="padding: 8px 0; font-weight: bold; color: #1d1b30;">${inquiryDate}</td></tr>
              </table>
              <div style="margin-top: 24px; padding: 16px; background-color: #f8f8f8; border-radius: 8px; font-size: 14px; color: #333; line-height: 1.5;">${message.replace(/\n/g, "<br>")}</div>
              <div style="margin-top: 24px;">
                <a href="${mailtoLink}" style="display: inline-block; background-color: #4b39f4; color: #ffffff; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; margin-right: 12px;">Reply via Email</a>
                <a href="${whatsappLink}" style="display: inline-block; background-color: #ffffff; color: #4b39f4; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; border: 2px solid #4b39f4;">Reply on WhatsApp</a>
              </div>
            </div>
          </div>
          <p style="text-align: center; color: #a0a0a0; font-size: 12px; margin-top: 20px;">${footerNote}</p>
        </div>`;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.SEND_TO,
      subject,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
