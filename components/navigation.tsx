"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { buttonClassName } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/completed-projects", label: "Completed Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const openMenu = () => {
    setIsMenuMounted(true);
    requestAnimationFrame(() => setIsMenuOpen(true));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.setTimeout(() => setIsMenuMounted(false), 240);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuMounted) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuMounted]);

  useEffect(() => {
    if (!isMenuMounted) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuMounted]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border ui-transition-shadow ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-[0_6px_24px_rgba(10,30,80,0.06)]"
          : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770741423/Untitled_design_58_r6mfhp.png"
              alt="JJ Glassworks"
              width={160}
              height={52}
              className="h-7 sm:h-8 md:h-9 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-semibold uppercase tracking-[0.18em] ui-transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 after:[transition-timing-function:var(--ui-ease)] hover:after:scale-x-100 ${
                  pathname === link.href
                    ? "text-primary after:scale-x-100"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 ml-auto">
          <Link
            href="/contact"
            className={buttonClassName({
              variant: "primary",
              size: "sm",
              className: "hidden md:inline-flex",
            })}
          >
            Get a Quote
          </Link>

          <button
            className="md:hidden text-foreground p-2 -mr-2"
            onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
            aria-label="Toggle menu"
          >
            <span className="relative block h-5 w-5">
              <Menu
                className={`absolute inset-0 h-5 w-5 ui-motion ${
                  isMenuOpen ? "opacity-0 rotate-90 scale-90" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-5 w-5 ui-motion ${
                  isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-90"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {isMenuMounted && (
        <div
          className={`md:hidden fixed inset-0 z-[60] ${
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className={`absolute inset-0 bg-[hsl(220_50%_8%/0.55)] ui-motion ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`absolute left-0 right-0 top-16 bg-background shadow-[0_18px_54px_rgba(10,30,80,0.16)] ring-1 ring-border/60 ui-motion ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="py-5 border-b border-border flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
                  Menu
                </p>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="text-foreground p-2 -mr-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    style={{ transitionDelay: `${isMenuOpen ? index * 50 : 0}ms` }}
                    className={`ui-motion rounded-2xl px-3 py-3 text-base font-semibold ${
                      isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    } ${
                      pathname === link.href
                        ? "text-primary bg-secondary"
                        : "text-foreground/80 hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div
                  className={`pt-5 mt-5 border-t border-border ui-motion ${
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  }`}
                  style={{ transitionDelay: `${isMenuOpen ? navLinks.length * 50 : 0}ms` }}
                >
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className={buttonClassName({
                      variant: "primary",
                      size: "lg",
                      className: "w-full justify-center",
                    })}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
