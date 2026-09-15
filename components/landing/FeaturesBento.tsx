"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Compass,
  Radio,
  Users,
  Heart,
  Calendar,
  Home,
  Plus,
  ArrowRight,
} from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;
const LUXURY_SLOW_EASE = [0.19, 1, 0.22, 1] as const;

/* ─────────────────────────────────────────────────────────────
   Screen 1 · Static Home Feed Component for Bento Center Card
───────────────────────────────────────────────────────────── */
function BentoHomeFeedPhone() {
  return (
    <div aria-label="App interface preview: Linden neighbourhood home feed" className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[540px] aspect-[1242/2072] select-none -mb-20 sm:-mb-28 lg:-mb-32">
      {/* Screen Viewport - Static & Masked strictly inside phone-2.png hardware cutout */}
      <div aria-hidden="true" className="absolute top-[2.8%] left-[14.65%] w-[68.6%] h-[89.5%] overflow-hidden rounded-[26px] sm:rounded-[36px] bg-[#FCFAF7] z-0 flex flex-col shadow-inner pointer-events-none">
        <div className="w-full h-full overflow-hidden flex flex-col text-left">
          
          {/* Status Bar (No WiFi Icon) */}
          <div className="h-10 w-full px-6 pt-2 flex items-center justify-between text-[12px] font-semibold text-[#0e0f0c] tracking-tight shrink-0 select-none">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="flex items-end gap-[1.5px] h-3">
                <div className="w-[3px] h-[4px] bg-[#0e0f0c] rounded-xs" />
                <div className="w-[3px] h-[6px] bg-[#0e0f0c] rounded-xs" />
                <div className="w-[3px] h-[8px] bg-[#0e0f0c] rounded-xs" />
                <div className="w-[3px] h-[10px] bg-[#0e0f0c] rounded-xs" />
              </div>
              <div className="w-4.5 h-2.5 border border-[#0e0f0c] rounded-[2.5px] p-[0.5px] flex items-center">
                <div className="w-full h-full bg-[#0e0f0c] rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* User Header */}
          <div className="px-5 pt-2 pb-3 flex items-center justify-between">
            <div>
              <h1 className="text-[21px] sm:text-[23px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
                Hello, Sam.
              </h1>
              <span className="text-[9.5px] font-bold text-[#5C6656] uppercase tracking-[0.14em]">
                Linden · Block 4
              </span>
            </div>
            <div className="h-9 w-9 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[14px]">
              S
            </div>
          </div>

          {/* Hero Card: Forest Green Ink Banner (#1C472A) */}
          <div className="px-4">
            <div className="bg-[#1C472A] text-white rounded-[20px] p-4 space-y-1.5">
              <span className="text-[10.5px] font-bold text-[#7ED957] tracking-wide block">
                Around the neighbourhood
              </span>
              <h2 className="text-[14.5px] font-extrabold text-white leading-snug m-0">
                Sunrise Community Walk &amp; Coffee
              </h2>
              <p className="text-[11px] text-white/80 leading-relaxed m-0 pb-0.5">
                Meet fellow neighbours this Saturday 8am at Botanical Gardens for a fresh morning stroll, followed by hot brew at Goddess Café.
              </p>
              <button className="bg-white text-[#0e0f0c] text-[10.5px] font-bold px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <span>Join neighbours</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Segmented Filter Pills */}
          <div className="px-4 pt-3.5">
            <div className="bg-[#EBEBEB] p-1 rounded-full flex items-center justify-between">
              <button className="bg-[#1C472A] text-white text-[10.5px] font-bold px-3.5 py-1.5 rounded-full flex-1 text-center">
                Around you
              </button>
              <button className="text-[#454745] text-[10.5px] font-semibold px-3 py-1.5 rounded-full flex-1 text-center">
                What&apos;s on
              </button>
              <button className="text-[#454745] text-[10.5px] font-semibold px-3 py-1.5 rounded-full flex-1 text-center">
                Love Local
              </button>
            </div>
          </div>

          {/* Ticker Notice Text */}
          <div className="px-5 pt-3">
            <p className="text-[10.5px] text-[#454745] leading-relaxed m-0 truncate">
              Piano teacher wanted for an 8-year-old, must be in the neighbourhood.
            </p>
          </div>

          {/* Section Header */}
          <div className="px-5 pt-3.5 pb-2 flex items-center justify-between">
            <h3 className="text-[13px] font-extrabold text-[#1C472A] tracking-tight m-0">
              Hidden gems near you
            </h3>
            <span className="text-[10.5px] font-bold text-[#5C6656]">
              See all
            </span>
          </div>

          {/* Featured Photo Card */}
          <div className="px-4">
            <div className="relative h-[135px] w-full rounded-[18px] overflow-hidden">
              <Image
                src="/photography/linden-market-2.jpg"
                alt="Linden Village Market"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-2.5 left-2.5">
                <span className="bg-[#7ED957] text-[#0e0f0c] text-[8.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  This Saturday
                </span>
              </div>
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <h4 className="text-[13px] font-extrabold text-white leading-tight m-0">
                  Linden Village Market
                </h4>
                <span className="text-[9.5px] text-white/90 font-medium">
                  8am–1pm · 4th Avenue · 214 going
                </span>
              </div>
            </div>
          </div>

          {/* 2-Column Photo Cards Row */}
          <div className="px-4 pt-2.5 grid grid-cols-2 gap-2.5">
            <div className="bg-white rounded-[16px] overflow-hidden border border-[#0e0f0c]/5">
              <div className="relative h-20 w-full bg-[#EBEBEB]">
                <Image
                  src="/photography/breakfast.jpg"
                  alt="Weekend breakfast"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h5 className="text-[10.5px] font-extrabold text-[#0e0f0c] leading-tight m-0 truncate">
                  Weekend breakfast
                </h5>
                <span className="text-[9.5px] font-bold text-[#1C472A] block mt-0.5">
                  R85 · Goddess Cafe
                </span>
              </div>
            </div>

            <div className="bg-white rounded-[16px] overflow-hidden border border-[#0e0f0c]/5">
              <div className="relative h-20 w-full bg-[#EBEBEB]">
                <Image
                  src="/photography/whippet-linden.jpg"
                  alt="The Whippet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h5 className="text-[10.5px] font-extrabold text-[#0e0f0c] leading-tight m-0 truncate">
                  The Whippet
                </h5>
                <span className="text-[9.5px] font-bold text-[#1C472A] block mt-0.5">
                  Free entry
                </span>
              </div>
            </div>
          </div>

          {/* Marketplace Wanted Card */}
          <div className="px-4 pt-2.5 pb-16">
            <div className="bg-white rounded-[18px] p-3.5 border border-[#0e0f0c]/5 space-y-1.5">
              <span className="bg-[#F5F5F5] text-[#5C6656] text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block">
                Marketplace · Wanted
              </span>
              <p className="text-[11px] text-[#0e0f0c] font-medium leading-relaxed m-0">
                Looking for someone who can teach piano to my 8-year-old.
              </p>
              <div className="flex items-center gap-2 pt-0.5">
                <div className="h-5.5 w-5.5 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[9px]">
                  TM
                </div>
                <span className="text-[9.5px] font-semibold text-[#868685]">
                  Thandi M. · Block 4 · 2h ago
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Bottom Nav Bar */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none z-20">
          <div className="bg-[#1C472A] text-white/70 rounded-full px-4 py-2 flex items-center gap-5 shadow-lg">
            <div className="p-0.5 rounded-full ring-1 ring-[#7ED957] text-[#7ED957]">
              <Home className="h-3.5 w-3.5" />
            </div>
            <Heart className="h-3.5 w-3.5" />
            <Compass className="h-3.5 w-3.5" />
            <Calendar className="h-3.5 w-3.5" />
            <Plus className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      {/* iPhone Frame Asset Overlay */}
      <img
        src="/phone-2.png"
        alt="Hello Linden iPhone Frame"
        className="relative z-10 block w-full h-auto pointer-events-none drop-shadow-2xl"
      />
    </div>
  );
}

export function FeaturesBento() {
  return (
    <section
      id="features-bento"
      className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-[clamp(60px,10vw,120px)] bg-transparent overflow-hidden"
    >
      {/* 1. Centered Header Block */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
        <div className="mb-4">
          <EyebrowPill icon={Compass} variant="standard">
            Why Hello Hyperlocal
          </EyebrowPill>
        </div>
        <h2 className="m-0 text-[32px] sm:text-[40px] md:text-[50px] leading-[1.08] font-semibold tracking-[-3px] text-brand-onyx dark:text-[#FCFAF7] text-pretty">
          Designed for Everyday Life
        </h2>
        <p className="mt-4 text-[18px] sm:text-[20px] leading-[32px] sm:leading-[36px] text-brand-muted dark:text-[#99A893] max-w-xl mx-auto">
          Connect with verified neighbours, discover local culture, and stay informed with real-time community updates.
        </p>
      </div>

      {/* 2. Grid Architecture (3 Columns / Asymmetrical Focus: 3 : 6 : 3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column (col-span-3): Vertically Centered with Elevated Cards */}
        <div className="lg:col-span-3 flex flex-col gap-6 self-center justify-center">
          {/* Card 1: Verified Residents (card-content-elevated) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: RISE_EASE }}
            className="flex flex-col rounded-[24px] p-6 sm:p-7 bg-white dark:bg-[#161814] shadow-[0_4px_24px_rgba(14,15,12,0.1)] border-none text-left transition-all hover:-translate-y-1 duration-300"
          >
            <div className="h-11 w-11 rounded-[16px] bg-[#c5edab] dark:bg-[#1C472A] flex items-center justify-center text-[#1C472A] dark:text-[#7ED957] mb-5 shrink-0">
              <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <h3 className="text-heading-20 text-[#0e0f0c] dark:text-white mb-2">
              Verified Residents
            </h3>
            <p className="text-copy-14 text-[#454745] dark:text-white/70 leading-relaxed">
              Every profile is authenticated to a physical address to keep community discussions trusted and troll-free.
            </p>
          </motion.div>

          {/* Card 2: Discover Local Spots (card-content-elevated) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: RISE_EASE, delay: 0.1 }}
            className="flex flex-col rounded-[24px] p-6 sm:p-7 bg-white dark:bg-[#161814] shadow-[0_4px_24px_rgba(14,15,12,0.1)] border-none text-left transition-all hover:-translate-y-1 duration-300"
          >
            <div className="h-11 w-11 rounded-[16px] bg-[#c5edab] dark:bg-[#1C472A] flex items-center justify-center text-[#1C472A] dark:text-[#7ED957] mb-5 shrink-0">
              <Compass className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <h3 className="text-heading-20 text-[#0e0f0c] dark:text-white mb-2">
              Discover Local Spots
            </h3>
            <p className="text-copy-14 text-[#454745] dark:text-white/70 leading-relaxed">
              Explore independent neighbourhood cafes, weekend markets, and community-recommended local artisans.
            </p>
          </motion.div>
        </div>

        {/* Center Column (col-span-6): Bottom-Aligned with Flush Mockup Bleed (pb-0), No Border, Only Top Rounded */}
        <div className="lg:col-span-6 flex justify-center self-end items-end w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: LUXURY_SLOW_EASE, delay: 0.1 }}
            className="w-full rounded-t-[32px] rounded-b-none overflow-hidden relative min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex flex-col justify-end items-center pt-8 sm:pt-10 px-3 sm:px-6 pb-0 bg-[#e2f6d5] dark:bg-[#1C472A] border-none"
          >
            {/* Phone Device with Slower, Highly-Eased Upward Glide */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.35, ease: LUXURY_SLOW_EASE, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <BentoHomeFeedPhone />
            </motion.div>

            {/* Soft White Gradient Overlay Over Bottom of Center Column & Phone Mockup */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-32 sm:h-44 pointer-events-none bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#0e0f0c] dark:via-[#0e0f0c]/80 z-20"
            />
          </motion.div>
        </div>

        {/* Right Column (col-span-3): Vertically Centered with Elevated Cards */}
        <div className="lg:col-span-3 flex flex-col gap-6 self-center justify-center">
          {/* Card 3: Real-Time Ward Alerts (card-content-elevated) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: RISE_EASE, delay: 0.2 }}
            className="flex flex-col rounded-[24px] p-6 sm:p-7 bg-white dark:bg-[#161814] shadow-[0_4px_24px_rgba(14,15,12,0.1)] border-none text-left transition-all hover:-translate-y-1 duration-300"
          >
            <div className="h-11 w-11 rounded-[16px] bg-[#c5edab] dark:bg-[#1C472A] flex items-center justify-center text-[#1C472A] dark:text-[#7ED957] mb-5 shrink-0">
              <Radio className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <h3 className="text-heading-20 text-[#0e0f0c] dark:text-white mb-2">
              Real-Time Ward Alerts
            </h3>
            <p className="text-copy-14 text-[#454745] dark:text-white/70 leading-relaxed">
              Stay informed on municipal notices, power restoration timelines, and safety updates without noisy ad feeds.
            </p>
          </motion.div>

          {/* Card 4: Back Ward Projects (card-content-elevated) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: RISE_EASE, delay: 0.3 }}
            className="flex flex-col rounded-[24px] p-6 sm:p-7 bg-white dark:bg-[#161814] shadow-[0_4px_24px_rgba(14,15,12,0.1)] border-none text-left transition-all hover:-translate-y-1 duration-300"
          >
            <div className="h-11 w-11 rounded-[16px] bg-[#c5edab] dark:bg-[#1C472A] flex items-center justify-center text-[#1C472A] dark:text-[#7ED957] mb-5 shrink-0">
              <Users className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <h3 className="text-heading-20 text-[#0e0f0c] dark:text-white mb-2">
              Back Ward Projects
            </h3>
            <p className="text-copy-14 text-[#454745] dark:text-white/70 leading-relaxed">
              Organise community cleanups, support local park restorations, and track neighbourhood progress together.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
