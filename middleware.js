import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const sessionId = url.searchParams.get("session_id");

  if (!sessionId) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/success", "/cancel"],
};
