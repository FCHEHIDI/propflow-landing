import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend client — RESEND_API_KEY must be set in environment.
// In development without the key, the handler logs and returns success.
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const NOTIFY_EMAIL = process.env.WAITLIST_NOTIFY_EMAIL ?? 'hello@propflow.io';

// Very basic email validation — no regex library needed.
function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = (body?.email ?? '').toString().trim().toLowerCase();

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  if (!resend) {
    // Dev mode — log only, return success
    console.log('[waitlist] dev mode — would register:', email);
    return NextResponse.json({ ok: true });
  }

  // 1. Notify the team
  await resend.emails.send({
    from: 'PropFlow Waitlist <waitlist@propflow.io>',
    to:   NOTIFY_EMAIL,
    subject: `New waitlist signup: ${email}`,
    text: `${email} joined the PropFlow waitlist.`,
  });

  // 2. Confirmation to the subscriber
  await resend.emails.send({
    from: 'PropFlow <hello@propflow.io>',
    to:   email,
    subject: "You're on the PropFlow waitlist",
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:40px 24px;background:#0A0A0A;color:#F0EDE8">
        <p style="font-size:13px;letter-spacing:0.18em;color:#C4A035;text-transform:uppercase;margin-bottom:24px">PROPFLOW</p>
        <h1 style="font-size:26px;font-weight:400;margin-bottom:16px;color:#F0EDE8">You're on the list.</h1>
        <p style="font-size:15px;line-height:1.65;color:#A0A0A0;margin-bottom:32px">
          Thank you for your interest in PropFlow — the PMS built for luxury hotels.
          We'll reach out personally before launch.
        </p>
        <p style="font-size:12px;color:#6B6B6B">© ${new Date().getFullYear()} PropFlow</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
