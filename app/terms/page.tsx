import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { type TocItem } from "@/components/ui/toc";

export const metadata = {
  title: "Terms of Service | Hello Hyperlocal",
  description: "Terms of Service, moderation authority, and platform agreements for Hello Hyperlocal residents and business partners.",
};

const TOC_ITEMS: TocItem[] = [
  { id: "summary", text: "Overview of Terms", level: 2 },
  { id: "acceptance", text: "1. Acceptance of Terms & Guidelines", level: 2 },
  { id: "resident-eligibility", text: "2. Resident Eligibility & Verification", level: 2 },
  { id: "limitation-liability", text: "3. Platform Purpose & Limitation of Liability", level: 2 },
  { id: "moderation-authority", text: "4. Moderation Authority & Administration", level: 2 },
  { id: "store-compliance", text: "5. Mobile App Store Compliance & UGC Safeguards", level: 2 },
  { id: "merchant-terms", text: "6. Local Business & Merchant Rules", level: 2 },
  { id: "in-app-purchases", text: "7. In-App Purchases & Subscriptions", level: 2 },
  { id: "municipal-disclaimers", text: "8. Disclaimers & Municipal Alerts", level: 2 },
  { id: "governing-law", text: "9. Governing Law (South Africa)", level: 2 },
  { id: "contact-notices", text: "10. Contact & Legal Notices", level: 2 },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The contractual rules, obligations, and moderation standards governing your use of the Hello Hyperlocal neighbourhood network and mobile platform."
      lastUpdated="October 6, 2026"
      tocItems={TOC_ITEMS}
    >
      {/* Overview Section */}
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
          1. Acceptance of Terms &amp; Community Guidelines
        </h2>
        <p className="m-0">
          By downloading, accessing, or using Hello Hyperlocal (Pty) Ltd (&ldquo;Hello Hyperlocal&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) via web or mobile application, you agree to be bound by these Terms of Service, our Privacy Policy, and our Community Guidelines. If you do not agree to these terms, you must not use our services.
        </p>
        <p className="m-0">
          Our Community Guidelines form an integral part of this contract. Any violation of the Community Guidelines constitutes a direct breach of these Terms of Service.
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
      <section id="limitation-liability" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          3. Platform Purpose &amp; Limitation of Liability
        </h2>
        <p className="m-0">
          Hello Hyperlocal operates exclusively as an introductory discovery and community utility to connect local residents, merchants, and civic initiatives.
        </p>
        <p className="m-0">
          Hello Hyperlocal is not a party to, nor does it guarantee, endorse, or assume liability for, any commercial transactions, private marketplace trades, work contracts, or employment arrangements entered into between residents and listed merchants or third parties. All dealings, agreements, and warranties remain solely between the respective parties.
        </p>
      </section>

      {/* Section 4 */}
      <section id="moderation-authority" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          4. Moderation Authority &amp; Administration
        </h2>
        <p className="m-0">
          Our administrative and community moderation team retains unconditional authority to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 m-0 text-[14px]">
          <li>Review, approve, or decline submissions from the <em>Share Something Great</em> pipeline.</li>
          <li>Remove divisive, non-compliant, commercial spam, or guideline-violating content without prior notice.</li>
          <li>Deactivate, suspend, or permanently ban accounts that compromise the goodwill, safety, or constructive spirit of the platform.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="store-compliance" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          5. Mobile App Store Compliance &amp; UGC Safeguards
        </h2>
        <p className="m-0">
          In strict compliance with Apple App Store Review Guideline 1.2 and Google Play policy standards:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 m-0 text-[14px]">
          <li><strong>Zero Tolerance:</strong> There is zero tolerance for objectionable content, harassment, hate speech, or abuse.</li>
          <li><strong>In-App Reporting:</strong> Users can flag and report any post or comment. All reported content is reviewed by our moderation team within 24 hours.</li>
          <li><strong>Author Blocking:</strong> Users can block abusive authors instantly, hiding their content from their feed.</li>
          <li><strong>Account &amp; Data Deletion:</strong> Users have the permanent right to delete their account and associated data directly within the mobile application settings at any time.</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section id="merchant-terms" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          6. Local Business &amp; Merchant Rules
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

      {/* Section 7 */}
      <section id="in-app-purchases" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          7. In-App Purchases &amp; Subscriptions
        </h2>
        <p className="m-0">
          Certain mobile features (such as Suburb Post Boosts and Merchant Pro tiers) are billed through Apple In-App Purchases or Google Play Billing. Subscriptions automatically renew unless cancelled at least 24 hours prior to the close of the current billing cycle through your Apple ID or Google Play settings. All billing and refunds are administered in accordance with Apple and Google terms.
        </p>
      </section>

      {/* Section 8 */}
      <section id="municipal-disclaimers" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          8. Disclaimers &amp; Municipal Alerts
        </h2>
        <p className="m-0">
          While Hello Hyperlocal strives to provide accurate, real-time load-shedding alerts, municipal notices, and emergency updates, these are compiled from community inputs and public utility disclosures. We do not guarantee continuous utility supply or absolute accuracy of third-party public utility schedules.
        </p>
      </section>

      {/* Section 9 */}
      <section id="governing-law" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          9. Governing Law (South Africa)
        </h2>
        <p className="m-0">
          These Terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of South Africa.
        </p>
      </section>

      {/* Section 10 */}
      <section id="contact-notices" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          10. Contact &amp; Legal Notices
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
