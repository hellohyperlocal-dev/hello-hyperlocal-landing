import { Mail, Store } from "lucide-react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { type TocItem } from "@/components/ui/toc";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

export const metadata = {
  title: "Merchant Support | Hello Hyperlocal",
  description: "Merchant support, onboarding guides, and local business tools for Hello Hyperlocal partners.",
};

const TOC_ITEMS: TocItem[] = [
  { id: "status", text: "Documentation Status", level: 2 },
  { id: "merchant-overview", text: "1. Business Onboarding", level: 2 },
  { id: "merchant-contact", text: "2. Partner Support", level: 2 },
];

export default function MerchantSupportPage() {
  return (
    <LegalLayout
      title="Merchant Support"
      subtitle="Resources, onboarding guides, and profile management documentation for local independent business owners."
      lastUpdated="August 11, 2026"
      tocItems={TOC_ITEMS}
    >
      <section id="status" className="scroll-mt-24 space-y-4">
        <SectionEyebrow label="Coming Soon" tone="light" />
        <h2 className="m-0 text-[20px] font-bold tracking-tight text-hh-onyx">
          Documentation Under Preparation
        </h2>
        <p className="m-0 text-hh-muted">
          The official Merchant Partner Portal and self-serve business documentation are currently being
          built to help neighbourhood stores and service providers connect seamlessly with nearby
          residents.
        </p>
      </section>

      <section id="merchant-overview" className="scroll-mt-24 space-y-3">
        <h2 className="m-0 text-[20px] font-bold tracking-tight text-hh-onyx">1. Business Onboarding</h2>
        <p className="m-0">
          Hello Hyperlocal gives verified local cafes, shops, markets, and independent professionals a
          direct line to neighbours without algorithm paywalls or competing against global corporate
          advertisers.
        </p>
        <p className="m-0">
          Our upcoming merchant guide will cover business profile verification, publishing weekly
          specials, creating resident-exclusive perks, and managing map listings.
        </p>
      </section>

      <section id="merchant-contact" className="scroll-mt-24 space-y-4">
        <h2 className="m-0 text-[20px] font-bold tracking-tight text-hh-onyx">2. Partner Support</h2>
        <p className="m-0">
          Want to pre-register your business or speak directly with our merchant partnership team? Get in
          touch with us:
        </p>

        <div className="space-y-3 rounded-card bg-hh-mint p-6 text-left">
          <div className="flex items-center gap-2.5 text-[16px] font-bold text-hh-hunter">
            <Store aria-hidden className="h-5 w-5" />
            <span>Merchant Partnerships Desk</span>
          </div>
          <p className="m-0 text-[15px] leading-relaxed text-hh-hunter">
            Send your business details, location, and queries directly to our partnership team:
          </p>
          <a
            href="mailto:merchants@hellohyperlocal.co.za"
            className="inline-flex items-center gap-2 rounded-chip text-[15px] font-bold text-hh-hunter underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2"
          >
            <Mail aria-hidden className="h-4 w-4" />
            <span>merchants@hellohyperlocal.co.za</span>
          </a>
        </div>
      </section>
    </LegalLayout>
  );
}
