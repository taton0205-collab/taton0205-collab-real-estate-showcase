import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, BedDouble, Ruler, Check, MessageCircle } from "lucide-react";
import { formatPrice, getProperty, properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) return { title: "Propiedad no encontrada - Expert Realty" };
  return { title: `${property.title} - Expert Realty` };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) notFound();

  const backHref = property.operation === "alquiler" ? "/alquilar" : "/comprar";

  return (
    <section className="py-12 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto">
        <Link
          href={backHref}
          className="inline-flex items-center text-on-surface-variant hover:text-primary transition-colors mb-8 text-body-md"
        >
          <ArrowLeft className="size-5 mr-2" /> Volver a resultados
        </Link>

        <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden mb-10">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h1 className="text-headline-md text-on-surface mb-2">{property.title}</h1>
              <div className="flex items-center text-on-surface-variant text-lg">
                <MapPin className="size-5 mr-2" /> {property.zone}
              </div>
            </div>

            <div className="flex items-center space-x-10 border-y border-outline-variant/20 py-6 text-lg text-on-surface-variant">
              {property.rooms > 0 && (
                <div className="flex items-center">
                  <BedDouble className="size-6 mr-2" /> {property.rooms} Ambientes
                </div>
              )}
              <div className="flex items-center">
                <Ruler className="size-6 mr-2" /> {property.area} m²
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-headline-sm text-on-surface">Descripción</h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                {property.description}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-headline-sm text-on-surface">Características</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {property.features.map((feature) => (
                  <li key={feature} className="flex items-center text-on-surface-variant text-body-md">
                    <Check className="size-5 mr-2 text-primary shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 space-y-6 sticky top-32 shadow-[0_20px_25px_-5px_rgba(31,41,55,0.05)]">
              <div className="text-3xl font-bold text-on-surface">{formatPrice(property)}</div>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-on-primary text-label-md rounded-xl py-4 hover:opacity-90 active:scale-95 transition-all shadow-lg flex items-center justify-center space-x-3"
              >
                <MessageCircle className="size-5" fill="currentColor" strokeWidth={1} />
                <span>Consultar por WhatsApp</span>
              </a>
              <button className="w-full border-2 border-primary text-primary text-label-md py-4 rounded-xl hover:bg-primary/5 transition-colors">
                Agendar visita
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
