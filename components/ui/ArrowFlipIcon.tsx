"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowFlipIconProps {
  className?: string;
  size?: number;
}

export function ArrowFlipIcon({
  className,
  size = 16,
}: ArrowFlipIconProps) {
  return (
    <span
      className={cn(
        "icon-flip relative inline-flex items-center justify-center overflow-hidden shrink-0",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <ArrowUpRight
        className="arrow-1 transition-transform duration-300"
        style={{ width: size, height: size }}
      />
      <ArrowUpRight
        className="arrow-2 absolute inset-0 transition-transform duration-300"
        style={{ width: size, height: size }}
      />
    </span>
  );
}
