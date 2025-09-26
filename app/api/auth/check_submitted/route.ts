import { verifyToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const token = req.cookies.get("token")?.value;
    if(!token){
        return NextResponse.json({error: "Not submitted"}, {status: 400});
    }

    const isValid = await verifyToken(token);
    
    if(!isValid){
        const response = NextResponse.json({error: "Token not valid"}, {status: 400});
        response.cookies.delete("token");
        return response; 
    }

    return NextResponse.json({success: true}, {status: 200});
}