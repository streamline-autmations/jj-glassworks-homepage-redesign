import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <Image
        src="/placeholders/hero.svg"
        alt="JJ Glassworks precision glass and aluminium work"
        fill
        className="object-cover hidden md:block"
        priority
      />
      <Image
        src="/placeholders/hero.svg"
        alt="JJ Glassworks precision glass and aluminium work"
        fill
        className="object-cover md:hidden"
        priority
      />

      <div className="absolute inset-0 z-10 bg-[hsl(220_50%_8%/0.60)]" />
      <div
        className="absolute inset-y-0 left-0 z-20 w-[72%] max-w-[980px] bg-primary/90"
        style={{ clipPath: "polygon(0 0, 100% 0, 66% 100%, 0% 100%)" }}
      />

      <div className="relative z-30 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-24">
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
              className="inline-flex items-center justify-center bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/40"
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
    </section>
  );
}
