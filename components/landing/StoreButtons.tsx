import { siteConfig } from "@/lib/site-config"

function AppleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.05 12.54c.02-2.1 1.72-3.11 1.8-3.16-.98-1.44-2.5-1.64-3.05-1.66-1.3-.13-2.53.76-3.19.76-.66 0-1.67-.74-2.75-.72-1.41.02-2.72.82-3.44 2.08-1.47 2.55-.38 6.32 1.05 8.39.7 1.01 1.53 2.15 2.62 2.11 1.05-.04 1.45-.68 2.72-.68 1.27 0 1.63.68 2.74.66 1.13-.02 1.85-1.03 2.54-2.05.8-1.17 1.13-2.31 1.15-2.37-.03-.01-2.2-.85-2.22-3.36ZM15.1 6.2c.58-.7.97-1.68.86-2.65-.83.03-1.84.55-2.44 1.25-.54.62-1.01 1.61-.88 2.56.93.07 1.88-.47 2.46-1.16Z" />
    </svg>
  )
}

function PlayMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 3l14 9-14 9V3Z" />
    </svg>
  )
}

type Size = "md" | "lg"

const SIZES: Record<Size, string> = {
  md: "px-[22px] pt-3 pb-[13px]",
  lg: "px-[26px] pt-3.5 pb-[15px]",
}

/**
 * App Store + Google Play pill pair. `tone` controls the Play button's
 * fill so it sits on either the warm-white canvas or a white panel.
 */
export function StoreButtons({
  size = "md",
  playTone = "canvas",
  className = "",
}: {
  size?: Size
  playTone?: "canvas" | "panel"
  className?: string
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={siteConfig.appStoreUrl}
        className={`flex items-center gap-3 rounded-full bg-brand-spruce text-white transition-colors hover:bg-brand-onyx ${SIZES[size]}`}
      >
        <AppleMark className="h-5 w-5 text-brand-grass" />
        <span className="flex flex-col gap-0.5">
          <span className="text-[9px] font-bold tracking-[0.14em] text-white/70 uppercase">
            Download on the
          </span>
          <span className="text-[15px] font-bold text-white">App Store</span>
        </span>
      </a>
      <a
        href={siteConfig.playStoreUrl}
        className={`flex items-center gap-3 rounded-full border border-brand-line text-brand-spruce transition-colors hover:border-brand-spruce ${
          playTone === "panel" ? "bg-brand-panel" : "bg-brand-warm-white"
        } ${SIZES[size]}`}
      >
        <PlayMark className="h-[18px] w-[18px] text-brand-spruce" />
        <span className="flex flex-col gap-0.5">
          <span className="text-[9px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
            Get it on
          </span>
          <span className="text-[15px] font-bold text-brand-spruce">
            Google Play
          </span>
        </span>
      </a>
    </div>
  )
}
