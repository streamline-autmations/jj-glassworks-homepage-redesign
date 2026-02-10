import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-10 md:pt-28 md:pb-12 bg-secondary">
      <Image
        src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770742920/Untitled_design_58_gqd5lh.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] mb-4">
            Who We Are
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] leading-[1.1] mb-5">
            About JJ Glassworks
          </h1>
          <p className="text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] text-base sm:text-lg leading-relaxed max-w-xl">
            Glass & aluminium specialists serving Meyerton and greater Gauteng.
          </p>
        </div>
      </div>
    </section>
  );
}
