import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Tasaciones - Expert Realty" };

export default function TasacionesPage() {
  return (
    <PlaceholderPage
      title="Tasaciones"
      description="Solicitá una tasación profesional de tu propiedad con nuestro equipo de expertos. Contactanos por WhatsApp para coordinar una visita sin cargo."
    />
  );
}
