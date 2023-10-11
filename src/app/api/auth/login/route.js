import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import fs from "fs";

export async function GET(req) {
  const token = req.nextUrl.searchParams.get("access_token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  try {
    const publicKey = fs.readFileSync("public/outseta_key.pem", "utf8");
    const verifiedToken = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });
    cookies().set(
      "session",
      JSON.stringify({
        access_token: token,
        user: {
          name: verifiedToken.name,
          first_name: verifiedToken.given_name,
          last_name: verifiedToken.family_name,
        },
      }),
      { maxAge: verifiedToken.exp }
    );
    return NextResponse.redirect(new URL("/", req.url));
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
