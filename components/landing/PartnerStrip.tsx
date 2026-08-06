const PARTNERS = [
  "Linden Community Association",
  "Linden Village Market",
  "Ward 90 Councillor",
  "4th Avenue Traders",
]

export function PartnerStrip() {
  return (
    <section className="border-y border-brand-line-soft bg-brand-panel">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 px-[clamp(20px,4vw,32px)] py-[30px]">
        <div className="text-[11px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
          Built with our neighbours
        </div>
        <div className="flex flex-wrap items-center gap-[clamp(20px,4vw,52px)] opacity-55">
          {PARTNERS.map((partner) => (
            <span
              key={partner}
              className="text-[15px] font-extrabold tracking-[-0.01em] text-brand-onyx"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
