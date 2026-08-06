"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { FacilityCard } from "@/components/ds/FacilityCard"
import { HeroCard } from "@/components/ds/HeroCard"
import { ListRow } from "@/components/ds/ListRow"
import { StatChip } from "@/components/ds/StatChip"
import { PhoneBottomNav } from "@/components/landing/PhoneBottomNav"

const STEPS = [
  {
    number: "01",
    title: "Pick your suburb",
    body: "Set your home base to Linden to unlock hyper-filtered local updates, ward notices and community alerts.",
    navActive: 0,
  },
  {
    number: "02",
    title: "Love Local offers",
    body: "Unlock neighbour-only deals and rewards from your favourite local coffee shops, bakeries and artisan markets.",
    navActive: 1,
  },
  {
    number: "03",
    title: "What's on",
    body: "RSVP to weekend markets, track ward project progress and join community cleanups in real time.",
    navActive: 2,
  },
  {
    number: "04",
    title: "Share something great",
    body: "Post local news, recommend neighbourhood gems, or connect with verified locals without the social media clutter.",
    navActive: 0,
  },
]

const OFFERS = [
  {
    image: "/photography/goddess-cafe-linden.jpg",
    name: "Goddess Cafe",
    price: "15% before 10am",
  },
  {
    image: "/photography/winter-menu.jpg",
    name: "4th Ave Deli",
    price: "Free coffee",
  },
  {
    image: "/photography/breakfast.jpg",
    name: "Market Plate",
    price: "Two for R120",
  },
  {
    image: "/photography/whippet-linden.jpg",
    name: "The Whippet",
    price: "Free entry",
  },
]

function ScreenHeading({ title, meta }: { title: string; meta: string }) {
  return (
    <>
      <div className="mb-[3px] text-[20px] font-extrabold text-brand-onyx">
        {title}
      </div>
      <div className="mb-3.5 text-[10px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
        {meta}
      </div>
    </>
  )
}

function StepScreen({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div>
        <ScreenHeading title="Pick your suburb" meta="Step 1 of 4" />
        <div className="relative mb-3 h-[180px] overflow-hidden rounded-[24px]">
          <Image
            src="/photography/linden-lanes.jpg"
            alt=""
            fill
            sizes="280px"
            className="object-cover"
          />
        </div>
        <div className="mb-2.5 flex items-center justify-between rounded-[16px] border border-brand-line p-3.5">
          <span className="text-[13px] font-bold text-brand-onyx">
            Linden, JHB
          </span>
          <span className="rounded-full bg-brand-grass-soft px-2.5 py-[5px] text-[10px] font-bold text-brand-spruce">
            Selected
          </span>
        </div>
        <div className="mb-2.5 rounded-[16px] border border-brand-line-soft p-3.5 text-[13px] text-brand-muted">
          Greenside
        </div>
        <div className="rounded-[16px] border border-brand-line-soft p-3.5 text-[13px] text-brand-muted">
          Melville
        </div>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div>
        <div className="mb-[3px] text-[20px] font-extrabold text-brand-onyx">
          Love Local
        </div>
        <div className="mb-3 text-[10px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
          12 offers near you
        </div>
        <div className="mb-3 flex">
          <StatChip value="R240" label="Saved this month" />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {OFFERS.map((offer) => (
            <FacilityCard key={offer.name} {...offer} />
          ))}
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div>
        <ScreenHeading title="What's on" meta="3 open RSVPs" />
        <div className="mb-3 overflow-hidden rounded-[24px]">
          <div className="relative h-[120px]">
            <Image
              src="/photography/linden-market-2.jpg"
              alt=""
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
          <div className="bg-brand-spruce p-5">
            <div className="mb-1.5 text-[11px] font-bold tracking-[0.14em] text-brand-grass uppercase">
              Saturday · 8am–1pm
            </div>
            <div className="mb-3 text-[16px] font-extrabold text-white">
              Linden Village Market
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-[18px] py-2.5 text-[12px] font-bold text-brand-spruce">
              I&rsquo;m coming
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3.5 border-b border-brand-line-soft py-3.5">
          <span className="flex items-center gap-3">
            <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-brand-hunter text-[12px] font-bold text-white">
              K
            </span>
            <span>
              <span className="block text-[13px] font-bold text-brand-onyx">
                Street braai, 7th
              </span>
              <span className="block text-[11px] text-brand-muted">
                Sunday 4pm
              </span>
            </span>
          </span>
          <span className="rounded-full bg-brand-grass-soft px-2.5 py-[5px] text-[10px] font-bold whitespace-nowrap text-brand-spruce">
            18 going
          </span>
        </div>
      </div>
    )
  }

  return (
    <div>
      <ScreenHeading title="Suburb feed" meta="Ward 90 · Block 4" />
      <div className="mb-3">
        <HeroCard
          eyebrow="Ward notice"
          title="Load-shedding tonight, block 4"
          body="Stage 2 from 8pm–10:30pm."
          ctaLabel="Read more"
        />
      </div>
      <ListRow
        initials="T"
        name="Thandi M."
        meta="Piano teacher for an 8-year-old?"
        status="live"
        statusLabel="Open"
        isLast
      />
      <div className="mt-3.5 rounded-full bg-brand-spruce p-3.5 text-center text-[13px] font-bold text-brand-grass">
        Share something great
      </div>
    </div>
  )
}

export function HowItWorks() {
  const [step, setStep] = useState(0)

  return (
    <section
      id="how"
      className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-[clamp(36px,5vw,72px)] px-[clamp(20px,4vw,32px)] pt-[clamp(56px,7vw,88px)] pb-[clamp(60px,8vw,96px)]"
    >
      <div className="relative flex min-h-[560px] items-center justify-center">
        <div className="absolute aspect-square w-[min(430px,96%)] rounded-full border border-brand-spruce/16" />
        <div className="absolute aspect-square w-[min(340px,76%)] rounded-full border border-brand-spruce/10" />
        <div className="absolute top-[14%] left-[8%] h-3 w-3 rounded-full bg-brand-grass" />
        <div className="absolute right-[9%] bottom-[16%] h-2.5 w-2.5 rounded-full bg-brand-spruce" />

        <div className="relative w-[min(262px,66%)] rotate-[-6deg] rounded-[40px] bg-brand-spruce p-[9px] shadow-[0_30px_60px_rgba(15,15,15,0.16)]">
          <div className="relative h-[530px] overflow-hidden rounded-[32px] bg-brand-warm-white px-4 pt-[18px] pb-[78px]">
            <div className="mb-4 flex items-center justify-between text-[10px] font-bold text-brand-onyx">
              <span>9:41</span>
              <span className="tracking-[0.14em] text-brand-hunter">
                LINDEN
              </span>
            </div>

            <StepScreen step={step} />

            <PhoneBottomNav active={STEPS[step].navActive} />
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3.5 text-[11px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
          How it works
        </div>
        <h2 className="m-0 mb-9 max-w-[520px] text-[clamp(30px,4.4vw,44px)] leading-[1.08] font-extrabold tracking-[-0.02em] text-pretty text-brand-onyx">
          Four quick steps to knowing your block.
        </h2>

        <div className="relative flex flex-col">
          <div className="absolute top-2.5 bottom-[34px] left-2 w-0.5 -translate-x-px bg-linear-[180deg,#1C472A_0%,#47663B_55%,#7ED957_100%]" />
          {STEPS.map((item, index) => {
            const isActive = index === step
            return (
              <button
                key={item.number}
                type="button"
                onClick={() => setStep(index)}
                aria-current={isActive ? "step" : undefined}
                className="relative flex cursor-pointer items-start gap-[18px] pb-[26px] text-left"
              >
                <span
                  className={`relative z-1 mt-[5px] h-4 w-4 flex-none rounded-full border-4 border-brand-warm-white transition-colors ${
                    isActive ? "bg-brand-grass" : "bg-brand-spruce"
                  }`}
                />
                <span className="min-w-0">
                  <span className="mb-[7px] flex items-baseline gap-3">
                    <span className="font-mono text-[12px] text-brand-hunter">
                      {item.number}
                    </span>
                    <span
                      className={`text-[21px] font-extrabold tracking-[-0.01em] transition-colors ${
                        isActive ? "text-brand-onyx" : "text-brand-hunter"
                      }`}
                    >
                      {item.title}
                    </span>
                  </span>
                  <span className="block max-w-[440px] text-[14px] leading-[1.7] text-pretty text-brand-muted">
                    {item.body}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
