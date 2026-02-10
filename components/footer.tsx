import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

import { teamContacts } from "@/lib/team";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/services", label: "Doors" },
    { href: "/services", label: "Windows" },
    { href: "/services", label: "Showers" },
    { href: "/services", label: "Mirrors" },
    { href: "/services", label: "Shopfronts" },
    { href: "/services", label: "Balustrades" },
  ];

  const featuredLinks = [
    { href: "/gallery", label: "Kiepersol" },
    { href: "/gallery", label: "I&S Motors" },
    { href: "/gallery", label: "Lions Pride" },
    { href: "/gallery", label: "SHIELD" },
    { href: "/gallery", label: "Solid Build" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10 py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:hidden">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770741423/Untitled_design_58_r6mfhp.png"
                alt="JJ Glassworks"
                width={160}
                height={52}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-base text-white/75 mt-5 leading-relaxed">
              Precision glass and aluminium solutions for residential and commercial projects since 1988.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/JJ-Glassworks-CC/61575574604887/"
                target="_blank"
                rel="noreferrer"
                aria-label="JJ Glassworks Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[hsl(var(--brand-deep))] border-2 border-[hsl(var(--brand-sky))] transition-colors hover:bg-[hsl(var(--brand-sky))] hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/jj57glassworkscc/"
                target="_blank"
                rel="noreferrer"
                aria-label="JJ Glassworks Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[hsl(var(--brand-deep))] border-2 border-[hsl(var(--brand-sky))] transition-colors hover:bg-[hsl(var(--brand-sky))] hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10">
            <div>
              <h4 className="text-base font-extrabold tracking-[0.12em] text-white uppercase">
                Quick Links
              </h4>
              <ul className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-extrabold tracking-[0.12em] text-white uppercase">
                Services
              </h4>
              <ul className="mt-6 flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-extrabold tracking-[0.12em] text-white uppercase">
                Featured Projects
              </h4>
              <ul className="mt-6 flex flex-col gap-3">
                {featuredLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-extrabold tracking-[0.12em] text-white uppercase">
                Contact Us
              </h4>
              <div className="mt-6 border-t border-white/10">
                {teamContacts.map((member) => (
                  <div key={member.name} className="py-6 border-b border-white/10">
                    <p className="text-base font-semibold text-white">{member.name}</p>
                    <p className="text-sm text-white/65 mt-1">{member.role}</p>
                    <div className="mt-4 flex flex-col gap-3">
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-start gap-3 text-base text-white/80 hover:text-white transition-colors"
                      >
                        <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[hsl(var(--brand-sky))]" />
                        <span className="text-white/80">{member.phoneDisplay}</span>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-start gap-3 text-base text-white/80 hover:text-white transition-colors"
                      >
                        <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-[hsl(var(--brand-sky))]" />
                        <span className="text-white/80">{member.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <a
                  href="https://maps.google.com/?q=57A%20Loch%20St,%20Meyerton"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[hsl(var(--brand-sky))]" />
                  <span className="text-white/80">57A Loch St, Meyerton</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-white/65">
              {`\u00A9 ${currentYear} JJ Glassworks. All rights reserved.`}
            </p>
          </div>
        </div>

        <div className="hidden md:grid gap-12 md:grid-cols-12">
          <div className="max-w-md md:col-span-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770741423/Untitled_design_58_r6mfhp.png"
                alt="JJ Glassworks"
                width={140}
                height={46}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-base text-white/75 mt-5 leading-relaxed">
              Precision glass and aluminium solutions for residential and commercial projects since 1988.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/JJ-Glassworks-CC/61575574604887/"
                target="_blank"
                rel="noreferrer"
                aria-label="JJ Glassworks Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[hsl(var(--brand-deep))] border-2 border-[hsl(var(--brand-sky))] transition-colors hover:bg-[hsl(var(--brand-sky))] hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/jj57glassworkscc/"
                target="_blank"
                rel="noreferrer"
                aria-label="JJ Glassworks Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[hsl(var(--brand-deep))] border-2 border-[hsl(var(--brand-sky))] transition-colors hover:bg-[hsl(var(--brand-sky))] hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
              <h4 className="text-base font-extrabold tracking-[0.12em] text-white uppercase">
              Pages
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                      className="text-base text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-md md:col-span-4">
            <h4 className="text-base font-extrabold tracking-[0.12em] text-white uppercase">
              Office & Location
            </h4>
            <ul className="flex flex-col gap-5 mt-6">
              <li>
                <p className="text-sm font-extrabold tracking-[0.12em] uppercase text-white">
                  Reception & General Enquiries
                </p>
                <div className="mt-2 flex flex-col gap-3">
                  <a
                    href="tel:+27163621797"
                    className="flex items-start gap-3 text-base text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[hsl(var(--brand-sky))]" />
                    <span>
                      <span className="font-semibold text-white">Office Tel</span>{" "}
                      <span className="text-white/80 text-base">016 362 1797</span>
                    </span>
                  </a>
                  <a
                    href="mailto:jjglass01@mweb.co.za"
                    className="flex items-start gap-3 text-base text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-[hsl(var(--brand-sky))]" />
                    <span>
                      <span className="font-semibold text-white">Email</span>{" "}
                      <span className="text-white/80 text-base">jjglass01@mweb.co.za</span>
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=57A%20Loch%20St,%20Meyerton"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-base text-white/80 hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[hsl(var(--brand-sky))]" />
                  <span>
                    <span className="font-semibold text-white">Address</span>{" "}
                    <span className="text-white/80 text-base">57A Loch St, Meyerton</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:block mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/65">
            {`\u00A9 ${currentYear} JJ Glassworks. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
