import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/sections/Hero";
import { PartnerStrip } from "@/components/landing/PartnerStrip";
import { GrowthCounter } from "@/components/landing/GrowthCounter";
import { OurStory } from "@/components/landing/OurStory";
import { VisionOrbit } from "@/components/site/sections/VisionOrbit";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ForResidents } from "@/components/landing/ForResidents";
import { FoundingNeighbours } from "@/components/landing/FoundingNeighbours";
import { ForBusiness } from "@/components/landing/ForBusiness";
import { FoundingBusinesses } from "@/components/landing/FoundingBusinesses";
import { PartnersInvestors } from "@/components/landing/PartnersInvestors";
import { FaqSection } from "@/components/landing/FaqSection";
import { ClosingCta } from "@/components/landing/ClosingCta";

export default function Page() {
  return (
    // relative: SiteNav's IntersectionObserver sentinel must sit at document y=20.
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />
      <main id="main-content" className="flex-1">
        <Hero />
        <VisionOrbit />
        <PartnerStrip />
        <GrowthCounter />
        <OurStory />
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
