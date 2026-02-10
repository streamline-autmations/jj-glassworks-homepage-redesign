import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { buttonClassName } from "@/components/ui/button";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-t border-border p-3 md:hidden">
      <div className="flex gap-2.5">
        <a
          href="https://wa.me/27163621797"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName({
            variant: "primary",
            size: "md",
            className: "flex-1 gap-2",
          })}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className={buttonClassName({
            variant: "outline",
            size: "md",
            className: "flex-1",
          })}
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
