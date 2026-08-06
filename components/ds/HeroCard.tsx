import { ArrowRight } from "lucide-react"

/**
 * HeroCard — dark announcement card. Dark Spruce fill, grass eyebrow,
 * white title and body, white pill CTA (brand-board §05).
 *
 * Without an `onCtaClick` handler the CTA renders as inert decoration —
 * the landing page uses this card inside non-interactive phone mockups,
 * which should stay out of the tab order.
 */
export function HeroCard({
  eyebrow,
  title,
  body,
  ctaLabel,
  onCtaClick,
}: {
  eyebrow: string
  title: string
  body: string
  ctaLabel: string
  onCtaClick?: () => void
}) {
  const ctaClassName =
    "inline-flex items-center gap-1.5 rounded-full bg-white px-[18px] py-2.5 text-[12px] font-bold text-brand-spruce"

  return (
    <div className="rounded-[24px] bg-brand-spruce p-6 text-white">
      <div className="mb-1.5 text-[11px] font-bold tracking-[0.14em] text-brand-grass uppercase">
        {eyebrow}
      </div>
      <div className="mb-2.5 text-[16px] font-extrabold text-white">
        {title}
      </div>
      <p className="m-0 mb-4 text-[13px] leading-[1.55] text-white/78">
        {body}
      </p>
      {onCtaClick ? (
        <button
          type="button"
          onClick={onCtaClick}
          className={`${ctaClassName} cursor-pointer`}
        >
          {ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      ) : (
        <span className={ctaClassName}>
          {ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      )}
    </div>
  )
}
