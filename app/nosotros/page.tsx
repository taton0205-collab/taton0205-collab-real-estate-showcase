import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Nosotros - Expert Realty" };

export default function NosotrosPage() {
  return (
    <PlaceholderPage
      title="Nosotros"
      description="Con más de 15 años de trayectoria, en Expert Realty combinamos experiencia y cercanía para guiarte en cada paso del proceso de compra, venta o alquiler de tu propiedad."
    />
  );
}
