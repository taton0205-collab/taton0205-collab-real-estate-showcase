import Link from "next/link";

const links = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos y Condiciones" },
  { href: "/mapa-del-sitio", label: "Mapa del Sitio" },
  { href: "/blog", label: "Blog de Inversión" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full py-32 text-center border-t border-outline-variant/20 mt-32">
      <div className="flex flex-col items-center justify-center space-y-12 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="text-4xl font-bold text-on-surface">Expert Realty</div>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Matrícula Profesional CUCICBA N° 1234. Asesoramiento inmobiliario integral y transparente
          para su próxima inversión.
        </p>
        <div className="flex flex-wrap justify-center gap-12 text-body-md mt-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-base text-on-surface-variant/70 mt-16">
          © {new Date().getFullYear()} Expert Realty. Todos los derechos reservados. Professional Real
          Estate Advisory.
        </div>
      </div>
    </footer>
  );
}
