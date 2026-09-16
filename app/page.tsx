import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/sections/Hero";
import { PartnerStrip } from "@/components/site/sections/PartnerStrip";
import { OurStory } from "@/components/site/sections/OurStory";
import { VisionOrbit } from "@/components/site/sections/VisionOrbit";
import { HowItWorks } from "@/components/site/sections/HowItWorks";
import { ForResidents } from "@/components/site/sections/ForResidents";
import { ForBusinesses } from "@/components/site/sections/ForBusinesses";
import { Progress } from "@/components/site/sections/Progress";
import { FoundingBusinesses } from "@/components/site/sections/FoundingBusinesses";
import { Partners } from "@/components/site/sections/Partners";
import { FaqSection } from "@/components/site/sections/FaqSection";
import { ClosingCta } from "@/components/site/sections/ClosingCta";

// Order follows the client's journey: Discover → Understand → See the app → What's in it for me → Join.
export default function Page() {
  return (
    // relative: SiteNav's IntersectionObserver sentinel must sit at document y=20.
    <div className="relative">
      <SiteNav />
      <main id="main-content">
        {/* Discover */}
        <Hero />
        <PartnerStrip />
        {/* Understand */}
        <OurStory />
        <VisionOrbit />
        {/* See the app */}
        <HowItWorks />
        {/* What's in it for me */}
        <ForResidents />
        <ForBusinesses />
        <Progress />
        <FoundingBusinesses />
        <Partners />
        {/* Join */}
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
