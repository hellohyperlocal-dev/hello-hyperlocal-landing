import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/sections/Hero";
import { GetStarted } from "@/components/site/sections/GetStarted";
import { PromoVideoSection } from "@/components/site/sections/PromoVideoSection";
import { IntroVideoSection } from "@/components/site/sections/IntroVideoSection";
import { PartnerStrip } from "@/components/site/sections/PartnerStrip";
import { OurStory } from "@/components/site/sections/OurStory";
import { VisionTeaser } from "@/components/site/sections/VisionTeaser";
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
        <GetStarted />
        <PromoVideoSection />
        {/* Understand */}
        <OurStory />
        <IntroVideoSection />
        <VisionTeaser />
        {/* See the app */}
        <HowItWorks />
        {/* What's in it for me */}
        <ForResidents />
        <Progress />
        <ForBusinesses />
        <FoundingBusinesses />
        <Partners />
        <PartnerStrip />
        {/* Join */}
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
