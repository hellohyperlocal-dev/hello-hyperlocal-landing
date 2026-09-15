"use client";

import { useEffect, useRef } from "react";

interface SuccessStateProps {
  badge: string;
  heading: string;
  children: React.ReactNode;
  resetLabel: string;
  onReset: () => void;
}

export function SuccessState({ badge, heading, children, resetLabel, onReset }: SuccessStateProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the confirmation so keyboard and screen reader users land on the result.
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div role="status" className="flex flex-col items-start gap-5 py-4">
      <span className="rounded-chip bg-hh-mint px-3 py-1 text-[14px] font-bold leading-5 text-hh-hunter">
        {badge}
      </span>
      <h3
        ref={headingRef}
        tabIndex={-1}
        className="m-0 font-heading text-[28px] font-medium leading-[32px] tracking-[-1px] text-hh-onyx focus:outline-none"
      >
        {heading}
      </h3>
      <div className="flex flex-col gap-3 type-body text-hh-muted">{children}</div>
      <button
        type="button"
        onClick={onReset}
        className="rounded-chip text-[15px] font-bold text-hh-hunter underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2"
      >
        {resetLabel}
      </button>
    </div>
  );
}
