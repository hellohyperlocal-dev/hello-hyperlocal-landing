"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import {
  MapPin,
  Check,
  ShieldCheck,
  Building2,
  Compass,
  ArrowRight,
  Heart,
  Search,
  ListOrdered,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────────────────────────
   Step 1 Mockup: Suburb Selector & Search
───────────────────────────────────────────────────────────── */
function Step1Mockup() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF7] text-left">
      {/* Mini Status Bar */}
      <div className="h-6 sm:h-8 w-full px-4 sm:px-5 pt-1.5 sm:pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-[#0e0f0c] tracking-tight shrink-0 select-none">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex items-end gap-[1px] h-2">
            <div className="w-[2px] h-[3px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2px] h-[4.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2px] h-[6px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2px] h-[7.5px] bg-[#0e0f0c] rounded-xs" />
          </div>
          <div className="w-3.5 h-2 border border-[#0e0f0c] rounded-[2px] p-[0.5px] flex items-center">
            <div className="w-full h-full bg-[#0e0f0c] rounded-[0.5px]" />
          </div>
        </div>
      </div>

      {/* Screen Header */}
      <div className="px-3.5 sm:px-5 pt-2 sm:pt-3 pb-1.5 sm:pb-2 border-b border-[#0e0f0c]/5">
        <span className="text-[8px] sm:text-[9px] font-bold text-[#5C6656] uppercase tracking-[0.14em] block">
          Welcome to Hello Hyperlocal
        </span>
        <h3 className="text-[14px] sm:text-[17px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
          Select Your Suburb
        </h3>
      </div>

      {/* Suburb Search Bar */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        <div className="relative">
          <input
            type="text"
            value="Linden, Johannesburg"
            readOnly
            className="w-full text-[10px] sm:text-[11.5px] font-bold pl-7 sm:pl-8 pr-2.5 py-2 sm:py-2.5 rounded-[12px] sm:rounded-[14px] bg-[#EBEBEB] text-[#0e0f0c] border-none outline-none"
          />
          <Search className="absolute left-2.5 top-2.5 sm:top-3 h-3 sm:h-3.5 w-3 sm:w-3.5 text-[#5C6656]" />
        </div>

        {/* Selected Suburb Pill List */}
        <div className="space-y-1.5 sm:space-y-2 pt-0.5">
          {/* Active Option: Linden */}
          <div className="p-2 sm:p-3 rounded-[14px] sm:rounded-[16px] bg-[#e2f6d5] border border-[#054d28]/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#1C472A] text-white flex items-center justify-center">
                <MapPin className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-[#7ED957]" />
              </div>
              <div>
                <span className="text-[11px] sm:text-[12px] font-extrabold text-[#054d28] block leading-tight">
                  Linden
                </span>
                <span className="text-[8px] sm:text-[9px] font-medium text-[#054d28]/80">
                  Ward 99 · Johannesburg
                </span>
              </div>
            </div>
            <span className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#1C472A] text-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold">
              ✓
            </span>
          </div>

          {/* Suburb Option 2: Greenside */}
          <div className="p-2 sm:p-2.5 rounded-[12px] sm:rounded-[14px] bg-white border border-[#0e0f0c]/5 flex items-center justify-between opacity-70">
            <div className="flex items-center gap-2">
              <MapPin className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-[#868685]" />
              <span className="text-[10px] sm:text-[11px] font-bold text-[#0e0f0c]">Greenside</span>
            </div>
            <span className="text-[8px] sm:text-[8.5px] text-[#868685]">0.8 km away</span>
          </div>
        </div>

        {/* Continue Button */}
        <div className="pt-1">
          <button className="w-full bg-[#1C472A] text-white text-[10.5px] sm:text-[11.5px] font-bold py-2 sm:py-2.5 rounded-full text-center flex items-center justify-center gap-1.5 shadow-sm">
            <span>Unlock Linden Feed</span>
            <ArrowRight className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-[#7ED957]" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Step 2 Mockup: Address Verification Pass
───────────────────────────────────────────────────────────── */
function Step2Mockup() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF7] text-left">
      {/* Mini Status Bar */}
      <div className="h-6 sm:h-8 w-full px-4 sm:px-5 pt-1.5 sm:pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-[#0e0f0c] tracking-tight shrink-0 select-none">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex items-end gap-[1px] h-2">
            <div className="w-[2px] h-[3px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2px] h-[4.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2px] h-[6px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2px] h-[7.5px] bg-[#0e0f0c] rounded-xs" />
          </div>
          <div className="w-3.5 h-2 border border-[#0e0f0c] rounded-[2px] p-[0.5px] flex items-center">
            <div className="w-full h-full bg-[#0e0f0c] rounded-[0.5px]" />
          </div>
        </div>
      </div>

      {/* Screen Header */}
      <div className="px-3.5 sm:px-5 pt-2 sm:pt-3 pb-1.5 sm:pb-2 border-b border-[#0e0f0c]/5">
        <span className="text-[8px] sm:text-[9px] font-bold text-[#5C6656] uppercase tracking-[0.14em] block">
          Trust & Safety
        </span>
        <h3 className="text-[14px] sm:text-[17px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
          Resident Verification
        </h3>
      </div>

      {/* Verification Badge Card */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        <div className="bg-[#1C472A] text-white rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 text-center space-y-1.5 sm:space-y-2 relative overflow-hidden">
          <div className="h-8 w-8 sm:h-10 sm:w-10 mx-auto rounded-full bg-[#7ED957]/20 text-[#7ED957] flex items-center justify-center ring-2 ring-[#7ED957]">
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <span className="text-[8px] sm:text-[9px] font-bold text-[#7ED957] uppercase tracking-wider block">
              100% Address Verified
            </span>
            <h4 className="text-[13px] sm:text-[15px] font-extrabold text-white leading-tight m-0 mt-0.5">
              Sarah van der Merwe
            </h4>
            <span className="text-[9px] sm:text-[10px] text-white/80 font-medium block mt-0.5">
              4th Avenue · Linden Block 4
            </span>
          </div>

          <div className="pt-1.5 border-t border-white/15 flex items-center justify-between text-[8px] sm:text-[9px] text-white/90">
            <span>Verified Resident Pass</span>
            <span className="font-bold text-[#7ED957]">ID: #LND-9904</span>
          </div>
        </div>

        {/* Verification Check List */}
        <div className="space-y-1.5 pt-0.5">
          <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-[10px] sm:rounded-[12px] bg-white border border-[#0e0f0c]/5 text-[9px] sm:text-[10px] text-[#0e0f0c] font-semibold">
            <span className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-[#e2f6d5] text-[#054d28] flex items-center justify-center text-[8px] sm:text-[9px] font-bold shrink-0">
              ✓
            </span>
            <span>Proof of physical address confirmed</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-[10px] sm:rounded-[12px] bg-white border border-[#0e0f0c]/5 text-[9px] sm:text-[10px] text-[#0e0f0c] font-semibold">
            <span className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-[#e2f6d5] text-[#054d28] flex items-center justify-center text-[8px] sm:text-[9px] font-bold shrink-0">
              ✓
            </span>
            <span>Ward 99 municipal alerts enabled</span>
          </div>
        </div>

        {/* Enter Feed Button */}
        <div className="pt-0.5">
          <button className="w-full bg-[#7ED957] text-[#0e0f0c] text-[10.5px] sm:text-[11.5px] font-bold py-2 sm:py-2.5 rounded-full text-center">
            Verification Complete ✓
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Step 3 Mockup: Discover, Connect & Support
───────────────────────────────────────────────────────────── */
function Step3Mockup() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF7] text-left">
      {/* Mini Status Bar */}
      <div className="h-6 sm:h-8 w-full px-4 sm:px-5 pt-1.5 sm:pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-[#0e0f0c] tracking-tight shrink-0 select-none">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex items-end gap-[1px] h-2">
            <div className="w-[2px] h-[3px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2px] h-[4.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2px] h-[6px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2px] h-[7.5px] bg-[#0e0f0c] rounded-xs" />
          </div>
          <div className="w-3.5 h-2 border border-[#0e0f0c] rounded-[2px] p-[0.5px] flex items-center">
            <div className="w-full h-full bg-[#0e0f0c] rounded-[0.5px]" />
          </div>
        </div>
      </div>

      {/* Screen Header */}
      <div className="px-3.5 sm:px-5 pt-2 sm:pt-3 pb-1.5 sm:pb-2 border-b border-[#0e0f0c]/5 flex items-center justify-between">
        <div>
          <span className="text-[8px] sm:text-[9px] font-bold text-[#5C6656] uppercase tracking-[0.14em] block">
            Linden Community
          </span>
          <h3 className="text-[14px] sm:text-[17px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
            Discover & Connect
          </h3>
        </div>
        <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[10px] sm:text-[11px]">
          S
        </div>
      </div>

      {/* Live Feed Showcase */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        {/* Merchant Spotlight Card */}
        <div className="bg-white rounded-[14px] sm:rounded-[16px] p-2 sm:p-2.5 border border-[#0e0f0c]/5 flex gap-2 sm:gap-2.5">
          <div className="relative h-12 w-14 sm:h-14 sm:w-16 rounded-xl overflow-hidden shrink-0 bg-[#EBEBEB]">
            <Image
              src="/photography/goddess-cafe-linden.jpg"
              alt="Goddess Cafe"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[10px] sm:text-[11px] font-extrabold text-[#0e0f0c] block">Goddess Café</span>
              <span className="text-[8px] sm:text-[8.5px] text-[#868685]">4th Ave · 15% Resident Perk</span>
            </div>
            <span className="bg-[#e2f6d5] text-[#054d28] text-[7.5px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-full w-fit">
              Claim Perk Pass →
            </span>
          </div>
        </div>

        {/* Ward Event Card */}
        <div className="bg-[#1C472A] text-white rounded-[14px] sm:rounded-[16px] p-2.5 sm:p-3 space-y-1 sm:space-y-1.5">
          <span className="bg-[#7ED957] text-[#0e0f0c] text-[7.5px] sm:text-[8px] font-black uppercase px-2 py-0.5 rounded-full inline-block">
            This Saturday
          </span>
          <h5 className="text-[10.5px] sm:text-[11.5px] font-extrabold text-white leading-tight m-0">
            Linden Village Craft Market
          </h5>
          <span className="text-[8px] sm:text-[8.5px] text-white/80 block">
            8am–1pm · 4th Ave · 142 neighbours going
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Phone Mockup Component
───────────────────────────────────────────────────────────── */
function MockupScreenItem({ index }: { index: number }) {
  if (index === 0) return <Step1Mockup />;
  if (index === 1) return <Step2Mockup />;
  return <Step3Mockup />;
}

/* ─────────────────────────────────────────────────────────────
   Main How It Works Section Component (Dual Setup: Mobile Unpinned / Desktop Sticky)
───────────────────────────────────────────────────────────── */
export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Desktop Pinned scroll-driven active step switching
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest < 0.68) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  const steps = [
    {
      number: "01",
      title: "Choose Your Suburb",
      body: "When Hello Linden launches in 2026, choose your suburb to open your local neighbourhood feed.",
    },
    {
      number: "02",
      title: "Get Verified",
      body: "A quick resident check keeps Hello Linden a trusted space for real neighbours.",
    },
    {
      number: "03",
      title: "Discover, Connect & Support",
      body: "Explore local spots, follow community projects and support the businesses that make your suburb thrive.",
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-transparent">
      
      {/* ─────────────────────────────────────────────────────────────
          1. MOBILE SETUP (< lg): Natural Unpinned Flow (No Sticky Trapping)
      ───────────────────────────────────────────────────────────── */}
      <div className="block lg:hidden mx-auto max-w-[1240px] px-4 sm:px-6 py-12 sm:py-16 text-left">
        {/* Header Block */}
        <div className="mb-8">
          <div className="mb-2.5">
            <EyebrowPill icon={ListOrdered} variant="standard">
              How It Works
            </EyebrowPill>
          </div>
          <h2 className="m-0 font-heading text-[28px] sm:text-[36px] leading-[1.12] font-semibold tracking-[-2px] text-brand-onyx dark:text-[#FCFAF7] text-pretty mb-3">
            Getting started in 3 simple steps.
          </h2>
          <p className="m-0 text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] font-normal text-brand-muted dark:text-[#99A893]">
            Here is how Hello Linden will work when it launches in 2026.
          </p>
        </div>

        {/* 3 Sequential Step Cards with Dedicated, Non-Clipped Phone Screens */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="rounded-[28px] bg-[#F5F5F5] dark:bg-[#161814] border border-black/5 dark:border-white/5 p-6 sm:p-8 flex flex-col items-center"
            >
              {/* Step Info */}
              <div className="w-full mb-6 text-left">
                <span className="inline-block rounded-full bg-[#1C472A] text-[#7ED957] px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-2">
                  Step {step.number}
                </span>
                <h3 className="font-heading text-[22px] sm:text-[24px] font-bold text-[#0e0f0c] dark:text-[#FCFAF7] leading-tight mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#454745] dark:text-[#99A893] m-0">
                  {step.body}
                </p>
              </div>

              {/* Dedicated Proportional Phone Preview Container */}
              <div aria-label={`Step ${step.number} app screen preview: ${step.title}`} className="w-full flex items-center justify-center rounded-[22px] bg-[#e2f6d5] dark:bg-[#1C472A] pt-5 px-3 pb-0 overflow-hidden">
                <div className="relative w-[230px] sm:w-[260px] aspect-[1242/2072] select-none -mb-20 sm:-mb-24">
                  {/* Phone Screen Mockup */}
                  <div aria-hidden="true" className="absolute top-[2.8%] left-[14.65%] w-[68.6%] h-[89.5%] overflow-hidden rounded-[20px] bg-[#FCFAF7] z-0 flex flex-col shadow-inner pointer-events-none">
                    <MockupScreenItem index={index} />
                  </div>
                  {/* Phone Frame */}
                  <img
                    src="/phone-2.png"
                    alt={step.title}
                    className="relative z-10 block w-full h-auto pointer-events-none drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. DESKTOP SETUP (lg+): Pure Pinned Sticky Scroll Progression (No Tabs)
      ───────────────────────────────────────────────────────────── */}
      <div ref={containerRef} className="hidden lg:block relative h-[280vh]">
        {/* Pinned 100vh Viewport */}
        <div className="sticky top-0 h-screen w-full max-w-[1240px] mx-auto px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
          
          {/* Header Block */}
          <div className="grid grid-cols-12 gap-12 items-end mb-6 text-left">
            <div className="col-span-7 flex flex-col items-start">
              <div className="mb-2.5">
                <EyebrowPill icon={ListOrdered} variant="standard">
                  How It Works
                </EyebrowPill>
              </div>
              <h2 className="m-0 font-heading text-[50px] leading-[1.08] font-semibold tracking-[-3px] text-brand-onyx dark:text-[#FCFAF7] text-pretty">
                Getting started in 3 simple steps.
              </h2>
            </div>
            <div className="col-span-5 flex items-end">
              <p className="m-0 text-[20px] leading-[36px] font-normal text-brand-muted dark:text-[#99A893]">
                Here is how Hello Linden will work when it launches in 2026, connecting you with the people and businesses right outside your door.
              </p>
            </div>
          </div>

          {/* 2-Column Steps Layout */}
          <div className="grid grid-cols-12 gap-12 items-stretch">
            {/* Column 1: Pinned Phone Frame */}
            <div aria-label="Interactive app onboarding flow preview" className="col-span-6 flex items-end justify-center relative w-full h-full min-h-[480px] overflow-hidden rounded-3xl bg-[#e2f6d5] dark:bg-[#1C472A] pt-8 px-8 pb-0 border-none">
              <div className="relative w-[480px] xl:w-[520px] aspect-[1242/2072] select-none -mb-56 xl:-mb-64">
                <div aria-hidden="true" className="absolute top-[2.8%] left-[14.65%] w-[68.6%] h-[89.5%] overflow-hidden rounded-[38px] bg-[#FCFAF7] z-0 flex flex-col shadow-inner pointer-events-none">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: RISE_EASE }}
                      className="w-full h-full flex flex-col"
                    >
                      <MockupScreenItem index={activeIndex} />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <img
                  src="/phone-2.png"
                  alt="Hello Linden How It Works Mockup"
                  className="relative z-10 block w-full h-auto pointer-events-none drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Column 2: 3 Stacked Step Cards */}
            <div className="col-span-6 flex flex-col justify-between gap-4 h-full">
              {steps.map((step, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={step.number}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.25, ease: RISE_EASE }}
                    className={cn(
                      "relative rounded-[24px] p-7 text-left transition-all duration-400 cursor-pointer overflow-hidden border-none flex flex-col justify-end min-h-[160px] sm:min-h-[180px]",
                      isActive
                        ? "bg-[#1C472A] text-[#7ED957] shadow-[0_8px_32px_rgba(28,71,42,0.25)] opacity-100 scale-[1.01]"
                        : "bg-[#e2f6d5] dark:bg-[#162E1D] text-[#1C472A] dark:text-[#FCFAF7] opacity-90 hover:opacity-100"
                    )}
                  >
                    {/* Watermark Number */}
                    <div
                      aria-hidden="true"
                      className={cn(
                        "absolute left-7 top-5 font-heading text-[95px] font-semibold leading-none select-none pointer-events-none transition-colors duration-400",
                        isActive ? "text-[#7ED957]/20" : "text-[#1C472A]/15 dark:text-[#7ED957]/15"
                      )}
                    >
                      {step.number}
                    </div>

                    {/* Heading & Text */}
                    <div className="relative z-10 flex flex-col justify-end pt-10 mt-auto">
                      <h3
                        className={cn(
                          "font-heading text-[30px] xl:text-[32px] leading-[1.15] font-semibold tracking-[-1.28px] m-0 mb-2 transition-colors duration-400",
                          isActive ? "text-[#7ED957]" : "text-[#1C472A] dark:text-[#7ED957]"
                        )}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={cn(
                          "text-[15px] xl:text-[16px] leading-[24px] font-normal m-0 transition-colors duration-400 max-w-lg",
                          isActive ? "text-white/90" : "text-[#1C472A]/80 dark:text-[#99A893]"
                        )}
                      >
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
