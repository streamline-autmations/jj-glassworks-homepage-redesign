"use client";

import { useMemo, useState } from "react";

import { buttonClassName } from "@/components/ui/button";

export default function CTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Doors");

  const whatsappUrl = useMemo(() => {
    const lines = [
      "Hi JJ Glassworks, I’d like a quote.",
      name.trim() ? `Name: ${name.trim()}` : null,
      email.trim() ? `Email: ${email.trim()}` : null,
      projectType ? `Project type: ${projectType}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/27824595073?text=${text}`;
  }, [email, name, projectType]);

  return (
    <section className="bg-primary py-16 md:py-20 ui-reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Request a Free Quote
            </h2>
            <p className="text-sm sm:text-base text-white/85 mt-4 max-w-2xl leading-relaxed">
              Send your details and project type — we’ll reply on WhatsApp with a clear, professional
              quote.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-white/60 font-medium tracking-wide">
              <span>Serving Gauteng</span>
              <span className="hidden sm:inline text-white/45">|</span>
              <span>Fast turnaround</span>
              <span className="hidden sm:inline text-white/45">|</span>
              <span>Since 1988</span>
            </div>
          </div>

          <form
            className="rounded-3xl bg-white/10 ring-1 ring-[hsl(0_0%_100%/0.14)] p-6 sm:p-7 shadow-[0_18px_60px_rgba(0,0,0,0.20)] backdrop-blur-sm"
            onSubmit={(event) => {
              event.preventDefault();
              window.open(whatsappUrl, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl bg-white text-foreground placeholder:text-muted-foreground/80 px-4 py-3 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-sky))]"
                  autoComplete="name"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-2xl bg-white text-foreground placeholder:text-muted-foreground/80 px-4 py-3 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-sky))]"
                  autoComplete="email"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Project type
                </label>
                <select
                  value={projectType}
                  onChange={(event) => setProjectType(event.target.value)}
                  className="mt-2 w-full rounded-2xl bg-white text-foreground px-4 py-3 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-sky))]"
                >
                  <option>Doors</option>
                  <option>Windows</option>
                  <option>Showers</option>
                  <option>Mirrors</option>
                  <option>Shopfronts</option>
                  <option>Balustrades</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                className={buttonClassName({
                  variant: "white",
                  size: "lg",
                  className: "w-full justify-center",
                })}
              >
                Send via WhatsApp
              </button>

              <a
                href="/contact"
                className={buttonClassName({
                  variant: "inverseOutline",
                  size: "lg",
                  className: "w-full justify-center",
                })}
              >
                Contact details
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
