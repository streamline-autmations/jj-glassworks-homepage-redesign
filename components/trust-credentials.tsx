import Image from "next/image";

import { cardClassName } from "@/components/ui/card";

const certifications = [
  {
    src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770629644/imgi_28_ea81cd84f79b936e445d46b52e2158c6_uuwm8d.png",
    alt: "Nu-Glaze Approved Certification",
    name: "Nu-Glaze Approved",
  },
  {
    src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770629645/imgi_30_7a090c9d3da3a98048d7145edb7bf79a_xrvv7b.jpg",
    alt: "SAGGA Member Certification",
    name: "SAGGA Member",
  },
  {
    src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770629645/imgi_29_5b2d3a210329a83fff3bf264adf7e960_jbpfhq.png",
    alt: "AAAMSA Fenestration Certification",
    name: "AAAMSA Fenestration",
  },
];

export default function TrustCredentials() {
  return (
    <section className="py-16 md:py-20 border-y border-border bg-secondary ui-reveal">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-10">
          Certified & Industry Recognised
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16 md:gap-24">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col items-center gap-3">
              <div
                className={cardClassName({
                  variant: "panel",
                  className: "relative h-20 w-44 flex items-center justify-center p-3 rounded-2xl",
                })}
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={140}
                  height={80}
                  className="object-contain max-h-14 w-auto"
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
