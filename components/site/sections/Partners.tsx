"use client";

import { useState } from "react";
import { Compass, Handshake, Sparkles, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { PartnerModal } from "@/components/site/modals/PartnerModal";

// Brief §9: the five partner types, kept discreet. No proposal details on the page.
const GROUPS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Handshake, title: "Founding Partners", body: "Helping launch Hello Linden from day one." },
  { icon: Compass, title: "Strategic partners", body: "Helping Hello Hyperlocal grow into new communities." },
  { icon: TrendingUp, title: "Investors", body: "Backing stronger local communities across South Africa." },
  { icon: Sparkles, title: "Brands", body: "Purpose-driven brands that want to support local life." },
  { icon: Users, title: "Community organisations", body: "Schools, associations and groups doing work that matters." },
];

export function Partners() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="partners" className="relative bg-white pt-[100px] split:pt-[130px]">
      <div className="site-container flex flex-col items-start gap-[60px]">
        <div className="flex max-w-[760px] flex-col items-start gap-5">
          <SectionEyebrow label="Partners & Investors" tone="light" />
          <h2 className="m-0 type-h2 text-hh-onyx">Partnering to build stronger local communities</h2>
          <p className="m-0 type-body-lg text-hh-muted">
            We are currently speaking to selected founding partners, strategic partners, investors,
            brands and community organisations who share our vision.
          </p>
        </div>

        <ul className="m-0 grid w-full list-none grid-cols-1 gap-x-8 gap-y-10 p-0 sm:grid-cols-2 xl:grid-cols-5">
          {GROUPS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-card bg-hh-forest text-hh-lime">
                <Icon aria-hidden className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="m-0 type-h3 text-hh-onyx">{title}</h3>
              <p className="m-0 type-body text-hh-muted">{body}</p>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col items-start justify-between gap-6 border-t border-hh-rule-dark pt-10 split:flex-row split:items-center">
          <div className="flex flex-col gap-2">
            <p className="m-0 font-heading text-[22px] font-medium leading-[26.4px] tracking-[-1px] text-hh-onyx">
              Interested in partnering with Hello?
            </p>
            <p className="m-0 type-body text-hh-muted">
              Get in touch for a conversation or to request our partnership prospectus.
            </p>
          </div>
          <CtaLink surface="light" onClick={() => setModalOpen(true)}>
            Partner With Hello
          </CtaLink>
        </div>
      </div>

      <PartnerModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
