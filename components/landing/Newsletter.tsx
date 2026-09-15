"use client"

import React, { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <section
      id="newsletter"
      className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] py-[clamp(48px,6vw,72px)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-center gap-[clamp(28px,4vw,56px)] rounded-[32px] border border-brand-line-soft bg-brand-panel p-[clamp(28px,4vw,48px)]">
        <div>
          <div className="mb-3.5 text-[11px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
            Around the neighbourhood
          </div>
          <h2 className="m-0 mb-3 text-[clamp(26px,3.4vw,36px)] leading-[1.1] font-extrabold tracking-[-0.02em] text-pretty text-brand-onyx">
            Get the weekend guide in your inbox.
          </h2>
          <p className="m-0 max-w-[420px] text-[15px] leading-[1.65] text-pretty text-brand-muted">
            Join 2,400+ neighbours receiving hidden gems, local specials and
            weekend market updates every Thursday morning.
          </p>
        </div>

        <div>
          {subscribed ? (
            <div className="rounded-[24px] bg-brand-grass-soft p-7">
              <div className="mb-2.5 text-[11px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
                Subscribed
              </div>
              <div className="text-[17px] leading-[1.55] font-bold text-brand-spruce">
                Welcome to Around the Neighbourhood — your first guide lands
                this Thursday.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@yourstreet.co.za"
                className="w-full rounded-full border border-brand-line bg-brand-warm-white px-6 py-4 text-[15px] text-brand-onyx outline-none placeholder:text-brand-muted focus-visible:border-brand-spruce"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-full bg-brand-spruce px-6 py-4 text-[15px] font-bold text-white transition-colors hover:bg-brand-onyx"
              >
                Subscribe free
              </button>
              <div className="px-6 py-0.5 text-[12px] text-brand-muted">
                No spam ever. Unsubscribe any time, in one click.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
