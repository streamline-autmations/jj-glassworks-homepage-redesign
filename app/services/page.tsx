import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";
import { buttonClassName } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | JJ Glassworks",
  description:
    "Professional glass and aluminium services including windows, doors, shopfronts, shower glass, and custom cutting.",
};

const services = [
  {
    title: "Aluminium Windows",
    description: "Modern aluminium windows designed for SA homes and projects.",
    imageSrc:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725361/WINDOWS_dlvucn.jpg",
    details: [
      "Fixed, sliding, and top-hung options",
      "Powder-coated finishes (any colour)",
      "Double glazing available for insulation",
      "Made to size for builds and renovations",
    ],
    forWho: "Homeowners, builders, architects, developers",
    whyUs: "In-house fabrication for faster turnaround and consistent quality.",
  },
  {
    title: "Aluminium Doors",
    description: "Sliding, hinged, and stacking doors for seamless access.",
    imageSrc:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725348/DOORS_jgtpmv.jpg",
    details: [
      "Sliding, hinged, and stacking configurations",
      "Smooth operation with precise fitting",
      "Security upgrades available",
      "Custom sizes for any opening",
    ],
    forWho: "Residential, commercial, retail",
    whyUs: "Clean installs with attention to alignment and long-term performance.",
  },
  {
    title: "Aluminium Shopfronts",
    description: "Premium shopfront systems built for visibility and security.",
    imageSrc:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725355/SHOPFRONTS_ysq4ma.jpg",
    details: [
      "Complete shopfront systems",
      "Manual or automatic door options",
      "Safety glass and security features",
      "Built to suit your storefront layout",
    ],
    forWho: "Retail, offices, restaurants, commercial properties",
    whyUs: "Efficient installation with minimal downtime for your business.",
  },
  {
    title: "Shower Panels & Bathroom Glass",
    description: "Frameless and semi-frameless shower glass made to fit.",
    imageSrc:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725362/Showers_kxlaod.jpg",
    details: [
      "Frameless and semi-frameless options",
      "Sliding or hinged door configurations",
      "Built to fit your exact opening",
      "Clean, modern finish",
    ],
    forWho: "Bathroom renovations and new builds",
    whyUs: "Neat installs with strong focus on sealing and finishing.",
  },
  {
    title: "Glass Cut to Size",
    description: "Fast, precise cutting for repairs, upgrades, and custom jobs.",
    imageSrc:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725350/MIRRORS_bmyg6e.jpg",
    details: [
      "Tabletops, shelves, and mirrors",
      "Replacement window panes",
      "Tempered and laminated options",
      "Cut to exact measurements",
    ],
    forWho: "DIY, builders, furniture makers, homeowners",
    whyUs: "Accurate cuts with quick turnaround and tidy edges.",
  },
  {
    title: "Putty Repairs & Glazing",
    description: "Traditional putty repairs and glazing for older windows.",
    imageSrc:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725361/WINDOWS_dlvucn.jpg",
    details: [
      "Putty removal and re-glazing",
      "Cracked glass replacement",
      "Frame touch-ups and repairs",
      "Ideal for older properties",
    ],
    forWho: "Older properties and heritage-style windows",
    whyUs: "Skilled craftsmanship with proper traditional glazing techniques.",
  },
];

function ServiceIcon({ title }: { title: string }) {
  if (title === "Aluminium Windows") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M4 5h16v14H4V5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 5v14M4 12h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (title === "Aluminium Doors") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M7 4h10v16H7V4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M15 12h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (title === "Aluminium Shopfronts") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M4 10V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M5 10h14l-1 10H6L5 10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 13v7M15 13v7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (title === "Shower Panels & Bathroom Glass") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M8 4h8a4 4 0 0 1 4 4v2H4V8a4 4 0 0 1 4-4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M7 14v6M12 14v6M17 14v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (title === "Glass Cut to Size") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M6 7h12M6 12h12M6 17h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 5h16v14H4V5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M7 4h10v16H7V4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 8h6M9 12h6M9 16h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  const whatsappNumber = "27163621797";

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden pt-24 pb-10 md:pt-28 md:pb-12 bg-[#243e95]">
         <Image
           src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770811605/hero_image_2560x1080_xdgm7g.png"
           alt=""
           fill
           priority
           className="object-cover opacity-40"
           sizes="100vw"
         />
         <div className="absolute inset-0 bg-[#243e95]/60" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] mb-4">
              What We Do
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] leading-[1.1] mb-5">
              Our Services
            </h1>
            <p className="text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] text-base sm:text-lg leading-relaxed max-w-xl">
              From aluminium windows and doors to custom glass cutting, we
              provide professional fabrication and installation services for
              residential and industrial clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {services.map((service) => {
              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl bg-[#243e95] text-white ring-1 ring-white/12 shadow-[0_14px_40px_rgba(0,0,0,0.16)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover ui-transition duration-300 transition-transform group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#243e95]/90 via-[#243e95]/20 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5296d1]/20 ring-1 ring-white/18">
                      <ServiceIcon title={service.title} />
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-white/80 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="mt-6 grid gap-3">
                      {service.details.slice(0, 4).map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-white" />
                          <span className="text-sm text-white/80 leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-2xl bg-white/6 ring-1 ring-white/12 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4ea6dd]">
                        Best For
                      </p>
                      <p className="mt-1 text-sm text-white/85 leading-relaxed">
                        {service.forWho}
                      </p>
                      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4ea6dd]">
                        Why JJ Glassworks
                      </p>
                      <p className="mt-1 text-sm text-white/85 leading-relaxed">
                        {service.whyUs}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#243e95]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-1 bg-[#4ea6dd] mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#243e95] leading-tight mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-[#243e95]/75 mb-10 max-w-lg mx-auto leading-relaxed">
              Contact us today for a free quote. We&apos;ll respond quickly and
              work to your schedule.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className={buttonClassName({
                  variant: "primary",
                  size: "lg",
                  className:
                    "border-[#243e95] bg-[#243e95] text-white hover:bg-transparent hover:text-[#243e95] hover:border-[#243e95]",
                })}
              >
                Request a Quote
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hi JJ Glassworks, I'd like to request a quote."
                )}`}
                target="_blank"
                rel="noreferrer"
                className={buttonClassName({
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-[#4ea6dd] text-[#4ea6dd] hover:bg-[#4ea6dd] hover:text-white",
                })}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </main>
  );
}
