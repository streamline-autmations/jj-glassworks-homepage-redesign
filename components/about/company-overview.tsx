export default function CompanyOverview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Our Story
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              Three decades of precision work
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6 text-muted-foreground leading-relaxed">
            <p>
              JJ Glassworks is a family-owned glass and aluminium business based in Meyerton, Gauteng. Since 1988, we have built a reputation for reliable workmanship and honest service across both residential and commercial projects. Every job, from a single shower panel to a full shopfront installation, receives the same standard of care.
            </p>
            <p>
              We handle the entire process in-house: measuring, cutting, fabricating, and installing. Our own workshop gives us direct control over quality and turnaround times, so clients get consistent results without unnecessary delays. We work with standard and custom aluminium profiles, safety glass, laminated glass, and specialty glazing products.
            </p>
            <p>
              Over three decades of experience means we understand what works and what lasts. Our team focuses on getting the job done right, on time, and within budget. That is why clients return to us project after project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
