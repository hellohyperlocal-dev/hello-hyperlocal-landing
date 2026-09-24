"use client";

import { useState } from "react";
import { Handshake, Store, Users, type LucideIcon } from "lucide-react";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { ContactModal } from "@/components/site/modals/ContactModal";

interface CardItem {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
  action?: "contact";
  bgClass: string;
  iconBgClass: string;
}

export function GetStarted() {
  const [contactOpen, setContactOpen] = useState(false);

  const CARDS: CardItem[] = [
    {
      icon: Users,
      title: "For Residents",
      description:
        "Become a Founding Neighbour to discover local specials, events, and shape our suburb's digital town square.",
      ctaLabel: "Register as Resident",
      href: "/join?type=resident",
      bgClass: "bg-[#1C472A]",
      iconBgClass: "bg-[#7ED957] text-[#1C472A]",
    },
    {
      icon: Store,
      title: "For Businesses",
      description:
        "Register your local business to showcase your shop, daily specials, and story directly to neighbours.",
      ctaLabel: "Register Your Business",
      href: "/join?type=business",
      bgClass: "bg-[#1C472A]",
      iconBgClass: "bg-[#7ED957] text-[#1C472A]",
    },
    {
      icon: Handshake,
      title: "Get Involved",
      description:
        "For schools, community organisations, local leaders, and partners looking to support suburb initiatives.",
      ctaLabel: "Get In Touch",
      action: "contact",
      bgClass: "bg-[#1C472A]",
      iconBgClass: "bg-[#7ED957] text-[#1C472A]",
    },
  ];

  return (
    <section id="get-started" className="relative w-full bg-white py-16 lg:py-24">
      {/* Standard Site Container (max-width 1340px) */}
      <div className="site-container flex flex-col gap-10">
        {/* Header Row: Title Case Headline Left + Subhead Right */}
        <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col items-start gap-3">
            <SectionEyebrow label="Get Started" tone="light" />
            <h2 className="m-0 type-h2 text-hh-onyx">
              Help Shape Linden&apos;s Digital Town Square
            </h2>
          </div>
          <p className="m-0 max-w-[460px] type-body-lg text-hh-muted">
            Claim your spot early as a resident, local business, or community partner.
          </p>
        </div>

        {/* 3 Icon Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`flex flex-col justify-between rounded-card p-8 ${card.bgClass} min-h-[360px] transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="flex flex-col items-start gap-6">
                  {/* Icon Container (10px rounded, 48px x 48px) */}
                  <span className={`flex h-12 w-12 items-center justify-center rounded-[10px] ${card.iconBgClass}`}>
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="m-0 type-h3 text-white">
                      {card.title}
                    </h3>
                    <p className="m-0 type-body text-hh-mint">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  {card.action === "contact" ? (
                    <CtaLink variant="text" surface="dark" className="px-0" onClick={() => setContactOpen(true)}>
                      {card.ctaLabel}
                    </CtaLink>
                  ) : (
                    <CtaLink href={card.href ?? "/join"} variant="text" surface="dark" className="px-0">
                      {card.ctaLabel}
                    </CtaLink>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shared Contact Modal for Card 3 */}
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
}
