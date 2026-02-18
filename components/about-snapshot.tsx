import AboutSnapshotVideo from "@/components/about-snapshot-video";

export default function AboutSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-background ui-reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <AboutSnapshotVideo />

          <div className="pt-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-6">
              Who We Are
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              JJ Glassworks is a family-owned glass and aluminium business with in-house fabrication and
              cutting. Established in 1988, we deliver residential and commercial installations with clean
              workmanship and reliable turnaround.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
