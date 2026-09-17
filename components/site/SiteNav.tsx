"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/components/site/ui/ArrowIcon";

// Root-relative so the same nav works from /about and other pages. Order follows the client brief.
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/#vision", label: "Explore Hello" },
  { href: "/#residents", label: "Residents" },
  { href: "/#businesses", label: "Businesses" },
  { href: "/#partners", label: "Partners" },
  { href: "/#faqs", label: "FAQs" },
];

const NAV_CTA = { href: "/join", label: "Join Hello Linden" };

export function SiteNav() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // A 1px sentinel at document y=20 flips the nav solid once it scrolls out of view.
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setPinned(!entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const solid = pinned || menuOpen;

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-5 h-px w-px"
      />

      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "relative flex h-[90px] items-center py-[15px] transition-colors duration-300",
            solid ? "bg-hh-forest" : "bg-transparent",
          )}
        >
          {/* xl: links centred in the space between logo and CTA (equal gaps either side). The CTA is much
              wider than the logo, so centring on the page itself looked lopsided. */}
          <div className="site-container flex h-[60px] items-center gap-[15px]">
            <Link
              href="/"
              aria-label="Hello Hyperlocal, back to top"
              onClick={() => setMenuOpen(false)}
              className="flex h-[52px] shrink-0 items-center rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-lime focus-visible:ring-offset-2 focus-visible:ring-offset-hh-forest"
            >
              <Image
                src="/logo/hhl-logo-lime.svg"
                alt="Hello Hyperlocal"
                width={97}
                height={48}
                priority
                className="h-12 w-auto"
              />
            </Link>

            <nav aria-label="Main navigation" className="mx-auto hidden xl:block">
              <ul className="flex items-center gap-6 2xl:gap-[30px]">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-chip text-[18px] leading-[30px] tracking-[-0.8px] text-hh-mint transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-lime focus-visible:ring-offset-2 focus-visible:ring-offset-hh-forest 2xl:text-[20px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={NAV_CTA.href}
              className="hidden h-[60px] shrink-0 items-center gap-[15px] rounded-button bg-hh-lime px-5 text-[20px] leading-[30px] text-hh-onyx transition-colors hover:bg-hh-lime-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-lime focus-visible:ring-offset-2 focus-visible:ring-offset-hh-forest xl:flex"
            >
              {NAV_CTA.label}
              <ArrowIcon size={14} />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="ml-auto flex h-11 w-11 items-center justify-center rounded-button text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-lime xl:hidden"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 mx-auto h-px w-full max-w-[1300px] bg-hh-rule-light"
          />
        </div>

        {menuOpen ? (
          <nav
            id="site-mobile-menu"
            aria-label="Mobile navigation"
            className="bg-hh-forest px-5 pb-6 xl:hidden"
          >
            <ul className="flex flex-col gap-1 pt-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-chip py-2 text-[20px] leading-[30px] tracking-[-0.8px] text-hh-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={NAV_CTA.href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-[60px] items-center gap-[15px] rounded-button bg-hh-lime px-5 text-[20px] leading-[30px] text-hh-onyx focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-lime focus-visible:ring-offset-2 focus-visible:ring-offset-hh-forest"
                >
                  {NAV_CTA.label}
                  <ArrowIcon size={14} />
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
}
