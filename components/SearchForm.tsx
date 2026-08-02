"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

export default function SearchForm() {
  const router = useRouter();
  const [operation, setOperation] = useState("venta");
  const [type, setType] = useState("casa");
  const [zone, setZone] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (type) params.set("type", type);
    if (zone) params.set("zone", zone);
    const base = operation === "alquiler" ? "/alquilar" : "/comprar";
    router.push(`${base}?${params.toString()}`);
  }

  return (
    <div className="md:col-span-12 lg:col-span-10 mt-16 xl:mt-24 glass-panel rounded-2xl p-8 md:p-12 shadow-2xl">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-end">
        <div className="space-y-3">
          <label className="text-label-sm text-on-surface-variant uppercase tracking-widest font-semibold block">
            Operación
          </label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl h-16 px-6 text-lg focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
          >
            <option value="venta">Venta</option>
            <option value="alquiler">Alquiler</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-label-sm text-on-surface-variant uppercase tracking-widest font-semibold block">
            Tipo
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl h-16 px-6 text-lg focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
          >
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="terreno">Terreno</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-label-sm text-on-surface-variant uppercase tracking-widest font-semibold block">
            Zona
          </label>
          <input
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            type="text"
            placeholder="Ej: Palermo"
            className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl h-16 px-6 text-lg focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
          />
        </div>
        <button
          type="submit"
          className="w-full h-16 bg-primary text-on-primary text-label-md rounded-xl hover:bg-primary-container hover:text-on-primary-container shadow-xl transition-all active:scale-95 flex items-center justify-center space-x-3 text-lg"
        >
          <Search className="size-6" />
          <span>Buscar</span>
        </button>
      </form>
    </div>
  );
}
