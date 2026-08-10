"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────────────────────────
   In-App Mockup Screen for Final CTA
───────────────────────────────────────────────────────────── */
function CtaMockupScreen() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF7] text-left select-none">
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
      <div className="px-5 pt-3 pb-2.5 border-b border-[#0e0f0c]/5 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-[#1C472A] text-[#7ED957] flex items-center justify-center font-black text-[11px]">
            H
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-[12.5px] font-extrabold text-[#0e0f0c] leading-none">Hello Linden</span>
              <span className="h-3 w-3 rounded-full bg-[#7ED957] text-[#0e0f0c] inline-flex items-center justify-center text-[7px] font-black">✓</span>
            </div>
            <span className="text-[8.5px] text-[#868685] font-medium">1,420 Active Residents</span>
          </div>
        </div>
        <span className="text-[8.5px] font-bold bg-[#e2f6d5] text-[#054d28] px-2 py-0.5 rounded-full">
          Live
        </span>
      </div>

      {/* Screen Feed Showcase */}
      <div className="p-4 space-y-2.5">
        {/* Resident Welcome Pass Banner */}
        <div className="bg-[#1C472A] text-white rounded-[16px] p-3 relative overflow-hidden">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold uppercase tracking-wider text-[#7ED957]">
              Verified Suburb Feed
            </span>
            <ShieldCheck className="h-3.5 w-3.5 text-[#7ED957]" />
          </div>
          <h4 className="text-[13px] font-extrabold text-white leading-tight m-0">
            Welcome to your neighbourhood
          </h4>
          <span className="text-[9px] text-white/80 block mt-0.5">
            Real neighbours · Ward 99 alerts · Local perks
          </span>
        </div>

        {/* Merchant Perk Card */}
        <div className="bg-white rounded-[14px] p-2.5 border border-[#0e0f0c]/5 flex gap-2.5 items-center">
          <div className="relative h-11 w-12 rounded-xl overflow-hidden shrink-0 bg-[#EBEBEB]">
            <Image
              src="/photography/goddess-cafe-linden.jpg"
              alt="Goddess Cafe"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10.5px] font-extrabold text-[#0e0f0c] block truncate">
              Goddess Café · 15% Resident Pass
            </span>
            <span className="text-[8px] text-[#868685] block">4th Ave · Claimed by 48 neighbours</span>
          </div>
          <span className="h-6 px-2.5 rounded-full bg-[#7ED957] text-[#0e0f0c] text-[8px] font-black inline-flex items-center shrink-0">
            Claim
          </span>
        </div>

        {/* Municipal / Ward Alert */}
        <div className="bg-[#EBEBEB] p-2 rounded-[12px] text-[9px] text-[#454745] font-medium flex items-center gap-1.5">
          <span>⚡</span>
          <span className="truncate"><strong>Substation 4:</strong> Power fully restored on 4th Ave</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Phone Frame Component (Top-Half Showcase with Bottom Bleed)
───────────────────────────────────────────────────────────── */
function CtaPhoneMockup() {
  return (
    <div className="relative w-[340px] sm:w-[400px] lg:w-[440px] aspect-[1242/2072] select-none -mb-36 sm:-mb-48 lg:-mb-56">
      {/* Screen Viewport - Masked strictly inside phone-2.png hardware cutout */}
      <div className="absolute top-[2.8%] left-[14.65%] w-[68.6%] h-[89.5%] overflow-hidden rounded-[26px] sm:rounded-[34px] bg-[#FCFAF7] z-0 flex flex-col shadow-inner pointer-events-none">
        <CtaMockupScreen />
      </div>

      {/* iPhone Frame Asset from public/phone-2.png */}
      <img
        src="/phone-2.png"
        alt="Hello Hyperlocal App Showcase"
        className="relative z-10 block w-full h-auto pointer-events-none drop-shadow-2xl"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Final Download CTA Section Component (Pure 2-Column Card)
───────────────────────────────────────────────────────────── */
export function DownloadCta() {
  return (
    <section
      id="get-app"
      className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-[clamp(60px,10vw,120px)] bg-transparent"
    >
      {/* 1. Pure 2-Column Banner Card in card-feature-dark-primary System */}
      <div className="rounded-[32px] sm:rounded-[36px] bg-[#1C472A] text-white pt-10 sm:pt-14 px-8 sm:px-12 lg:px-14 pb-0 overflow-hidden relative border-none">
        
        {/* Direct 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end relative z-10">
          
          {/* Column 1 (lg:col-span-7): Pitch & Dual Download CTAs (No arrows on buttons) */}
          <div className="lg:col-span-7 flex flex-col text-left justify-center pb-10 sm:pb-14">
            <div className="inline-block rounded-full bg-[#7ED957] px-4 py-1 text-label-12 font-bold tracking-[0.14em] text-[#0e0f0c] uppercase mb-4 w-fit">
              Get the App
            </div>
            
            <h2 className="m-0 text-[32px] sm:text-[40px] md:text-[50px] leading-[1.08] font-semibold tracking-[-3px] text-pretty text-[#7ED957]">
              Love where you live. Join your neighbourhood network today.
            </h2>
            
            <p className="mt-4 text-[18px] sm:text-[20px] leading-[32px] sm:leading-[36px] font-normal text-white/90 max-w-xl">
              Get instant access to verified local feeds, emergency alerts, suburb events, and nearby merchant specials in your local area.
            </p>

            {/* Dual App Store CTAs without arrows */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {/* Apple Store CTA */}
              <Link
                href="#"
                className="group flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 duration-200 px-6 py-3.5"
              >
                <svg viewBox="0 0 384 512" className="h-6 w-6 fill-current">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[9px] leading-none opacity-80 uppercase tracking-wide">Download on the</span>
                  <span className="text-button-14 leading-tight font-semibold">App Store</span>
                </div>
              </Link>

              {/* Google Play CTA */}
              <Link
                href="#"
                className="group flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 duration-200 px-6 py-3.5"
              >
                <svg viewBox="0 0 512 512" className="h-6 w-6 fill-current">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[9px] leading-none opacity-80 uppercase tracking-wide">Get it on</span>
                  <span className="text-button-14 leading-tight font-semibold">Google Play</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2 (lg:col-span-5): Phone Mockup Bleeding Flush at Bottom of the Card */}
          <div className="lg:col-span-5 flex items-end justify-center relative w-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: RISE_EASE, delay: 0.15 }}
              className="flex items-end justify-center w-full"
            >
              <CtaPhoneMockup />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
