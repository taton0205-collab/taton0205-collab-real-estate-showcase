import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Privacidad - Expert Realty" };

export default function PrivacidadPage() {
  return (
    <PlaceholderPage
      title="Política de Privacidad"
      description="En Expert Realty protegemos tus datos personales y los utilizamos únicamente para brindarte un mejor servicio de asesoramiento inmobiliario."
    />
  );
}
