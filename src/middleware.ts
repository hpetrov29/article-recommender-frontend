import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/posts"];
const cantBeHereIfAuthenticated = ["/login"];
const publicRoutes = ["/login"];

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const token = cookies.get("authCookie");
  if (!token && protectedRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token) {
    try {
      console.log("fetching user");
      const response = await fetch("http://localhost:8000/v1/users/me", {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token?.value}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const user = await response.json();
        const modifiedRequest = NextResponse.next();

        // Pass user data to the request headers
        modifiedRequest.headers.set("X-User", JSON.stringify(user.payload));
        if (cantBeHereIfAuthenticated.includes(nextUrl.pathname)) {
          return NextResponse.redirect(new URL("/posts", req.url));
        }
        return modifiedRequest;
      }
    } catch (error) {
      console.error("Middleware auth error:", error);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/posts/:path*", "/login"], // Apply only to protected routes
};
