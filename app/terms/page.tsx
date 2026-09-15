import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { type TocItem } from "@/components/ui/toc";

export const metadata = {
  title: "Terms of Service | Hello Hyperlocal",
  description: "Terms of Service and community agreement for Hello Hyperlocal residents and business partners.",
};

const TOC_ITEMS: TocItem[] = [
  { id: "summary", text: "Overview of Terms", level: 2 },
  { id: "acceptance", text: "1. Acceptance of Terms", level: 2 },
  { id: "resident-eligibility", text: "2. Resident Eligibility & Verification", level: 2 },
  { id: "community-conduct", text: "3. Community Conduct Standards", level: 2 },
  { id: "merchant-terms", text: "4. Local Business & Merchant Rules", level: 2 },
  { id: "municipal-disclaimers", text: "5. Disclaimers & Municipal Alerts", level: 2 },
  { id: "governing-law", text: "6. Governing Law (South Africa)", level: 2 },
  { id: "contact-notices", text: "7. Contact & Legal Notices", level: 2 },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The rules, obligations, and community standards governing your use of the Hello Hyperlocal neighbourhood network and mobile platform."
      lastUpdated="August 10, 2026"
      tocItems={TOC_ITEMS}
    >
      {/* Overview Section (Clean typography, no boxes) */}
      <section id="summary" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          Overview of Terms
        </h2>
        <p className="m-0">
          Hello Hyperlocal is built on verified physical residency, neighbour trust, and backing local independent merchants. We require honest participation, civil discourse, and zero commercial spam.
        </p>
      </section>

      {/* Section 1 */}
      <section id="acceptance" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          1. Acceptance of Terms
        </h2>
        <p className="m-0">
          By creating an account, downloading the application, or accessing the website of Hello Hyperlocal (Pty) Ltd (&ldquo;Hello Hyperlocal&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must not use our services.
        </p>
      </section>

      {/* Section 2 */}
      <section id="resident-eligibility" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          2. Resident Eligibility &amp; Verification
        </h2>
        <p className="m-0">
          To unlock resident privileges in a specific suburb (such as posting on the localized community feed, voting on ward initiatives, or claiming merchant perk passes), you must:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 m-0 text-[14px]">
          <li>Be at least 18 years of age.</li>
          <li>Reside physically within the geographic boundaries of the selected suburb or ward.</li>
          <li>Submit acceptable proof of physical residency upon registration.</li>
          <li>Maintain only one active resident account associated with your verified primary address.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="community-conduct" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          3. Community Conduct &amp; Safety Standards
        </h2>
        <p className="m-0">
          Our network exists to celebrate neighbourhood life and facilitate civic action. You agree that you will NOT:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 m-0 text-[14px]">
          <li>Post false, defamatory, harassing, discriminatory, or hateful content targeting neighbours or businesses.</li>
          <li>Broadcast private personal details (doxxing) or CCTV footage of individuals without consent.</li>
          <li>Spam the community feed with multi-level marketing, unauthorized commercial broadcasts, or irrelevant solicitations.</li>
          <li>Impersonate another person, suburb representative, security provider, or municipal official.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section id="merchant-terms" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          4. Local Business &amp; Merchant Rules
        </h2>
        <p className="m-0">
          Independent merchants registered on Hello Hyperlocal agree to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 m-0 text-[14px]">
          <li>Provide accurate business profiles, operational hours, and storefront locations.</li>
          <li>Honor published resident-exclusive discounts and promotional perk passes presented in the app.</li>
          <li>Comply with all South African consumer protection legislation (Consumer Protection Act 68 of 2008).</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="municipal-disclaimers" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          5. Disclaimers &amp; Municipal Alerts
        </h2>
        <p className="m-0">
          While Hello Hyperlocal strives to provide accurate, real-time load-shedding alerts, municipal notices, and emergency updates, these are compiled from community inputs and public utility disclosures. We do not guarantee continuous utility supply or absolute accuracy of third-party public utility schedules.
        </p>
      </section>

      {/* Section 6 */}
      <section id="governing-law" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          6. Governing Law (South Africa)
        </h2>
        <p className="m-0">
          These Terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of South Africa.
        </p>
      </section>

      {/* Section 7 */}
      <section id="contact-notices" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          7. Contact &amp; Legal Notices
        </h2>
        <div className="space-y-1 text-[13.5px]">
          <p className="font-bold text-[#0e0f0c] dark:text-[#FCFAF7] m-0">Hello Hyperlocal Legal Team</p>
          <p className="text-[#454745] dark:text-[#99A893] m-0">Email: <a href="mailto:legal@hellohyperlocal.co.za" className="text-[#1C472A] dark:text-[#7ED957] font-semibold underline">legal@hellohyperlocal.co.za</a></p>
          <p className="text-[12.5px] text-[#868685] m-0 pt-1">Johannesburg, Gauteng, South Africa</p>
        </div>
      </section>
    </LegalLayout>
  );
}
