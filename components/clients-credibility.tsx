import Image from "next/image";

const logos = [
  {
    src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770646688/Untitled_design_7_hmfgqy.svg",
    alt: "Solid Build",
  },
  {
    src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770646687/Untitled_design_6_arkfue.svg",
    alt: "MRG Roofing",
  },
  {
    src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770646686/Untitled_design_5_c5kpwm.svg",
    alt: "Shield SA",
  },
  {
    src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770646685/Untitled_design_4_cox8na.svg",
    alt: "Delta Construction",
  },
  {
    src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770646683/Untitled_design_3_tmw64t.svg",
    alt: "Sanjo Construction",
  },
];

export default function ClientsCredibility() {
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-primary py-12 sm:py-14 md:py-16 border-y border-[hsl(0_0%_100%/0.14)] ui-reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xs sm:text-sm font-extrabold tracking-[0.18em] uppercase text-white/90">
            Companies We’ve Worked With
          </h2>
          <p className="mt-3 text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
            Trusted by builders and businesses across Gauteng for reliable delivery and clean finishes.
          </p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="flex w-max items-center gap-16 sm:gap-20 md:gap-24 animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="group flex items-center justify-center h-16 sm:h-[76px] md:h-20 rounded-2xl bg-white/10 ring-1 ring-[hsl(0_0%_100%/0.15)] px-9 ui-motion ui-transition-shadow hover:shadow-[0_14px_44px_rgba(0,0,0,0.22)] hover:scale-[1.05]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={260}
                height={96}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-90 ui-motion group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
