import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/requireAdmin";
import { getPropertiesFile, savePropertiesFile } from "@/lib/githubData";
import type { Property } from "@/lib/properties";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;

  try {
    const body = (await request.json()) as Partial<Property>;
    const { content, sha } = await getPropertiesFile();
    const properties = content as Property[];
    const index = properties.findIndex((p) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Propiedad no encontrada" }, { status: 404 });
    }
    const next = [...properties];
    next[index] = { ...next[index], ...body, id };
    await savePropertiesFile(next, sha, `Editar propiedad: ${id}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = await params;

  try {
    const { content, sha } = await getPropertiesFile();
    const properties = content as Property[];
    const next = properties.filter((p) => p.id !== id);
    if (next.length === properties.length) {
      return NextResponse.json({ error: "Propiedad no encontrada" }, { status: 404 });
    }
    await savePropertiesFile(next, sha, `Eliminar propiedad: ${id}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
