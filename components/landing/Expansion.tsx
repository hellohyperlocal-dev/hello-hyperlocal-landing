"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

const SUBURBS = ["Parkhurst", "Greenside", "Melville", "Bryanston"]

const FIELD_CLASSES =
  "w-full rounded-full border border-white/25 bg-white/6 px-6 py-4 text-[15px] text-white outline-none focus-visible:border-brand-grass"

export function Expansion() {
  const [email, setEmail] = useState("")
  const [suburb, setSuburb] = useState(SUBURBS[0])
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="expansion"
      className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] py-[clamp(60px,8vw,96px)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-[clamp(32px,4vw,56px)] rounded-[32px] bg-brand-spruce p-[clamp(32px,5vw,64px)]">
        <div>
          <div className="mb-3.5 text-[11px] font-bold tracking-[0.14em] text-brand-grass uppercase">
            Expanding suburb by suburb
          </div>
          <h2 className="m-0 mb-3.5 text-[clamp(30px,4.4vw,44px)] leading-[1.05] font-extrabold tracking-[-0.02em] text-pretty text-white">
            Bring Hello Hyperlocal to your suburb.
          </h2>
          <p className="m-0 max-w-[420px] text-[15px] leading-[1.7] text-white/78">
            We open one suburb at a time, once 40 neighbours have put their
            hands up. Tell us where you are and we&rsquo;ll come to you next.
          </p>
        </div>

        <div>
          {submitted ? (
            <div className="rounded-[24px] bg-brand-grass p-7">
              <div className="mb-2.5 text-[11px] font-bold tracking-[0.14em] text-brand-spruce/75 uppercase">
                You&rsquo;re on the list
              </div>
              <div className="text-[17px] leading-[1.55] font-bold text-brand-spruce">
                We&rsquo;ll email you the moment {suburb} opens — and tell you
                how many neighbours are ahead of you.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <label className="sr-only" htmlFor="expansion-email">
                Email address
              </label>
              <input
                id="expansion-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@yourstreet.co.za"
                className={`${FIELD_CLASSES} placeholder:text-white/60`}
              />

              <label className="sr-only" htmlFor="expansion-suburb">
                Your suburb
              </label>
              <div className="relative">
                <select
                  id="expansion-suburb"
                  value={suburb}
                  onChange={(event) => setSuburb(event.target.value)}
                  className={`${FIELD_CLASSES} cursor-pointer appearance-none pr-12`}
                >
                  {SUBURBS.map((name) => (
                    <option key={name} value={name} className="text-brand-onyx">
                      {name}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-6 h-4 w-4 -translate-y-1/2 text-white/60"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer rounded-full bg-brand-grass px-6 py-[17px] text-[15px] font-bold text-brand-spruce transition-colors hover:bg-white"
              >
                Put my suburb forward
              </button>
              <div className="px-6 py-0.5 text-[12px] text-white/60">
                One email when we open. Nothing else, ever.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
