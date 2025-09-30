import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "@/lib/nodemailer";
import { generateJwtToken } from "@/lib/jwt";

type requestBody = {
    name?: string,
    email?: string,
    phone?: string
};

export async function POST(req: NextRequest) {
    const body: requestBody = await req.json();
    const { name, email, phone } = body;
    const to = process.env.CLIENT_EMAIL;

    if (!name) {
        return NextResponse.json({ error: "name cannot be empty" }, { status: 400 });
    }
    if (!email) {
        return NextResponse.json({ error: "email cannot be empty" }, { status: 400 });
    }
    if (!phone) {
        return NextResponse.json({ error: "phone cannot be empty" }, { status: 400 });
    }

    try {
        const subject = `New Registration for ${process.env.WEBSITE_NAME}`;
        const template = `Name : ${name}\nEmail : ${email}\nPhone.no : ${phone}`;
        await transporter.sendMail({
            ...mailOptions,
            to,
            subject,
            text: template
        });
    } catch (error) {
        console.log("Error while sending email : ", error);
        return NextResponse.json({ error: "Internal server Error" }, { status: 500 });
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