import Image from "next/image"
import { Check } from "lucide-react"

const BENEFITS = [
  "Direct reach to residents in your specific suburb",
  "Feature weekly specials and resident-only offers",
  "Verified business profile and interactive map placement",
]

export function ForBusiness() {
  return (
    <section
      id="business"
      className="border-y border-brand-line-soft bg-brand-panel"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-stretch gap-[clamp(32px,4vw,56px)] px-[clamp(20px,4vw,32px)] py-[clamp(60px,8vw,96px)]">
        <div>
          <div className="mb-3.5 text-[11px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
            For local business owners
          </div>
          <h2 className="m-0 mb-3.5 max-w-[520px] text-[clamp(30px,4.4vw,44px)] leading-[1.08] font-extrabold tracking-[-0.02em] text-pretty text-brand-onyx">
            Grow your business where it matters most:{" "}
            <span className="text-brand-hunter">your neighbourhood.</span>
          </h2>
          <p className="m-0 mb-7 max-w-[440px] text-[15px] leading-[1.7] text-pretty text-brand-muted">
            Stop spending advertising budget on city-wide ads. Hello Hyperlocal
            puts your business, weekly specials and local offers in front of
            residents who already walk past your door.
          </p>

          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-brand-grass-soft text-brand-spruce"
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-[14px] font-medium text-brand-onyx">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* h-full + min-h keeps the photo level with the copy column on wide
            screens, and gives it a sensible height once the grid stacks. */}
        <div className="relative h-full min-h-[320px] overflow-hidden rounded-[32px]">
          <Image
            src="/photography/linden-market.jpg"
            alt="Traders and shoppers at the Linden Village Market"
            fill
            sizes="(max-width: 900px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
