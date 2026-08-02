import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Términos y Condiciones - Expert Realty" };

export default function TerminosPage() {
  return (
    <PlaceholderPage
      title="Términos y Condiciones"
      description="Al utilizar el sitio de Expert Realty aceptás nuestros términos y condiciones de uso, disponibles a pedido en nuestras oficinas."
    />
  );
}
