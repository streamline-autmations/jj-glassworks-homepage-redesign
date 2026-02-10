"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
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

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Contact
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-5">
              Get a Quote
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              Tell us about your project. We&apos;ll respond quickly with a
              clear, no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-8">
                Request a Quote
              </h2>

              {submitted && (
                <div className="mb-8 p-5 bg-secondary border-l-2 border-primary">
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
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="flex h-12 w-full border border-primary/15 bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      Phone *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Your phone number"
                      className="flex h-12 w-full border border-primary/15 bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Your email address"
                    className="flex h-12 w-full border border-primary/15 bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="service"
                    className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="flex h-12 w-full border border-primary/15 bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project -- dimensions, location, any specific requirements..."
                    className="flex w-full border border-primary/15 bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[140px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
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
                  href="https://wa.me/27000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-secondary border-l-2 border-primary hover:bg-accent transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10">
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

                <a
                  href="tel:+27000000000"
                  className="flex items-center gap-4 p-5 bg-secondary border-l-2 border-primary hover:bg-accent transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/60 mb-1">
                      CALL US
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      +27 (0) 00 000 0000
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@jjglassworks.co.za"
                  className="flex items-center gap-4 p-5 bg-secondary border-l-2 border-primary hover:bg-accent transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/60 mb-1">
                      EMAIL
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      info@jjglassworks.co.za
                    </p>
                  </div>
                </a>
              </div>

              <div className="bg-[hsl(220_42%_14%)] p-8 md:p-10">
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
