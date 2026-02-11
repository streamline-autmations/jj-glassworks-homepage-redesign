import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="text-center px-6">
        <div className="w-12 h-1 bg-primary mx-auto mb-6" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Error 404</p>
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Page not found
        </p>
        <Link
          href="/"
          prefetch={false}
          className="inline-flex items-center justify-center bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
