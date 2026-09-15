"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Compass, Home, ArrowLeft } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";
import { RollingText } from "@/components/ui/RollingText";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-white dark:bg-[#0e0f0c] text-foreground flex flex-col font-sans transition-colors duration-200 justify-between">
      
      {/* Top Clean Header */}
      <header className="w-full border-b border-black/5 dark:border-white/10 bg-white/95 dark:bg-[#0e0f0c]/95 backdrop-blur-md px-4 sm:px-8 py-4">
        <div className="mx-auto max-w-[1240px] flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-heading-20 font-bold text-[#1C472A] dark:text-[#7ED957] transition-colors"
          >
            Hello Hyperlocal
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1C472A] dark:text-[#7ED957] hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Hero Section - Centered Single-Screen Experience */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: RISE_EASE }}
            className="mb-6"
          >
            <EyebrowPill icon={Compass} variant="standard">
              Page Not Found
            </EyebrowPill>
          </motion.div>

          {/* 404 Headline in Font Mega (165px · 600 · -9.9px) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: RISE_EASE, delay: 0.05 }}
            className="m-0 text-[110px] sm:text-[140px] md:text-[165px] leading-[0.88] font-semibold tracking-[-4px] sm:tracking-[-7px] md:tracking-[-9.9px] text-[#1C472A] dark:text-[#7ED957] select-none"
          >
            404
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: RISE_EASE, delay: 0.15 }}
            className="mt-6 sm:mt-8 m-0 text-[26px] sm:text-[34px] md:text-[40px] leading-[1.12] font-semibold tracking-[-1.5px] sm:tracking-[-2px] text-[#0e0f0c] dark:text-[#FCFAF7] text-pretty"
          >
            Looks like you&apos;ve wandered outside your suburb.
          </motion.h2>

          {/* Body description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: RISE_EASE, delay: 0.25 }}
            className="mt-4 text-[17px] sm:text-[19px] leading-[28px] sm:leading-[32px] text-brand-muted dark:text-[#99A893] max-w-lg mx-auto text-pretty"
          >
            The street, notice, or community page you are looking for doesn&apos;t exist or has moved.
          </motion.p>

          {/* Primary Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: RISE_EASE, delay: 0.35 }}
            className="mt-8 sm:mt-10 flex items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#7ED957] px-8 py-3.5 text-[15px] font-semibold text-[#0e0f0c] transition-all hover:bg-[#cdffad] hover:scale-105"
            >
              <Home className="h-4 w-4" />
              <RollingText text="Back to Home" />
              <ArrowFlipIcon size={14} className="opacity-90" />
            </Link>
          </motion.div>

        </div>
      </main>

      {/* Minimalist Bottom Bar */}
      <footer className="w-full border-t border-black/5 dark:border-white/5 py-4 px-4 text-center">
        <p className="text-[12px] text-brand-muted dark:text-[#99A893] m-0">
          © {new Date().getFullYear()} Hello Hyperlocal (Pty) Ltd · Love where you live.
        </p>
      </footer>

    </div>
  );
}
