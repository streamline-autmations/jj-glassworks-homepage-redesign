import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { buttonClassName } from "@/components/ui/button";
import { cardClassName } from "@/components/ui/card";

type QuickFacts = {
  type: string;
  area: string;
  scope: string;
};

export default function ProjectTemplate({
  title,
  description,
  quickFacts,
  images,
}: {
  title: string;
  description: string;
  quickFacts: QuickFacts;
  images: { src: string; alt: string }[];
}) {
  return (
    <div>
      <section className="pt-24 pb-10 md:pt-28 md:pb-12 bg-[#243e95] ui-reveal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4ea6dd] mb-4">
              Completed Project
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
              {title}
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-background border-b border-border ui-reveal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={cardClassName({ variant: "panel", padding: "sm" })}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Type
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {quickFacts.type}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Area
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {quickFacts.area}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Scope
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {quickFacts.scope}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background ui-reveal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image) => (
              <div
                key={image.src + image.alt}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary shadow-sm ring-1 ring-border/60"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary border-t border-border ui-reveal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Ready to start your project?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed">
              Get a clear quote with professional turnaround and clean workmanship.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                prefetch={false}
                className={buttonClassName({ variant: "primary", size: "lg" })}
              >
                Get a Quote
              </Link>
              <a
                href="https://wa.me/27824595073"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName({
                  variant: "outline",
                  size: "lg",
                  className: "gap-2",
                })}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
