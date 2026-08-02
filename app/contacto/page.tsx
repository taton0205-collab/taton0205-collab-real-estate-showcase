import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Contacto - Expert Realty" };

export default function ContactoPage() {
  return (
    <PlaceholderPage
      title="Contacto"
      description="Escribinos por WhatsApp o dejanos tu consulta y un asesor te va a contactar a la brevedad."
    />
  );
}
