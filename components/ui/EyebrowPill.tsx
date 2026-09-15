import React from "react";
import { LucideIcon } from "lucide-react";

export type EyebrowVariant = "standard" | "dark" | "accent" | "surface-contrast";

export interface EyebrowPillProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: EyebrowVariant;
  className?: string;
}

export function EyebrowPill({
  icon: Icon,
  children,
  variant = "standard",
  className = "",
}: EyebrowPillProps) {
  const variantStyles: Record<EyebrowVariant, string> = {
    standard:
      "bg-[#e2f6d5] dark:bg-[#1C472A] text-[#054d28] dark:text-[#7ED957] border border-[#0e0f0c]/5 dark:border-white/5",
    dark:
      "bg-white/10 text-[#7ED957] border border-white/10",
    accent:
      "bg-[#7ED957] text-[#0e0f0c] border-none font-bold",
    "surface-contrast":
      "bg-[#1C472A] text-[#7ED957] border-none",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-semibold tracking-[-0.01em] leading-none select-none transition-colors ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />}
      <span>{children}</span>
    </div>
  );
}
