import { Suspense } from "react";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyCard from "@/components/PropertyCard";
import { filterProperties, type Operation } from "@/lib/properties";

export default async function PropertyListingPage({
  operation,
  title,
  subtitle,
  searchParams,
}: {
  operation: Operation;
  title: string;
  subtitle: string;
  searchParams: Promise<{ type?: string; zone?: string }>;
}) {
  const params = await searchParams;
  const results = filterProperties({ operation, type: params.type, zone: params.zone });

  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="space-y-4 mb-12">
          <h1 className="text-headline-md text-on-surface">{title}</h1>
          <p className="text-body-lg text-on-surface-variant">{subtitle}</p>
        </div>
        <Suspense>
          <PropertyFilters />
        </Suspense>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {results.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-on-surface-variant text-lg py-16 text-center">
            No encontramos propiedades con esos filtros. Probá con otra zona o tipo.
          </p>
        )}
      </div>
    </section>
  );
}
