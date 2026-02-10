import { Shield, Factory, Clock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality Craftsmanship",
    description: "Clean finishing and consistent quality across every install.",
  },
  {
    icon: Factory,
    title: "In-House Control",
    description: "Fabrication and cutting handled in-house for better lead times.",
  },
  {
    icon: Clock,
    title: "Reliable Turnaround",
    description: "Clear communication and on-time delivery you can plan around.",
  },
];

export default function WhyJJ() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight text-center">
          WHY CHOOSE US?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14 mt-12">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="flex items-start gap-5">
                <div className="flex h-11 w-11 items-center justify-center bg-primary/10 flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold tracking-[0.1em] text-foreground uppercase">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
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
