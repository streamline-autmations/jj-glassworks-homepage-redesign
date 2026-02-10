import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";
import AboutHero from "@/components/about/about-hero";
import CompanyOverview from "@/components/about/company-overview";
import GroupPhoto from "@/components/about/group-photo";
import TeamSection from "@/components/about/team-section";
import OfficeContactMap from "@/components/about/office-contact-map";

export const metadata: Metadata = {
  title: "About Us | JJ Glassworks — Glass & Aluminium Specialists",
  description:
    "Family-owned glass and aluminium business since 1988. Meet the team, learn our story, and find our Meyerton workshop.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-14 md:pb-0">
      <Navigation />
      <AboutHero />
      <CompanyOverview />
      <GroupPhoto />
      <TeamSection />
      <OfficeContactMap />
      <Footer />
      <MobileCTA />
    </main>
  );
}
