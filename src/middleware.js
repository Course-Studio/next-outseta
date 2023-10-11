"use server";
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("session")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  const user = token;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  if (user.exp < currentTimestamp) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/profile"],
};
