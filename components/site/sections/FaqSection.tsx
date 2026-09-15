"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { ContactModal } from "@/components/site/modals/ContactModal";

const FAQS = [
  {
    question: "What is Hello Linden?",
    answer:
      "Hello Linden is the first community ecosystem built on the Hello Hyperlocal platform. It is a dedicated digital home for Linden residents, local independent businesses, schools, and community organizations to stay connected, share events, support local spots, and participate in suburb life.",
  },
  {
    question: "Is the app free for residents?",
    answer:
      "Yes, 100% free for all residents. You have full access to your local neighbourhood feed, emergency alerts, suburb event calendars, community projects, and exclusive local business passes without paywalls or subscriptions.",
  },
  {
    question: "When will Hello Linden launch?",
    answer:
      "Hello Linden is planned to launch during 2026. We are currently building our founding community of residents and businesses. Registering as a Founding Neighbour or Founding Business guarantees early access before the public launch.",
  },
  {
    question: "Who can join?",
    answer:
      "Anyone who lives, runs a business, works, goes to school, or leads a community initiative in Linden and surrounding areas can join. Residents get verified to ensure a safe, troll-free local feed.",
  },
  {
    question: "Can businesses register now?",
    answer:
      "Yes! Local independent businesses can submit an Expression of Interest to become a Founding Business. Founding Businesses receive window stickers, early platform access, launch visibility, and input into business features with no pre-payment required.",
  },
  {
    question: "Is Hello Linden part of the Linden Community Association (LCA)?",
    answer:
      "Hello Linden is an independent platform built to support and strengthen the entire suburb ecosystem. We work collaboratively alongside local community associations, ward leaders, and schools as valued community partners.",
  },
  {
    question: "How will personal information be used & protected?",
    answer:
      "We strictly comply with South Africa's POPIA (Protection of Personal Information Act). Your exact street number and address documents are encrypted and never displayed publicly or shared with third parties. Other verified neighbours only see your first name, surname initial, and suburb badge.",
  },
  {
    question: "Can residents submit local events or community stories?",
    answer:
      "Yes! Verified residents and local leaders can submit neighbourhood events, school announcements, lost & found notices, and civic project updates directly to the community feed.",
  },
  {
    question: "Can other suburbs get Hello Hyperlocal?",
    answer:
      "Hello Linden is our first community where the concept is being refined. From there, the vision is to introduce Hello Hyperlocal into other South African suburbs while allowing each community to keep its unique identity, voice, and local character.",
  },
  {
    question: "How can organisations, businesses, and neighbours become involved?",
    answer:
      "Residents can click 'Become a Founding Neighbour', businesses can submit an Expression of Interest under 'Register Your Business', and strategic partners or brands can request a prospectus under 'Partner With Hello'.",
  },
];

export function FaqSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="faqs" className="relative bg-white pb-[100px] split:pb-[130px]">
      <div className="site-container flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <SectionEyebrow label="Frequently Asked Questions" tone="light" />
          <h2 className="m-0 max-w-[760px] type-h2 text-hh-onyx">
            Everything you need to know about Hello Linden.
          </h2>
        </div>

        <ul className="m-0 flex w-full max-w-[860px] list-none flex-col gap-[10px] p-0">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            const btnId = `${baseId}-q${i}`;
            const panelId = `${baseId}-a${i}`;
            return (
              <li key={faq.question} className="rounded-card bg-hh-panel">
                <h3 className="m-0">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-start gap-5 rounded-card p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest"
                  >
                    <span className="flex-1 font-heading text-[20px] font-medium leading-[26.4px] tracking-[-1.3px] text-hh-onyx sm:text-[22px]">
                      {faq.question}
                    </span>
                    <span aria-hidden className="relative mt-3 h-[2px] w-[14px] shrink-0 bg-hh-onyx">
                      <span
                        className={cn(
                          "absolute inset-0 bg-hh-onyx transition-transform duration-200 motion-reduce:transition-none",
                          open ? "rotate-0" : "rotate-90",
                        )}
                      />
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={btnId} hidden={!open} className="px-5 pb-5">
                  <p className="m-0 type-body text-hh-muted">{faq.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col items-center gap-4 text-center split:flex-row">
          <p className="m-0 type-body-lg text-hh-muted">Have more questions?</p>
          <CtaLink surface="light" onClick={() => setContactOpen(true)}>
            Get in touch
          </CtaLink>
        </div>
      </div>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
}
