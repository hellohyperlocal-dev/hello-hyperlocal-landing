"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";
import { RollingText } from "@/components/ui/RollingText";
import { JoinModal } from "@/components/landing/JoinModal";

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#our-story", label: "Our Story" },
  { href: "#vision", label: "Explore Hello" },
  { href: "#residents", label: "Residents" },
  { href: "#businesses", label: "Businesses" },
  { href: "#partners", label: "Partners" },
  { href: "#faqs", label: "FAQs" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  const handleSelectResident = () => {
    const el = document.getElementById("founding-neighbours");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectBusiness = () => {
    const el = document.getElementById("businesses");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-4 sm:pt-6 px-4 sm:px-6">
        <div className="pointer-events-auto mx-auto w-full max-w-[1280px] rounded-full bg-white/95 dark:bg-[#151F17]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(14,15,12,0.08)] border border-[#0e0f0c]/5 dark:border-white/5 px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between transition-all duration-200">
          
          {/* Logo */}
          <Link
            href="#top"
            className="flex shrink-0 items-center px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957] rounded-md group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-[48px] w-[100px] sm:h-[56px] sm:w-[120px] shrink-0">
              <Image
                src="/logo/hello-hyperlocal-logo.png"
                alt="Hello Hyperlocal Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-[clamp(12px,1.8vw,24px)]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label-13 font-medium text-brand-muted dark:text-[#99A893] transition-colors hover:text-brand-onyx dark:hover:text-white rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Header CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setJoinModalOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-[#7ED957] px-5 py-2.5 text-button-14 font-bold text-[#0e0f0c] transition-all hover:bg-[#cdffad] active:bg-[#c5edab] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957] focus-visible:ring-offset-2"
            >
              <RollingText text="Join Hello Linden" />
              <ArrowFlipIcon size={14} />
            </button>
          </div>

          {/* Mobile Actions: Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setJoinModalOpen(true)}
              className="sm:hidden group inline-flex items-center gap-1.5 rounded-full bg-[#7ED957] px-3.5 py-1.5 text-xs font-bold text-[#0e0f0c]"
            >
              <span>Join</span>
            </button>
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EBEBEB] dark:bg-[#1C472A] text-brand-onyx dark:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="pointer-events-auto mx-auto mt-2 w-full max-w-[1280px] rounded-3xl border border-[#0e0f0c]/5 dark:border-white/5 bg-white dark:bg-[#151F17] p-6 shadow-[0_8px_30px_rgba(14,15,12,0.12)] lg:hidden transition-all animate-in slide-in-from-top-2 duration-200"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-label-15 font-medium text-brand-onyx dark:text-[#FCFAF7] py-2 border-b border-[#0e0f0c]/5 dark:border-white/5 transition-colors hover:text-brand-hunter dark:hover:text-[#7ED957] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setJoinModalOpen(true);
                  }}
                  className="group flex items-center justify-center gap-2 w-full rounded-full bg-[#7ED957] py-3 text-button-14 font-bold text-[#0e0f0c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
                >
                  <RollingText text="Join Hello Linden" />
                  <ArrowFlipIcon size={14} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Join Choice Modal */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        onSelectResident={handleSelectResident}
        onSelectBusiness={handleSelectBusiness}
      />
    </>
  );
}
