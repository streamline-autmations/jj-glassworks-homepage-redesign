import Image from "next/image";
import { Ruler, Factory, Building2 } from "lucide-react";

const highlights = [
  {
    icon: Ruler,
    title: "Precision Installations",
    description: "On-site measuring and exact fitment for clean, consistent finishing.",
  },
  {
    icon: Factory,
    title: "In-House Fabrication",
    description: "Cutting and fabrication handled internally for tighter control and lead times.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    description: "Proven on large developments and day-to-day projects across Gauteng.",
  },
];

export default function AboutSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[520px] w-full overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border/60">
            <Image
              src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770726537/Untitled_design_bnjygq.jpg"
              alt="JJ Glassworks workshop and installations"
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 92vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="pt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-6">
              Who We Are
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              JJ Glassworks is a family-owned glass and aluminium business with in-house fabrication and
              cutting. Established in 1988, we deliver residential and commercial installations with clean
              workmanship and reliable turnaround.
            </p>

            <div className="mt-10 space-y-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 bg-secondary border border-primary/10 p-6 sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-primary/10 flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold tracking-[0.1em] text-foreground uppercase">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
