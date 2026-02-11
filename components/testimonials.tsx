"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import { cardClassName } from "@/components/ui/card";

const testimonials = [
  {
    name: "Johan van der Merwe",
    company: "Solid Build Construction",
    text: "JJ Glassworks has been our go-to supplier for over 10 years. Reliable, professional, and their aluminium work is always spot-on.",
    rating: 5,
  },
  {
    name: "Sarah Naidoo",
    company: "Homeowner, Centurion",
    text: "They replaced all our windows and sliding doors. The team was punctual, clean, and the finish is excellent.",
    rating: 5,
  },
  {
    name: "Mike Botha",
    company: "MRG Roofing & Building",
    text: "We use JJ Glassworks on all our projects. Their in-house fabrication means quality control and fast turnaround.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className={cardClassName({ variant: "panel", padding: "md" })}>
      <div className="flex gap-0.5 mb-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="text-sm text-muted-foreground leading-relaxed mb-8">
        {`"${testimonial.text}"`}
      </blockquote>
      <div className="border-t border-border pt-5">
        <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground mt-1">{testimonial.company}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-background ui-reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full pr-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-primary/25"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-2xl ring-1 ring-border/60 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-2xl ring-1 ring-border/60 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
