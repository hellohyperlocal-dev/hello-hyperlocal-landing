import { ArrowRight } from "lucide-react"

/**
 * StatChip — grass-filled metric chip with a dark circular arrow
 * affordance (brand-board §05). Without `onArrowClick` the arrow is
 * inert decoration, for use inside phone mockups.
 */
export function StatChip({
  value,
  label,
  onArrowClick,
}: {
  value: string
  label: string
  onArrowClick?: () => void
}) {
  const arrowClassName =
    "absolute top-[14px] right-[14px] flex h-6 w-6 items-center justify-center rounded-full bg-brand-spruce text-brand-grass"

  return (
    <div className="relative flex-1 rounded-[16px] bg-brand-grass p-4">
      <div className="text-[18px] font-extrabold text-brand-spruce">
        {value}
      </div>
      <div className="text-[12px] font-semibold text-brand-spruce opacity-85">
        {label}
      </div>
      {onArrowClick ? (
        <button
          type="button"
          onClick={onArrowClick}
          aria-label={`View ${label}`}
          className={`${arrowClassName} cursor-pointer`}
        >
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </button>
      ) : (
        <span className={arrowClassName} aria-hidden="true">
          <ArrowRight className="h-3 w-3" />
        </span>
      )}
    </div>
  )
}
