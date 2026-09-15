import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  label: string;
  /** "dark" for forest surfaces (mint label, lime slashes); "light" for white and warm surfaces. */
  tone?: "dark" | "light";
  className?: string;
}

export function SectionEyebrow({ label, tone = "light", className }: SectionEyebrowProps) {
  const dark = tone === "dark";
  return (
    <p
      className={cn(
        "m-0 flex items-center gap-[6px] text-[16px] leading-4",
        dark ? "text-hh-mint" : "text-hh-onyx",
        className,
      )}
    >
      <span aria-hidden className={dark ? "text-hh-lime" : "text-hh-hunter"}>
        /
      </span>
      {label}
      <span aria-hidden className={dark ? "text-hh-lime" : "text-hh-hunter"}>
        /
      </span>
    </p>
  );
}
