import Link from "next/link";
import Image from "next/image";

type Service = {
  title: string;
  image: string;
};

const services = [
  {
    title: "DOORS",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725348/DOORS_jgtpmv.jpg",
  },
  {
    title: "WINDOWS",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725361/WINDOWS_dlvucn.jpg",
  },
  {
    title: "SHOWERS",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725362/Showers_kxlaod.jpg",
  },
  {
    title: "MIRRORS",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725350/MIRRORS_bmyg6e.jpg",
  },
  {
    title: "SHOPFRONTS",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725355/SHOPFRONTS_ysq4ma.jpg",
  },
  {
    title: "BALUSTRADES",
    image:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770725349/Balustrades_tqomgo.jpg",
  },
];

function ServiceTile({ service }: { service: Service }) {
  return (
    <Link
      href="/services"
      className="group block overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border/60 ui-motion ui-transition-shadow hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 44vw, 80vw"
          className="object-cover ui-motion group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 ui-transition group-hover:opacity-100" />
        <div className="absolute inset-3 border border-white/40 opacity-0 ui-transition group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 translate-y-3 ui-motion group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-xs font-extrabold tracking-[0.18em] text-white">
            {service.title}
          </p>
        </div>
      </div>
      <div className="px-6 py-6 text-center">
        <h3 className="text-sm font-extrabold tracking-[0.14em] text-foreground">
          {service.title}
        </h3>
        <span className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-xs font-extrabold tracking-[0.12em] uppercase text-primary-foreground ui-transition-colors">
          VIEW MORE
        </span>
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--brand-deep))] border-y border-white/10 ui-reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-center mb-12">
          OUR SERVICES
        </h2>

        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service) => (
              <div
                key={service.title}
                className="snap-start shrink-0 w-[78%] sm:w-[46%]"
              >
                <ServiceTile service={service} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceTile key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
