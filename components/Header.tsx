import Link from "next/link";
import { MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/comprar", label: "Comprar" },
  { href: "/alquilar", label: "Alquilar" },
  { href: "/tasaciones", label: "Tasaciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="hidden md:flex fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
      <div className="flex justify-between items-center px-20 w-full max-w-[1440px] mx-auto h-24">
        <Link href="/" className="text-headline-md font-bold text-primary">
          Expert Realty
        </Link>
        <nav className="flex items-center space-x-12 text-body-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low duration-200 px-4 py-3 rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://wa.me/5491100000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-primary text-on-primary text-label-md px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-lg"
        >
          <MessageCircle className="size-5" fill="currentColor" strokeWidth={1} />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
