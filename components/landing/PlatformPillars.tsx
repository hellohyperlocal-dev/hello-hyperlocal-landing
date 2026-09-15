"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Heart, Store } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;

export function PlatformPillars() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% Verified Residents",
      body: "Every resident profile undergoes identity verification to eliminate anonymous trolls, municipal spam, and social media noise.",
    },
    {
      icon: Heart,
      title: "Always Free for Residents",
      body: "Accessing local feeds, safety alerts, ward updates, and community event calendars will always remain 100% free for neighbours.",
    },
    {
      icon: Store,
      title: "Backing Local Merchants",
      body: "Giving neighbourhood cafes, shops, and service providers a direct line to nearby residents without corporate ad algorithms.",
    },
  ];

  return (
    <section
      id="pillars"
      className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-[clamp(60px,10vw,120px)] bg-transparent"
    >
      {/* 1. Header Block (Centered) */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="mb-4 flex justify-center">
          <EyebrowPill icon={ShieldCheck} variant="standard">
            Our Commitment
          </EyebrowPill>
        </div>
        <h2 className="m-0 text-[32px] sm:text-[40px] md:text-[50px] leading-[1.08] font-semibold tracking-[-3px] text-brand-onyx dark:text-[#FCFAF7] text-pretty mb-4">
          A neighbourhood platform built on trust.
        </h2>
        <p className="m-0 text-[18px] sm:text-[20px] leading-[32px] sm:leading-[36px] font-normal text-brand-muted dark:text-[#99A893]">
          We believe a local platform should serve the community first. Here are our core promises to every resident, merchant, and community organisation.
        </p>
      </div>

      {/* 2. 3-Column Trust Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: RISE_EASE, delay: index * 0.1 }}
              className="rounded-[28px] sm:rounded-[32px] border-none bg-[#e2f6d5] dark:bg-[#162E1D] p-7 sm:p-8 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container: Matching rounded-[16px] radius with #c5edab fill and #1C472A icon */}
              <div className="h-13 w-13 sm:h-14 sm:w-14 rounded-[16px] bg-[#c5edab] dark:bg-[#1C472A] text-[#1C472A] dark:text-[#7ED957] flex items-center justify-center mb-6 transition-transform duration-300">
                <Icon className="h-6 w-6" strokeWidth={2.2} />
              </div>

              {/* Title */}
              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0e0f0c] dark:text-[#FCFAF7] mb-2.5 tracking-tight">
                {pillar.title}
              </h3>

              {/* Body */}
              <p className="text-[15px] sm:text-[16px] leading-[24px] font-normal text-[#454745] dark:text-[#99A893] m-0">
                {pillar.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
