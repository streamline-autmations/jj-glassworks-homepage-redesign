import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Request a Free Quote
            </h2>
            <p className="text-sm sm:text-base text-white/85 mt-4 max-w-2xl leading-relaxed">
              Send your measurements or plans and we’ll come back with a clear, professional quote.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white px-8 py-3.5 text-sm font-extrabold tracking-[0.12em] uppercase text-primary transition-colors hover:bg-white/90"
          >
            REQUEST A FREE QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
}
