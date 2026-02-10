import { Building2, Factory, Home } from "lucide-react";

const highlights = [
  { icon: Building2, text: "Established since 1988" },
  { icon: Factory, text: "In-house cutting & fabrication" },
  { icon: Home, text: "Residential + commercial projects" },
];

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Who We Are
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-5">
            About JJ Glassworks
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
            Glass & aluminium specialists serving Meyerton and greater Gauteng.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-2xl bg-background px-5 py-3.5 shadow-sm ring-1 ring-border/60"
              >
                <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground/70">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
