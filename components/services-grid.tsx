import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

import { buttonClassName } from "@/components/ui/button";

type Service = {
  title: string;
  image: string;
  description: string;
  icon: (props: { className?: string }) => ReactNode;
};

const services = [
  {
    title: "Doors",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725348/DOORS_jgtpmv.jpg",
    description:
      "Custom sliding and folding doors for seamless indoor–outdoor flow and everyday durability.",
    icon: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M6 3h12v18H6z" />
        <path d="M10 7h4" />
        <path d="M13.5 12h.01" />
      </svg>
    ),
  },
  {
    title: "Windows",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725361/WINDOWS_dlvucn.jpg",
    description:
      "Energy-efficient aluminium windows with clean lines, smooth operation, and secure fittings.",
    icon: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M4 5h16v14H4z" />
        <path d="M12 5v14" />
        <path d="M4 12h16" />
      </svg>
    ),
  },
  {
    title: "Showers",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725362/Showers_kxlaod.jpg",
    description:
      "Frameless and semi-frameless shower solutions with precise measurements and premium hardware.",
    icon: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M7 5h10a3 3 0 0 1 3 3v2" />
        <path d="M9 5v3" />
        <path d="M7 10h14" />
        <path d="M9 13v.01" />
        <path d="M12 13v.01" />
        <path d="M15 13v.01" />
        <path d="M10 16v.01" />
        <path d="M13 16v.01" />
        <path d="M16 16v.01" />
      </svg>
    ),
  },
  {
    title: "Mirrors",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725350/MIRRORS_bmyg6e.jpg",
    description:
      "Custom-cut mirrors for bathrooms, gyms, and feature walls with a crisp, polished finish.",
    icon: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <rect x="7" y="3" width="10" height="18" rx="4" />
        <path d="M9.5 8.5c1.2-1.2 3.8-1.2 5 0" />
      </svg>
    ),
  },
  {
    title: "Shopfronts",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725355/SHOPFRONTS_ysq4ma.jpg",
    description:
      "Professional shopfront glazing that improves visibility, security, and customer flow.",
    icon: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M4 9h16v12H4z" />
        <path d="M4 9l2-6h12l2 6" />
        <path d="M10 13h4v8h-4z" />
      </svg>
    ),
  },
  {
    title: "Balustrades",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725349/Balustrades_tqomgo.jpg",
    description:
      "Safe, modern balustrades for balconies and staircases with high-end glass detailing.",
    icon: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M3 20h18" />
        <path d="M6 20V10" />
        <path d="M10 20V10" />
        <path d="M14 20V10" />
        <path d="M18 20V10" />
        <path d="M5 10h14" />
      </svg>
    ),
  },
];

function ServiceCard({ service, delayMs }: { service: Service; delayMs: number }) {
  return (
    <Link
      href="/services"
      className="group block overflow-hidden rounded-2xl bg-background shadow-[0_4px_12px_rgba(10,30,80,0.10)] ring-1 ring-border/60 ui-motion ui-transition-shadow hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(10,30,80,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary ui-reveal"
      data-reveal-delay={delayMs}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
          className="object-cover ui-motion group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_50%_8%/0.65)] via-[hsl(220_50%_8%/0.15)] to-transparent opacity-70 ui-transition group-hover:opacity-60" />
      </div>

      <div className="p-6 bg-secondary/45">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
            {service.icon({ className: "h-5 w-5" })}
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-foreground leading-tight">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <span
            className={buttonClassName({
              variant: "primary",
              size: "sm",
              className: "w-full justify-center",
            })}
          >
            View More
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background border-y border-border ui-reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Premium glass and aluminium work with clean finishes, precise measurements, and reliable
            turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              delayMs={80 + index * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
