"use client";

import { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import { readConsent, subscribeConsent } from "@/lib/consent";

const GA_MEASUREMENT_ID = "G-WJECR4TRKT";

declare global {
  interface Window {
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

// Google Analytics loads only after the visitor accepts in the cookie banner. Nothing from
// googletagmanager.com is requested, and no GA cookies are set, until then.
export function GoogleAnalytics() {
  // Server snapshot is null: never render GA into server HTML, where consent is unknown.
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => null);

  // If GA already loaded this session and the visitor later declines, stop it sending data.
  useEffect(() => {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = consent !== "accepted";
  }, [consent]);

  if (consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
