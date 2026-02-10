import Link from "next/link";
import Image from "next/image";

const developments = [
  {
    title: "Kiepersol Estate",
    image: "/placeholders/development.svg",
  },
  {
    title: "Bergvallei Retirement Estate",
    image: "/placeholders/development.svg",
  },
  {
    title: "Sky City Development",
    image: "/placeholders/development.svg",
  },
  {
    title: "Lions Park Development",
    image: "/placeholders/development.svg",
  },
  {
    title: "Zambezi Development",
    image: "/placeholders/development.svg",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Selected Developments
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed">
            Large-scale residential and commercial projects completed in partnership with leading contractors.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
          {developments.map((project, index) => (
            <Link
              key={index}
              href="/gallery"
              className="group relative aspect-[4/3] overflow-hidden block"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[hsl(220_50%_8%/0.50)] group-hover:bg-[hsl(220_50%_8%/0.35)] transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h4 className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  {project.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
