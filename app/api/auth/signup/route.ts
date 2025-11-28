import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "@/lib/nodemailer";
import { generateJwtToken } from "@/lib/jwt";
import generateUserCoupon from "@/lib/generateCoupon";
import { websiteName } from "@/lib/constans";
import checkIfExists from "@/lib/mongoose/checkIfExists";
import createUser from "@/lib/mongoose/createUser";
import { validate } from "@/lib/validation/validate";
import { userSchema } from "@/lib/validation/user.schema";

type requestBody = {
    name?: string,
    email?: string,
    phone?: string
};

export async function POST(req: NextRequest) {
    const body: requestBody = await req.json();
    // const { name, email, phone } = body;
    const to = process.env.CLIENT_EMAIL;
    
    let validatedName = null;
    let validatedEmail = null;
    let ValidatedPhone_no = null;
    try {
        const {name, email, phone} = await validate(userSchema, body);
        validatedName = name;
        validatedEmail = email;
        ValidatedPhone_no = phone;

    } catch (err: any) {
        return NextResponse.json({error: err.message}, {status: 400});
    }

    const userExists = await checkIfExists(validatedEmail, ValidatedPhone_no);
    // console.log(userExists);
    
    if(userExists.statusCode != 200){
        return NextResponse.json({error: userExists.message}, {status: userExists.statusCode});
    }

    try {
        const subject = `New Registration for ${websiteName}`;
        const coupon = generateUserCoupon(ValidatedPhone_no);
        
        const addUserResult = await createUser(validatedName, validatedEmail, ValidatedPhone_no, coupon);
        
        if(addUserResult.statusCode != 200){
            throw new Error(addUserResult.message);
        }

        const template = `Name : ${validatedName}\nEmail : ${validatedEmail}\nPhone.no : ${ValidatedPhone_no}\ncoupon : ${coupon}`;
        
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

    const token = await generateJwtToken({ validatedName, validatedEmail, ValidatedPhone_no });

    response.cookies.set("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 30 * 24 * 60 * 60, //30 days
        sameSite: "strict",
        path: "/",
    });

    return response;
}