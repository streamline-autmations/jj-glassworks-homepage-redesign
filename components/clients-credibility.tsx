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
  return (
    <section className="bg-primary py-8 border-y border-[hsl(0_0%_100%/0.12)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xs sm:text-sm font-extrabold tracking-[0.18em] uppercase text-white/90">
          Companies We’ve Worked With
        </h2>
        <div className="relative overflow-hidden">
          <div className="mt-5 flex w-max items-center gap-7 sm:gap-9 md:gap-10 animate-logo-ticker motion-reduce:animate-none">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-12 sm:h-14 md:h-16"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={80}
                  className="h-8 sm:h-10 md:h-11 w-auto object-contain brightness-0 invert opacity-95"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
