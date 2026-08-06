/**
 * ListRow — initials avatar, two-line meta stack, right-aligned status
 * pill (brand-board §05).
 */
const STATUS_TONES = {
  live: "bg-brand-grass-soft text-brand-spruce",
  pending: "bg-[#F2ECDA] text-[#8A6D1C]",
} as const

export function ListRow({
  initials,
  name,
  meta,
  status = "live",
  statusLabel,
  isLast = false,
}: {
  initials: string
  name: string
  meta: string
  status?: keyof typeof STATUS_TONES
  statusLabel?: string
  isLast?: boolean
}) {
  return (
    <div
      className={`flex items-center justify-between gap-3.5 py-3.5 ${
        isLast ? "" : "border-b border-brand-line-soft"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-brand-hunter text-[12px] font-bold text-white">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="m-0 text-[13px] font-bold text-brand-onyx">{name}</p>
          <p className="m-0 text-[11px] text-brand-muted">{meta}</p>
        </div>
      </div>
      {statusLabel ? (
        <span
          className={`rounded-full px-2.5 py-[5px] text-[10px] font-bold whitespace-nowrap ${STATUS_TONES[status]}`}
        >
          {statusLabel}
        </span>
      ) : null}
    </div>
  )
}
