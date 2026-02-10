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
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="bg-primary py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex w-max items-center gap-12 sm:gap-16 md:gap-20 animate-marquee motion-reduce:animate-none">
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="flex items-center justify-center h-12 sm:h-14 md:h-16">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={80}
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
