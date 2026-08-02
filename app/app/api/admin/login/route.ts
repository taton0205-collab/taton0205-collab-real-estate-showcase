import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, getExpectedToken } from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const password = body?.password as string | undefined;

  if (!password || !process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  const token = await getExpectedToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
