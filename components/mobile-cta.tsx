 "use client";
 
import Link from "next/link";
import { useEffect, useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

import { buttonClassName } from "@/components/ui/button";

export default function MobileCTA() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mobileCtaCollapsed");
      if (saved) setCollapsed(saved === "true");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("mobileCtaCollapsed", String(collapsed));
    } catch {}
  }, [collapsed]);

  if (collapsed) {
    return (
      <button
        type="button"
        aria-label="Open quick actions"
        onClick={() => setCollapsed(false)}
        className="fixed bottom-3 right-3 z-50 md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-sm ring-1 ring-border"
      >
        <ChevronUp className="h-5 w-5 text-primary" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="relative bg-secondary/95 backdrop-blur-sm border-t border-border p-3">
        <button
          type="button"
          aria-label="Hide quick actions"
          onClick={() => setCollapsed(true)}
          className="absolute -top-3 right-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground shadow-sm ring-1 ring-border"
        >
          <ChevronDown className="h-4 w-4 text-primary" />
        </button>
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
    </div>
  );
}
