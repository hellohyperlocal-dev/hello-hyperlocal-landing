import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ClosingCta } from "@/components/site/sections/ClosingCta";
import { AboutHero } from "@/components/about/AboutHero";
import { WhereItBegan } from "@/components/about/WhereItBegan";
import { MissedMoments } from "@/components/about/MissedMoments";
import { CommunityAlreadyHere } from "@/components/about/CommunityAlreadyHere";
import { FounderQuote } from "@/components/about/FounderQuote";
import { HelloLindenPurpose } from "@/components/about/HelloLindenPurpose";

export const metadata = {
  title: "Our Story | Hello Linden",
  description:
    "How Hello Hyperlocal started in Linden: a resident and local business owner's idea to bring an already-strong community together.",
};

export default function AboutPage() {
  return (
    // relative: SiteNav's IntersectionObserver sentinel must sit at document y=20.
    <div className="relative">
      <SiteNav />
      <main id="main-content">
        <AboutHero />
        <FounderQuote />
        <WhereItBegan />
        <MissedMoments />
        <CommunityAlreadyHere />
        <HelloLindenPurpose />
        <ClosingCta
          flushTop
          heading="Rediscover your neighbourhood. Love Where You Live."
          body="Because sometimes the best things aren’t far away. They’re just around the corner."
          primary={{ href: "/join", label: "Join Hello Linden" }}
          secondary={{ href: "/join?type=business", label: "Register Your Business" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
