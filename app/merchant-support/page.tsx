import React from "react";
import Link from "next/link";
import { Store, Mail, Clock, ArrowRight } from "lucide-react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { type TocItem } from "@/components/ui/toc";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

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
      {/* Section: Status */}
      <section id="status" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-2">
          <EyebrowPill icon={Clock} variant="standard">
            Coming Soon
          </EyebrowPill>
        </div>
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          Documentation Under Preparation
        </h2>
        <p className="m-0 text-brand-muted dark:text-[#99A893]">
          The official Merchant Partner Portal and self-serve business documentation are currently being built to help neighbourhood stores and service providers connect seamlessly with nearby residents.
        </p>
      </section>

      {/* Section 1: Business Onboarding */}
      <section id="merchant-overview" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          1. Business Onboarding
        </h2>
        <p className="m-0">
          Hello Hyperlocal gives verified local cafes, shops, markets, and independent professionals a direct line to neighbours without algorithm paywalls or competing against global corporate advertisers.
        </p>
        <p className="m-0">
          Our upcoming merchant guide will cover business profile verification, publishing weekly specials, creating resident-exclusive perks, and managing map listings.
        </p>
      </section>

      {/* Section 2: Partner Support */}
      <section id="merchant-contact" className="scroll-mt-24 space-y-4">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          2. Partner Support
        </h2>
        <p className="m-0">
          Want to pre-register your business or speak directly with our merchant partnership team? Get in touch with us:
        </p>

        <div className="rounded-[20px] bg-[#e2f6d5] dark:bg-[#1C472A] p-6 text-left space-y-3">
          <div className="flex items-center gap-2.5 text-[#1C472A] dark:text-[#7ED957] font-semibold text-[15px]">
            <Store className="h-5 w-5" />
            <span>Merchant Partnerships Desk</span>
          </div>
          <p className="text-[14px] leading-relaxed text-[#1C472A]/90 dark:text-white/90 m-0">
            Send your business details, location, and queries directly to our partnership team:
          </p>
          <a
            href="mailto:merchants@hellohyperlocal.co.za"
            className="inline-flex items-center gap-2 font-bold text-[#1C472A] dark:text-[#7ED957] hover:underline text-[14px]"
          >
            <Mail className="h-4 w-4" />
            <span>merchants@hellohyperlocal.co.za</span>
          </a>
        </div>
      </section>
    </LegalLayout>
  );
}
