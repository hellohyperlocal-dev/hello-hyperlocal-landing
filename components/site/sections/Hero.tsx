"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ShieldCheck, Calendar } from "lucide-react";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemFadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: RISE_EASE,
    },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: RISE_EASE,
    },
  },
};

const mockupContainerVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: RISE_EASE,
    },
  },
};

const floatLeftVariants: Variants = {
  hidden: { opacity: 0, x: -35, y: 15, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 0.9,
    },
  },
};

const floatRightTopVariants: Variants = {
  hidden: { opacity: 0, x: 35, y: 15, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 0.9,
    },
  },
};

const floatRightBottomVariants: Variants = {
  hidden: { opacity: 0, x: 35, y: 15, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 0.9,
    },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 flex flex-col items-center justify-center">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Centered Hero Content Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto z-10"
        >
          {/* Eyebrow */}
          <motion.div variants={itemFadeUpVariants} className="mb-6">
            <SectionEyebrow label="Hello Linden · Coming in 2026" tone="light" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemFadeUpVariants}
            className="m-0 font-heading text-[44px] sm:text-[68px] md:text-[86px] lg:text-[100px] xl:text-[110px] leading-[1.0] lg:leading-[112px] font-semibold tracking-[-2px] sm:tracking-[-3.5px] lg:tracking-[-5.5px] text-[#1C472A] whitespace-normal lg:whitespace-nowrap max-w-full mx-auto"
          >
            Love Where You Live.
          </motion.h1>
          
          {/* Subtext */}
          <motion.p
            variants={itemFadeUpVariants}
            className="mt-6 text-[18px] sm:text-[20px] leading-[32px] sm:leading-[36px] font-normal text-hh-muted max-w-4xl mx-auto text-pretty"
          >
            We&apos;re building Hello Linden as a warm digital home for our suburb. A Place to discover hidden local spots, back neighbourhood businesses, and stay genuinely connected to the people next door.
          </motion.p>
          
          {/* Store CTA Buttons */}
          <motion.div
            variants={ctaVariants}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 relative z-30"
          >
            {/* Apple Store Button */}
            <Link
              href="/join"
              aria-label="Coming Soon to App Store"
              className="flex items-center justify-center gap-3 rounded-button bg-[#0e0f0c] w-[210px] sm:w-[230px] py-3.5 px-4 text-white transition-all hover:scale-105 hover:bg-[#1C472A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] focus-visible:ring-offset-2"
            >
              <svg viewBox="0 0 384 512" aria-hidden="true" className="h-6 w-6 fill-current shrink-0">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="flex flex-col items-start text-left whitespace-nowrap">
                <span className="text-[9.5px] leading-none opacity-80 uppercase tracking-wide">Coming Soon to</span>
                <span className="text-button-14 leading-tight font-semibold">App Store</span>
              </div>
            </Link>
            
            {/* Google Play Button */}
            <Link
              href="/join"
              aria-label="Available Soon on Google Play"
              className="flex items-center justify-center gap-3 rounded-button bg-[#0e0f0c] w-[210px] sm:w-[230px] py-3.5 px-4 text-white transition-all hover:scale-105 hover:bg-[#1C472A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] focus-visible:ring-offset-2"
            >
              <svg viewBox="0 0 512 512" aria-hidden="true" className="h-6 w-6 fill-current shrink-0">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="flex flex-col items-start text-left whitespace-nowrap">
                <span className="text-[9.5px] leading-none opacity-80 uppercase tracking-wide">Available Soon on</span>
                <span className="text-button-14 leading-tight font-semibold">Google Play</span>
              </div>
            </Link>
          </motion.div>

          {/* iPhone Mockup Container with Floating Notification Cards */}
          <motion.div
            variants={mockupContainerVariants}
            className="relative isolate mt-12 sm:mt-16 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[560px] mx-auto flex items-center justify-center"
          >
            {/* Radial Backdrop Glow */}
            <div
              aria-hidden="true"
              className="absolute top-2 sm:top-6 left-1/2 -translate-x-1/2 w-[130%] sm:w-[155%] h-[360px] sm:h-[420px] pointer-events-none select-none z-0 opacity-85 [background:radial-gradient(50%_50%_at_50%_35%,#cdffad_0%,transparent_100%)] blur-2xl"
            />
            
            {/* Card 1: Resident Shared Photo (Left) */}
            <motion.div
              variants={floatLeftVariants}
              className="absolute -left-6 sm:-left-16 md:-left-24 lg:-left-36 top-[24%] sm:top-[28%] z-20 pointer-events-auto select-none"
            >
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[20px] sm:rounded-[22px] bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-[0_8px_30px_rgba(14,15,12,0.12)] border border-[#0e0f0c]/6 flex items-center gap-3 text-left"
              >
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-[14px] bg-[#1C472A] text-white flex items-center justify-center shrink-0 font-bold text-[12.5px]">
                  LK
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] sm:text-[13px] font-bold text-[#0e0f0c] leading-tight">
                      Liam K.
                    </span>
                    <span className="text-[9px] font-semibold text-[#868685]">
                      4m ago
                    </span>
                  </div>
                  <span className="text-[10.5px] sm:text-[11px] text-[#454745] leading-tight mt-0.5">
                    Shared 3 photos from Botanical Gardens 📸
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 2: Community Event - Sunrise Walk (Top Right) */}
            <motion.div
              variants={floatRightTopVariants}
              className="absolute -right-6 sm:-right-16 md:-right-24 lg:-right-36 top-[14%] sm:top-[18%] z-20 pointer-events-auto select-none"
            >
              <motion.div
                animate={{ y: [2.5, -2.5, 2.5] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="rounded-[20px] sm:rounded-[22px] bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-[0_8px_30px_rgba(14,15,12,0.12)] border border-[#0e0f0c]/6 flex items-center gap-3 text-left"
              >
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-[14px] bg-[#ffd11a] text-[#4a3b1c] flex items-center justify-center shrink-0">
                  <Calendar className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] sm:text-[13px] font-bold text-[#0e0f0c] leading-tight">
                      Sunrise Walk
                    </span>
                    <span className="text-[9px] font-bold text-[#054d28] bg-[#e2f6d5] px-1.5 py-0.5 rounded-full">
                      Going ✓
                    </span>
                  </div>
                  <span className="text-[10.5px] sm:text-[11px] text-[#868685] leading-tight mt-0.5">
                    18 neighbours attending · Sat 8am
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 3: Ward 99 Alert (Bottom Right) */}
            <motion.div
              variants={floatRightBottomVariants}
              className="absolute -right-6 sm:-right-16 md:-right-24 lg:-right-36 top-[38%] sm:top-[42%] z-20 pointer-events-auto select-none"
            >
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="rounded-[20px] sm:rounded-[22px] bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-[0_8px_30px_rgba(14,15,12,0.12)] border border-[#0e0f0c]/6 flex items-center gap-3 text-left"
              >
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-[14px] bg-[#c5edab] text-[#1C472A] flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] sm:text-[13px] font-bold text-[#0e0f0c] leading-tight">
                      Ward 99 Alert
                    </span>
                    <span className="text-[9px] font-semibold text-[#868685]">
                      Just now
                    </span>
                  </div>
                  <span className="text-[10.5px] sm:text-[11px] text-[#454745] leading-tight mt-0.5">
                    Power restored to 4th Avenue
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* iPhone Mockup Image with fade mask */}
            <div className="relative z-10 w-full flex items-center justify-center select-none pointer-events-none translate-x-3 sm:translate-x-5 lg:translate-x-6 [mask-image:linear-gradient(to_bottom,black_50%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_98%)]">
              <Image
                src="/iPhone copy.png"
                alt="Hello Linden iPhone App Preview"
                width={300}
                height={772}
                priority
                sizes="(min-width: 1280px) 300px, 100vw"
                className="w-full h-auto object-contain block"
              />
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
