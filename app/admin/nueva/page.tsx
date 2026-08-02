import PropertyForm from "@/components/admin/PropertyForm";

export default function NuevaPropiedadPage() {
  return (
    <section className="py-12 px-6 md:px-20">
      <h1 className="text-headline-md text-on-surface text-center mb-10">Nueva propiedad</h1>
      <PropertyForm mode="create" />
    </section>
  );
}
