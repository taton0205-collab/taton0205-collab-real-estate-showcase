import type { Metadata } from "next";
import PropertyListingPage from "@/components/PropertyListingPage";

export const metadata: Metadata = {
  title: "Alquilar propiedades - Expert Realty",
};

export default function AlquilarPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; zone?: string }>;
}) {
  return (
    <PropertyListingPage
      operation="alquiler"
      title="Propiedades en Alquiler"
      subtitle="Explorá las mejores opciones para alquilar en las zonas más buscadas."
      searchParams={searchParams}
    />
  );
}
