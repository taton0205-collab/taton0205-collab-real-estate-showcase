"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { Property } from "@/lib/properties";

type FormValues = {
  title: string;
  price: number;
  currency: Property["currency"];
  operation: Property["operation"];
  type: Property["type"];
  zone: string;
  rooms: number;
  area: number;
  image: string;
  tag: Property["tag"] | "";
  description: string;
  features: string;
};

const inputClass =
  "w-full bg-surface border border-outline-variant/50 rounded-xl h-12 px-4 text-base focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-label-sm text-on-surface-variant uppercase tracking-widest font-semibold block">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function PropertyForm({
  mode,
  property,
}: {
  mode: "create" | "edit";
  property?: Property;
}) {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>({
    title: property?.title ?? "",
    price: property?.price ?? 0,
    currency: property?.currency ?? "USD",
    operation: property?.operation ?? "venta",
    type: property?.type ?? "casa",
    zone: property?.zone ?? "",
    rooms: property?.rooms ?? 1,
    area: property?.area ?? 0,
    image: property?.image ?? "",
    tag: property?.tag ?? "",
    description: property?.description ?? "",
    features: property?.features?.join("\n") ?? "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title: values.title,
      price: Number(values.price),
      currency: values.currency,
      operation: values.operation,
      type: values.type,
      zone: values.zone,
      rooms: Number(values.rooms),
      area: Number(values.area),
      image: values.image,
      tag: values.tag || undefined,
      description: values.description,
      features: values.features
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean),
    };

    const url = mode === "create" ? "/api/admin/properties" : `/api/admin/properties/${property!.id}`;
    const method = mode === "create" ? "POST" : "PUT";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSaving(false);

    if (res.ok) {
      setDone(true);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Ocurrió un error al guardar.");
    }
  }

  if (done) {
    return (
      <div className="max-w-xl mx-auto text-center py-16 space-y-6">
        <p className="text-on-surface text-lg">
          Guardado. El sitio público se va a actualizar en aproximadamente 1 minuto.
        </p>
        <button
          onClick={() => router.push("/admin")}
          className="bg-primary text-on-primary px-6 py-3 rounded-xl text-label-md"
        >
          Volver al panel
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Título">
          <input
            required
            value={values.title}
            onChange={(e) => update("title", e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Zona">
          <input
            required
            value={values.zone}
            onChange={(e) => update("zone", e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Precio">
          <input
            required
            type="number"
            value={values.price}
            onChange={(e) => update("price", Number(e.target.value))}
            className={inputClass}
          />
        </Field>
        <Field label="Moneda">
          <select
            value={values.currency}
            onChange={(e) => update("currency", e.target.value as Property["currency"])}
            className={inputClass}
          >
            <option value="USD">USD</option>
            <option value="ARS">ARS</option>
          </select>
        </Field>
        <Field label="Operación">
          <select
            value={values.operation}
            onChange={(e) => update("operation", e.target.value as Property["operation"])}
            className={inputClass}
          >
            <option value="venta">Venta</option>
            <option value="alquiler">Alquiler</option>
          </select>
        </Field>
        <Field label="Tipo">
          <select
            value={values.type}
            onChange={(e) => update("type", e.target.value as Property["type"])}
            className={inputClass}
          >
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="terreno">Terreno</option>
          </select>
        </Field>
        <Field label="Ambientes">
          <input
            type="number"
            value={values.rooms}
            onChange={(e) => update("rooms", Number(e.target.value))}
            className={inputClass}
          />
        </Field>
        <Field label="Superficie (m²)">
          <input
            type="number"
            value={values.area}
            onChange={(e) => update("area", Number(e.target.value))}
            className={inputClass}
          />
        </Field>
        <Field label="Etiqueta (opcional)">
          <select
            value={values.tag ?? ""}
            onChange={(e) => update("tag", e.target.value as FormValues["tag"])}
            className={inputClass}
          >
            <option value="">Sin etiqueta</option>
            <option value="nuevo">Nuevo</option>
            <option value="oportunidad">Oportunidad</option>
            <option value="premium">Premium</option>
          </select>
        </Field>
      </div>
      <Field label="URL de la imagen">
        <input
          required
          value={values.image}
          onChange={(e) => update("image", e.target.value)}
          placeholder="https://..."
          className={inputClass}
        />
      </Field>
      <Field label="Descripción">
        <textarea
          required
          value={values.description}
          onChange={(e) => update("description", e.target.value)}
          rows={4}
          className={inputClass + " h-auto py-3"}
        />
      </Field>
      <Field label="Características (una por línea)">
        <textarea
          value={values.features}
          onChange={(e) => update("features", e.target.value)}
          rows={4}
          className={inputClass + " h-auto py-3"}
        />
      </Field>
      {error && <p className="text-error text-sm">{error}</p>}
      <button
        type="submit"
        disabled={saving}
        className="bg-primary text-on-primary px-8 py-3 rounded-xl text-label-md disabled:opacity-50"
      >
        {saving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}
