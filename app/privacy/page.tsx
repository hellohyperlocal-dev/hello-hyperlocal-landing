import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { type TocItem } from "@/components/ui/toc";

export const metadata = {
  title: "Privacy Policy | Hello Hyperlocal",
  description: "POPIA-compliant Privacy Policy for Hello Hyperlocal residents and business partners.",
};

const TOC_ITEMS: TocItem[] = [
  { id: "principles", text: "Core Privacy Principles", level: 2 },
  { id: "responsible-party", text: "1. Responsible Party", level: 2 },
  { id: "information-collected", text: "2. Information We Collect", level: 2 },
  { id: "purpose-processing", text: "3. Purpose of Processing", level: 2 },
  { id: "address-privacy", text: "4. Address Privacy Protection", level: 2 },
  { id: "data-subject-rights", text: "5. Your Rights Under POPIA", level: 2 },
  { id: "security-safeguards", text: "6. Security Safeguards", level: 2 },
  { id: "cookies", text: "7. Cookies & Analytics", level: 2 },
  { id: "information-officer", text: "8. Information Officer Contact", level: 2 },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Hello Hyperlocal collects, processes, and protects personal information in compliance with South Africa's Protection of Personal Information Act (POPIA)."
      lastUpdated="September 16, 2026"
      tocItems={TOC_ITEMS}
    >
      {/* Principles Section (Clean typography, no boxes) */}
      <section id="principles" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          Core Privacy Principles
        </h2>
        <ul className="list-disc pl-5 space-y-2 m-0 text-[14px]">
          <li><strong>Zero Address Broadcasting:</strong> Your specific house number or street address is never displayed to other users. You only appear as a verified resident of your suburb (e.g. <em>Linden · Block 4</em>).</li>
          <li><strong>No Algorithmic Ad Tracking:</strong> We do not sell your personal data or behavioural tracking profiles to third-party ad brokers.</li>
          <li><strong>Full Data Subject Rights:</strong> You may request access, correction, or complete deletion of your verified account at any time.</li>
        </ul>
      </section>

      {/* Section 1 */}
      <section id="responsible-party" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          1. Introduction &amp; Responsible Party
        </h2>
        <p className="m-0">
          Hello Hyperlocal (Pty) Ltd (&ldquo;Hello Hyperlocal&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy and ensuring that your personal information is processed lawfully in accordance with the Protection of Personal Information Act, No. 4 of 2013 (&ldquo;POPIA&rdquo;) and the Electronic Communications and Transactions Act, No. 25 of 2002 (&ldquo;ECTA&rdquo;).
        </p>
        <p className="m-0">
          This Privacy Policy applies to all residents, visitors, merchants, and users of our mobile application and website.
        </p>
      </section>

      {/* Section 2 */}
      <section id="information-collected" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          2. Personal Information We Collect
        </h2>
        <p className="m-0">
          We only collect personal information that is necessary for operating a secure, verified neighbourhood platform:
        </p>
        <ul className="list-disc pl-5 space-y-2 m-0 text-[14px]">
          <li><strong>Resident Details:</strong> Name, email address, mobile number, chosen suburb, and address verification proof (utility bill or municipal account).</li>
          <li><strong>Merchant Details:</strong> Business trade name, CIPC registration, physical store address, contact representative details, and special offer descriptions.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="purpose-processing" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          3. Purpose of Processing
        </h2>
        <p className="m-0">
          In accordance with Section 13 of POPIA, we process personal information strictly for the following purposes:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 m-0 text-[14px]">
          <li>To verify that community participants are genuine, physical residents or merchants of the selected suburb.</li>
          <li>To deliver localized municipal alerts, load-shedding schedules, and ward committee notifications.</li>
          <li>To enable residents to discover and redeem verified local merchant deals and neighbourhood market events.</li>
          <li>To maintain safety, prevent fraud, and moderate civic forums against harassment and illegal conduct.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section id="address-privacy" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          4. Address Verification &amp; Privacy Protection
        </h2>
        <p className="m-0">
          Address documents submitted during verification are evaluated strictly to confirm physical residency. Once verified, documents are permanently encrypted and archived in restricted vaults. Your exact street number is never published on any public feed, user profile, or map.
        </p>
      </section>

      {/* Section 5 */}
      <section id="data-subject-rights" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          5. Data Subject Rights Under POPIA
        </h2>
        <p className="m-0">
          Under Sections 23, 24, and 25 of POPIA, you have the right to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 m-0 text-[14px]">
          <li><strong>Request Access:</strong> Obtain confirmation and copies of personal information we hold about you.</li>
          <li><strong>Request Correction:</strong> Require us to correct inaccurate, irrelevant, excessive, or outdated information.</li>
          <li><strong>Request Deletion:</strong> Ask us to destroy or delete your personal record when it is no longer authorized to be retained.</li>
          <li><strong>Object to Processing:</strong> Object at any time to the processing of your personal information on reasonable grounds.</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section id="security-safeguards" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          6. Security Safeguards
        </h2>
        <p className="m-0">
          We implement technical and organizational security measures to protect personal information against loss, unauthorized access, destruction, or unauthorized alteration. Data in transit is secured via TLS 1.3 encryption, and data at rest is stored in certified cloud facilities.
        </p>
      </section>

      {/* Section 7: matches components/ui/CookieConsent.tsx and components/site/GoogleAnalytics.tsx */}
      <section id="cookies" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          7. Cookies &amp; Analytics
        </h2>
        <p className="m-0">
          We use cookies to enhance your browsing experience and understand how our website is used. When you first visit, we ask whether you accept or decline analytics cookies.
        </p>
        <ul className="list-disc pl-5 space-y-2 m-0 text-[14px]">
          <li><strong>Essential storage:</strong> We store your cookie choice in your browser so we don&apos;t ask you again on every visit. This does not identify you.</li>
          <li><strong>Google Analytics (only if you accept):</strong> Google Analytics, a service provided by Google, collects information such as the pages you visit, how long you stay, the type of device and browser you use, your approximate location, and how you arrived at our site. We use this only to understand and improve the website. If you decline, Google Analytics is not loaded and no analytics cookies are set.</li>
          <li><strong>No advertising cookies:</strong> We do not use cookies for advertising, and we do not sell browsing information.</li>
        </ul>
        <p className="m-0">
          You can change your mind at any time by clearing this website&apos;s cookies and stored data in your browser settings. You will then be asked again on your next visit.
        </p>
      </section>

      {/* Section 8 */}
      <section id="information-officer" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          8. Information Officer &amp; Inquiries
        </h2>
        <p className="m-0">
          To exercise your rights or lodge a privacy inquiry, please contact our designated Information Officer:
        </p>
        <div className="space-y-1 text-[13.5px]">
          <p className="font-bold text-[#0e0f0c] dark:text-[#FCFAF7] m-0">The Information Officer</p>
          <p className="text-[#454745] dark:text-[#99A893] m-0">Hello Hyperlocal (Pty) Ltd</p>
          <p className="text-[#454745] dark:text-[#99A893] m-0">Email: <a href="mailto:privacy@hellohyperlocal.co.za" className="text-[#1C472A] dark:text-[#7ED957] font-semibold underline">privacy@hellohyperlocal.co.za</a></p>
          <p className="text-[12.5px] text-[#868685] m-0 pt-1">
            You also have the right to submit a complaint directly to the Information Regulator of South Africa (inforeg@justice.gov.za).
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
