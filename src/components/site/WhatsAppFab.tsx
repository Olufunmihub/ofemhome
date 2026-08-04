import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with OFEM HOME on WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
    >
      <MessageCircle size={24} />
    </a>
  );
}
