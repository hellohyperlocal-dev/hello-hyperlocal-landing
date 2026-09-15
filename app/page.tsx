import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { PartnerStrip } from "@/components/landing/PartnerStrip";
import { GrowthCounter } from "@/components/landing/GrowthCounter";
import { OurStory } from "@/components/landing/OurStory";
import { Vision } from "@/components/landing/Vision";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ForResidents } from "@/components/landing/ForResidents";
import { FoundingNeighbours } from "@/components/landing/FoundingNeighbours";
import { ForBusiness } from "@/components/landing/ForBusiness";
import { FoundingBusinesses } from "@/components/landing/FoundingBusinesses";
import { PartnersInvestors } from "@/components/landing/PartnersInvestors";
import { FaqSection } from "@/components/landing/FaqSection";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { SiteFooter } from "@/components/landing/SiteFooter";

// Order follows the brief's journey: discover, understand, see the app,
// what's in it for me, join.
export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <PartnerStrip />
        <GrowthCounter />
        <OurStory />
        <Vision />
        <HowItWorks />
        <ForResidents />
        <FoundingNeighbours />
        <ForBusiness />
        <FoundingBusinesses />
        <PartnersInvestors />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
