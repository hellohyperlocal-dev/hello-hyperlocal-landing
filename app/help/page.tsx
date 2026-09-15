import { Mail, ShieldCheck } from "lucide-react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { type TocItem } from "@/components/ui/toc";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

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
      <section id="status" className="scroll-mt-24 space-y-4">
        <SectionEyebrow label="Coming Soon" tone="light" />
        <h2 className="m-0 text-[20px] font-bold tracking-tight text-hh-onyx">
          Documentation Under Preparation
        </h2>
        <p className="m-0 text-hh-muted">
          Our comprehensive Help Centre and interactive Verification Knowledge Base are currently being
          finalised ahead of our official suburb rollouts.
        </p>
      </section>

      <section id="verification-overview" className="scroll-mt-24 space-y-3">
        <h2 className="m-0 text-[20px] font-bold tracking-tight text-hh-onyx">1. Residency Verification</h2>
        <p className="m-0">
          Hello Hyperlocal requires every resident profile to be tied to a verified residential address
          within your active suburb boundary. This ensures that discussions, safety alerts, and local
          votes remain authentic and free from anonymous spam.
        </p>
        <p className="m-0">
          Detailed walkthroughs for utility bill verification, GPS residence confirmation, and ward
          committee onboarding will be published here shortly.
        </p>
      </section>

      <section id="contact-support" className="scroll-mt-24 space-y-4">
        <h2 className="m-0 text-[20px] font-bold tracking-tight text-hh-onyx">2. Resident Support</h2>
        <p className="m-0">
          Have an urgent verification inquiry, suburb boundary question, or account issue? Our local
          support team is ready to assist you:
        </p>

        <div className="space-y-3 rounded-card bg-hh-mint p-6 text-left">
          <div className="flex items-center gap-2.5 text-[16px] font-bold text-hh-hunter">
            <ShieldCheck aria-hidden className="h-5 w-5" />
            <span>Direct Support Channel</span>
          </div>
          <p className="m-0 text-[15px] leading-relaxed text-hh-hunter">
            Email our resident support team with your suburb name and inquiry at:
          </p>
          <a
            href="mailto:support@hellohyperlocal.co.za"
            className="inline-flex items-center gap-2 rounded-chip text-[15px] font-bold text-hh-hunter underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2"
          >
            <Mail aria-hidden className="h-4 w-4" />
            <span>support@hellohyperlocal.co.za</span>
          </a>
        </div>
      </section>
    </LegalLayout>
  );
}
