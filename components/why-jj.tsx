import { Ruler, Factory, ShieldCheck, Building2 } from "lucide-react";

const reasons = [
  {
    icon: Ruler,
    title: "Precision-Fit Installations",
    description:
      "Every measurement is taken on-site and manufactured to exact specifications — no gaps, no shortcuts.",
  },
  {
    icon: Factory,
    title: "In-House Fabrication",
    description:
      "Cutting and fabrication handled internally for tighter quality control and faster turnaround times.",
  },
  {
    icon: ShieldCheck,
    title: "Built for Long-Term Durability",
    description:
      "We use industry-approved glass and aluminium systems designed to last in South African conditions.",
  },
  {
    icon: Building2,
    title: "Proven on Large Developments",
    description:
      "Trusted on major residential and commercial projects, from estates to retail environments.",
  },
];

export default function WhyJJ() {
  return (
    <section className="py-20 md:py-24 bg-[#F5FAFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight text-center">
          WHY CHOOSE JJ GLASS &amp; ALUMINIUM
        </h2>

        <div className="mt-12 border border-[#D8ECFF] bg-white">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const tileClasses = [
              "p-7 md:p-9 flex flex-col gap-4",
              "border-[#D8ECFF]",
              index < 2 ? "border-b" : "",
              index % 2 === 0 ? "border-r" : "",
              "lg:border-b-0",
              index < 3 ? "lg:border-r" : "lg:border-r-0",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <div key={reason.title} className={tileClasses}>
                <div className="flex h-11 w-11 items-center justify-center border border-[#D8ECFF] bg-[#F5FAFF] flex-shrink-0">
                  <Icon className="h-5 w-5 text-[#3FA9F5]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#0F172A] tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#162638]">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
