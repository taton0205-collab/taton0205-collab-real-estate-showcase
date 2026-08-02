import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5491100000000"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-12 right-12 z-50 bg-whatsapp text-white w-20 h-20 rounded-full shadow-2xl items-center justify-center hover:scale-110 transition-transform duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="size-9" fill="currentColor" strokeWidth={1} />
    </a>
  );
}
