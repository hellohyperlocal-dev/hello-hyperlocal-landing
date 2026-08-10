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
} from "lucide-react";
import { cn } from "@/lib/utils";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────────────────────────
   Step 1 Mockup: Suburb Selector & Search
───────────────────────────────────────────────────────────── */
function Step1Mockup() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF7] text-left">
      {/* Mini Status Bar */}
      <div className="h-8 w-full px-5 pt-2 flex items-center justify-between text-[11px] font-semibold text-[#0e0f0c] tracking-tight shrink-0 select-none">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="flex items-end gap-[1.5px] h-2.5">
            <div className="w-[2.5px] h-[3.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2.5px] h-[5.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2.5px] h-[7.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2.5px] h-[9.5px] bg-[#0e0f0c] rounded-xs" />
          </div>
          <div className="w-4 h-2.5 border border-[#0e0f0c] rounded-[2px] p-[0.5px] flex items-center">
            <div className="w-full h-full bg-[#0e0f0c] rounded-[0.5px]" />
          </div>
        </div>
      </div>

      {/* Screen Header */}
      <div className="px-5 pt-3 pb-2 border-b border-[#0e0f0c]/5">
        <span className="text-[9px] font-bold text-[#5C6656] uppercase tracking-[0.14em] block">
          Welcome to Hello Hyperlocal
        </span>
        <h3 className="text-[17px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
          Select Your Suburb
        </h3>
      </div>

      {/* Suburb Search Bar */}
      <div className="p-4 space-y-3">
        <div className="relative">
          <input
            type="text"
            value="Linden, Johannesburg"
            readOnly
            className="w-full text-[11.5px] font-bold pl-8 pr-3 py-2.5 rounded-[14px] bg-[#EBEBEB] text-[#0e0f0c] border-none outline-none"
          />
          <Search className="absolute left-2.5 top-3 h-3.5 w-3.5 text-[#5C6656]" />
        </div>

        {/* Selected Suburb Pill List */}
        <div className="space-y-2 pt-1">
          {/* Active Option: Linden */}
          <div className="p-3 rounded-[16px] bg-[#e2f6d5] border border-[#054d28]/15 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-full bg-[#1C472A] text-white flex items-center justify-center">
                <MapPin className="h-3.5 w-3.5 text-[#7ED957]" />
              </div>
              <div>
                <span className="text-[12px] font-extrabold text-[#054d28] block leading-tight">
                  Linden
                </span>
                <span className="text-[9px] font-medium text-[#054d28]/80">
                  Ward 99 · Johannesburg North
                </span>
              </div>
            </div>
            <span className="h-5 w-5 rounded-full bg-[#1C472A] text-white flex items-center justify-center text-[10px] font-bold">
              ✓
            </span>
          </div>

          {/* Suburb Option 2: Greenside */}
          <div className="p-2.5 rounded-[14px] bg-white border border-[#0e0f0c]/5 flex items-center justify-between opacity-70">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#868685]" />
              <span className="text-[11px] font-bold text-[#0e0f0c]">Greenside</span>
            </div>
            <span className="text-[8.5px] text-[#868685]">0.8 km away</span>
          </div>

          {/* Suburb Option 3: Parkhurst */}
          <div className="p-2.5 rounded-[14px] bg-white border border-[#0e0f0c]/5 flex items-center justify-between opacity-70">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#868685]" />
              <span className="text-[11px] font-bold text-[#0e0f0c]">Parkhurst</span>
            </div>
            <span className="text-[8.5px] text-[#868685]">1.4 km away</span>
          </div>
        </div>

        {/* Continue Button */}
        <div className="pt-2">
          <button className="w-full bg-[#1C472A] text-white text-[11.5px] font-bold py-2.5 rounded-full text-center flex items-center justify-center gap-1.5 shadow-sm">
            <span>Unlock Linden Feed</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#7ED957]" />
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
      <div className="h-8 w-full px-5 pt-2 flex items-center justify-between text-[11px] font-semibold text-[#0e0f0c] tracking-tight shrink-0 select-none">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="flex items-end gap-[1.5px] h-2.5">
            <div className="w-[2.5px] h-[3.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2.5px] h-[5.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2.5px] h-[7.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2.5px] h-[9.5px] bg-[#0e0f0c] rounded-xs" />
          </div>
          <div className="w-4 h-2.5 border border-[#0e0f0c] rounded-[2px] p-[0.5px] flex items-center">
            <div className="w-full h-full bg-[#0e0f0c] rounded-[0.5px]" />
          </div>
        </div>
      </div>

      {/* Screen Header */}
      <div className="px-5 pt-3 pb-2 border-b border-[#0e0f0c]/5">
        <span className="text-[9px] font-bold text-[#5C6656] uppercase tracking-[0.14em] block">
          Trust & Safety
        </span>
        <h3 className="text-[17px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
          Resident Verification
        </h3>
      </div>

      {/* Verification Badge Card */}
      <div className="p-4 space-y-3">
        <div className="bg-[#1C472A] text-white rounded-[20px] p-4 text-center space-y-2 relative overflow-hidden">
          <div className="h-10 w-10 mx-auto rounded-full bg-[#7ED957]/20 text-[#7ED957] flex items-center justify-center ring-2 ring-[#7ED957]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-[#7ED957] uppercase tracking-wider block">
              100% Address Verified
            </span>
            <h4 className="text-[15px] font-extrabold text-white leading-tight m-0 mt-0.5">
              Sarah van der Merwe
            </h4>
            <span className="text-[10px] text-white/80 font-medium block mt-0.5">
              4th Avenue · Linden Block 4
            </span>
          </div>

          <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[9px] text-white/90">
            <span>Verified Resident Pass</span>
            <span className="font-bold text-[#7ED957]">ID: #LND-9904</span>
          </div>
        </div>

        {/* Verification Check List */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center gap-2 p-2 rounded-[12px] bg-white border border-[#0e0f0c]/5 text-[10px] text-[#0e0f0c] font-semibold">
            <span className="h-4 w-4 rounded-full bg-[#e2f6d5] text-[#054d28] flex items-center justify-center text-[9px] font-bold shrink-0">
              ✓
            </span>
            <span>Proof of physical address confirmed</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-[12px] bg-white border border-[#0e0f0c]/5 text-[10px] text-[#0e0f0c] font-semibold">
            <span className="h-4 w-4 rounded-full bg-[#e2f6d5] text-[#054d28] flex items-center justify-center text-[9px] font-bold shrink-0">
              ✓
            </span>
            <span>Ward 99 municipal alerts enabled</span>
          </div>
        </div>

        {/* Enter Feed Button */}
        <div className="pt-1">
          <button className="w-full bg-[#7ED957] text-[#0e0f0c] text-[11.5px] font-bold py-2.5 rounded-full text-center">
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
      <div className="h-8 w-full px-5 pt-2 flex items-center justify-between text-[11px] font-semibold text-[#0e0f0c] tracking-tight shrink-0 select-none">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="flex items-end gap-[1.5px] h-2.5">
            <div className="w-[2.5px] h-[3.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2.5px] h-[5.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2.5px] h-[7.5px] bg-[#0e0f0c] rounded-xs" />
            <div className="w-[2.5px] h-[9.5px] bg-[#0e0f0c] rounded-xs" />
          </div>
          <div className="w-4 h-2.5 border border-[#0e0f0c] rounded-[2px] p-[0.5px] flex items-center">
            <div className="w-full h-full bg-[#0e0f0c] rounded-[0.5px]" />
          </div>
        </div>
      </div>

      {/* Screen Header */}
      <div className="px-5 pt-3 pb-2 border-b border-[#0e0f0c]/5 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold text-[#5C6656] uppercase tracking-[0.14em] block">
            Linden Community
          </span>
          <h3 className="text-[17px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
            Discover & Connect
          </h3>
        </div>
        <div className="h-7 w-7 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[11px]">
          S
        </div>
      </div>

      {/* Live Feed Showcase */}
      <div className="p-4 space-y-3">
        {/* Merchant Spotlight Card */}
        <div className="bg-white rounded-[16px] p-2.5 border border-[#0e0f0c]/5 flex gap-2.5">
          <div className="relative h-14 w-16 rounded-xl overflow-hidden shrink-0 bg-[#EBEBEB]">
            <Image
              src="/photography/goddess-cafe-linden.jpg"
              alt="Goddess Cafe"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-extrabold text-[#0e0f0c] block">Goddess Café</span>
              <span className="text-[8.5px] text-[#868685]">4th Ave · 15% Resident Perk</span>
            </div>
            <span className="bg-[#e2f6d5] text-[#054d28] text-[8px] font-bold px-1.5 py-0.5 rounded-full w-fit">
              Claim Perk Pass →
            </span>
          </div>
        </div>

        {/* Ward Event Card */}
        <div className="bg-[#1C472A] text-white rounded-[16px] p-3 space-y-1.5">
          <span className="bg-[#7ED957] text-[#0e0f0c] text-[8px] font-black uppercase px-2 py-0.5 rounded-full inline-block">
            This Saturday
          </span>
          <h5 className="text-[11.5px] font-extrabold text-white leading-tight m-0">
            Linden Village Craft Market
          </h5>
          <span className="text-[8.5px] text-white/80 block">
            8am–1pm · 4th Ave · 142 neighbours going
          </span>
        </div>

        {/* Ticker Post */}
        <div className="bg-[#EBEBEB] p-2.5 rounded-[12px] text-[9.5px] text-[#454745] font-medium">
          🌿 <strong>Spruit Clean-up:</strong> 18 neighbours signed up for Saturday!
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Phone Frame Container (Top-Half Showcase with Bottom Bleed)
───────────────────────────────────────────────────────────── */
function StepsPhoneMockup({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative w-[360px] sm:w-[440px] lg:w-[490px] xl:w-[530px] aspect-[1242/2072] select-none -mb-40 sm:-mb-52 lg:-mb-60 xl:-mb-68">
      {/* Screen Viewport - Masked strictly inside phone-2.png hardware cutout */}
      <div className="absolute top-[2.8%] left-[14.65%] w-[68.6%] h-[89.5%] overflow-hidden rounded-[28px] sm:rounded-[38px] bg-[#FCFAF7] z-0 flex flex-col shadow-inner pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: RISE_EASE }}
            className="w-full h-full flex flex-col"
          >
            {activeIndex === 0 && <Step1Mockup />}
            {activeIndex === 1 && <Step2Mockup />}
            {activeIndex === 2 && <Step3Mockup />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* iPhone Frame Asset from public/phone-2.png */}
      <img
        src="/phone-2.png"
        alt="Hello Linden How It Works Mockup"
        className="relative z-10 block w-full h-auto pointer-events-none drop-shadow-2xl"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main How It Works Section Component (with Sticky Scroll Sequence)
───────────────────────────────────────────────────────────── */
export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pinned scroll-driven active step switching
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
      title: "Download & Select Suburb",
      body: "Get the Hello Hyperlocal app on iOS or Android and choose your suburb to unlock your local neighbourhood feed instantly.",
    },
    {
      number: "02",
      title: "Get Verified in Seconds",
      body: "Complete quick resident verification to ensure a trusted, secure, and 100% spam-free community space for real neighbours.",
    },
    {
      number: "03",
      title: "Discover, Connect & Support",
      body: "Explore local spots, stay up-to-date with ward community projects, and support the local businesses that make your suburb thrive.",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative h-[260vh] sm:h-[300vh] bg-transparent"
    >
      {/* Pinned / Sticky 100vh Viewport */}
      <div className="sticky top-0 h-screen w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
        
        {/* 1. Header Block (2-Column Responsive Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-6 sm:mb-8 text-left">
          {/* Column 1: Eyebrow pill + Section Heading */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-block rounded-full border border-brand-line-soft bg-brand-panel dark:bg-[#151F17] dark:border-brand-spruce-line px-4 py-1 text-label-12 font-bold tracking-[0.14em] text-brand-hunter dark:text-brand-grass uppercase mb-2.5">
              How It Works
            </div>
            <h2 className="m-0 text-[32px] sm:text-[40px] md:text-[50px] leading-[1.08] font-semibold tracking-[-3px] text-brand-onyx dark:text-[#FCFAF7] text-pretty">
              Getting started in 3 simple steps.
            </h2>
          </div>

          {/* Column 2: Section Subtext */}
          <div className="lg:col-span-5 flex items-end">
            <p className="m-0 text-[18px] sm:text-[20px] leading-[32px] sm:leading-[36px] font-normal text-brand-muted dark:text-[#99A893]">
              Joining your verified neighbourhood network is completely effortless. Get started in less than two minutes and immediately connect with the people and businesses right outside your door.
            </p>
          </div>
        </div>

        {/* 2. Steps Layout: 2-Column Split (Col 1: Phone Mockup, Col 2: 3 Step Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1 (lg:col-span-6): Phone Mockup (Full Height Matched to Column 2 Cards) */}
          <div className="lg:col-span-6 flex items-end justify-center relative w-full h-full min-h-[380px] lg:min-h-0 overflow-hidden rounded-3xl bg-[#e2f6d5] dark:bg-[#1C472A] pt-8 px-4 sm:px-8 pb-0 border-none">
            <StepsPhoneMockup activeIndex={activeIndex} />
          </div>

          {/* Column 2 (lg:col-span-6): 3 Step Cards Below Each Other */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3.5 sm:gap-4 h-full">
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
                    "relative rounded-[24px] p-6 sm:p-7 text-left transition-all duration-400 cursor-pointer overflow-hidden border-none flex flex-col justify-end min-h-[160px] sm:min-h-[180px]",
                    isActive
                      ? "bg-[#1C472A] text-[#7ED957] shadow-[0_8px_32px_rgba(28,71,42,0.25)] opacity-100 scale-[1.01]"
                      : "bg-[#e2f6d5] dark:bg-[#162E1D] text-[#0e0f0c] dark:text-[#FCFAF7] opacity-85 hover:opacity-100"
                  )}
                >
                  {/* Huge Watermark Number in Background (Full Visibility at Top) */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute left-5 sm:left-7 top-4 sm:top-5 text-[80px] sm:text-[95px] font-semibold leading-none select-none pointer-events-none transition-colors duration-400",
                      isActive ? "text-[#7ED957]/20" : "text-[#0e0f0c]/12 dark:text-white/12"
                    )}
                  >
                    {step.number}
                  </div>

                  {/* Heading & Text Contained in their Own Container Aligned to the Bottom */}
                  <div className="relative z-10 flex flex-col justify-end pt-8 sm:pt-10 mt-auto">
                    <h3
                      className={cn(
                        "text-[32px] leading-[1.15] font-semibold tracking-[-1.28px] m-0 mb-2 transition-colors duration-400",
                        isActive ? "text-[#7ED957]" : "text-[#0e0f0c] dark:text-white"
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "text-[15px] sm:text-[16px] leading-[24px] font-normal m-0 transition-colors duration-400 max-w-lg",
                        isActive ? "text-white/90" : "text-[#454745] dark:text-[#99A893]"
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
    </section>
  );
}
