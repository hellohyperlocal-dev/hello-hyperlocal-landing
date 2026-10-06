import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { type TocItem } from "@/components/ui/toc";

export const metadata = {
  title: "Community Guidelines | Hello Hyperlocal",
  description: "Community standards, platform boundaries, and safety policies for Hello Hyperlocal.",
};

const TOC_ITEMS: TocItem[] = [
  { id: "spirit-of-linden", text: "1. The Spirit of Linden", level: 2 },
  { id: "platform-boundaries", text: "2. What Hello Hyperlocal is NOT", level: 2 },
  { id: "zero-tolerance", text: "3. Zero Tolerance for Hate & Harassment", level: 2 },
  { id: "reporting-blocking", text: "4. Reporting & Author Blocking", level: 2 },
  { id: "moderation-enforcement", text: "5. Moderation Enforcement", level: 2 },
];

export default function CommunityGuidelinesPage() {
  return (
    <LegalLayout
      title="Community Guidelines"
      subtitle="The behavioral standards, platform boundaries, and mutual agreements that protect suburb vitality and neighbour goodwill."
      lastUpdated="October 6, 2026"
      tocItems={TOC_ITEMS}
    >
      {/* Section 1 */}
      <section id="spirit-of-linden" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          1. The Spirit of Linden
        </h2>
        <p className="m-0">
          Hello Hyperlocal is built on local trust, kindness, and constructive community spirit. We exist to celebrate suburb vitality, champion local commerce, and foster constructive neighbourhood initiatives. Treat fellow residents, artisans, and business owners with respect and courtesy.
        </p>
      </section>

      {/* Section 2 */}
      <section id="platform-boundaries" className="scroll-mt-24 space-y-4">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          2. What Hello Hyperlocal is NOT (Platform Boundaries)
        </h2>
        <p className="m-0">
          To maintain an uplifting, constructive, and trusted environment, Hello Hyperlocal strictly enforces the following platform boundaries:
        </p>

        <div className="space-y-4 text-[14px]">
          <div className="border-l-2 border-[#1C472A] dark:border-[#7ED957] pl-4 space-y-1">
            <h3 className="font-bold text-brand-onyx dark:text-[#FCFAF7] m-0 text-[15px]">
              Not a Religious or Ideological Debate Floor
            </h3>
            <p className="m-0 text-[#454745] dark:text-[#99A893]">
              Hello Hyperlocal is strictly a local neighbourhood and community utility. This is no place for theological arguments, doctrine policing, proselytizing, or pitting different faith traditions against one another. Any content attempting to provoke culture wars or religious friction simply has no place here.
            </p>
          </div>

          <div className="border-l-2 border-[#1C472A] dark:border-[#7ED957] pl-4 space-y-1">
            <h3 className="font-bold text-brand-onyx dark:text-[#FCFAF7] m-0 text-[15px]">
              Not a Municipal Venting Forum or Soapbox
            </h3>
            <p className="m-0 text-[#454745] dark:text-[#99A893]">
              The platform exists to highlight suburb vitality, community projects, and constructive local initiatives. It must not become a municipal complaint box for aimless venting, political grandstanding, or destructive rants.
            </p>
          </div>

          <div className="border-l-2 border-[#1C472A] dark:border-[#7ED957] pl-4 space-y-1">
            <h3 className="font-bold text-brand-onyx dark:text-[#FCFAF7] m-0 text-[15px]">
              Not a Business Hit-Piece or Bashing Board
            </h3>
            <p className="m-0 text-[#454745] dark:text-[#99A893]">
              We are here to champion and support local shops, artisans, and neighbourhood trade. This is not a 1-star vendetta forum or a public consumer dispute board. Personal grievances with a merchant must be handled privately or through designated third-party consumer review platforms.
            </p>
          </div>

          <div className="border-l-2 border-[#1C472A] dark:border-[#7ED957] pl-4 space-y-1">
            <h3 className="font-bold text-brand-onyx dark:text-[#FCFAF7] m-0 text-[15px]">
              Not a Political Campaign Board
            </h3>
            <p className="m-0 text-[#454745] dark:text-[#99A893]">
              Party politics, election campaigning, and ideological skirmishes are strictly excluded. Our focus remains exclusively on constructive, non-partisan local updates such as ward notices, clean-up drives, and infrastructure service alerts.
            </p>
          </div>

          <div className="border-l-2 border-[#1C472A] dark:border-[#7ED957] pl-4 space-y-1">
            <h3 className="font-bold text-brand-onyx dark:text-[#FCFAF7] m-0 text-[15px]">
              Not an Ugly Flyer or &ldquo;Slop&rdquo; Noticeboard
            </h3>
            <p className="m-0 text-[#454745] dark:text-[#99A893]">
              To protect visual standards and user experience, feeds may not be flooded with cluttered, pixelated flyers, clip-art banners, or low-quality promotional graphics. All submissions must adhere to our structured card formats.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="zero-tolerance" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          3. Zero Tolerance for Hate Speech &amp; Harassment
        </h2>
        <p className="m-0">
          We enforce absolute zero tolerance for hate speech, racism, discrimination, bullying, defamation, or targeted personal attacks against any individual or group. Violations will result in immediate content removal and permanent profile suspension.
        </p>
      </section>

      {/* Section 4 */}
      <section id="reporting-blocking" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          4. In-App Reporting &amp; Author Blocking
        </h2>
        <p className="m-0">
          Every post and message thread in the mobile application includes direct moderation tools:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 m-0 text-[14px]">
          <li>Tap the options button on any post to Report objectionable content or Block the author.</li>
          <li>Reported content is reviewed promptly by our moderation team within 24 hours.</li>
          <li>Blocking an author immediately hides all their current and future posts and comments from your feed.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="moderation-enforcement" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          5. Moderation Enforcement &amp; Administrative Authority
        </h2>
        <p className="m-0">
          Our administrative team retains unconditional authority to review, approve, or reject submissions from the <em>Share Something Great</em> pipeline, remove divisive or non-compliant posts, and deactivate accounts that compromise the goodwill of the platform without prior notice.
        </p>
      </section>
    </LegalLayout>
  );
}
