"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

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

  return null;
}
