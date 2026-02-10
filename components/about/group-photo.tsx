import Image from "next/image";

export default function GroupPhoto() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative overflow-hidden aspect-[21/9] border border-primary/8">
          <Image
            src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762370968/JJ_Photo_5x-8_qcn49o.webp"
            alt="The JJ Glassworks workshop team"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="mt-5 mb-4 text-sm text-muted-foreground">
          Our workshop team -- hands-on craftsmanship, every project.
        </p>
      </div>
    </section>
  );
}
