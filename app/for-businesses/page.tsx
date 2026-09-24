import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { BenefitTiles } from "@/components/site/ui/BenefitTiles";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { BUSINESS_BENEFITS, FOUNDING_BUSINESS_BENEFITS } from "@/lib/join-options";

export const metadata = {
  title: "For Businesses | Hello Linden",
  description: "Connect directly with local customers in your suburb. Hello Linden gives local businesses a trusted platform for discovery, promotions, events, and community stories.",
};

export default function ForBusinessesPage() {
  return (
    <div className="relative bg-white">
      <SiteNav />
      <main id="main-content" className="pt-[130px] pb-[100px]">
        <div className="site-container flex flex-col gap-12">
          {/* Back Navigation */}
          <Link
            href="/#businesses"
            className="inline-flex items-center gap-2 text-label-14 font-medium text-hh-muted hover:text-hh-onyx transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          {/* Hero Header */}
          <div className="flex max-w-[800px] flex-col items-start gap-4">
            <SectionEyebrow label="For Businesses" tone="light" />
            <h1 className="m-0 type-h1 text-hh-onyx">Not Just Another Directory</h1>
            <p className="m-0 type-body-lg text-hh-muted">
              Hello Linden creates a closer, direct connection to the people living around your business.
              Share your story, promote specials, host local events, and build customer loyalty right where you operate.
            </p>
          </div>

          {/* Full 9 Benefit Tiles */}
          <BenefitTiles items={BUSINESS_BENEFITS} tile="panel" />

          {/* Founding Business Card */}
          <div className="flex w-full flex-col items-start rounded-card bg-[#e2f6d5] p-8 sm:p-12 text-[#1C472A] mt-6">
            <div className="flex max-w-[700px] flex-col items-start gap-6">
              <h2 className="m-0 type-h2 text-[#1C472A]">Become a Founding Business</h2>
              <p className="m-0 type-body-lg text-[#1C472A]/90">
                Identify your business early to help shape Hello Linden before public launch and receive priority onboarding and launch visibility.
              </p>
              
              <ul className="m-0 flex flex-col gap-3 p-0 list-none text-body">
                {FOUNDING_BUSINESS_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="flex h-2 w-2 rounded-full bg-[#1C472A]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <CtaLink href="/join?type=business" surface="light" className="mt-2 text-[18px]">
                Register Your Business
              </CtaLink>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
