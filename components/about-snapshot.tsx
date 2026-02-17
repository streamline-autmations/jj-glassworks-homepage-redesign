export default function AboutSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-background ui-reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[16/11] md:aspect-video w-full overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border/60">
            <iframe
              src="https://iframe.mediadelivery.net/play/601665/61052645-268e-4d7a-932e-5d3874d6515e"
              title="JJ Glassworks video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>

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
