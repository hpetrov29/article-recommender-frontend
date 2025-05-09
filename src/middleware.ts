import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/post"];
const cantBeHereIfAuthenticated = ["/logins"];
//const publicRoutes = ["/login"];

export async function middleware(req: NextRequest) {
  console.log("running");
  const { nextUrl, cookies } = req;
  const token = cookies.get("authCookie");
  if (!token && protectedRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const modifiedRequest = NextResponse.next();
  modifiedRequest.headers.set("x-pathname", req.nextUrl.pathname);

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
  return modifiedRequest;
}

export const config = {
  matcher: ["/posts/:path*", "/login", "/profile", "/settings"], // Apply only to protected routes
};
