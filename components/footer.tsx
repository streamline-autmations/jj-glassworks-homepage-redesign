import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="max-w-md">
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

          <div className="max-w-md">
            <h4 className="text-sm font-extrabold tracking-[0.12em] text-foreground uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 mt-6">
              <li>
                <a
                  href="tel:+27000000000"
                  className="flex items-start gap-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  +27 (0) 00 000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jjglassworks.co.za"
                  className="flex items-start gap-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  info@jjglassworks.co.za
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-foreground/80">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  Gauteng, South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${currentYear} JJ Glassworks. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
