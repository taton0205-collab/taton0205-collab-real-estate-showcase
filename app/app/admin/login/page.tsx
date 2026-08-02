"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Contraseña incorrecta");
    }
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 shadow-lg"
      >
        <h1 className="text-headline-sm text-on-surface text-center">Panel de administración</h1>
        <div className="space-y-2">
          <label className="text-label-sm text-on-surface-variant uppercase tracking-widest font-semibold block">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="w-full bg-surface border border-outline-variant/50 rounded-xl h-12 px-4 text-base focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
          />
        </div>
        {error && <p className="text-error text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-on-primary text-label-md rounded-xl py-3 hover:opacity-90 transition-all disabled:opacity-50"
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </section>
  );
}
