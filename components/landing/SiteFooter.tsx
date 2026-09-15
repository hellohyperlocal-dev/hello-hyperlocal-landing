"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

const SECTIONS = [
  {
    title: "Explore Hello",
    links: [
      { name: "Our Story", href: "#our-story" },
      { name: "The Vision", href: "#vision" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "For Local Businesses", href: "#business" },
      { name: "Join Hello Linden", href: "#join" },
    ],
  },
  {
    title: "Support & Legal",
    links: [
      { name: "Help & Verification", href: "/help" },
      { name: "Merchant Support", href: "/merchant-support" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    icon: <FaInstagram className="size-4" />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <FaFacebook className="size-4" />,
    href: "https://facebook.com",
    label: "Facebook",
  },
];

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t border-brand-line-soft dark:border-brand-spruce-line bg-transparent pt-16 sm:pt-20 pb-12 transition-colors duration-200", className)}>
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)]">
        
        {/* Main Footer Content */}
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start">
          
          {/* Brand Info */}
          <div className="flex w-full max-w-sm flex-col gap-5 text-left">
            <Link
              href="#top"
              className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957] rounded-md group"
            >
              <div className="relative h-[56px] w-[116px] sm:h-[72px] sm:w-[150px] shrink-0">
                <Image
                  src="/logo/hello-hyperlocal-logo.png"
                  alt="Hello Hyperlocal Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            
            <p className="text-copy-14 text-brand-muted dark:text-[#99A893]">
              Connecting neighbours, supporting local businesses, and celebrating community across South Africa. Love where you live.
            </p>

            <ul className="flex items-center gap-4 text-brand-muted dark:text-[#99A893] pt-1">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-line-soft dark:border-brand-spruce-line bg-brand-panel dark:bg-[#151F17] text-brand-onyx dark:text-[#FCFAF7] transition-all hover:bg-brand-grass hover:text-brand-spruce hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links Grid (2 Columns) */}
          <div className="grid grid-cols-2 gap-10 sm:gap-16 lg:gap-24 text-left">
            {SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="text-label-12 font-bold tracking-[0.14em] text-brand-hunter dark:text-brand-grass uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-label-14">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-brand-muted dark:text-[#99A893] transition-colors hover:text-brand-onyx dark:hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-brand-line-soft dark:border-brand-spruce-line/60 pt-8 text-label-12 text-brand-muted dark:text-[#99A893] sm:flex-row sm:items-center">
          <p>© 2026 Hello Hyperlocal (Pty) Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-brand-onyx dark:hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-brand-onyx dark:hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]">
              Terms of Service
            </Link>
            <Link href="/privacy#cookies" className="transition-colors hover:text-brand-onyx dark:hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]">
              Cookie Preferences
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
