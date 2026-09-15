import { cn } from "@/lib/utils";

interface ArrowIconProps {
  size?: number;
  className?: string;
  /** Degrees. 90 points the arrow down for disclosure affordances. */
  rotate?: number;
}

export function ArrowIcon({ size = 14, className, rotate = 0 }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 18 18"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.57}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <path d="M 1.5 9 L 16.5 9 M 16.5 9 L 9 1.5 M 16.5 9 L 9 16.5" />
    </svg>
  );
}
