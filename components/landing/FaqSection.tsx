"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";
import { RollingText } from "@/components/ui/RollingText";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";
import { ContactModal } from "@/components/landing/ContactModal";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-[clamp(60px,10vw,120px)] bg-transparent transition-colors duration-200"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="mb-4 flex justify-center">
          <EyebrowPill icon={HelpCircle} variant="standard">
            Frequently Asked Questions
          </EyebrowPill>
        </div>
        <h2 className="m-0 text-[32px] sm:text-[40px] md:text-[50px] leading-[1.08] font-semibold tracking-[-3px] text-[#0e0f0c] dark:text-[#FCFAF7] text-pretty">
          Everything you need to know about Hello Linden.
        </h2>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: RISE_EASE, delay: index * 0.04 }}
              className="rounded-[24px] bg-[#F5F5F5] dark:bg-[#161814] border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-200"
            >
              <button
                id={`faq-btn-${index}`}
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
              >
                <span className="text-[17px] sm:text-[19px] font-semibold text-[#0e0f0c] dark:text-[#FCFAF7] leading-snug tracking-tight">
                  {faq.question}
                </span>
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 bg-[#1C472A] text-white dark:bg-[#7ED957] dark:text-[#0e0f0c]"
                      : "bg-black/5 dark:bg-white/10 text-[#0e0f0c] dark:text-white"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: RISE_EASE }}
                  >
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#454745] dark:text-[#99A893] border-t border-black/5 dark:border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Have more questions? -> Get in touch Message Modal CTA */}
      <div className="mt-10 sm:mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-[15px] text-brand-muted dark:text-[#99A893]">
        <span>Have more questions?</span>
        <button
          type="button"
          onClick={() => setIsContactModalOpen(true)}
          className="group inline-flex items-center gap-2 rounded-full bg-[#1C472A] dark:bg-[#7ED957] px-5 py-2.5 text-button-14 font-semibold text-white dark:text-[#0e0f0c] transition-all hover:scale-105 active:scale-95 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957] focus-visible:ring-offset-2"
        >
          <RollingText text="Get in touch" />
          <ArrowFlipIcon size={14} />
        </button>
      </div>

      {/* Interactive Contact / Support Message Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
}
