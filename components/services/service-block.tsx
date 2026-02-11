import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

import { buttonClassName } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceBlockProps = {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt?: string;
  whoItsFor?: string;
  whyJJ?: string;
  desktopImageLeft?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function ServiceBlock({
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  whoItsFor,
  whyJJ,
  desktopImageLeft = false,
  ctaHref = "/contact",
  ctaLabel = "Get a Quote",
}: ServiceBlockProps) {
  const imageOrder = desktopImageLeft ? "lg:order-1" : "lg:order-2";
  const textOrder = desktopImageLeft ? "lg:order-2" : "lg:order-1";
  const showInfoBox = Boolean(whoItsFor || whyJJ);

  return (
    <div className="group grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-10 lg:gap-14 items-start">
      <div
        className={cn(
          "order-1",
          imageOrder,
          "relative overflow-hidden rounded-3xl bg-background ring-1 ring-border/60 shadow-sm ui-transition duration-300 transition-[transform,box-shadow] md:group-hover:-translate-y-1 md:group-hover:shadow-[0_18px_60px_rgba(10,30,80,0.14)]"
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover ui-transition duration-300 transition-transform md:group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>

      <div
        className={cn(
          "order-2",
          textOrder,
          "rounded-3xl bg-background ring-1 ring-border/60 shadow-sm ui-transition duration-300 transition-[transform,box-shadow] p-6 lg:p-8 md:group-hover:-translate-y-1 md:group-hover:shadow-[0_18px_60px_rgba(10,30,80,0.14)]"
        )}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          {title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="mt-7 flex flex-col gap-3">
          {bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground leading-relaxed">
                {bullet}
              </span>
            </div>
          ))}
        </div>

        {showInfoBox ? (
          <div className="mt-8 rounded-2xl bg-secondary ring-1 ring-border/60 p-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {whoItsFor ? (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/70">
                    Who it&apos;s for
                  </p>
                  <p className="mt-2 text-sm text-foreground leading-relaxed">
                    {whoItsFor}
                  </p>
                </div>
              ) : null}

              {whyJJ ? (
                <div
                  className={cn(
                    whoItsFor ? "sm:border-l sm:border-border/60 sm:pl-5" : ""
                  )}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/70">
                    Why JJ Glassworks
                  </p>
                  <p className="mt-2 text-sm text-foreground leading-relaxed">
                    {whyJJ}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="mt-8">
          <Link
            href={ctaHref}
            className={cn(
              buttonClassName({ variant: "primary", size: "lg" }),
              "ui-transition duration-300 transition-[transform,box-shadow,color,background-color,border-color] md:hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.18),0_10px_28px_rgba(10,30,80,0.16)]"
            )}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

