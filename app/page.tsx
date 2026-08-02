import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SearchForm from "@/components/SearchForm";
import PropertyCard from "@/components/PropertyCard";
import { getFeatured } from "@/lib/properties";

export default function Home() {
  const featured = getFeatured(4);

  return (
    <>
      <section className="relative h-[950px] min-h-[700px] flex items-center justify-center px-6 md:px-20">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full absolute inset-0"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpwE2fuN1MTvHIxknsNHmcWKpozmquFxlCifPTlKUNEkb5kXv5WxohC8SwKmN4PfgrLUUKsKaplJNJooWm7bL1cFF2Z7OAWfvRmGF9qGQj8U6SbY4RKf194qkEfjFyChLWhUP5iK6TiTn6f8iEXYLIZxuORvBvQihb2QpG-cUfJZtJ_-GuBNenx0OI3G_JcZyCLhFHTRGxYsNlA2HxNWtVSxe3Pl4iXi1t6vZxANceecYsAGyFc5WK')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 to-on-surface/30 mix-blend-multiply" />
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto grid md:grid-cols-12 gap-8 items-center py-20">
          <div className="md:col-span-10 lg:col-span-8 text-white space-y-8">
            <h1 className="text-display-lg-mobile md:text-display-lg leading-tight">
              Encontrá el hogar de tus sueños
            </h1>
            <p className="text-body-lg text-surface-container opacity-90 max-w-2xl leading-relaxed">
              Expertos en asesoramiento inmobiliario con más de 15 años de trayectoria guiándote en
              cada paso.
            </p>
          </div>
          <SearchForm />
        </div>
      </section>

      <section className="py-32 px-6 md:px-20 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-headline-md text-on-surface">Propiedades Destacadas</h2>
              <p className="text-body-lg text-on-surface-variant">
                Las mejores oportunidades del mercado actual.
              </p>
            </div>
            <Link
              href="/comprar"
              className="hidden md:flex items-center text-primary text-label-md hover:underline text-lg"
            >
              Ver todas <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
