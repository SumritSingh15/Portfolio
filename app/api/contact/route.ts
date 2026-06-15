import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialise Resend with your API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// ── POST /api/contact ──────────────────────────────────────────────────────
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body as {
            name: string;
            email: string;
            subject: string;
            message: string;
        };

        // Basic server-side validation
        if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
        }
        if (email.toLowerCase().trim() === "sumrit578singh@gmail.com") {
            return NextResponse.json({ error: "Please use your own email address." }, { status: 400 });
        }

        // Send email via Resend
        const { error } = await resend.emails.send({
            // Resend requires a verified domain for the "from" address.
            // Until you verify a custom domain, use the Resend sandbox address:
            from: "Portfolio Contact <onboarding@resend.dev>",
            to:   ["sumrit578singh@gmail.com"],
            replyTo: email,
            subject: `[Portfolio] ${subject} — from ${name}`,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body  { font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; background:#0d0d14; color:#e5e7eb; margin:0; padding:32px 0; }
    .wrap { max-width:560px; margin:0 auto; background:#161622; border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,.08); }
    .hdr  { background:linear-gradient(135deg,#7c3aed 0%,#0ea5e9 100%); padding:28px 32px; }
    .hdr h1 { margin:0; color:#fff; font-size:20px; font-weight:700; }
    .hdr p  { margin:4px 0 0; color:rgba(255,255,255,.75); font-size:13px; }
    .body { padding:28px 32px; }
    .row  { margin-bottom:18px; }
    .lbl  { font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:.08em; color:#6b7280; margin-bottom:4px; }
    .val  { font-size:15px; color:#f3f4f6; word-break:break-word; }
    .msg-box { background:#0a0a0f; border:1px solid rgba(255,255,255,.08); border-radius:10px; padding:16px; color:#d1d5db; font-size:14px; line-height:1.65; white-space:pre-wrap; }
    .ftr  { padding:16px 32px; border-top:1px solid rgba(255,255,255,.06); font-size:12px; color:#4b5563; text-align:center; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="hdr">
      <h1>New Portfolio Message</h1>
      <p>Received via your portfolio contact form</p>
    </div>
    <div class="body">
      <div class="row"><div class="lbl">From</div><div class="val">${name}</div></div>
      <div class="row"><div class="lbl">Email</div><div class="val"><a href="mailto:${email}" style="color:#60a5fa">${email}</a></div></div>
      <div class="row"><div class="lbl">Subject</div><div class="val">${subject}</div></div>
      <div class="row"><div class="lbl">Message</div><div class="msg-box">${message}</div></div>
    </div>
    <div class="ftr">Sent from Sumrit Singh's portfolio &nbsp;·&nbsp; Reply directly to this email</div>
  </div>
</body>
</html>`,
        });

        if (error) {
            console.error("[Resend error]", error);
            return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error("[Contact API error]", err);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
