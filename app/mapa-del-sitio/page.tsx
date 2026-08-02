import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Mapa del Sitio - Expert Realty" };

const links = [
  { href: "/", label: "Inicio" },
  { href: "/comprar", label: "Comprar" },
  { href: "/alquilar", label: "Alquilar" },
  { href: "/tasaciones", label: "Tasaciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/blog", label: "Blog de Inversión" },
];

export default function MapaDelSitioPage() {
  return (
    <section className="py-32 px-6 md:px-20">
      <div className="max-w-[800px] mx-auto space-y-8">
        <h1 className="text-headline-md text-on-surface text-center">Mapa del Sitio</h1>
        <ul className="space-y-4 text-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-primary text-body-lg hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
