import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  label: string;
  /** "dark" for forest surfaces (mint label); "light" for white and warm surfaces (onyx label). */
  tone?: "dark" | "light";
  className?: string;
}

// A live-status dot with a ring that pings outward, from the Activity Badge component
// (activitybadge-component.framer.website, "Available to work"). No pill background by design.
export function SectionEyebrow({ label, tone = "light", className }: SectionEyebrowProps) {
  const dark = tone === "dark";
  // Lime on every surface, light and dark.
  const dot = "bg-hh-lime";

  return (
    <p
      className={cn(
        "m-0 flex items-center gap-[10px] text-[16px] leading-4",
        dark ? "text-hh-mint" : "text-hh-onyx",
        className,
      )}
    >
      <span aria-hidden className="relative flex h-[10px] w-[10px] shrink-0">
        {/* Reduced motion keeps the solid dot and drops the ping. */}
        <span
          className={cn(
            "absolute inset-0 rounded-full animate-eyebrow-ping motion-reduce:hidden",
            dot,
          )}
        />
        <span className={cn("relative h-[10px] w-[10px] rounded-full", dot)} />
      </span>
      {label}
    </p>
  );
}
