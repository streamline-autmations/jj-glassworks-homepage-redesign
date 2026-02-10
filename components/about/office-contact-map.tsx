import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

import { buttonClassName } from "@/components/ui/button";
import { cardClassName } from "@/components/ui/card";

export default function OfficeContactMap() {
  const mapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=57A+Loch+St%2C+Meyerton";
  const mapsEmbedUrl =
    "https://www.google.com/maps?q=57A+Loch+St,+Meyerton&output=embed";

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Visit Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Office & Location
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className={cardClassName({ variant: "panel", padding: "md", className: "md:col-span-2 flex flex-col justify-between" })}>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-8">
                Reception & General Enquiries
              </h3>
              <ul className="flex flex-col gap-6">
                <li>
                  <a
                    href="tel:0163621797"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 flex-shrink-0">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-1">
                        Office Tel
                      </span>
                      <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        016 362 1797
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:jjglass01@mweb.co.za"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 flex-shrink-0">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-1">
                        Email
                      </span>
                      <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        jjglass01@mweb.co.za
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 flex-shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-1">
                        Address
                      </span>
                      <span className="block text-sm font-semibold text-foreground">
                        57A Loch St, Meyerton
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName({
                variant: "primary",
                size: "lg",
                className: "mt-10 w-full gap-2",
              })}
            >
              <ExternalLink className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          <div
            className={cardClassName({
              variant: "panel",
              className: "md:col-span-3 overflow-hidden",
            })}
          >
            <div className="relative w-full aspect-video md:aspect-auto md:h-full min-h-[350px]">
              <iframe
                src={mapsEmbedUrl}
                title="JJ Glassworks location on Google Maps"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
