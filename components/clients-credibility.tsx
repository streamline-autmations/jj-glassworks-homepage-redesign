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
    <section className="w-full bg-primary py-10 sm:py-12 md:py-14 border-y border-[hsl(0_0%_100%/0.14)]">
      <h2 className="px-6 text-center text-xs sm:text-sm font-extrabold tracking-[0.18em] uppercase text-white/90">
        Companies We’ve Worked With
      </h2>

      <div className="mt-7 overflow-hidden">
        <div className="flex w-max items-center gap-14 sm:gap-16 md:gap-20 animate-marquee motion-reduce:animate-none">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex items-center justify-center h-16 sm:h-[72px] md:h-20 rounded-2xl bg-white/10 ring-1 ring-[hsl(0_0%_100%/0.15)] px-8"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={260}
                height={96}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
