import Image from "next/image";
import { cardClassName } from "@/components/ui/card";
import { teamContacts } from "@/lib/team";

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            The People Behind the Work
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Meet the Team
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:duration-500">
          {teamContacts.map((member) => (
            <div
              key={member.name}
              className={cardClassName({ variant: "tile", className: "group" })}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.photo}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_50%_8%/0.88)] via-[hsl(220_50%_8%/0.35)] to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <p className="text-sm sm:text-base font-bold text-white leading-tight">
                    {member.name}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs text-white/70">
                    {member.role}
                  </p>
                  <div className="mt-3 space-y-1">
                    <a
                      href={`mailto:${member.email}`}
                      className="block text-[11px] sm:text-xs text-white/85 hover:text-primary underline decoration-white/30 hover:decoration-primary/50 underline-offset-4"
                    >
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="block text-[11px] sm:text-xs text-white/85 hover:text-primary underline decoration-white/30 hover:decoration-primary/50 underline-offset-4"
                    >
                      {member.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
