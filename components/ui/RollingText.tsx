"use client";

import React from "react";

interface RollingTextProps {
  text: string;
  className?: string;
}

/**
 * RollingText Component (inspired by https://examples.motion.dev/ui/sections/button-rolling-text)
 * Replaces static button label with a rolling dual-layer typography effect that animates on parent button hover/focus.
 */
export function RollingText({ text, className = "" }: RollingTextProps) {
  return (
    <span className={`relative inline-flex overflow-hidden select-none ${className}`}>
      {/* Outgoing Initial Label */}
      <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.338,0.015,0.395,0.959)] group-hover:-translate-y-[120%] group-focus-visible:-translate-y-[120%]">
        {text}
      </span>

      {/* Incoming Rolling Duplicate Label */}
      <span
        aria-hidden="true"
        className="absolute inset-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.338,0.015,0.395,0.959)] translate-y-[120%] group-hover:translate-y-0 group-focus-visible:translate-y-0 pointer-events-none"
      >
        {text}
      </span>
    </span>
  );
}
