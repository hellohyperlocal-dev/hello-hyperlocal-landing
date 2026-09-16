"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { readConsent, writeConsent, type ConsentChoice } from "@/lib/consent";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2";

// Analytics (Google Analytics) only runs after "Accept"; see components/site/GoogleAnalytics.tsx.
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const choose = (choice: ConsentChoice) => {
    writeConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside aria-label="Cookie consent notice" className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-6 sm:bottom-6">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-4 rounded-card border border-hh-rule-dark bg-white px-5 py-4 text-left split:flex-row split:items-center split:justify-between split:gap-6 split:px-8 split:py-5">
        <div className="flex max-w-4xl flex-col gap-1.5">
          <p className="m-0 font-heading text-[18px] font-medium leading-6 text-hh-onyx">We value your privacy</p>
          <p className="m-0 text-[15px] leading-[22px] text-hh-muted">
            We use cookies to enhance your browsing experience and understand how the site is used.
            Read our{" "}
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
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className={`h-11 rounded-button bg-hh-lime px-5 text-[16px] font-bold text-hh-onyx transition-colors hover:bg-hh-lime-hover ${focusRing}`}
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}
