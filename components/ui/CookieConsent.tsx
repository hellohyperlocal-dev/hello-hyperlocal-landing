"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "hello_hyperlocal_cookie_consent";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const timer = setTimeout(() => setVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable: leave the notice hidden rather than nag on every load.
    }
  }, []);

  const choose = (type: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, type);
    } catch {
      // Ignore storage errors.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside aria-label="Cookie consent notice" className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-6 sm:bottom-6">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-4 rounded-card border border-hh-rule-dark bg-white px-5 py-4 text-left split:flex-row split:items-center split:justify-between split:gap-6 split:px-8 split:py-5">
        <div className="flex max-w-4xl flex-col gap-1.5">
          <div className="flex items-center justify-between gap-3">
            <p className="m-0 font-heading text-[18px] font-medium leading-6 text-hh-onyx">We value your privacy</p>
            <button
              type="button"
              aria-label="Dismiss cookie notice"
              onClick={() => choose("declined")}
              className={`flex h-11 w-11 items-center justify-center rounded-button text-hh-muted hover:text-hh-onyx split:hidden ${focusRing}`}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="m-0 text-[15px] leading-[22px] text-hh-muted">
            We use cookies to enhance your browsing experience, serve personalised content, and analyse
            our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies. Read our{" "}
            <Link href="/privacy" className="font-bold text-hh-hunter underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Equal-weight choices: declining must be as easy as accepting. */}
        <div className="flex shrink-0 items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className={`h-11 rounded-button bg-hh-panel px-5 text-[16px] font-bold text-hh-onyx transition-colors hover:bg-hh-mint ${focusRing}`}
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className={`h-11 rounded-button bg-hh-lime px-5 text-[16px] font-bold text-hh-onyx transition-colors hover:bg-hh-lime-hover ${focusRing}`}
          >
            Accept All
          </button>
          <button
            type="button"
            aria-label="Dismiss cookie notice"
            onClick={() => choose("declined")}
            className={`hidden h-11 w-11 items-center justify-center rounded-button text-hh-muted hover:text-hh-onyx split:flex ${focusRing}`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
