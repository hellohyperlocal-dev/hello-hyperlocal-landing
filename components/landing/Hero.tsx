"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  easeInOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

// --- BLUR TEXT COMPONENT (REACT BITS VARIANT) ---
const buildKeyframes = (from: Record<string, any>, steps: Record<string, any>[]) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))]);
  const keyframes: Record<string, any[]> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
}

export function BlurText({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    // NOTE: deliberately no inline `style` here. Layout (display, direction,
    // wrap, gap) and tracking are all driven by the `className` passed in, so
    // they can be made responsive. Inline styles beat Tailwind classes, so any
    // value re-added here would silently override the caller — don't.
    <div ref={ref} className={className}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: any = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        };
        spanTransition.ease = easing;

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment}
          </motion.span>
        );
      })}
    </div>
  );
}

// --- HERO SECTION ---
// Shared easing — a strong ease-out so both elements decelerate into place
// rather than coasting. Matches the "rise and settle" feel of the reference.
const RISE_EASE = [0.16, 1, 0.3, 1] as const;

// How far the phone rides up over the headline. This overlap is deliberate —
// a later effect in this hero depends on the two intersecting — so it's a
// fixed offset rather than whatever happens to fall out of the layout.
// Mobile gets its own smaller value: the headline stacks to three lines there
// and the last word is only ~34px tall, so the desktop offset would bury it.
const PHONE_OVERLAP =
  "mt-[calc(clamp(10px,2vh,24px)*-1)] sm:mt-[calc(clamp(24px,5vh,72px)*-1)]";

// The hero sizes itself against the site header via the --site-header-h CSS
// variable (declared once in globals.css, consumed by SiteHeader too). A CSS
// variable rather than a JS constant because Tailwind's scanner only reads
// literal class strings — an interpolated `h-[calc(...${X}...)]` never gets
// generated, but `var(--site-header-h)` inside a literal class works fine.
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress across the section. Because the section is twice the
  // viewport tall and the wrapper inside it is one viewport and sticky,
  // 0 -> 1 maps exactly onto the stretch where the hero is pinned on screen.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Raw scroll progress tracks the wheel rigidly, which reads as stiff. A
  // spring adds a little inertia so the motion trails and settles instead of
  // snapping to each scroll delta — this is what gives the reference its eased
  // feel. Everything below is derived from the smoothed value, not the raw one.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.45,
    restDelta: 0.0005,
  });

  // The headline grows by transform, not font-size. Scaling a wrapper is
  // GPU-composited; animating font-size would reflow and re-wrap the text on
  // every frame. Reference goes 1 -> 1.3 across the pin.
  const headlineScale = useTransform(progress, [0, 1], [1, 1.3], {
    ease: easeInOut,
  });

  // Straight push down, holding from 75% so the last quarter of the pin is the
  // headline growing alone.
  //
  // The reference has a small rise before this (translateY 184 -> 148 over the
  // first quarter) and we deliberately don't copy it: there it's an artifact of
  // the entrance leaving the phone at y=184, so the scroll phase starts by
  // unwinding that offset. Our entrance already settles at y=0, so replaying an
  // upward move afterwards reads as a hiccup rather than intent.
  const phoneY = useTransform(progress, [0, 0.75, 1], ["0%", "15%", "15%"], {
    ease: easeInOut,
  });

  return (
    // Twice the viewport tall so there is a viewport's worth of scroll to pin
    // through. `overflow-clip` rather than `hidden`: hidden would make this a
    // scroll container and change how the sticky child resolves.
    <section
      ref={sectionRef}
      className="relative h-[calc((100dvh-var(--site-header-h))*2)] overflow-clip bg-[#FCFAF7] transition-colors duration-200 dark:bg-[#0F0F0F]"
    >
      {/* The pinned stage. Sticks below the header and holds the hero on
          screen for the section's extra viewport of height. */}
      <div className="sticky top-[var(--site-header-h)] flex h-[calc(100dvh-var(--site-header-h))] flex-col overflow-hidden pt-[clamp(88px,17vh,160px)] sm:pt-[clamp(32px,10vh,110px)]">
        {/* Mobile carries a larger top offset on purpose: there the phone is
            width-limited, so its top edge is pinned and PHONE_OVERLAP can't
            move it. Dropping the headline is the only way to get the last word
            to tuck behind the phone. From sm+ the phone is height-limited. */}
        <motion.div
          style={{ scale: headlineScale }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* 1. BLUR TEXT HEADLINE */}
          <div className="relative z-0 text-center">
            <BlurText
              text="Rediscover. Connect. Support."
              delay={150}
              animateBy="words"
              direction="top"
              stepDuration={0.35}
              // Mobile: one word per line, tight leading, so it reads as a
              // stacked lockup rather than a ragged wrap. sm+: back to a single
              // horizontal row that wraps only if it must.
              className="flex flex-col items-center justify-center gap-0 leading-[0.95] text-4xl font-extrabold tracking-[-0.04em] text-[#0F0F0F] sm:flex-row sm:flex-wrap sm:gap-[0.3em] sm:text-6xl sm:leading-tight md:text-7xl lg:text-[88px] dark:text-[#FCFAF7]"
            />
          </div>
        </motion.div>

        {/* 2. GLOW + PHONE. `flex-1` + `min-h-0` makes this row absorb exactly
            the height the headline leaves, so the phone is always flush with
            the bottom edge and never taller than the space available — at any
            viewport, rather than only at 1920x1080. The negative top margin
            then pulls it back up into the headline by a fixed amount.
            `y` is the scroll-driven push down; the mount animations live on the
            children so the two never fight over the same transform. */}
        <motion.div
          style={{ y: phoneY }}
          className={`relative flex min-h-0 flex-1 items-end justify-center ${PHONE_OVERLAP}`}
        >
        {/* Ambient glow — a wide horizontal oval at the base of the phone,
            rising from below. Not a silhouette of the phone: an independent
            ellipse, so it reads as light spilling upward, not a drop shadow. */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 2.2, ease: RISE_EASE, delay: 0.25 }}
          className="pointer-events-none absolute bottom-[8%] left-1/2 z-0 h-[clamp(200px,30vw,360px)] w-[clamp(400px,68vw,880px)] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,#7ED957_0%,#47663B_42%,transparent_72%)] opacity-60 blur-[80px]"
        />

        {/* Phone mockup — starts fully below its own box and slides up.
            Positioned absolute so it has a definite height for the image's
            `h-full` to resolve against; a `min-h`-sized flex item does not
            give one, and the image falls back to its natural 1453px. */}
        <motion.div
          initial={{ opacity: 0, y: "100%", scale: 1.05 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.9, ease: RISE_EASE, delay: 0.85 }}
          className="absolute inset-0 z-10 flex items-end justify-center"
        >
          <img
            src="/hero_iPhone20Hand-p-1080.webp"
            alt="Hand holding smartphone displaying Hello Hyperlocal app"
            // auto width/height with max-* constraints makes the element box
            // match the painted image exactly. With object-contain the box
            // stays full-size and the image letterboxes inside it, which makes
            // the box overlap the headline while the visible phone doesn't.
            className="block h-auto max-h-full w-auto max-w-full"
          />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
