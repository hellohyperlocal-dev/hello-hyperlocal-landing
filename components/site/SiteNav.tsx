"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaLink } from "@/components/site/ui/CtaLink";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/about#vision", label: "Explore Hello" },
  { href: "/#residents", label: "Residents" },
  { href: "/#businesses", label: "Businesses" },
  { href: "/#partners", label: "Partners" },
  { href: "/#faqs", label: "FAQs" },
];

const NAV_CTA = { href: "/join", label: "Join Hello Linden" };

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6">
      <div
        className={cn(
          "relative flex w-full max-w-[1340px] items-center justify-between rounded-[12px] bg-white px-5 py-3.5 shadow-lg shadow-black/5 transition-all duration-300 sm:px-7 sm:py-4.5",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-white",
        )}
      >
        {/* Crisp Retina High-Res Logo Icon */}
        <Link
          href="/"
          aria-label="Hello Hyperlocal, back to top"
          onClick={() => setMenuOpen(false)}
          className="flex h-12 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest"
        >
          <Image
            src="/logo/hello-hyperlocal-logo.png"
            alt="Hello Hyperlocal"
            width={347}
            height={167}
            priority
            unoptimized
            className="h-11 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav aria-label="Main navigation" className="hidden xl:block">
          <ul className="flex items-center gap-6 2xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-chip font-sans text-[16px] font-medium text-[#1C472A] transition-colors hover:text-hh-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA (button-primary) */}
        <div className="hidden xl:block">
          <CtaLink href={NAV_CTA.href} surface="light">
            {NAV_CTA.label}
          </CtaLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-[#1C472A] hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest xl:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen ? (
        <div
          id="site-mobile-menu"
          aria-label="Mobile navigation"
          className="absolute top-full mt-2 w-[calc(100%-2rem)] max-w-[1340px] overflow-hidden rounded-[12px] bg-white p-5 shadow-2xl xl:hidden"
        >
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[18px] font-medium text-[#1C472A] hover:bg-black/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <CtaLink
                href={NAV_CTA.href}
                surface="light"
                onClick={() => setMenuOpen(false)}
                className="w-full"
              >
                {NAV_CTA.label}
              </CtaLink>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
