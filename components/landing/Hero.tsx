"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[100dvh] w-full overflow-hidden bg-white transition-colors duration-200 dark:bg-[#0e0f0c] pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Centered Hero Content Block */}
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto z-10">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: RISE_EASE }}
            className="inline-block rounded-full border border-brand-line-soft bg-brand-panel dark:bg-[#151F17] dark:border-brand-spruce-line px-4 py-1 text-label-12 font-bold tracking-[0.14em] text-brand-hunter dark:text-brand-grass uppercase mb-6"
          >
            The Neighbourhood Network
          </motion.div>

          {/* Heading: display-xxl (96px · 600 · -4.32px) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: RISE_EASE, delay: 0.05 }}
            className="m-0 text-[46px] sm:text-[68px] md:text-[82px] lg:text-[96px] leading-[1.0] lg:leading-[96px] font-semibold tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-4.32px] text-brand-onyx dark:text-[#FCFAF7] text-pretty"
          >
            Love where you live.
          </motion.h1>
          
          {/* Subtext: body-lg (20px · 400 · 36px) - NO em dashes */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: RISE_EASE, delay: 0.15 }}
            className="mt-6 text-[18px] sm:text-[20px] leading-[32px] sm:leading-[36px] font-normal text-brand-muted dark:text-[#99A893] max-w-2xl mx-auto text-pretty"
          >
            Bringing you everyday local life. Stay informed with suburb updates, support local spots, and back community initiatives.
          </motion.p>
          
          {/* Directly below: App Store & Google Play Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: RISE_EASE, delay: 0.25 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Apple Store Button */}
            <Link
              href="#get-app"
              className="flex items-center justify-center gap-3 rounded-full bg-[#0e0f0c] dark:bg-white px-7 py-3.5 text-white dark:text-[#0e0f0c] transition-all hover:scale-105 hover:bg-[#1C472A] dark:hover:bg-[#e2f6d5]"
            >
              <svg viewBox="0 0 384 512" className="h-6 w-6 fill-current">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="flex flex-col items-start text-left">
                <span className="text-[9.5px] leading-none opacity-80 uppercase tracking-wide">Download on the</span>
                <span className="text-button-14 leading-tight font-semibold">App Store</span>
              </div>
            </Link>
            
            {/* Google Play Button */}
            <Link
              href="#get-app"
              className="flex items-center justify-center gap-3 rounded-full bg-[#0e0f0c] dark:bg-white px-7 py-3.5 text-white dark:text-[#0e0f0c] transition-all hover:scale-105 hover:bg-[#1C472A] dark:hover:bg-[#e2f6d5]"
            >
              <svg viewBox="0 0 512 512" className="h-6 w-6 fill-current">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="flex flex-col items-start text-left">
                <span className="text-[9.5px] leading-none opacity-80 uppercase tracking-wide">Get it on</span>
                <span className="text-button-14 leading-tight font-semibold">Google Play</span>
              </div>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
