import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "DOORS",
    image: "/placeholders/service.svg",
  },
  {
    title: "WINDOWS",
    image: "/placeholders/service.svg",
  },
  {
    title: "SHOWERS",
    image: "/placeholders/service.svg",
  },
  {
    title: "MIRRORS",
    image: "/placeholders/service.svg",
  },
  {
    title: "SHOPFRONTS",
    image: "/placeholders/service.svg",
  },
  {
    title: "BALUSTRADES",
    image: "/placeholders/service.svg",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight text-center mb-14">
          OUR SERVICES
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="group border border-border bg-background block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="px-6 py-6 text-center">
                <h3 className="text-sm font-extrabold tracking-[0.14em] text-foreground">
                  {service.title}
                </h3>
                <span className="inline-flex items-center justify-center bg-primary px-7 py-3 text-xs font-bold text-primary-foreground mt-5">
                  VIEW MORE
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
