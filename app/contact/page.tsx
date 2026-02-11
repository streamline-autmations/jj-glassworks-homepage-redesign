"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
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
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-16 bg-[#243e95]">
        <div className="relative w-full h-[55vh] min-h-[420px] max-h-[720px] overflow-hidden">
          <iframe
            title="JJ Glassworks location on Google Maps"
            src="https://www.google.com/maps?q=57A%20Loch%20St,%20Meyerton&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
          />

          <div className="relative h-full pointer-events-none">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end">
              <div className="pb-10 md:pb-12 max-w-3xl">
                <div className="inline-block rounded-3xl bg-white/85 backdrop-blur-md p-6 md:p-7 shadow-[0_18px_60px_rgba(10,30,80,0.18)] ring-1 ring-black/5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#243e95]/80 mb-3">
                    Contact
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#243e95] leading-[1.15]">
                    Contact JJ Glassworks – Get Your Free Quote
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div
                className={cardClassName({
                  variant: "panel",
                  padding: "md",
                  className:
                    "shadow-[0_18px_60px_rgba(10,30,80,0.08)] ring-1 ring-border/60",
                })}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Request a Free Quote
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Fill in the form and we’ll confirm details and send pricing.
                </p>

                {submitted && (
                  <div
                    className={cardClassName({
                      variant: "accent",
                      padding: "sm",
                      className: "mt-8",
                    })}
                  >
                    <p className="font-semibold text-foreground text-sm">Quote Request Received</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        NAME *
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        PHONE *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 016 362 1797"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      EMAIL
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="service"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      SERVICE NEEDED *
                    </label>
                    <Select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                      PROJECT DETAILS *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project (dimensions, location, and any requirements)."
                      className="min-h-[160px]"
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
                  <span>We reply fast — usually within 24 hours.</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Contact Us Directly
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Prefer to chat? Reach us on WhatsApp, phone, or email.
              </p>

              <div className="mt-6 flex flex-col gap-5">
                <a
                  href="https://wa.me/27824595073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName({
                    variant: "panel",
                    padding: "sm",
                    className:
                      "bg-[#243e95] text-white ring-1 ring-white/10 shadow-[0_18px_60px_rgba(10,30,80,0.18)] ui-transition md:hover:-translate-y-0.5 md:hover:shadow-[0_26px_72px_rgba(10,30,80,0.22)]",
                  })}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        WhatsApp
                      </p>
                      <p className="mt-1 text-base sm:text-lg font-semibold text-white">
                        Message Us
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        Quick replies for quotes and questions.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="tel:0163621797"
                  className={cardClassName({
                    variant: "panel",
                    padding: "sm",
                    className:
                      "bg-[#243e95] text-white ring-1 ring-white/10 shadow-[0_18px_60px_rgba(10,30,80,0.18)] ui-transition md:hover:-translate-y-0.5 md:hover:shadow-[0_26px_72px_rgba(10,30,80,0.22)]",
                  })}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        Call
                      </p>
                      <p className="mt-1 text-base sm:text-lg font-semibold text-white">
                        016 362 1797
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        Mon–Fri 07:00–17:00, Sat 08:00–12:00.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:jjglass01@mweb.co.za"
                  className={cardClassName({
                    variant: "panel",
                    padding: "sm",
                    className:
                      "bg-[#243e95] text-white ring-1 ring-white/10 shadow-[0_18px_60px_rgba(10,30,80,0.18)] ui-transition md:hover:-translate-y-0.5 md:hover:shadow-[0_26px_72px_rgba(10,30,80,0.22)]",
                  })}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        Email
                      </p>
                      <p className="mt-1 text-base sm:text-lg font-semibold text-white">
                        jjglass01@mweb.co.za
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        Send drawings, photos, or measurements.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-8 rounded-3xl bg-[hsl(220_42%_14%)] p-8 md:p-10 shadow-[0_18px_60px_rgba(10,30,80,0.16)] ring-1 ring-[hsl(0_0%_100%/0.10)]">
                <h3 className="text-lg font-semibold text-white mb-6">Service Area</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-white mt-0.5" />
                    <div>
                      <p className="text-white text-sm font-semibold">57A Loch St, Meyerton</p>
                      <p className="text-[hsl(216_30%_70%)] text-sm mt-1 leading-relaxed">
                        We service residential and commercial clients across Gauteng and surrounding areas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-white mt-0.5" />
                    <div>
                      <p className="font-semibold text-white text-sm">Business Hours</p>
                      <p className="text-[hsl(216_30%_65%)] text-sm mt-1">Mon–Fri: 07:00 – 17:00</p>
                      <p className="text-[hsl(216_30%_65%)] text-sm">Sat: 08:00 – 12:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <a
        href="https://wa.me/27824595073"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#4ea6dd] text-white shadow-[0_18px_60px_rgba(10,30,80,0.22)] ring-1 ring-[#4ea6dd]/40 ui-motion hover:-translate-y-0.5 hover:shadow-[0_26px_72px_rgba(10,30,80,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="WhatsApp JJ Glassworks"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
