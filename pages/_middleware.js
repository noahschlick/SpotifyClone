import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const token = await getToken({req, secret: "some_super_secret_value"});

    const { pathname } = req.nextUrl;

    // Allow the request if the following is true...
    // 1) Its a request for next-auth session and provider fetching
    // 2) The token exitst
    if(pathname.includes("/api/auth") || token) {
        return NextResponse.next();
    }
    const link = process.env.NEXTAUTH_URL 
    // Redirect them to login if they dont have token AND are requesting a protected route
    if (!token && pathname !== "/login") {
        return NextResponse.redirect(`${link}/login`);
    }
}
