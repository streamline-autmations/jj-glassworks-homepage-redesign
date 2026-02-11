"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

const BIRTHDAY_IMAGE_URL =
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770819364/Happy_nfhvmb.jpg";

type ConfettiPiece = {
  leftPercent: number;
  color: string;
  delayMs: number;
  durationMs: number;
  rotateDeg: number;
  driftPx: number;
};

function BirthdayPopup() {
  const [isRendered, setIsRendered] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const confettiPieces = useMemo<ConfettiPiece[]>(() => {
    const colors = ["#f43f5e", "#f59e0b", "#22c55e", "#3b82f6", "#a855f7", "#06b6d4"];
    return Array.from({ length: 54 }, (_, index) => {
      const leftPercent = (index * 17) % 100;
      const color = colors[index % colors.length];
      const delayMs = (index * 37) % 650;
      const durationMs = 2400 + ((index * 91) % 1200);
      const rotateDeg = ((index * 53) % 180) - 90;
      const driftPx = ((index * 29) % 70) - 35;
      return { leftPercent, color, delayMs, durationMs, rotateDeg, driftPx };
    });
  }, []);

  useEffect(() => {
    if (!isRendered) return;
    if (reduceMotion) {
      setIsOpen(true);
      return;
    }

    const timer = window.setTimeout(() => setIsOpen(true), 40);
    return () => window.clearTimeout(timer);
  }, [isRendered, reduceMotion]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) return;
    if (!isRendered) return;

    if (reduceMotion) {
      setIsRendered(false);
      return;
    }

    const timer = window.setTimeout(() => setIsRendered(false), 260);
    return () => window.clearTimeout(timer);
  }, [isOpen, isRendered, reduceMotion]);

  if (!isRendered) return null;

  return (
    <div
      className={[
        "fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6",
        "bg-[hsl(220_50%_8%/0.55)] backdrop-blur-sm",
        "transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label="Celebration"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confettiPieces.map((piece, index) => (
          <div
            key={index}
            className="jj-confetti-piece"
            style={
              {
                "--jj-confetti-left": `${piece.leftPercent}%`,
                "--jj-confetti-color": piece.color,
                "--jj-confetti-delay": `${piece.delayMs}ms`,
                "--jj-confetti-duration": `${piece.durationMs}ms`,
                "--jj-confetti-rotate": `${piece.rotateDeg}deg`,
                "--jj-confetti-drift": `${piece.driftPx}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div
        className={[
          "relative w-full max-w-[520px]",
          "rounded-[28px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/10",
          "bg-white",
          "transition-transform duration-300 will-change-transform",
          isOpen ? "scale-100 translate-y-0" : "scale-[0.96] translate-y-3",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[hsl(220_50%_8%)] shadow-sm ring-1 ring-black/10 ui-transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[4/5] bg-secondary">
          <Image
            src={BIRTHDAY_IMAGE_URL}
            alt="Celebration"
            fill
            sizes="(min-width: 640px) 520px, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_50%_8%/0.28)] via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default function ScrollReveal() {
  const pathname = usePathname();
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".ui-reveal")
    );

    if (revealElements.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      revealElements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    revealElements.forEach((element) => {
      const delayMsRaw = element.getAttribute("data-reveal-delay");
      if (!delayMsRaw) return;
      const delayMs = Number(delayMsRaw);
      if (!Number.isFinite(delayMs) || delayMs <= 0) return;
      element.style.transitionDelay = `${delayMs}ms`;
    });

    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-revealed");
          instance.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    revealElements
      .filter((element) => !element.classList.contains("is-revealed"))
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return <>{isClientReady ? <BirthdayPopup /> : null}</>;
}
