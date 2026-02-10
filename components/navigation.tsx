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
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-shadow duration-200 ${
        scrolled ? "shadow-[0_6px_24px_rgba(10,30,80,0.06)]" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770741423/Untitled_design_58_r6mfhp.png"
              alt="JJ Glassworks"
              width={96}
              height={48}
              className="h-9 w-auto md:hidden"
              priority
            />
            <Image
              src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770624401/Untitled_515_x_300_px_wdny38.svg"
              alt="JJ Glassworks"
              width={130}
              height={44}
              className="h-9 w-auto hidden md:block"
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
                className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                  pathname === link.href
                    ? "text-primary"
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 sm:px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors py-3 px-2 ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={buttonClassName({
                  variant: "primary",
                  size: "lg",
                  className: "w-full",
                })}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
