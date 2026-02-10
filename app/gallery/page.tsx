"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";

const projects = [
  { title: "Retail Shopfront", category: "Commercial", description: "Complete aluminium shopfront system" },
  { title: "Aluminium Windows", category: "Residential", description: "Energy-efficient window installation" },
  { title: "Frameless Shower", category: "Residential", description: "Modern bathroom glass enclosure" },
  { title: "Glass Balustrade", category: "Commercial", description: "Safety glass barrier system" },
  { title: "Custom Mirror", category: "Residential", description: "Precision cut and installed" },
  { title: "Industrial Glazing", category: "Industrial", description: "Large-scale glazing project" },
  { title: "Sliding Doors", category: "Residential", description: "Aluminium sliding door installation" },
  { title: "Office Frontage", category: "Commercial", description: "Professional office entrance" },
  { title: "Shower Enclosure", category: "Residential", description: "Semi-frameless shower screen" },
];

const categories = ["All", "Residential", "Commercial", "Industrial"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen pb-14 md:pb-0">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Portfolio
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-5">
              Our Projects
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              Browse our portfolio of completed glass and aluminium
              installations. Every project reflects our commitment to quality
              and precision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 bg-background border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary/15 bg-background text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden bg-[hsl(220_42%_14%)] flex items-center justify-center"
              >
                <div className="text-center px-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary/50 mb-2">
                    {project.category}
                  </p>
                  <h4 className="text-sm md:text-base font-semibold text-white/70 group-hover:text-white transition-colors mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-white/30 hidden md:block">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-1 bg-primary mx-auto mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
              Like What You See?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
              {"Get in touch to discuss your project. We'd love to add your home or business to our portfolio."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </main>
  );
}
