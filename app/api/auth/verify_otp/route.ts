import { generateJwtToken } from "@/lib/jwt";
import verifyOtp from "@/lib/otp/verifyOtp";
import { insertRecord } from "@/lib/db";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const otp: string = searchParams.get("otp") || "";
    const phone: string = searchParams.get("phone") || "";
    const name: string = searchParams.get("name") || "";
    const email: string = searchParams.get("email") || "";

    // if (!otp) {
    //     return NextResponse.json(
    //         { error: "otp required" },
    //         { status: 400 }
    //     );
    // }
    // if (!phone) {
    //     return NextResponse.json(
    //         { error: "phoneno. required" },
    //         { status: 400 }
    //     );
    // }

    // const isOtpValid = await verifyOtp(phone, otp);

    // if (!isOtpValid.pass) {
    //     return NextResponse.json(
    //         { error: isOtpValid.message },
    //         { status: 400 }
    //     );
    // }
    
    const isPhonenoAdded = await insertRecord(name, email, phone);

    if (!isPhonenoAdded.success) {
        return NextResponse.json({ error: isPhonenoAdded.message }, { status: 500 });
    }

    const response = NextResponse.json({ success: true }, { status: 200 });

    const token = await generateJwtToken({ phone });

    response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 30 * 24 * 60 * 60, //30 days
        sameSite: "strict",
        path: "/",
    });

    return response;
}