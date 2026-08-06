import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { PhoneBottomNav } from "@/components/landing/PhoneBottomNav"
import { StoreButtons } from "@/components/landing/StoreButtons"

const LOVE_LOCAL = [
  {
    image: "/photography/goddess-cafe-linden.jpg",
    name: "Goddess Cafe",
    offer: "15% off before 10am",
  },
  {
    image: "/photography/winter-menu.jpg",
    name: "4th Ave Deli",
    offer: "Free coffee with any loaf",
  },
]

const FEED = [
  {
    initials: "T",
    name: "Thandi M.",
    meta: "Piano teacher for an 8-year-old?",
    live: false,
  },
  {
    initials: "C",
    name: "Chris D.",
    meta: "Two stalls left for Saturday.",
    live: true,
  },
]

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] items-center gap-[clamp(40px,5vw,64px)] px-[clamp(20px,4vw,32px)] pt-[clamp(44px,6vw,80px)] pb-[clamp(48px,6vw,72px)]"
    >
      <div>
        <div className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-brand-spruce-line px-[15px] py-[7px]">
          <span className="h-[7px] w-[7px] animate-hhl-pulse rounded-full bg-brand-grass" />
          <span className="text-[11px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
            Active in Linden, JHB
          </span>
        </div>

        <h1 className="m-0 mb-[22px] text-[clamp(44px,7.2vw,72px)] leading-[0.97] font-extrabold tracking-[-0.03em] text-pretty text-brand-onyx">
          Love where
          <br />
          you live.
        </h1>

        <p className="m-0 mb-9 max-w-[460px] text-[17px] leading-[1.65] text-pretty text-brand-muted">
          Discover exclusive neighbourhood deals, stay updated with ward events,
          and connect with your local community — all in one place, and nothing
          from more than a few blocks away.
        </p>

        <StoreButtons size="md" className="max-w-[520px]" />
      </div>

      <div className="relative flex min-h-[560px] items-center justify-center">
        <div className="absolute aspect-square w-[min(400px,92%)] rounded-full bg-brand-grass/20" />

        {/* Back phone — Love Local */}
        <div className="relative z-1 mt-11 -mr-[14%] w-[min(216px,42%)] animate-hhl-float-b rounded-[34px] bg-brand-hunter p-2">
          <div className="h-[432px] overflow-hidden rounded-[27px] bg-brand-warm-white px-[13px] py-[15px]">
            <div className="mb-3 text-[10px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
              Love Local
            </div>
            {LOVE_LOCAL.map((item) => (
              <div
                key={item.name}
                className="mb-2.5 overflow-hidden rounded-[16px] border border-brand-line-soft bg-brand-panel"
              >
                <div className="relative h-[86px]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5">
                  <div className="text-[12px] font-bold text-brand-onyx">
                    {item.name}
                  </div>
                  <div className="mt-[3px] text-[10px] font-bold text-brand-hunter">
                    {item.offer}
                  </div>
                </div>
              </div>
            ))}
            <div className="relative rounded-[16px] bg-brand-grass p-3.5">
              <div className="text-[18px] font-extrabold text-brand-spruce">
                R240
              </div>
              <div className="text-[11px] font-semibold text-brand-spruce opacity-85">
                Saved this month
              </div>
              <span
                aria-hidden="true"
                className="absolute top-3 right-3 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-spruce text-brand-grass"
              >
                <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Front phone — home screen */}
        <div className="relative z-2 w-[min(258px,50%)] animate-hhl-float rounded-[40px] bg-brand-spruce p-[9px] shadow-[0_26px_60px_rgba(15,15,15,0.18)]">
          <div className="relative h-[530px] overflow-hidden rounded-[32px] bg-brand-warm-white px-4 pt-[18px] pb-20">
            <div className="mb-3.5 flex items-center justify-between text-[10px] font-bold text-brand-onyx">
              <span>9:41</span>
              <span className="tracking-[0.14em] text-brand-hunter">
                LINDEN
              </span>
            </div>

            <div className="mb-[3px] flex items-center justify-between">
              <div className="text-[20px] font-extrabold text-brand-onyx">
                Hello, Sam.
              </div>
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-hunter text-[12px] font-bold text-white">
                S
              </div>
            </div>
            <div className="mb-3.5 text-[10px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
              Ward 90 · Block 4
            </div>

            <div className="mb-3.5 flex gap-2">
              {[
                { value: "86", label: "Local deals" },
                { value: "03", label: "Open RSVPs" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="relative flex-1 rounded-[16px] bg-brand-grass p-3.5"
                >
                  <div className="text-[18px] font-extrabold text-brand-spruce">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-brand-spruce opacity-85">
                    {stat.label}
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute top-3 right-3 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-spruce text-brand-grass"
                  >
                    <ArrowRight className="h-2.5 w-2.5" />
                  </span>
                </div>
              ))}
            </div>

            <div className="mb-3 rounded-[24px] bg-brand-spruce p-5">
              <div className="mb-1.5 text-[11px] font-bold tracking-[0.14em] text-brand-grass uppercase">
                Ward notice
              </div>
              <div className="mb-2 text-[16px] font-extrabold text-white">
                Load-shedding tonight, block 4
              </div>
              <div className="mb-3.5 text-[13px] leading-[1.55] text-white/78">
                Stage 2 from 8pm–10:30pm.
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-[18px] py-2.5 text-[12px] font-bold text-brand-spruce">
                Read more
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>

            {FEED.map((row, index) => (
              <div
                key={row.name}
                className={`flex items-center gap-2.5 py-3 ${
                  index === FEED.length - 1
                    ? ""
                    : "border-b border-brand-line-soft"
                }`}
              >
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-brand-hunter text-[12px] font-bold text-white">
                  {row.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-bold text-brand-onyx">
                    {row.name}
                  </span>
                  <span className="block text-[11px] text-brand-muted">
                    {row.meta}
                  </span>
                </span>
                {row.live ? (
                  <span className="rounded-full bg-brand-grass-soft px-2.5 py-[5px] text-[10px] font-bold whitespace-nowrap text-brand-spruce">
                    Live
                  </span>
                ) : null}
              </div>
            ))}

            <PhoneBottomNav active={0} />
          </div>
        </div>
      </div>
    </section>
  )
}
