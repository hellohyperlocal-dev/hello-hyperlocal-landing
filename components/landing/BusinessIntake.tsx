"use client"

import React, { useState } from "react"
import { Check } from "lucide-react"

const SUBURBS = [
  "Linden",
  "Parkhurst",
  "Greenside",
  "Melville",
  "Blairgowrie",
  "Bryanston",
]

const CATEGORIES = [
  "Restaurant / Cafe",
  "Retail / Boutique",
  "Guesthouse",
  "Services / Medical",
  "Community / Event",
]

const BENEFITS = [
  "Direct reach to residents in your specific suburb",
  "Feature weekly specials and resident-only offers",
  "Verified business profile and interactive map placement",
]

const FIELD_CLASSES =
  "w-full rounded-[16px] border border-brand-line bg-brand-panel px-4 py-3 text-[14px] text-brand-onyx outline-none placeholder:text-brand-muted focus-visible:border-brand-spruce"

const LABEL_CLASSES =
  "mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-brand-hunter uppercase"

export function BusinessIntake() {
  const [businessName, setBusinessName] = useState("")
  const [suburb, setSuburb] = useState(SUBURBS[0])
  const [category, setCategory] = useState(CATEGORIES[0])
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="business"
      className="border-y border-brand-line-soft bg-brand-panel"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-[clamp(32px,4vw,56px)] px-[clamp(20px,4vw,32px)] py-[clamp(60px,8vw,96px)]">
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

        <div className="rounded-[32px] border border-brand-line-soft bg-brand-warm-white p-[clamp(24px,3vw,36px)]">
          {submitted ? (
            <div className="py-8 text-center">
              <span
                aria-hidden="true"
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-grass text-brand-spruce"
              >
                <Check className="h-6 w-6" strokeWidth={3} />
              </span>
              <h3 className="m-0 mb-2.5 text-[20px] font-extrabold text-brand-onyx">
                Partnership request received
              </h3>
              <p className="m-0 mx-auto mb-6 max-w-[320px] text-[14px] leading-[1.65] text-brand-muted">
                Thank you, {businessName}. Our local team will reach out to get
                you listed for the {suburb} launch.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="cursor-pointer rounded-full border border-brand-line bg-brand-panel px-6 py-3 text-[13px] font-bold text-brand-spruce transition-colors hover:border-brand-spruce"
              >
                Submit another business
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <h3 className="m-0 mb-1 text-[20px] font-extrabold text-brand-onyx">
                  List your business
                </h3>
                <p className="m-0 text-[13px] text-brand-muted">
                  Join early as a founding local merchant partner.
                </p>
              </div>

              <div>
                <label className={LABEL_CLASSES} htmlFor="business-name">
                  Business name
                </label>
                <input
                  id="business-name"
                  type="text"
                  required
                  value={businessName}
                  onChange={(event) => setBusinessName(event.target.value)}
                  placeholder="e.g. Linden Artisan Bakery"
                  className={FIELD_CLASSES}
                />
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(140px,100%),1fr))] gap-4">
                <div>
                  <label className={LABEL_CLASSES} htmlFor="business-suburb">
                    Suburb
                  </label>
                  <select
                    id="business-suburb"
                    value={suburb}
                    onChange={(event) => setSuburb(event.target.value)}
                    className={`${FIELD_CLASSES} cursor-pointer`}
                  >
                    {SUBURBS.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={LABEL_CLASSES} htmlFor="business-category">
                    Category
                  </label>
                  <select
                    id="business-category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className={`${FIELD_CLASSES} cursor-pointer`}
                  >
                    {CATEGORIES.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={LABEL_CLASSES} htmlFor="business-email">
                  Contact email
                </label>
                <input
                  id="business-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="owner@lindenbakery.co.za"
                  className={FIELD_CLASSES}
                />
              </div>

              <button
                type="submit"
                className="mt-1 cursor-pointer rounded-full bg-brand-spruce px-6 py-4 text-[15px] font-bold text-white transition-colors hover:bg-brand-onyx"
              >
                Request partner spot
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
