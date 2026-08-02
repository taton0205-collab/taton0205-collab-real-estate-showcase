import type { Metadata } from "next";
import PropertyListingPage from "@/components/PropertyListingPage";

export const metadata: Metadata = {
  title: "Comprar propiedades - Expert Realty",
};

export default function ComprarPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; zone?: string }>;
}) {
  return (
    <PropertyListingPage
      operation="venta"
      title="Propiedades en Venta"
      subtitle="Encontrá la propiedad ideal para comprar entre nuestras oportunidades disponibles."
      searchParams={searchParams}
    />
  );
}
