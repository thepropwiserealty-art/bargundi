import { verifyToken } from "@/lib/jwt";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  
  if(req.nextUrl.pathname.startsWith("/api/files")){
    const token = req.cookies.get("token")?.value;
    const isVerified = await verifyToken(token || null);
    // console.log(isVerified);

    if(!token || !isVerified){
      const response = NextResponse.json({error: "Please Login with mobile number."},{status: 401});
      response.cookies.delete("token");
      return response;
    }
  }
  return NextResponse.next();
}