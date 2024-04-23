import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/app/:path*",
};

export function middleware(request: NextRequest) {
  const session = request.cookies.get("house_brain_session");
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
