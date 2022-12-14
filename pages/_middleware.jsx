import { getToken } from "next-auth/jwt";
import { NextResponse, NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({req, secret: process.env.JWT_SECRET});
  const {pathname} = req.nextUrl
  if (pathname.include('/api7auth') || token )
  {
    return NextResponse.next();
  }

  if (!token && pathname !== '/login'){
    return NextResponse.redirect('/login');
  }

}
