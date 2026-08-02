import Link from "next/link";
import { properties, formatPrice } from "@/lib/properties";
import { LogoutButton, DeletePropertyButton } from "@/components/admin/AdminActions";

export default function AdminPage() {
  return (
    <section className="py-12 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-headline-md text-on-surface">Panel de administración</h1>
          <div className="flex gap-4">
            <Link
              href="/admin/nueva"
              className="bg-primary text-on-primary px-6 py-3 rounded-xl text-label-md"
            >
              + Nueva propiedad
            </Link>
            <LogoutButton />
          </div>
        </div>
        <p className="text-on-surface-variant text-sm">
          Los cambios tardan aproximadamente 1 minuto en reflejarse en el sitio público.
        </p>
        <div className="divide-y divide-outline-variant/20 border border-outline-variant/30 rounded-2xl overflow-hidden">
          {properties.map((p) => (
            <div
              key={p.id}
              className="flex flex-wrap items-center justify-between gap-4 p-6 bg-surface-container-lowest"
            >
              <div>
                <div className="font-semibold text-on-surface">{p.title}</div>
                <div className="text-on-surface-variant text-sm">
                  {p.zone} · {formatPrice(p)}
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Link href={`/admin/${p.id}/editar`} className="text-primary hover:underline text-sm">
                  Editar
                </Link>
                <DeletePropertyButton id={p.id} title={p.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
