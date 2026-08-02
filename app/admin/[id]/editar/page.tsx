import { notFound } from "next/navigation";
import PropertyForm from "@/components/admin/PropertyForm";
import { getProperty } from "@/lib/properties";

export default async function EditarPropiedadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) notFound();

  return (
    <section className="py-12 px-6 md:px-20">
      <h1 className="text-headline-md text-on-surface text-center mb-10">Editar propiedad</h1>
      <PropertyForm mode="edit" property={property} />
    </section>
  );
}
