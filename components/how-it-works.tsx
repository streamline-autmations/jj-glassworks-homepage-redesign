const steps = [
  {
    number: "01",
    title: "Measure & Quote",
    description: "We assess your requirements on-site and provide a detailed, transparent quote.",
  },
  {
    number: "02",
    title: "Manufacture In-House",
    description: "Your aluminium products are fabricated in our own workshop for quality control.",
  },
  {
    number: "03",
    title: "Install & Finish",
    description: "Professional fitting by our experienced installation team, done right the first time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Our Process
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step) => (
              <div key={step.number} className="bg-background p-8 md:p-10 border border-primary/8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm mb-6">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
