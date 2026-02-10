import Link from "next/link";
import Image from "next/image";

const features = [
  { title: "Established since 1988", detail: "Family-owned craftsmanship" },
  { title: "In-house fabrication & cutting", detail: "Quality control end-to-end" },
  { title: "Residential & commercial projects", detail: "Built for any scale" },
];

export default function AboutSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="pt-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-6">
              ABOUT US
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              JJ Glassworks is a family-owned glass and aluminium business with in-house fabrication and
              cutting. Established in 1988, we deliver residential and commercial installations with clean
              workmanship and reliable turnaround.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                READ MORE
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="border border-border px-5 py-4">
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    {feature.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {feature.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full border border-border overflow-hidden">
            <Image
              src="/placeholders/about.svg"
              alt="JJ Glassworks workshop and installations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
