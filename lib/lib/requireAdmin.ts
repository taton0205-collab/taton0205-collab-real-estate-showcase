import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, getExpectedToken } from "@/lib/adminAuth";

export async function requireAdmin(request: NextRequest) {
  const cookie = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const expected = await getExpectedToken();
  if (!cookie || !expected || cookie !== expected) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
  return null;
}
