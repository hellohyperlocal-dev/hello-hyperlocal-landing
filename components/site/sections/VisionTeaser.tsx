"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";

interface PillarItem {
  who: string;
  line: string;
  tags: string[];
}

const PILLARS: PillarItem[] = [
  {
    who: "For Residents",
    line: "A simpler way to discover what's around you, support local spots, and take part in the everyday life of your neighbourhood.",
    tags: ["Suburb Updates", "Local Specials & Deals", "Community Events", "Trusted Recommendations"],
  },
  {
    who: "For Businesses",
    line: "Hyperlocal visibility and direct connection to nearby customers living right around your shop.",
    tags: ["Dedicated Profile", "Local Discovery", "Promotions & Offers", "Direct Regular Connection"],
  },
  {
    who: "For Schools & Organisations",
    line: "A unified platform to share announcements, promote markets or events, and reach the people who care.",
    tags: ["School Announcements", "Civic Campaigns", "Market & Event Promotion", "Local Volunteers"],
  },
  {
    who: "For Local Leaders & Projects",
    line: "A trusted space to share suburb progress, municipal advisories, and get residents involved in local initiatives.",
    tags: ["Verified Advisories", "Suburb Initiatives", "Resident Feedback", "Direct Community Reach"],
  },
];

export function VisionTeaser() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="vision" className="relative bg-white py-[80px] split:py-[110px]">
      <div className="site-container flex flex-col items-center gap-[60px]">
        <div className="flex max-w-[840px] flex-col items-center gap-5 text-center">
          <SectionEyebrow label="The Vision" tone="light" />
          <h2 className="m-0 type-h2 text-hh-onyx text-center sm:whitespace-nowrap">
            Hello Linden is where the journey begins
          </h2>
          <p className="m-0 type-body-lg text-hh-muted text-center">
            The vision is much bigger. A trusted digital home for neighbourhoods across South Africa,
            helping people feel more connected to where they live, the people around them and the
            businesses and organisations that make each community unique.
          </p>
          <div className="pt-2">
            <CtaLink href="/about#vision" variant="text" surface="light">
              Explore Our Full Vision
            </CtaLink>
          </div>
        </div>

        {/* High-Impact Interactive Hover Accordion */}
        <div className="w-full border-t border-hh-onyx/15" onMouseLeave={() => setOpenIndex(null)}>
          {PILLARS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.who}
                onMouseEnter={() => setOpenIndex(index)}
                className={cn(
                  "border-b border-hh-onyx/15 py-10 transition-colors duration-350 ease-[cubic-bezier(0.44,0,0.56,1)] sm:py-14 lg:py-16",
                  isOpen ? "bg-hh-warm/30" : "bg-transparent",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-6 text-left transition-colors focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <h2 className="m-0 type-h2 text-hh-onyx">
                    {item.who}
                  </h2>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12">
                    <Plus
                      className={cn(
                        "h-8 w-8 text-hh-onyx transition-transform duration-350 ease-[cubic-bezier(0.44,0,0.56,1)] sm:h-10 sm:w-10",
                        isOpen && "rotate-45",
                      )}
                      strokeWidth={1.5}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.44, 0, 0.56, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="flex flex-col gap-5 pt-5 sm:pt-6">
                        <p className="m-0 max-w-[760px] type-body-lg text-hh-muted">
                          {item.line}
                        </p>

                        {/* Feature tags with + prefix */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
                          {item.tags.map((tag) => (
                            <div key={tag} className="flex items-center gap-2 text-[15px] font-medium text-hh-onyx sm:text-[16px]">
                              <span className="text-[#7ED957] font-bold text-[18px]">+</span>
                              <span>{tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
