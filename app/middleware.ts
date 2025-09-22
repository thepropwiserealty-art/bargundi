import { NextResponse, type NextRequest } from "next/server";
import { verifyToken, type CustomJwtPayload } from "@/lib/jwt";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // If no token, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Verify token
  const payload: CustomJwtPayload | null = verifyToken(token);
  if (!payload) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Token valid → allow access
  return NextResponse.next();
}

// Protect only these routes
export const config = {
  matcher: ["/protected/:path*"], // any route under /protected will be secured
};
