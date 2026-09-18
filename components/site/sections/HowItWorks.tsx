"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

interface Screen {
  name: string;
  caption: string;
  /** Mock-up image path. Leave undefined to show the empty placeholder. */
  image?: string;
}

const SCREENS: Screen[] = [
  { name: "Home Feed", caption: "Everything happening nearby, in one place.", image: "/app-screens/home-feed.webp" },
  { name: "Love Local", caption: "Specials and stories from local businesses.", image: "/app-screens/love-local.webp" },
  { name: "Explore", caption: "Find cafés, services and hidden gems.", image: "/app-screens/explore.webp" },
  { name: "Events", caption: "See what's on around you this week.", image: "/app-screens/events.webp" },
  { name: "Marketplace", caption: "Buy, sell and offer services locally.", image: "/app-screens/marketplace.webp" },
  { name: "Community Projects", caption: "Follow and support projects in your suburb.", image: "/app-screens/community-projects.webp" },
  { name: "Rewards", caption: "Earn rewards for discovering your neighbourhood.", image: "/app-screens/rewards.webp" },
  { name: "Profile", caption: "Your interests, saved spots and settings.", image: "/app-screens/profile.webp" },
];

const COUNT = SCREENS.length;
const AUTOPLAY_MS = 3500;
/** Horizontal travel (px) before a touch drag counts as a swipe. */
const SWIPE_PX = 40;
// Every <Image> uses the same sizes, so the cards and the phone share one downloaded file per screen.
const SCREEN_SIZES = "300px";

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
  // Autoplay runs until the visitor takes control (arrow, dash, card, key or swipe), then stays off.
  const [autoplay, setAutoplay] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const reduceMotion = useReducedMotion();
  const regionRef = useRef<HTMLDivElement>(null);
  const swipe = useRef<{ x: number; y: number; moved: boolean } | null>(null);
  const current = SCREENS[active];

  const show = (index: number) => {
    setAutoplay(false);
    setActive(((index % COUNT) + COUNT) % COUNT);
  };
  const go = (delta: number) => show(active + delta);

  // Only advance while the carousel is on screen, so it never runs ahead unseen.
  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const playing = autoplay && !reduceMotion && inView && !hovered && !focused;

  // Timeout keyed on `active`: each step schedules the next, looping back to the first screen.
  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % COUNT), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [playing, active]);

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
          ref={regionRef}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
          }}
          onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
          onFocus={(e) => e.target.matches(":focus-visible") && setFocused(true)}
          onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setFocused(false)}
          // Touch swipe. touch-pan-y keeps vertical page scrolling native.
          onPointerDown={(e) => {
            if (e.pointerType !== "mouse") swipe.current = { x: e.clientX, y: e.clientY, moved: false };
          }}
          onPointerUp={(e) => {
            const start = swipe.current;
            if (!start) return;
            const dx = e.clientX - start.x;
            if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(e.clientY - start.y)) {
              start.moved = true;
              go(dx < 0 ? 1 : -1);
            }
          }}
          onPointerCancel={() => (swipe.current = null)}
          // A swipe that ends on a card must not also select that card.
          onClickCapture={(e) => {
            if (swipe.current?.moved) e.stopPropagation();
            swipe.current = null;
          }}
          // --step: distance between cards; --card: flat card width; --phone: phone frame width.
          className="relative w-full touch-pan-y overflow-hidden py-10 [--card:120px] [--phone:210px] [--step:150px] sm:[--card:170px] sm:[--phone:260px] sm:[--step:220px] lg:[--card:200px] lg:[--phone:300px] lg:[--step:260px] split:py-14"
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
                      onClick={() => show(index)}
                      className="relative block aspect-[9/19.5] w-full overflow-hidden rounded-[18px] bg-hh-panel shadow-[0_20px_50px_-30px_rgb(14_15_12/0.4)] lg:rounded-[24px]"
                    >
                      <ScreenFill screen={screen} tone="light" />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Fixed phone frame over the centre of the track. */}
            <div className="absolute left-1/2 top-1/2 z-10 w-[var(--phone)] -translate-x-1/2 -translate-y-1/2">
              <div className="relative aspect-[300/609] w-full rounded-[34px] bg-[#141312] p-[4%] shadow-[0_44px_96px_-44px_rgb(12_11_10/0.62)] lg:rounded-[48px]">
                {/* Side buttons, proportions from the reference frame: volume up/down left, power right. */}
                <span aria-hidden className="absolute -left-[1.3%] top-[20%] h-[5%] w-[1.3%] rounded-l-[2px] bg-[#141312]" />
                <span aria-hidden className="absolute -left-[1.3%] top-[29%] h-[8%] w-[1.3%] rounded-l-[2px] bg-[#141312]" />
                <span aria-hidden className="absolute -right-[1.3%] top-[31%] h-[11%] w-[1.3%] rounded-r-[2px] bg-[#141312]" />
                <div className="relative h-full w-full overflow-hidden rounded-[27px] bg-[#1c1e22] lg:rounded-[38px]">
                  {/* All screens stay mounted and cross-fade, so changing screen never waits on a new download. */}
                  {SCREENS.map((screen, index) => (
                    <div
                      key={screen.name}
                      aria-hidden={index !== active}
                      className={cn(
                        "absolute inset-0 transition-opacity duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] motion-reduce:transition-none",
                        index === active ? "opacity-100" : "opacity-0",
                      )}
                    >
                      <ScreenFill screen={screen} tone={index === active ? "dark" : "light"} />
                    </div>
                  ))}
                  {/* Dynamic Island */}
                  <span aria-hidden className="absolute left-1/2 top-[2.5%] z-10 h-[3.6%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
                </div>
              </div>
            </div>

            <CarouselButton direction="previous" onClick={() => go(-1)} />
            <CarouselButton direction="next" onClick={() => go(1)} />
          </div>

          {/* Active screen title. Announced only once the visitor is in control, not on every autoplay step. */}
          <div aria-live={autoplay ? "off" : "polite"} className="mt-16 flex flex-col items-center gap-1 px-5 text-center lg:mt-20">
            <p className="m-0 type-h3 text-hh-onyx">{current.name}</p>
            <p className="m-0 font-sans type-body text-hh-muted">{current.caption}</p>
          </div>

          {/* Dashed scroll indicator: one dash per screen, active dash widens. */}
          {/* Phones: wider spacing plus an invisible hit area, so each dash is a 24px+ tap target. */}
          <div className="mt-5 flex items-center justify-center gap-2 sm:gap-1.5">
            {SCREENS.map((screen, index) => (
              <button
                key={screen.name}
                type="button"
                aria-label={`Show ${screen.name}`}
                aria-current={index === active}
                onClick={() => show(index)}
                className="group relative flex h-6 items-center before:absolute before:-inset-x-1 before:-inset-y-2 sm:before:content-none"
              >
                <span
                  className={cn(
                    "block h-[3px] rounded-full transition-[width,background-color] duration-500 ease-[cubic-bezier(0.44,0,0.56,1)] motion-reduce:transition-none",
                    index === active ? "w-8 bg-hh-onyx" : "w-4 bg-hh-onyx/20 group-hover:bg-hh-onyx/40",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenFill({ screen, tone }: { screen: Screen; tone: "light" | "dark" }) {
  if (screen.image) {
    // Eager: only eight small screens, and lazy-loading the off-track cards is what made changes lag.
    return <Image src={screen.image} alt={tone === "dark" ? `${screen.name} screen` : ""} fill sizes={SCREEN_SIZES} loading="eager" className="object-cover" />;
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
        "absolute top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-hh-onyx/10 bg-white/70 text-hh-onyx backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest sm:h-11 sm:w-11",
        // Phones: smaller and tight to the edges so the arrows clear the phone frame.
        next ? "right-0 sm:right-6" : "left-0 sm:left-6",
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
