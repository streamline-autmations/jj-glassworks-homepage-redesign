import Image from "next/image";

export default function GroupPhoto() {
  return (
    <section className="bg-secondary ui-reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="relative overflow-hidden aspect-[16/11] md:aspect-video rounded-3xl bg-background shadow-sm ring-1 ring-border/60">
          <Image
            src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770740856/Untitled_20design_upscayl_8x_jd9mlb.jpg"
            alt="The JJ Glassworks workshop team"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="mt-3 mb-2 text-sm text-muted-foreground">
          Our workshop team -- hands-on craftsmanship, every project.
        </p>
      </div>
    </section>
  );
}
