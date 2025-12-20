import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const {token} = await req.json();
  if(!token){
    return NextResponse.json({success: false}, {status: 400})
  }
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );
  const data = await response.json();

  if (data.success) {
    return NextResponse.json({success: true}, {status: 200})
  } else {
    return NextResponse.json({success: false}, {status: 400})
  }
}
