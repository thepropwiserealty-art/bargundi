// app/api/verify-captcha/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json({ success: false, error: "no-token" }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.error("RECAPTCHA_SECRET_KEY not set");
      return NextResponse.json({ success: false, error: "server-misconfigured" }, { status: 500 });
    }

    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${encodeURIComponent(
      secret
    )}&response=${encodeURIComponent(token)}`;

    const response = await fetch(verifyURL, { method: "POST" });
    const data = await response.json();

    // data.success is boolean. You may also log score / hostname if needed.
    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: data["error-codes"] || "verification-failed" }, { status: 400 });
    }
  } catch (err) {
    console.error("verify-captcha error:", err);
    return NextResponse.json({ success: false, error: "exception" }, { status: 500 });
  }
}
