# Hero Section — Technical Handover (`handdown.md`)

This document contains the specification, design parameters, dependencies and
animation logic for the **Hello Hyperlocal hero section**.

The motion is modelled on https://novawell.webflow.io/ — referenced for its
animation behaviour only, not its design or dark theme. That reference is named
here for context; it should not appear in file, component or route names.

---

## 🎨 1. Brand & Design System Specifications

### Color Palette (Light Mode Default)
* **Background (`--background`)**: `#FCFAF7` (Warm White)
* **Dark Neutral (`--foreground`)**: `#0F0F0F` (Onyx)
* **Primary Brand (`--primary`)**: `#1C472A` (Dark Spruce)
* **Secondary Brand (`--secondary`)**: `#47663B` (Hunter Green)
* **Primary Accent (`--accent`)**: `#7ED957` (Radioactive Grass)

### Typography & Copy Rules
* **Font Family**: `DM Sans`
* **Headline Text**: `"Rediscover. Connect. Support."`
* **Text Case**: Title Case (strictly **NOT** ALL CAPS)
* **Letter Spacing**: **0px / None** (`letter-spacing: 0px`, `tracking-normal`, zero expanded character tracking)
* **Headline Layout**: Single horizontal flex row (words rendered side-by-side)
* **Sub-headline Copy**: *"Love Where You Live. Everything happening in your neighbourhood — discover local businesses, support local shop owners, and connect with your community."*

### Exclusions / Elements NOT Included
* ❌ NO Top Pill Badge / Brand Tagline Badge
* ❌ NO Pre-Launch Email Signup Input Box
* ❌ NO Dual-Layer Rolling Text CTA Hover Animations (use static buttons)
* ❌ NO Vertical Grid Lines or Sliding Accent Dashes

---

## 🎬 2. Animation Architecture

1. **Headline Blur Animation (`<BlurText />`)**:
   - Uses `motion/react` with `IntersectionObserver` to animate text by words.
   - Text appears from top with a blur-fade effect (`filter: blur(10px) opacity: 0 y: -50` → `filter: blur(0px) opacity: 1 y: 0`).
   - `delay={150}` ms between words, `stepDuration={0.35}` seconds per step.

2. **Phone Mockup Scale & Slide-Up Reveal**:
   - Uses the local image asset: `/hero_iPhone20Hand-p-1080.webp` from `public/`.
   - Animates on mount from `opacity: 0, translateY: 24px, scale: 1.05` → `opacity: 1, translateY: 0, scale: 1.0`.

3. **CTA Sub-Section Blur-Fade Slide-Up**:
   - Animates from `opacity: 0, translateY: 20px, blur(10px)` → `opacity: 1, translateY: 0, blur(0px)`.

4. **Ambient Backdrop Glow**:
   - Radial ambient blur (`#1C472A` / `#7ED957`) rising behind the phone mockup.

---

## 📦 3. Required Dependencies

```bash
npm install motion lucide-react
```

---

## 💻 4. Complete Component Source Code

### A. `components/BlurText.tsx`
```tsx
"use client";

import { motion } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from: Record<string, any>, steps: Record<string, any>[]) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes: Record<string, any[]> = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
}

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35
}: BlurTextProps) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
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
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.3em',
        letterSpacing: '0px',
      }}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: any = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000
        };
        spanTransition.ease = easing;

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            style={{ letterSpacing: '0px' }}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment}
          </motion.span>
        );
      })}
    </div>
  );
};

export default BlurText;
```

---

### B. `components/NovawellHeroSection.tsx`
```tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Apple,
  Play,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/BlurText";

export function NovawellHeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on client mount
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FCFAF7] dark:bg-[#0F0F0F] pt-12 pb-24 lg:pt-16 lg:pb-32 transition-colors duration-200">
      
      {/* 1. Ambient Glow Highlight Rise */}
      <div
        className={`absolute top-1/3 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#1C472A]/15 via-[#47663B]/10 to-[#7ED957]/20 blur-3xl transition-all duration-1000 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. BLUR TEXT HEADLINE (Title Case, 0px Letter Spacing, Horizontal Row) */}
        <div className="text-center py-4">
          <BlurText
            text="Rediscover. Connect. Support."
            delay={150}
            animateBy="words"
            direction="top"
            stepDuration={0.35}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold text-[#0F0F0F] dark:text-[#FCFAF7] tracking-normal leading-tight justify-center"
          />
        </div>

        {/* 3. PHONE MOCKUP SCALE & SLIDE-UP REVEAL */}
        <div className="mt-8 lg:mt-12 flex justify-center">
          <div
            className={`relative z-10 w-full max-w-[340px] sm:max-w-[420px] transition-all duration-1000 ease-out ${
              mounted
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-24 scale-105"
            }`}
          >
            {/* Phone Screen Glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[50px] bg-gradient-to-tr from-[#1C472A] via-[#47663B] to-[#7ED957] opacity-35 blur-2xl dark:opacity-50" />

            {/* Hand Holding Phone Image */}
            <img
              src="/hero_iPhone20Hand-p-1080.webp"
              alt="Hand holding smartphone displaying Hello Hyperlocal app"
              className="w-full h-auto drop-shadow-2xl mx-auto"
            />
          </div>
        </div>

        {/* 4. BLUR-FADE SLIDE-UP CTA SUB-SECTION */}
        <div
          className={`mt-12 max-w-2xl mx-auto text-center space-y-6 transition-all duration-1000 ease-out ${
            mounted
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-20 blur-md"
          }`}
        >
          {/* Sub-headline */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Love Where You Live. Everything happening in your neighbourhood — discover local businesses, support local shop owners, and connect with your community.
          </p>

          {/* Static App Store CTAs & Rating */}
          <div className="pt-2 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <Button
                render={<a href="#download" />}
                variant="outline"
                className="rounded-full border-border px-6 py-5 text-xs font-semibold text-foreground hover:bg-muted"
              >
                <Apple className="mr-2 h-4 w-4 fill-current" /> Download for iOS
              </Button>
              <Button
                render={<a href="#download" />}
                variant="outline"
                className="rounded-full border-border px-6 py-5 text-xs font-semibold text-foreground hover:bg-muted"
              >
                <Play className="mr-2 h-3.5 w-3.5 fill-current" /> Download for Android
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#7ED957]" /> Rated 4.9/5 by 1,420+ Neighbours
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
```

---

## 🚀 5. How to Render

The hero lives in **one self-contained file**: `components/landing/Hero.tsx`
(named export `Hero`, with `BlurText` inlined as a second named export). An
earlier `components/NovawellHeroSection.tsx` + `components/BlurText.tsx` pair
was a duplicate and has been deleted — don't recreate it.

It renders in two places, both using the same component:

- **`/`** — the live landing page, via `app/page.tsx`
- **`/hero-preview`** — an isolated shell for iterating on the hero without the
  rest of the page in the way, via `app/hero-preview/page.tsx`

```tsx
import { Hero } from "@/components/landing/Hero";
```

**The hero does not subtract the site header's height.** It runs a full
`200dvh` section with a `sticky top-0 h-[100dvh]` stage, and the site header
floats over its top edge. This is deliberate: an earlier version subtracted a
hardcoded `5rem`, which silently broke the pin and the phone's flush bottom
edge when the real header turned out to be 71px. Keep them decoupled — the
section's top padding is what holds the headline clear of the header.

---

## 📱 6. Mobile — known structure issues (DEFERRED)

Desktop is the current focus. These are real and measured at 375×812, logged
so they aren't rediscovered later. **None are bugs today** — the mobile view
renders correctly — they're structural weaknesses that will bite when the
mobile pass happens.

1. **`PHONE_OVERLAP` does nothing below `sm`.** On mobile the phone is
   *width*-limited: 375px wide × the image's 0.743 aspect forces 505px tall,
   so its top edge is pinned at `viewportBottom − 505` and no margin on its
   container can move it. The headline/phone overlap is instead produced by the
   section's mobile top padding (`17vh` vs `10vh` at sm+). **One visual result,
   two different levers depending on breakpoint** — the single most confusing
   thing in the file.

2. **Header height is hardcoded in two places.** `h-20` in
   `app/novawell-hero/page.tsx` and `calc(100dvh-5rem)` in the hero's `min-h`.
   They must stay in sync; changing one silently breaks the flush bottom edge.
   Worth turning into a shared constant or a CSS variable.

3. **The header eats 10% of a 812px viewport.** 80px is a desktop value applied
   at every size. Mobile probably wants ~56–64px, which also frees height for
   the phone — but see issue 2 before touching it.

4. **The glow's minimum width exceeds small viewports.**
   `w-[clamp(400px,68vw,880px)]` floors at 400px, so at 375px wide it renders
   400px and bleeds 13px past each edge (clipped by `overflow-hidden`).
   Harmless at current blur, but the floor should be vw-relative below `sm`.

5. **The phone can't grow on mobile.** It's capped by `max-w-full`. If the
   mobile composition wants a larger phone, the image has to bleed past the
   viewport edges (`max-w-none` + a `w-[110%]`-style value), which crops the
   hand at the sides. That's a design call, not a code fix.

6. **Mobile stacking assumes exactly three words.** `flex-col` puts one word per
   line; the `17vh` offset is tuned to a three-line headline. Changing the
   headline copy changes the line count and requires retuning that offset.

7. **Don't reintroduce `object-contain` on the phone image.** It keeps the
   `<img>` box at full size and letterboxes the picture inside it, so the box
   overlaps the headline while the visible phone doesn't — every overlap
   measurement becomes wrong. Current `h-auto max-h-full w-auto max-w-full`
   makes the element box match the painted image exactly.

### Standing trap: inline styles beat Tailwind classes

`BlurText` originally hardcoded `letterSpacing`, `display`, `flexDirection`,
`flexWrap` and `gap` as inline styles. Inline styles win over any class, so
`tracking-*` and responsive `flex-col` were silently dead. Both have been moved
into the `className` passed by the caller. **Do not re-add inline style
values to `BlurText`** — it will look like the classes "aren't working".

Related: Chrome's `getComputedStyle` reports a letter-spacing of zero as the
string `"normal"`, never `"0px"`. A tool verifying its own work by reading
computed style will conclude the fix didn't apply and "fix" it again forever.
