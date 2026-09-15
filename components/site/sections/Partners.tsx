"use client";

import { useState } from "react";
import { Building2, FileText, Shield, type LucideIcon } from "lucide-react";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { PartnerModal } from "@/components/site/modals/PartnerModal";

const GROUPS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Shield,
    title: "Community Orgs & LCA",
    body: "Collaborating with local associations and schools to amplify community initiatives.",
  },
  {
    icon: Building2,
    title: "Founding Brands",
    body: "Aligning purpose-driven brands with high-trust hyperlocal suburb audiences.",
  },
  {
    icon: FileText,
    title: "Strategic Investors",
    body: "Request our confidential partnership prospectus for scaling across South Africa.",
  },
];

export function Partners() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="partners" className="relative bg-hh-forest py-[100px] split:py-[130px]">
      <div className="site-container flex flex-col items-start gap-[60px]">
        <div className="flex max-w-[760px] flex-col items-start gap-5">
          <SectionEyebrow label="Partners & Strategic Investors" tone="dark" />
          <h2 className="m-0 type-h2 text-white">Partnering to Build Stronger Local Communities</h2>
          <p className="m-0 type-body-lg text-hh-mint">
            We are actively holding discussions with selected founding partners, strategic brands,
            community organizations, and investors who share our vision.
          </p>
        </div>

        <ul className="m-0 grid w-full list-none grid-cols-1 gap-x-[55px] gap-y-10 p-0 split:grid-cols-3">
          {GROUPS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col items-start gap-5">
              <span className="flex h-16 w-16 items-center justify-center rounded-card bg-hh-lime text-hh-onyx">
                <Icon aria-hidden className="h-7 w-7" strokeWidth={2.2} />
              </span>
              <h3 className="m-0 type-h3 text-white">{title}</h3>
              <p className="m-0 type-body text-hh-mint">{body}</p>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col items-start justify-between gap-6 border-t border-hh-rule-light pt-10 split:flex-row split:items-center">
          <div className="flex flex-col gap-2">
            <p className="m-0 font-heading text-[22px] font-medium leading-[26.4px] tracking-[-1px] text-white">
              Interested in shaping the future of South African suburbs?
            </p>
            <p className="m-0 type-body text-hh-mint">
              Get in touch with our founding leadership team for a confidential conversation.
            </p>
          </div>
          <CtaLink surface="dark" onClick={() => setModalOpen(true)}>
            Partner With Hello
          </CtaLink>
        </div>
      </div>

      <PartnerModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
