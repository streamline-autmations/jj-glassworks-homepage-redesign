import Link from "next/link";
import Image from "next/image";

const developments = [
  {
    title: "Kiepersol",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770715648/imgi_11_342443b7a28b3548c90ec838ef528f54_upscayl_4x_c9qica.jpg",
  },
  {
    title: "IS MOTORS",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716577/imgi_33_24d77577fe36f8e1a58b9a92278d3ae2_upscayl_4x_zxx6u3.jpg",
  },
  {
    title: "Lions Pride",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716760/imgi_30_a332d58ef863ecc1b53a78e53d167caa_upscayl_8x_hmqrlk.jpg",
  },
  {
    title: "SHIELD",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716875/imgi_17_2564cdef103459a5f155dc82bb349b2f_upscayl_8x_zdtq1x.jpg",
  },
  {
    title: "Solid Build",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770716918/imgi_23_af5b59174e10a8d12b9061431ea4ce26_upscayl_8x_smr2dy.jpg",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-border">
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
                sizes="(min-width: 1024px) 33vw, 50vw"
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
