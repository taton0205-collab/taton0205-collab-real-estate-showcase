"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
      }}
      className="border-2 border-primary text-primary px-6 py-3 rounded-xl text-label-md"
    >
      Cerrar sesión
    </button>
  );
}

export function DeletePropertyButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm(`¿Eliminar "${title}"? Esta acción no se puede deshacer.`)) return;
    setLoading(true);
    const res = await fetch(`/api/admin/properties/${id}`, { method: "DELETE" });
    setLoading(false);
    if (res.ok) {
      alert("Eliminada. El sitio público se va a actualizar en aproximadamente 1 minuto.");
      router.refresh();
    } else {
      alert("Ocurrió un error al eliminar.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-error hover:underline text-sm disabled:opacity-50"
    >
      {loading ? "Eliminando..." : "Eliminar"}
    </button>
  );
}
