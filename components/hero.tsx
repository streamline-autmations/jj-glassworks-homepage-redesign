import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { buttonClassName } from "@/components/ui/button";

const HERO_IMAGE_DESKTOP =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770752419/hero_image_2560x1080_rfyacf.jpg";

const HERO_IMAGE_MOBILE =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770752419/hero_image_2560x1080_rfyacf.jpg";

export default function Hero() {
  return (
    <section className="relative pt-16">
      <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[calc(100vh-4rem)] md:max-h-[720px] overflow-hidden flex items-center bg-[hsl(220_50%_8%)]">
        <Image
          src={HERO_IMAGE_DESKTOP}
          alt="JJ Glassworks precision glass and aluminium work"
          fill
          className="object-cover hidden md:block"
          priority
          sizes="100vw"
        />
        <Image
          src={HERO_IMAGE_MOBILE}
          alt="JJ Glassworks precision glass and aluminium work"
          fill
          className="object-cover md:hidden"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,hsl(var(--brand-deep)/0.78),hsl(220_50%_8%/0.58),hsl(var(--brand-sky)/0.22))]" />
        <div
          className="absolute inset-y-0 left-0 z-20 w-[72%] max-w-[980px] bg-primary/80"
          style={{ clipPath: "polygon(0 0, 100% 0, 66% 100%, 0% 100%)" }}
        />

        <div className="relative z-30 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/90 mb-5">
              Glass & Aluminium Specialists Since 1988
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 text-balance">
              Precision Glass & Aluminium Solutions
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-lg mb-10 leading-relaxed">
              Residential & commercial glass and aluminium specialists since 1988
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className={buttonClassName({ variant: "white", size: "lg" })}
              >
                Get a Quote
              </Link>
              <a
                href="https://wa.me/27824595073"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName({ variant: "inverseOutline", size: "lg" })}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/55 font-medium tracking-wide">
              <span>Serving Gauteng</span>
              <span className="hidden sm:inline text-white/45">|</span>
              <span>In-house fabrication</span>
              <span className="hidden sm:inline text-white/45">|</span>
              <span>Since 1988</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
