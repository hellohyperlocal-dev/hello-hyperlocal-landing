import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/sections/Hero";
import { VisionOrbit } from "@/components/site/sections/VisionOrbit";
import { PartnerStrip } from "@/components/site/sections/PartnerStrip";
import { OurStory } from "@/components/site/sections/OurStory";
import { HowItWorks } from "@/components/site/sections/HowItWorks";
import { WhyHello } from "@/components/site/sections/WhyHello";
import { CommunityPromise } from "@/components/site/sections/CommunityPromise";
import { GetInvolved } from "@/components/site/sections/GetInvolved";
import { Progress } from "@/components/site/sections/Progress";
import { FoundingNeighbours } from "@/components/site/sections/FoundingNeighbours";
import { FoundingBusinesses } from "@/components/site/sections/FoundingBusinesses";
import { Partners } from "@/components/site/sections/Partners";
import { PlatformPillars } from "@/components/site/sections/PlatformPillars";
import { FaqSection } from "@/components/site/sections/FaqSection";
import { ClosingCta } from "@/components/site/sections/ClosingCta";

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
        <GetInvolved />
        <Progress />
        <FoundingNeighbours />
        <FoundingBusinesses />
        <Partners />
        <PlatformPillars />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
