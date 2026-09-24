import { PRIMARY_BUSINESS_BENEFITS } from "@/lib/join-options";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { BenefitTiles } from "@/components/site/ui/BenefitTiles";

// Brief §6, For Businesses (streamlined 4 highlights on landing page).
export function ForBusinesses() {
  return (
    <section id="businesses" className="relative bg-white py-[80px] split:py-[110px]">
      <span id="business" aria-hidden="true" className="absolute top-0 block h-0" />
      <div className="site-container flex flex-col items-start gap-[40px]">
        <div className="flex max-w-[720px] flex-col items-start gap-4">
          <SectionEyebrow label="For Businesses" tone="light" />
          <h2 className="m-0 type-h2 text-hh-onyx">Not just another directory</h2>
          <p className="m-0 type-body-lg text-hh-muted">
            Hello Linden helps local businesses become more visible within their own community,
            with a closer connection to the people living around them.
          </p>
        </div>

        <BenefitTiles items={PRIMARY_BUSINESS_BENEFITS} tile="panel" />

        <div className="flex flex-wrap items-center gap-6 pt-2">
          <CtaLink href="/join?type=business" surface="light">
            Register Your Business
          </CtaLink>
          <CtaLink href="/for-businesses" variant="text" surface="light">
            Explore All Business Benefits
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
