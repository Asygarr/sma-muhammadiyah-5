import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  res.headers.set("Access-Control-Allow-Origin", "*"); // Public CORS
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Jika request adalah OPTIONS (preflight request), langsung return response
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204 });
  }

  return res;
}

export const config = {
  matcher: "/api/:path*",
};
