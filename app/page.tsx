import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/sections/Hero";
import { VisionOrbit } from "@/components/site/sections/VisionOrbit";
import { PartnerStrip } from "@/components/site/sections/PartnerStrip";
import { OurStory } from "@/components/site/sections/OurStory";
import { HowItWorks } from "@/components/site/sections/HowItWorks";
import { WhyHello } from "@/components/site/sections/WhyHello";
import { CommunityPromise } from "@/components/site/sections/CommunityPromise";
import { FoundingNeighbours } from "@/components/site/sections/FoundingNeighbours";
import { FoundingBusinesses } from "@/components/site/sections/FoundingBusinesses";
import { GrowthCounter } from "@/components/landing/GrowthCounter";
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
        <OurStory />
        <HowItWorks />
        <WhyHello />
        <CommunityPromise />
        <GrowthCounter />
        <FoundingNeighbours />
        <FoundingBusinesses />
        <PartnersInvestors />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
