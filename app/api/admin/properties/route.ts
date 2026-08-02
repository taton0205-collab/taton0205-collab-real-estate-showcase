import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/requireAdmin";
import { getPropertiesFile, savePropertiesFile } from "@/lib/githubData";
import { slugify } from "@/lib/slug";
import type { Property } from "@/lib/properties";

export async function POST(request: NextRequest) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;

  const body = (await request.json()) as Omit<Property, "id">;
  if (!body.title || !body.zone || !body.image || !body.description) {
    return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
  }

  try {
    const { content, sha } = await getPropertiesFile();
    const properties = content as Property[];
    const id = slugify(body.title, body.zone);
    const next = [...properties, { ...body, id }];
    await savePropertiesFile(next, sha, `Agregar propiedad: ${body.title}`);
    return NextResponse.json({ ok: true, id });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
