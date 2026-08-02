import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Ruler } from "lucide-react";
import { formatPrice, type Property } from "@/lib/properties";

const tagStyles: Record<NonNullable<Property["tag"]>, string> = {
  nuevo: "bg-primary text-on-primary",
  oportunidad: "bg-error text-on-error",
  premium: "bg-tertiary text-on-tertiary",
};

const tagLabels: Record<NonNullable<Property["tag"]>, string> = {
  nuevo: "Nuevo",
  oportunidad: "Oportunidad",
  premium: "Premium",
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 shadow-[0_20px_25px_-5px_rgba(31,41,55,0.05)] hover:shadow-2xl transition-all duration-300 group">
      <div className="relative h-80 md:h-96 overflow-hidden">
        {property.tag && (
          <div
            className={`absolute top-4 left-4 z-10 ${tagStyles[property.tag]} text-label-md px-4 py-2 rounded-lg shadow-md uppercase tracking-wider`}
          >
            {tagLabels[property.tag]}
          </div>
        )}
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-8 flex flex-col h-full space-y-6">
        <div className="text-3xl font-bold text-on-surface">{formatPrice(property)}</div>
        <div className="text-xl text-on-surface-variant flex items-center">
          <MapPin className="size-6 mr-2" /> {property.zone}
        </div>
        <div className="flex items-center space-x-8 border-t border-outline-variant/20 pt-6 text-lg text-on-surface-variant">
          {property.rooms > 0 && (
            <div className="flex items-center">
              <BedDouble className="size-6 mr-2" /> {property.rooms} Amb
            </div>
          )}
          <div className="flex items-center">
            <Ruler className="size-6 mr-2" /> {property.area} m²
          </div>
        </div>
        <Link
          href={`/propiedades/${property.id}`}
          className="mt-6 w-full border-2 border-primary text-primary text-lg py-4 rounded-xl hover:bg-primary/5 transition-colors text-center block"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
