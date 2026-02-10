import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import AboutSnapshot from "@/components/about-snapshot";
import WhyJJ from "@/components/why-jj";
import ClientsCredibility from "@/components/clients-credibility";
import GalleryPreview from "@/components/gallery-preview";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ClientsCredibility />
      <AboutSnapshot />
      <ServicesGrid />
      <WhyJJ />
      <GalleryPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
