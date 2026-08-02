import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Blog de Inversión - Expert Realty" };

export default function BlogPage() {
  return (
    <PlaceholderPage
      title="Blog de Inversión"
      description="Próximamente: artículos y guías sobre el mercado inmobiliario, tendencias de inversión y consejos para compradores y vendedores."
    />
  );
}
