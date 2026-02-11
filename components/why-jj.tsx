import { Ruler, Factory, ShieldCheck, Building2 } from "lucide-react";

import { cardClassName } from "@/components/ui/card";

const reasons = [
  {
    icon: Ruler,
    title: "Precision-Fit Installations",
    description:
      "Every measurement is taken on-site and manufactured to exact specifications — no gaps, no shortcuts.",
  },
  {
    icon: Factory,
    title: "In-House Fabrication",
    description:
      "Cutting and fabrication handled internally for tighter quality control and faster turnaround times.",
  },
  {
    icon: ShieldCheck,
    title: "Built for Long-Term Durability",
    description:
      "We use industry-approved glass and aluminium systems designed to last in South African conditions.",
  },
  {
    icon: Building2,
    title: "Proven on Large Developments",
    description:
      "Trusted on major residential and commercial projects, from estates to retail environments.",
  },
];

export default function WhyJJ() {
  return (
    <section className="py-20 md:py-28 bg-secondary border-y border-border ui-reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight text-center">
          WHY CHOOSE JJ GLASS &amp; ALUMINIUM
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className={cardClassName({ variant: "panel", padding: "sm" })}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 shadow-sm ring-1 ring-primary/15 flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </div>
                <div className="mt-5">
                  <h3 className="text-base font-extrabold text-foreground tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
