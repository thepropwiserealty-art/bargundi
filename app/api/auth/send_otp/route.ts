import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { addPhoneno } from "@/lib/db";
import generateOtp from "@/lib/otp/generateOtp";
import hashOtp from "@/lib/otp/hashOtp";

export async function POST(req: NextRequest) {
  try {
    const body: { phone?: string } = await req.json();
    const { phone } = body;

    if (!phone) {
      return NextResponse.json(
        { error: "Phone required" },
        { status: 400 }
      );
    }
    
    const isPhonenoAdded = await addPhoneno(phone);
    
    if(!isPhonenoAdded.success){
      return NextResponse.json({error: isPhonenoAdded.message},{status: 400});
    }
    
    const otp = generateOtp();

    // send otp via message
    console.log(otp);

    const OtpHash = await hashOtp(otp);

    const response = NextResponse.json({ success: true });

    return response;

  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}