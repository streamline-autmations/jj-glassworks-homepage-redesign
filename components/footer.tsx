import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

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
    { href: "/gallery", label: "IS MOTORS" },
    { href: "/gallery", label: "Lions Pride" },
    { href: "/gallery", label: "SHIELD" },
    { href: "/gallery", label: "Solid Build" },
  ];

  return (
    <footer className="bg-background border-t border-border py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:hidden">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770624401/Untitled_515_x_300_px_wdny38.svg"
                alt="JJ Glassworks"
                width={160}
                height={52}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
              Precision glass and aluminium solutions for residential and commercial projects since 1988.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10">
            <div>
              <h4 className="text-sm font-extrabold tracking-[0.12em] text-foreground uppercase">
                Quick Links
              </h4>
              <ul className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-extrabold tracking-[0.12em] text-foreground uppercase">
                Services
              </h4>
              <ul className="mt-6 flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-extrabold tracking-[0.12em] text-foreground uppercase">
                Featured Projects
              </h4>
              <ul className="mt-6 flex flex-col gap-3">
                {featuredLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-extrabold tracking-[0.12em] text-foreground uppercase">
                Contact Us
              </h4>
              <div className="mt-6 border-t border-border">
                {teamContacts.map((member) => (
                  <div key={member.name} className="py-6 border-b border-border">
                    <p className="text-sm font-semibold text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                    <div className="mt-4 flex flex-col gap-3">
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-start gap-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                      >
                        <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{member.phoneDisplay}</span>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-start gap-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                      >
                        <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{member.email}</span>
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
                  className="flex items-start gap-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-foreground/80">57A Loch St, Meyerton</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">
              {`\u00A9 ${currentYear} JJ Glassworks. All rights reserved.`}
            </p>
          </div>
        </div>

        <div className="hidden md:grid gap-12 md:grid-cols-12">
          <div className="max-w-md md:col-span-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1770624401/Untitled_515_x_300_px_wdny38.svg"
                alt="JJ Glassworks"
                width={140}
                height={46}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
              Precision glass and aluminium solutions for residential and commercial projects since 1988.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-extrabold tracking-[0.12em] text-foreground uppercase">
              Pages
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-md md:col-span-4">
            <h4 className="text-sm font-extrabold tracking-[0.12em] text-foreground uppercase">
              Office & Location
            </h4>
            <ul className="flex flex-col gap-5 mt-6">
              <li>
                <p className="text-xs font-extrabold tracking-[0.12em] uppercase text-foreground">
                  Reception & General Enquiries
                </p>
                <div className="mt-2 flex flex-col gap-3">
                  <a
                    href="tel:+27163621797"
                    className="flex items-start gap-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>
                      <span className="font-semibold text-foreground">Office Tel</span>{" "}
                      <span className="text-foreground/80">016 362 1797</span>
                    </span>
                  </a>
                  <a
                    href="mailto:jjglass01@mweb.co.za"
                    className="flex items-start gap-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>
                      <span className="font-semibold text-foreground">Email</span>{" "}
                      <span className="text-foreground/80">jjglass01@mweb.co.za</span>
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=57A%20Loch%20St,%20Meyerton"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span>
                    <span className="font-semibold text-foreground">Address</span>{" "}
                    <span className="text-foreground/80">57A Loch St, Meyerton</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:block mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${currentYear} JJ Glassworks. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
