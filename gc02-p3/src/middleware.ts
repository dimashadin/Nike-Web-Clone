import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyWithJose } from "./db/helpers/jwt";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const authorization = cookieStore.get("Authorization");

  if (request.nextUrl.pathname.startsWith("/api/wishlist")) {
    if (!authorization)
      return Response.json(
        {
          message: "Please login first",
        },
        {
          status: 401,
        }
      );
    const [type, token] = authorization.value.split(" ");
    if (type !== "Bearer")
      return Response.json(
        {
          message: "Invalid Token ",
        },
        {
          status: 401,
        }
      );

    const payload = await verifyWithJose<{ _id: string }>(token);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", payload._id);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }

  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    if (!authorization) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  }

  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register")
  ) {
    if (authorization) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
}

export const config = {
  matcher: ["/api/wishlist", "/login", "/register"],
};
