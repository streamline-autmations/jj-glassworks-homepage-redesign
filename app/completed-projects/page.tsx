"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";
import { buttonClassName } from "@/components/ui/button";
import { completedProjects, projectCategories, type ProjectCategory } from "@/lib/completed-projects";

export default function CompletedProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return completedProjects;
    return completedProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#243e95] ui-reveal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4ea6dd] mb-4">
              Portfolio
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
              Completed Projects
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
              A selection of our completed work across residential, commercial, and industrial installations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-background border-b border-border ui-reveal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? buttonClassName({ variant: "primary", size: "sm", shape: "pill" })
                    : buttonClassName({ variant: "outline", size: "sm", shape: "pill" })
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background ui-reveal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/completed-projects/${project.slug}`}
                prefetch={false}
                className="group relative overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border/60 ui-motion ui-transition-shadow md:hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover ui-motion md:group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[hsl(220_50%_8%/0.4)] opacity-0 ui-motion group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_50%_8%/0.7)] via-transparent to-transparent opacity-0 ui-motion group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 p-5 ui-motion opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {project.category}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-4">
                      <h3 className="text-sm sm:text-base font-semibold text-white">
                        {project.title}
                      </h3>
                      <span className="hidden md:inline text-sm font-semibold text-white/85">
                        View project →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </main>
  );
}
