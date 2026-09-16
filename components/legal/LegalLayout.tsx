"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { TableOfContents, type TocItem } from "@/components/ui/toc";
import { SiteFooter } from "@/components/site/SiteFooter";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  lastUpdated: string;
  tocItems: TocItem[];
}

const NAV_ITEMS = [
  {
    href: "/help",
    title: "Help & Verification",
  },
  {
    href: "/merchant-support",
    title: "Merchant Support",
  },
  {
    href: "/privacy",
    title: "Privacy Policy",
  },
  {
    href: "/terms",
    title: "Terms of Service",
  },
];

export function LegalLayout({
  children,
  title,
  subtitle,
  lastUpdated,
  tocItems,
}: LegalLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0e0f0c] text-foreground flex flex-col font-sans transition-colors duration-200">
      
      {/* Top Clean Documentation Header */}
      <header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 bg-white/95 dark:bg-[#0e0f0c]/95 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="mx-auto max-w-[1360px] flex items-center justify-between">
          <div className="flex items-center gap-3 text-[13px]">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-semibold text-[#1C472A] dark:text-[#7ED957] hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>
            <span className="text-black/20 dark:text-white/20">/</span>
            <span className="font-semibold text-brand-onyx dark:text-[#FCFAF7]">
              Legal Documentation
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/join"
              className="rounded-button bg-hh-forest px-4 py-2 text-[13px] font-bold text-white transition-colors hover:bg-hh-hunter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2"
            >
              Join Hello Linden
            </Link>
          </div>
        </div>
      </header>

      {/* Main 3-Column Documentation Container */}
      <div className="mx-auto max-w-[1360px] w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column (3 cols): Clean Doc Switcher & Legal Entity */}
          <aside className="lg:col-span-3 flex flex-col">
            <div className="sticky top-20 space-y-6">
              
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#868685] dark:text-[#99A893] block">
                  Documentation
                </span>
                
                <nav className="flex flex-col space-y-1 border-s border-black/10 dark:border-white/10">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`-ms-px block border-s py-1.5 ps-3.5 text-[13.5px] transition-colors duration-150 ${
                          isActive
                            ? "border-[#1C472A] dark:border-[#7ED957] font-bold text-[#1C472A] dark:text-[#7ED957]"
                            : "border-transparent text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white"
                        }`}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Responsible Entity Info */}
              <div className="pt-4 border-t border-black/5 dark:border-white/5 space-y-1 text-left">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#868685] dark:text-[#99A893] block">
                  Responsible Party
                </span>
                <div className="text-[12px] text-[#454745] dark:text-[#99A893] leading-relaxed">
                  <strong className="text-brand-onyx dark:text-white">Hello Hyperlocal (Pty) Ltd</strong><br />
                  Registration: 2026/014285/07<br />
                  Johannesburg, South Africa<br />
                  <a href="mailto:privacy@hellohyperlocal.co.za" className="underline text-[#1C472A] dark:text-[#7ED957]">privacy@hellohyperlocal.co.za</a>
                </div>
              </div>

            </div>
          </aside>

          {/* Center Column (6 cols): Pure Typographic Documentation */}
          <main className="lg:col-span-6 flex flex-col text-left min-w-0">
            {/* Document Header */}
            <div className="border-b border-black/10 dark:border-white/10 pb-6 mb-8">
              <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#1C472A] dark:text-[#7ED957] block mb-2">
                Official Policy
              </span>
              <h1 className="text-[32px] sm:text-[38px] font-extrabold tracking-tight leading-[1.12] text-brand-onyx dark:text-[#FCFAF7] m-0">
                {title}
              </h1>
              <p className="text-[15px] sm:text-[16px] text-brand-muted dark:text-[#99A893] leading-relaxed mt-3">
                {subtitle}
              </p>
              <div className="flex items-center gap-3 text-[11.5px] font-medium text-[#868685] dark:text-[#99A893] mt-3">
                <span>Last Updated: {lastUpdated}</span>
                <span>•</span>
                <span>South Africa</span>
              </div>
            </div>

            {/* Document Body */}
            <article className="prose prose-slate dark:prose-invert max-w-none text-[15px] leading-[26px] text-[#454745] dark:text-[#D1D5DB] space-y-10">
              {children}
            </article>
          </main>

          {/* Right Column (3 cols): Clean Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20 ps-2">
              <TableOfContents items={tocItems} label="On this page" />
            </div>
          </aside>

        </div>
      </div>

      {/* Global Footer */}
      <SiteFooter />

    </div>
  );
}
