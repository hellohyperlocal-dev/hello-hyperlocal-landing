import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Clock, ArrowRight } from "lucide-react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { type TocItem } from "@/components/ui/toc";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

export const metadata = {
  title: "Help & Verification | Hello Hyperlocal",
  description: "Help centre and resident verification guide for Hello Hyperlocal community members.",
};

const TOC_ITEMS: TocItem[] = [
  { id: "status", text: "Documentation Status", level: 2 },
  { id: "verification-overview", text: "1. Residency Verification", level: 2 },
  { id: "contact-support", text: "2. Resident Support", level: 2 },
];

export default function HelpPage() {
  return (
    <LegalLayout
      title="Help & Verification"
      subtitle="Step-by-step guides, residency verification protocols, and neighbourhood safety information."
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
          Our comprehensive Help Centre and interactive Verification Knowledge Base are currently being finalised ahead of our official suburb rollouts.
        </p>
      </section>

      {/* Section 1: Verification Overview */}
      <section id="verification-overview" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          1. Residency Verification
        </h2>
        <p className="m-0">
          Hello Hyperlocal requires every resident profile to be tied to a verified residential address within your active suburb boundary. This ensures that discussions, safety alerts, and local votes remain authentic and free from anonymous spam.
        </p>
        <p className="m-0">
          Detailed walkthroughs for utility bill verification, GPS residence confirmation, and ward committee onboarding will be published here shortly.
        </p>
      </section>

      {/* Section 2: Contact Support */}
      <section id="contact-support" className="scroll-mt-24 space-y-4">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          2. Resident Support
        </h2>
        <p className="m-0">
          Have an urgent verification inquiry, suburb boundary question, or account issue? Our local support team is ready to assist you:
        </p>

        <div className="rounded-[20px] bg-[#e2f6d5] dark:bg-[#1C472A] p-6 text-left space-y-3">
          <div className="flex items-center gap-2.5 text-[#1C472A] dark:text-[#7ED957] font-semibold text-[15px]">
            <ShieldCheck className="h-5 w-5" />
            <span>Direct Support Channel</span>
          </div>
          <p className="text-[14px] leading-relaxed text-[#1C472A]/90 dark:text-white/90 m-0">
            Email our resident support team with your suburb name and inquiry at:
          </p>
          <a
            href="mailto:support@hellohyperlocal.co.za"
            className="inline-flex items-center gap-2 font-bold text-[#1C472A] dark:text-[#7ED957] hover:underline text-[14px]"
          >
            <Mail className="h-4 w-4" />
            <span>support@hellohyperlocal.co.za</span>
          </a>
        </div>
      </section>
    </LegalLayout>
  );
}
