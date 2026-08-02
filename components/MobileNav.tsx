import Link from "next/link";
import { Home, Key, Calculator, MessageCircle } from "lucide-react";

const items = [
  { href: "/comprar", label: "Comprar", icon: Home },
  { href: "/alquilar", label: "Alquilar", icon: Key },
  { href: "/tasaciones", label: "Tasaciones", icon: Calculator },
];

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-lg shadow-xl border-t border-outline-variant/50">
      <div className="flex justify-around items-center h-20 px-4">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high active:scale-90 transition-all p-3 rounded-xl"
          >
            <Icon className="size-7" />
            <span className="text-[12px] mt-2">{label}</span>
          </Link>
        ))}
        <a
          href="https://wa.me/5491100000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-primary font-bold active:bg-surface-container-high active:scale-90 transition-all p-3 rounded-xl"
        >
          <MessageCircle className="size-7" fill="currentColor" strokeWidth={1} />
          <span className="text-[12px] mt-2">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
