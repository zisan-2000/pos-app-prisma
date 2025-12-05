import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function withAuth(request: NextRequest) {
  // TODO: enforce auth once BetterAuth is wired.
  return NextResponse.next();
}

