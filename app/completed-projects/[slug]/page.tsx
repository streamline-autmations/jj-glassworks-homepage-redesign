import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";
import ProjectTemplate from "@/components/completed-projects/project-template";
import { buttonClassName } from "@/components/ui/button";
import { cardClassName } from "@/components/ui/card";
import { getCompletedProjectBySlug } from "@/lib/completed-projects";

export default async function CompletedProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCompletedProjectBySlug(slug);

  if (!project) notFound();

  if (project.slug === "residential") {
    return (
      <main className="min-h-screen">
        <Navigation />

        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#243e95] ui-reveal">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4ea6dd] mb-4">
                Completed Projects
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
                {project.title}
              </h1>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background ui-reveal">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:gap-10">
              {project.beforeAfterSections.map((section, index) => (
                <div
                  key={section.title}
                  className={cardClassName({ variant: "panel", padding: "sm" })}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-lg sm:text-xl font-bold text-foreground">
                      {section.title}
                    </h2>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Before / After
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 max-w-3xl leading-relaxed">
                    {section.note}
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm ring-1 ring-border/60">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={section.beforeImage}
                          alt={`${section.title} before`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                      <div className="absolute left-4 top-4 rounded-full bg-[hsl(220_50%_8%/0.55)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                        Before
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm ring-1 ring-border/60">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={section.afterImage}
                          alt={`${section.title} after`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                      <div className="absolute left-4 top-4 rounded-full bg-primary/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20 bg-background ui-reveal">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Residential Work
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Showers, Doors, Mirrors, and More
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {project.galleryImages.map((src) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-3xl bg-secondary shadow-sm ring-1 ring-border/60"
                >
                  <Image
                    src={src}
                    alt="Residential installation"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 50vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary border-t border-border ui-reveal">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Want this look in your home?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed">
                Send us a photo or measurements and we’ll advise on the best solution.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className={buttonClassName({ variant: "primary", size: "lg" })}
                >
                  Get a Quote
                </Link>
                <a
                  href="https://wa.me/27163621797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName({
                    variant: "outline",
                    size: "lg",
                    className: "gap-2",
                  })}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <MobileCTA />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ProjectTemplate
        title={project.title}
        description={project.description}
        quickFacts={project.quickFacts}
        images={project.images.map((src, index) => ({
          src,
          alt: `${project.title} image ${index + 1}`,
        }))}
      />
      <Footer />
      <MobileCTA />
    </main>
  );
}
