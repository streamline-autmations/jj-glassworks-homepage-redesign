import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";
import { Square, DoorOpen, Store, Droplets, Scissors, Wrench, CheckCircle } from "lucide-react";
import { buttonClassName } from "@/components/ui/button";
import { cardClassName } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services | JJ Glassworks",
  description:
    "Professional glass and aluminium services including windows, doors, shopfronts, shower glass, and custom cutting.",
};

const services = [
  {
    icon: Square,
    title: "Aluminium Windows",
    description: "Energy-efficient windows built for South African conditions",
    details: [
      "Fixed, sliding, and top-hung configurations",
      "Powder-coated finishes in any colour",
      "Double glazing options for insulation",
      "Custom sizes for new builds and renovations",
    ],
    forWho: "Homeowners, builders, architects, property developers",
    whyUs: "In-house fabrication means quality control and faster delivery.",
  },
  {
    icon: DoorOpen,
    title: "Aluminium Doors",
    description: "Sliding, hinged, and stacking doors for any opening",
    details: [
      "Sliding doors for seamless indoor-outdoor flow",
      "Hinged doors for entrances and rooms",
      "Stacking doors for maximum opening width",
      "Security options with multi-point locking",
    ],
    forWho: "Residential homes, commercial buildings, retail spaces",
    whyUs: "Expert installation with precise fitting and smooth operation.",
  },
  {
    icon: Store,
    title: "Aluminium Shopfronts",
    description: "Commercial storefronts that make an impression",
    details: [
      "Complete shopfront systems",
      "Automatic and manual door options",
      "Safety glass and security features",
      "Signage integration",
    ],
    forWho: "Retail stores, offices, restaurants, commercial properties",
    whyUs: "Minimal disruption to your business with efficient installation.",
  },
  {
    icon: Droplets,
    title: "Shower Panels & Bathroom Glass",
    description: "Frameless and semi-frameless enclosures",
    details: [
      "Frameless shower screens for modern bathrooms",
      "Semi-frameless options with stability",
      "Sliding and hinged door configurations",
      "Custom sizes to fit any space",
    ],
    forWho: "Homeowners renovating bathrooms, new residential builds",
    whyUs: "Clean installations with attention to waterproofing and finish.",
  },
  {
    icon: Scissors,
    title: "Glass Cut to Size",
    description: "Custom glass cutting for any project",
    details: [
      "Tabletops and shelving",
      "Replacement window panes",
      "Mirror cutting",
      "Tempered and laminated options",
    ],
    forWho: "DIY projects, furniture makers, builders, homeowners",
    whyUs: "Precision cutting to exact specifications with fast turnaround.",
  },
  {
    icon: Wrench,
    title: "Putty Repairs & Glazing",
    description: "Traditional glazing and repair services",
    details: [
      "Putty removal and re-glazing",
      "Cracked glass replacement",
      "Window frame repairs",
      "Heritage building specialist",
    ],
    forWho: "Older properties, heritage buildings, window repairs",
    whyUs: "Skilled craftsmen who understand traditional glazing techniques.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pb-14 md:pb-0">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              What We Do
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-5">
              Our Services
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              From aluminium windows and doors to custom glass cutting, we
              provide professional fabrication and installation services for
              residential and industrial clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-20 md:gap-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start"
              >
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 shadow-sm ring-1 ring-primary/15">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-col gap-3 mb-8">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={buttonClassName({ variant: "primary", size: "lg" })}
                  >
                    Get a Quote
                  </Link>
                </div>

                <div
                  className={cardClassName({
                    variant: "accent",
                    padding: "md",
                    className: isEven ? "lg:order-2" : "lg:order-1",
                  })}
                >
                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/60 mb-2">
                        WHO IT&apos;S FOR
                      </p>
                      <p className="text-foreground text-sm leading-relaxed">{service.forWho}</p>
                    </div>
                    <div className="border-t border-primary/10 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/60 mb-2">
                        WHY JJ GLASSWORKS
                      </p>
                      <p className="text-foreground text-sm leading-relaxed">{service.whyUs}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-1 bg-primary mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
              Contact us today for a free quote. We&apos;ll respond quickly and
              work to your schedule.
            </p>
            <Link
              href="/contact"
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </main>
  );
}
