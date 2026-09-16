"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { ContactModal } from "@/components/site/modals/ContactModal";

// The client's own list and order, from their brief. Answers stay close to what has
// actually been decided — no launch date, and no features promised that don't exist yet.
const FAQS = [
  {
    question: "What is Hello Linden?",
    answer:
      "Hello Linden is the first community built on the Hello Hyperlocal platform. It is a local home for the suburb: a place for residents, independent businesses, schools and community organisations to discover what is happening nearby, support local and stay connected to community life.",
  },
  {
    question: "Is the app free for residents?",
    answer:
      "Yes. Hello Linden is free for residents. You will be able to discover what is happening around you, find local businesses and follow community life without a subscription.",
  },
  {
    question: "When will Hello Linden launch?",
    answer:
      "Hello Linden is planned to launch during 2026. We are building our founding community of residents and businesses first, and we will confirm a date once we are confident about it. Registering now as a Founding Neighbour or Founding Business means you are part of it from the start.",
  },
  {
    question: "Who can join?",
    answer:
      "Anyone with a connection to the neighbourhood. If you live in Linden, run or work in a local business, go to school here or help run a community initiative, Hello Linden is for you. We are starting with Linden and the suburbs around it.",
  },
  {
    question: "Can businesses register now?",
    answer:
      "Yes. Local businesses can register their interest today, and can also choose to become one of the first Founding Businesses. There is no payment required at this stage — it is an expression of interest so we can plan launch together.",
  },
  {
    question: "Is Hello Linden part of the Linden Community Association?",
    answer:
      "No. Hello Linden is an independent platform built to support and strengthen the whole suburb. We work alongside community associations, local leaders, schools and community organisations as partners, rather than replacing any of them.",
  },
  {
    question: "How will personal information be used?",
    answer:
      "We handle your details in line with South Africa's POPIA (Protection of Personal Information Act). We only ask for what we need to keep you updated before launch, we never sell or share your details with third parties, and you can ask us to remove them at any time. Full detail is in our Privacy Policy.",
  },
  {
    question: "Can residents submit events or stories?",
    answer:
      "That is the intention. Hello Linden is being built so residents, schools, local organisations and community projects can share what is happening in the neighbourhood — events, notices and local stories — rather than it depending on word of mouth.",
  },
  {
    question: "Can other suburbs get Hello Hyperlocal?",
    answer:
      "Yes, that is the bigger vision. Hello Linden is where we learn, listen and refine the model. From there the aim is to bring Hello Hyperlocal to other South African communities, while each suburb keeps its own identity, character and local voice.",
  },
  {
    question: "How can organisations become involved?",
    answer:
      "Schools, community associations, local leaders, community projects, brands and potential partners are welcome to get in touch. Use 'Partner With Hello' to start a conversation or request our partnership prospectus.",
  },
  {
    question: "How can I become a Founding Business?",
    answer:
      "Choose 'Join Hello Linden', select 'I'm a Business' and tell us you would like to be a Founding Business. Founding Businesses are recognised as such, get early access, a founding badge and window sticker, priority onboarding and a say in how Hello Linden develops. No payment is required today.",
  },
  {
    question: "How can I become a Founding Neighbour?",
    answer:
      "Choose 'Join Hello Linden', select 'I'm a Resident' and register. The first 1,000 residents to join become Founding Neighbours, with a numbered founding badge, early access before public launch, invitations to community events and a direct say in how Hello Linden is built.",
  },
];

export function FaqSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="faqs" className="relative bg-white py-[100px] split:py-[130px]">
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
