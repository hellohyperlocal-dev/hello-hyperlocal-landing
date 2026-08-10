"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#business", label: "For business" },
  { href: "#pillars", label: "Our commitment" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-4 sm:pt-6 px-4 sm:px-6">
      <div className="pointer-events-auto mx-auto w-full max-w-[1280px] rounded-full bg-white/95 dark:bg-[#151F17]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(14,15,12,0.08)] border border-[#0e0f0c]/5 dark:border-white/5 px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between transition-all duration-200">
        
        {/* Wordmark */}
        <Link
          href="#top"
          className="flex shrink-0 items-center text-heading-20 font-bold text-brand-onyx dark:text-[#FCFAF7] transition-colors hover:text-brand-hunter dark:hover:text-[#7ED957]"
          onClick={() => setMobileMenuOpen(false)}
        >
          Hello Hyperlocal
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-[clamp(16px,2.5vw,32px)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-label-14 font-medium text-brand-muted dark:text-[#99A893] transition-colors hover:text-brand-onyx dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-app"
            className="group inline-flex items-center gap-2 rounded-full bg-[#7ED957] px-5 py-2 text-button-14 font-bold text-[#0e0f0c] transition-all hover:bg-[#cdffad] active:bg-[#c5edab] hover:scale-105"
          >
            <span>Get the app</span>
            <ArrowFlipIcon size={14} />
          </a>
        </nav>

        {/* Mobile Actions: CTA + Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#get-app"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#7ED957] px-3.5 py-1.5 text-button-12 font-bold text-[#0e0f0c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Get the app</span>
            <ArrowFlipIcon size={12} />
          </a>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EBEBEB] dark:bg-[#1C472A] text-brand-onyx dark:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mx-auto mt-2 w-full max-w-[1280px] rounded-3xl border border-[#0e0f0c]/5 dark:border-white/5 bg-white dark:bg-[#151F17] p-6 shadow-[0_8px_30px_rgba(14,15,12,0.12)] md:hidden transition-all animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-label-16 font-medium text-brand-onyx dark:text-[#FCFAF7] py-2 border-b border-[#0e0f0c]/5 dark:border-white/5 transition-colors hover:text-brand-hunter dark:hover:text-[#7ED957]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#get-app"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-center gap-2 w-full rounded-full bg-[#7ED957] py-3 text-button-14 font-bold text-[#0e0f0c]"
              >
                <span>Download App</span>
                <ArrowFlipIcon size={14} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
