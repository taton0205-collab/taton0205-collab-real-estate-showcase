"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const types = [
  { value: "", label: "Todos los tipos" },
  { value: "casa", label: "Casa" },
  { value: "departamento", label: "Departamento" },
  { value: "terreno", label: "Terreno" },
];

export default function PropertyFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:items-end bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 mb-12">
      <div className="flex-1 space-y-2">
        <label className="text-label-sm text-on-surface-variant uppercase tracking-widest font-semibold block">
          Tipo
        </label>
        <select
          defaultValue={searchParams.get("type") ?? ""}
          onChange={(e) => updateParam("type", e.target.value)}
          className="w-full bg-surface border border-outline-variant/50 rounded-xl h-14 px-4 text-base focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
        >
          {types.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1 space-y-2">
        <label className="text-label-sm text-on-surface-variant uppercase tracking-widest font-semibold block">
          Zona
        </label>
        <input
          type="text"
          defaultValue={searchParams.get("zone") ?? ""}
          onChange={(e) => updateParam("zone", e.target.value)}
          placeholder="Ej: Palermo"
          className="w-full bg-surface border border-outline-variant/50 rounded-xl h-14 px-4 text-base focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
        />
      </div>
    </div>
  );
}
