"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";
import { buttonClassName } from "@/components/ui/button";
import { cardClassName } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
  Facebook,
  Instagram,
} from "lucide-react";

const serviceOptions = [
  "Aluminium Windows",
  "Aluminium Doors",
  "Aluminium Shopfronts",
  "Shower Panels & Bathroom Glass",
  "Glass Cut to Size",
  "Putty Repairs & Glazing",
  "Other",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen pb-14 md:pb-0">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#243e95]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4ea6dd] mb-4">
                Contact
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
                Visit Us
              </h1>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
                Find us on Google Maps for directions and quick access to our office and workshop.
              </p>
              <p className="mt-6 text-sm text-white/75 leading-relaxed">
                57A Loch St, Meyerton
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-white/15 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[16/10]">
                <iframe
                  title="JJ Glassworks location on Google Maps"
                  src="https://www.google.com/maps?q=57A%20Loch%20St,%20Meyerton&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-8">
                Request a Quote
              </h2>

              {submitted && (
                <div className={cardClassName({ variant: "accent", padding: "sm", className: "mb-8" })}>
                  <p className="font-semibold text-foreground text-sm">Quote Request Received</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Your email address"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="service"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Service Needed *
                  </label>
                  <Select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project -- dimensions, location, any specific requirements..."
                    className="min-h-[140px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={buttonClassName({
                    variant: "primary",
                    size: "lg",
                    className: "w-full",
                  })}
                >
                  {isSubmitting ? "Sending..." : "Submit Quote Request"}
                </button>
              </form>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>We reply fast -- usually within 24 hrs</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-8">
                Contact Us Directly
              </h2>

              <div className="flex flex-col gap-4 mb-14">
                <a
                  href="https://wa.me/27163621797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName({
                    variant: "accent",
                    padding: "sm",
                    className: "flex items-center gap-4 hover:bg-accent transition-colors",
                  })}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/60 mb-1">
                      WHATSAPP
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      Message Us
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/people/JJ-Glassworks-CC/61575574604887/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="JJ Glassworks Facebook"
                    className={cardClassName({
                      variant: "accent",
                      padding: "sm",
                      className: "flex-1 flex items-center gap-4 hover:bg-accent transition-colors",
                    })}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[hsl(var(--brand-sky))] text-white">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/60 mb-1">
                        FACEBOOK
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        Follow Us
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/jj57glassworkscc/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="JJ Glassworks Instagram"
                    className={cardClassName({
                      variant: "accent",
                      padding: "sm",
                      className: "flex-1 flex items-center gap-4 hover:bg-accent transition-colors",
                    })}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[hsl(var(--brand-sky))] text-white">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/60 mb-1">
                        INSTAGRAM
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        See Our Work
                      </p>
                    </div>
                  </a>
                </div>

                <a
                  href="tel:0163621797"
                  className={cardClassName({
                    variant: "accent",
                    padding: "sm",
                    className: "flex items-center gap-4 hover:bg-accent transition-colors",
                  })}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/60 mb-1">
                      CALL US
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      016 362 1797
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:jjglass01@mweb.co.za"
                  className={cardClassName({
                    variant: "accent",
                    padding: "sm",
                    className: "flex items-center gap-4 hover:bg-accent transition-colors",
                  })}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/60 mb-1">
                      EMAIL
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      jjglass01@mweb.co.za
                    </p>
                  </div>
                </a>
              </div>

              <div className="rounded-3xl bg-[hsl(220_42%_14%)] p-8 md:p-10 shadow-sm ring-1 ring-[hsl(0_0%_100%/0.10)]">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Service Area
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-[hsl(216_30%_70%)] text-sm leading-relaxed">
                      We service residential and commercial clients across
                      Gauteng and surrounding areas.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-white text-sm">
                        Business Hours
                      </p>
                      <p className="text-[hsl(216_30%_65%)] text-sm mt-1">
                        Mon-Fri: 7:00 AM - 5:00 PM
                      </p>
                      <p className="text-[hsl(216_30%_65%)] text-sm">
                        Sat: 8:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </main>
  );
}
