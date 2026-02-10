import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-t border-primary/10 p-3 md:hidden">
      <div className="flex gap-2.5">
        <a
          href="https://wa.me/27000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center border border-primary text-primary px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary/5"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
