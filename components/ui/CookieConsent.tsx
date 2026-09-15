"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("hello_hyperlocal_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable
    }
  }, []);

  const handleConsent = (type: "accepted" | "declined") => {
    try {
      localStorage.setItem("hello_hyperlocal_cookie_consent", type);
    } catch {
      // Ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent notice"
      className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
    >
      <div className="mx-auto w-full max-w-[1280px] rounded-[24px] sm:rounded-[28px] bg-white/95 dark:bg-[#151F17]/95 backdrop-blur-md px-5 sm:px-8 py-4 sm:py-5 shadow-[0_8px_32px_rgba(14,15,12,0.14)] border border-[#0e0f0c]/8 dark:border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 text-left">
        
        {/* Left: Headline & Body Copy */}
        <div className="flex flex-col gap-1.5 max-w-4xl">
          <div className="flex items-center justify-between lg:justify-start gap-3">
            <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0e0f0c] dark:text-[#FCFAF7] m-0">
              We value your privacy
            </h3>
            {/* Mobile close button */}
            <button
              type="button"
              aria-label="Dismiss cookie notice"
              onClick={() => handleConsent("declined")}
              className="lg:hidden text-[#868685] hover:text-[#0e0f0c] dark:hover:text-white transition-colors p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-[13px] sm:text-[13.5px] leading-[20px] text-[#454745] dark:text-[#99A893] m-0">
            We use cookies to enhance your browsing experience, serve personalised content, and analyse our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies. Read our{" "}
            <Link
              href="/privacy"
              className="font-semibold text-[#1C472A] dark:text-[#7ED957] underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end gap-3 shrink-0 pt-1 lg:pt-0">
          <button
            type="button"
            onClick={() => handleConsent("declined")}
            className="rounded-full bg-[#EBEBEB] dark:bg-[#1C472A] px-4 sm:px-5 py-2 sm:py-2.5 text-[13px] font-semibold text-[#0e0f0c] dark:text-white hover:bg-[#dedede] dark:hover:bg-[#235834] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="rounded-full bg-[#7ED957] px-5 sm:px-6 py-2 sm:py-2.5 text-[13px] font-bold text-[#0e0f0c] hover:bg-[#cdffad] active:bg-[#c5edab] transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957] focus-visible:ring-offset-2"
          >
            Accept All
          </button>
          {/* Desktop close button */}
          <button
            type="button"
            aria-label="Dismiss cookie notice"
            onClick={() => handleConsent("declined")}
            className="hidden lg:flex text-[#868685] hover:text-[#0e0f0c] dark:hover:text-white transition-colors p-1.5 ml-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

      </div>
    </aside>
  );
}
