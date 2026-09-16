"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

interface Screen {
  name: string;
  caption: string;
  /** Mock-up image path. Leave undefined to show the empty placeholder. */
  image?: string;
}

// Brief §4. Real mock-ups are still to come: set `image` (e.g. "/app-screens/home-feed.png")
// on each entry when they arrive; nothing else needs to change.
const SCREENS: Screen[] = [
  { name: "Home feed", caption: "Everything happening nearby, in one place." },
  { name: "Love Local", caption: "Specials and stories from local businesses." },
  { name: "Explore", caption: "Find cafés, services and hidden gems." },
  { name: "Events", caption: "See what's on around you this week." },
  { name: "Marketplace", caption: "Buy, sell and offer services locally." },
  { name: "Community Projects", caption: "Follow and support projects in your suburb." },
  { name: "Rewards", caption: "Earn rewards for discovering your neighbourhood." },
  { name: "Profile", caption: "Your interests, saved spots and settings." },
];

const COUNT = SCREENS.length;

/** Shortest signed distance from the active screen, wrapping around the loop. */
function offsetFrom(active: number, index: number) {
  let d = (index - active) % COUNT;
  if (d > COUNT / 2) d -= COUNT;
  if (d < -COUNT / 2) d += COUNT;
  return d;
}

// Layout from cmsiphonecarousel.framer.website: a row of flat screen cards slides behind a fixed
// iPhone frame; the centred screen shows inside the phone, with its title underneath.
export function HowItWorks() {
  const [active, setActive] = useState(0);
  const go = (delta: number) => setActive((i) => (i + delta + COUNT) % COUNT);
  const current = SCREENS[active];

  return (
    <section id="how-it-works" className="relative bg-white py-[100px] split:py-[130px]">
      <div className="site-container flex flex-col items-start gap-[50px]">
        <div className="flex max-w-[720px] flex-col items-start gap-5">
          <SectionEyebrow label="How the App Works" tone="light" />
          <h2 className="m-0 type-h2 text-hh-onyx">A first look at Hello Linden</h2>
          <p className="m-0 type-body-lg text-hh-muted">The app being built for Linden, screen by screen.</p>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Hello Linden app screens"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
          }}
          // --step: distance between cards; --card: flat card width; --phone: phone frame width.
          className="relative w-full overflow-hidden rounded-card bg-hh-warm py-10 [--card:120px] [--phone:210px] [--step:150px] sm:[--card:170px] sm:[--phone:260px] sm:[--step:220px] lg:[--card:200px] lg:[--phone:300px] lg:[--step:260px] split:py-14"
        >
          <div className="relative mx-auto h-[calc(var(--phone)*2.03)]">
            {/* Card track: fades out towards both edges. */}
            <ul className="absolute inset-0 m-0 list-none p-0 [mask-image:linear-gradient(90deg,transparent_0%,black_18%,black_82%,transparent_100%)]">
              {SCREENS.map((screen, index) => {
                const offset = offsetFrom(active, index);
                const hidden = offset === 0 || Math.abs(offset) > 3;
                return (
                  <li
                    key={screen.name}
                    aria-hidden
                    style={{ transform: `translate(-50%, -50%) translateX(calc(var(--step) * ${offset}))` }}
                    className={cn(
                      "absolute left-1/2 top-1/2 w-[var(--card)] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.44,0,0.56,1)] motion-reduce:transition-none",
                      hidden ? "pointer-events-none opacity-0" : "opacity-100",
                    )}
                  >
                    <button
                      type="button"
                      tabIndex={-1}
                      onClick={() => setActive(index)}
                      className="relative block aspect-[9/19.5] w-full overflow-hidden rounded-[18px] bg-hh-panel shadow-[0_20px_50px_-30px_rgb(14_15_12/0.4)] lg:rounded-[24px]"
                    >
                      <ScreenFill screen={screen} tone="light" sizes="200px" />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Fixed phone frame over the centre of the track. */}
            <div className="absolute left-1/2 top-1/2 z-10 w-[var(--phone)] -translate-x-1/2 -translate-y-1/2">
              <div className="relative aspect-[300/609] w-full rounded-[34px] bg-[#141312] p-[4%] shadow-[0_44px_96px_-44px_rgb(12_11_10/0.62)] lg:rounded-[48px]">
                <div className="relative h-full w-full overflow-hidden rounded-[27px] bg-[#1c1e22] lg:rounded-[38px]">
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                      key={current.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.44, 0, 0.56, 1] }}
                      className="absolute inset-0"
                    >
                      <ScreenFill screen={current} tone="dark" sizes="300px" />
                    </motion.div>
                  </AnimatePresence>
                  {/* Dynamic Island */}
                  <span aria-hidden className="absolute left-1/2 top-[2.5%] z-10 h-[3.6%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
                </div>
              </div>
            </div>

            <CarouselButton direction="previous" onClick={() => go(-1)} />
            <CarouselButton direction="next" onClick={() => go(1)} />
          </div>

          {/* Active screen title (announced to screen readers on change). */}
          <div aria-live="polite" className="mt-6 flex flex-col items-center gap-1 px-5 text-center">
            <p className="m-0 text-[14px] uppercase leading-5 tracking-[0.08em] text-hh-muted">{current.name}</p>
            <p className="m-0 type-body text-hh-onyx">{current.caption}</p>
            <p className="m-0 text-[13px] leading-5 text-hh-muted">
              {active + 1} / {COUNT}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenFill({ screen, tone, sizes }: { screen: Screen; tone: "light" | "dark"; sizes: string }) {
  if (screen.image) {
    return <Image src={screen.image} alt={tone === "dark" ? `${screen.name} screen` : ""} fill sizes={sizes} className="object-cover" />;
  }
  return (
    <span
      aria-hidden
      className={cn(
        "absolute inset-0 flex items-center justify-center px-3 text-center text-[13px] leading-5",
        tone === "dark" ? "text-white/40" : "text-hh-muted",
      )}
    >
      {screen.name}
    </span>
  );
}

// Frosted round arrow buttons at the stage edges, as in the source.
function CarouselButton({ direction, onClick }: { direction: "previous" | "next"; onClick: () => void }) {
  const next = direction === "next";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={next ? "Next screen" : "Previous screen"}
      className={cn(
        "absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-hh-onyx/10 bg-white/70 text-hh-onyx backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest",
        next ? "right-3 sm:right-6" : "left-3 sm:left-6",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "block h-[9px] w-[9px] border-r-[1.5px] border-t-[1.5px] border-current",
          next ? "mr-[3px] rotate-45" : "ml-[3px] rotate-[225deg]",
        )}
      />
    </button>
  );
}
