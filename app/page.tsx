import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import AboutSnapshot from "@/components/about-snapshot";
import WhyJJ from "@/components/why-jj";
import ClientsCredibility from "@/components/clients-credibility";
import GalleryPreview from "@/components/gallery-preview";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSnapshot />
      <ServicesGrid />
      <WhyJJ />
      <ClientsCredibility />
      <GalleryPreview />
      <CTASection />
      <Footer />
      <MobileCTA />
    </main>
  );
}
