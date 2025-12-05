import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // TODO: enforce auth and offline handling rules.
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/offline"],
};

