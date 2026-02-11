 "use client";
 
import { MessageCircle } from "lucide-react";

export default function MobileCTA() {
  return (
    <a
      href="https://wa.me/27163621797"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:inline-flex fixed bottom-6 right-6 z-50 h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_60px_rgba(10,30,80,0.22)] ring-1 ring-primary/25 ui-motion hover:-translate-y-0.5 hover:shadow-[0_26px_72px_rgba(10,30,80,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="WhatsApp JJ Glassworks"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
