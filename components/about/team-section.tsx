import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const team = [
  {
    name: "Chris Van Zyl",
    role: "Director",
    phone: "0827252559",
    email: "chrisvanzyl@jjglass.co.za",
    photo:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770635054/Chris_xqc8rn.jpg",
  },
  {
    name: "Kenny Van Zyl",
    role: "Director",
    phone: "0824595073",
    email: "jjglass@mweb.co.za",
    photo:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770635055/Kenny_vvyxbh.jpg",
  },
  {
    name: "Jacques Viljoen",
    role: "Operations",
    phone: "0661291611",
    email: "jacquesv@jjglass.co.za",
    photo:
      "https://res.cloudinary.com/dnlgohkcc/image/upload/v1770635058/Vaak_vdrk8v.jpg",
  },
];

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name}>
              <div className="relative aspect-[3/4] overflow-hidden mb-5 border border-primary/8">
                <Image
                  src={member.photo}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {member.role}
              </p>
              <div className="flex gap-3">
                <a
                  href={`tel:${member.phone}`}
                  className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-primary/5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
