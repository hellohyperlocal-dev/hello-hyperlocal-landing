---
version: alpha
name: Hello-Hyperlocal-design-analysis
description: An inspired interpretation of Hello Hyperlocal's design language — a community network brand whose surface combines an authoritative near-black display sans with a vivid lime-green brand accent, sage-tinted surface neutrals, rounded white cards on a pale green-tinted canvas, and the technical precision of Vercel's Geist Typography System.

colors:
  primary: "#7ED957"
  on-primary: "#0e0f0c"
  primary-active: "#cdffad"
  primary-neutral: "#c5edab"
  primary-pale: "#e2f6d5"
  ink: "#0e0f0c"
  ink-deep: "#1C472A"
  body: "#454745"
  mute: "#868685"
  canvas: "#ffffff"
  canvas-soft: "#F5F5F5"
  canvas-muted: "#EBEBEB"
  positive: "#2ead4b"
  positive-deep: "#054d28"
  warning: "#ffd11a"
  warning-deep: "#b86700"
  warning-content: "#4a3b1c"
  negative: "#d03238"
  negative-deep: "#a72027"
  negative-darkest: "#a7000d"
  negative-bg: "#320707"
  accent-orange: "#ffc091"
  accent-cyan: "#38c8ff"

typography:
  fontFamilies:
    heading: "Bricolage Grotesque (var(--font-heading))"
    body: "Geist (var(--font-geist-sans) / font-sans)"

  type-h1:
    fontFamily: "Bricolage Grotesque (var(--font-heading))"
    fontSize: "46px (mobile) -> 68px (lg) -> 80px (xl)"
    fontWeight: "700 (Bold)"
    lineHeight: "0.9"
    letterSpacing: "-3px"
    utilityClass: "type-h1"
  type-h2:
    fontFamily: "Bricolage Grotesque (var(--font-heading))"
    fontSize: "36px (mobile) -> 40px (md) -> 48px (xl)"
    fontWeight: "600 (Semi-Bold)"
    lineHeight: "1.0 (36px / 40px / 48px)"
    letterSpacing: "-2.2px"
    utilityClass: "type-h2"
  type-h3:
    fontFamily: "Bricolage Grotesque (var(--font-heading))"
    fontSize: "22px"
    fontWeight: "500 (Medium)"
    lineHeight: "26.4px"
    letterSpacing: "-1px"
    utilityClass: "type-h3"
  type-stat:
    fontFamily: "Bricolage Grotesque (var(--font-heading))"
    fontSize: "56px (mobile) -> 78px (xl)"
    fontWeight: "500 (Medium)"
    lineHeight: "1.0"
    utilityClass: "type-stat"
  type-body-lg:
    fontFamily: "Geist (font-sans)"
    fontSize: "20px"
    fontWeight: "400 (Regular)"
    lineHeight: "30px"
    letterSpacing: "-0.6px"
    utilityClass: "type-body-lg"
  type-body:
    fontFamily: "Geist (font-sans)"
    fontSize: "16px"
    fontWeight: "400 (Regular)"
    lineHeight: "24px"
    letterSpacing: "-0.6px"
    utilityClass: "type-body"

  display-mega:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 165px
    fontWeight: 600
    lineHeight: 148px
    letterSpacing: -9.9px
    geistClass: "text-heading-72 lg:text-heading-165"
  display-xxl:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 96px
    fontWeight: 600
    lineHeight: 96px
    letterSpacing: -4.32px
    geistClass: "text-heading-72"
  display-xl:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 72px
    fontWeight: 600
    lineHeight: 72px
    letterSpacing: -4.32px
    geistClass: "text-heading-72"
  display-lg:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 48px
    fontWeight: 600
    lineHeight: 56px
    letterSpacing: -2.88px
    geistClass: "text-heading-48"
  display-md:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 50px
    fontWeight: 600
    lineHeight: 54px
    letterSpacing: -3.00px
    geistClass: "text-heading-50"
  display-sm:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -1.28px
    geistClass: "text-heading-32"
  display-xs:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.96px
    geistClass: "text-heading-24"
  body-lg:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 36px
    geistClass: "text-copy-20"
  body-md:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    geistClass: "text-copy-16"
  body-md-strong:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
    geistClass: "text-copy-16 font-semibold"
  body-sm:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    geistClass: "text-copy-14"
  body-sm-strong:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    geistClass: "text-label-14 font-semibold"
  caption:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    geistClass: "text-label-12"
  caption-mono:
    fontFamily: var(--font-geist-mono), monospace
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    geistClass: "text-label-12-mono"
  button-md:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: "-0.6px"
    geistClass: "text-button-16"

  # In-App Simulated Phone Screen Micro-Tokens (WCAG / Responsive Viewports)
  mockup-status-time:
    fontSize: 11px
    fontWeight: 600
    letterSpacing: -0.2px
  mockup-badge-micro:
    fontSize: 8px
    fontWeight: 800
    letterSpacing: 0.1em
    textTransform: uppercase
  mockup-subtext-micro:
    fontSize: 8.5px
    fontWeight: 500
    lineHeight: 12px
  mockup-caption-micro:
    fontSize: 9px
    fontWeight: 700
    letterSpacing: 0.12em
    textTransform: uppercase
  mockup-body-dense:
    fontSize: 10.5px
    fontWeight: 600
    lineHeight: 14px
  mockup-title-dense:
    fontSize: 14px
    fontWeight: 800
    letterSpacing: -0.5px
    lineHeight: 18px

rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.md} {spacing.xl}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
  button-primary:
    description: "Primary brand CTA button. Solid lime-green surface (#7ED957) with dark onyx text (#0e0f0c) and an embedded dark square chip (#0e0f0c) on the right containing a lime right-arrow icon."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    chipBackgroundColor: "{colors.ink}"
    chipIconColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    description: "Secondary text-link CTA button. Clean text label with right-arrow icon (#0e0f0c) and a continuous full-width bottom underline extending under both text and arrow."
    backgroundColor: "transparent"
    textColor: "{colors.ink} (#0e0f0c)"
    arrowColor: "{colors.ink} (#0e0f0c)"
    underlineColor: "{colors.ink} (#0e0f0c)"
    typography: "{typography.button-md}"
    padding: "{spacing.xs} 0px"
  button-tertiary:
    description: "Tertiary dark contrast CTA button (used on lime surfaces or focal dark cards). Solid dark onyx surface (#0e0f0c) with white text (#ffffff) and an embedded lime-green square chip (#7ED957) on the right containing a dark right-arrow icon."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    chipBackgroundColor: "{colors.primary}"
    chipIconColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
  card-content:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-content-elevated:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "none"
    shadow: "0 4px 24px rgba(14, 15, 12, 0.1)"
  card-feature-sage:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-feature-green:
    backgroundColor: "{colors.primary-pale}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-feature-dark-primary:
    description: "Primary dark feature card with deep forest green ink (#1C472A) surface."
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-feature-dark-secondary:
    description: "Secondary dark feature card with near-black ink (#0e0f0c) surface."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-feature-dark:
    alias: "card-feature-dark-primary"
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: "{spacing.3xl} {spacing.xl}"
  hero-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.primary}"
    typography: "{typography.display-mega}"
    padding: "{spacing.3xl} {spacing.xl}"
  content-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: "{spacing.3xl} {spacing.xl}"
  icon-box-primary:
    description: "Primary feature icon box component used across section feature grids (e.g. Partners & Investors section)."
    cardBackground: "{colors.canvas} (#ffffff)"
    iconContainer:
      size: "48px x 48px (h-12 w-12)"
      backgroundColor: "{colors.ink-deep} (#1C472A)"
      iconColor: "{colors.primary} (#7ED957)"
      rounded: "10px (rounded-[10px])"
      iconSize: "24px (h-6 w-6, strokeWidth: 2.2)"
    heading:
      typography: "type-h3 (font-family: var(--font-heading), font-size: 22px, font-weight: 500, line-height: 26.4px, letter-spacing: -1px)"
      color: "{colors.ink} (#0e0f0c)"
      casing: "Title Case"
      text: "Primary Icon Box"
    body:
      typography: "type-body (font-size: 16px, line-height: 24px, letter-spacing: -0.6px)"
      color: "{colors.muted} (#454745)"
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  icon-box-secondary:
    description: "Secondary feature icon box component with lime icon container on soft sage background."
    cardBackground: "{colors.canvas-soft} (#f5f5f5)"
    iconContainer:
      size: "48px x 48px (h-12 w-12)"
      backgroundColor: "{colors.primary} (#7ED957)"
      iconColor: "{colors.ink} (#0e0f0c)"
      rounded: "10px (rounded-[10px])"
      iconSize: "24px (h-6 w-6, strokeWidth: 2.2)"
    heading:
      typography: "type-h3 (font-family: var(--font-heading), font-size: 22px, font-weight: 500, line-height: 26.4px, letter-spacing: -1px)"
      color: "{colors.ink} (#0e0f0c)"
      casing: "Title Case"
      text: "Secondary Icon Box"
    body:
      typography: "type-body (font-size: 16px, line-height: 24px, letter-spacing: -0.6px)"
      color: "{colors.muted} (#454745)"
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  icon-box-tertiary:
    description: "Tertiary feature icon box component with mid-green icon container on pale mint background."
    cardBackground: "{colors.primary-pale} (#e2f6d5)"
    iconContainer:
      size: "48px x 48px (h-12 w-12)"
      backgroundColor: "{colors.primary-neutral} (#c5edab)"
      iconColor: "{colors.ink-deep} (#1C472A)"
      rounded: "10px (rounded-[10px])"
      iconSize: "24px (h-6 w-6, strokeWidth: 2.2)"
    heading:
      typography: "type-h3 (font-family: var(--font-heading), font-size: 22px, font-weight: 500, line-height: 26.4px, letter-spacing: -1px)"
      color: "{colors.ink} (#0e0f0c)"
      casing: "Title Case"
      text: "Tertiary Icon Box"
    body:
      typography: "type-body (font-size: 16px, line-height: 24px, letter-spacing: -0.6px)"
      color: "{colors.muted} (#454745)"
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  eyebrow-pill-standard:
    description: "Standard section eyebrow pill used across light canvases and neutral sections."
    backgroundColor: "{colors.primary-pale}"
    textColor: "{colors.positive-deep}"
    iconColor: "{colors.positive-deep}"
    iconSize: "14px (h-3.5 w-3.5)"
    typography: "{typography.caption}"
    textTransform: "Title Case"
    fontWeight: "600 (font-semibold)"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
    border: "1px solid rgba(14, 15, 12, 0.05)"
    dark:
      backgroundColor: "{colors.ink-deep}"
      textColor: "{colors.primary}"
      iconColor: "{colors.primary}"
      border: "1px solid rgba(255, 255, 255, 0.05)"

  eyebrow-pill-dark:
    description: "High-contrast eyebrow pill for dark surfaces (e.g. Forest Green #1C472A cards, Download CTA)."
    backgroundColor: "rgba(255, 255, 255, 0.10)"
    textColor: "{colors.primary}"
    iconColor: "{colors.primary}"
    iconSize: "14px (h-3.5 w-3.5)"
    typography: "{typography.caption}"
    textTransform: "Title Case"
    fontWeight: "600 (font-semibold)"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
    border: "1px solid rgba(255, 255, 255, 0.10)"

  eyebrow-pill-accent:
    description: "High-energy lime pill variant for focal dark cards."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    iconColor: "{colors.on-primary}"
    iconSize: "14px (h-3.5 w-3.5)"
    typography: "{typography.caption}"
    textTransform: "Title Case"
    fontWeight: "700 (font-bold)"
    rounded: "{rounded.pill}"
    padding: "6px 14px"

  eyebrow-pill-surface-contrast:
    description: "Inverted contrast pill for sections or cards with a native primary-pale (#e2f6d5) background."
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.primary}"
    iconColor: "{colors.primary}"
    iconSize: "14px (h-3.5 w-3.5)"
    typography: "{typography.caption}"
    textTransform: "Title Case"
    fontWeight: "600 (font-semibold)"
    rounded: "{rounded.pill}"
    padding: "6px 14px"

  badge-positive:
    backgroundColor: "{colors.primary-pale}"
    textColor: "{colors.positive-deep}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  badge-negative:
    backgroundColor: "{colors.negative-bg}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"

  # ─── Examples (illustrative) ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.mute}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    item-divider: "{colors.canvas-soft}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-mono}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.canvas-soft}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.xl}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---

## Overview

Hello Hyperlocal wears its identity in a signature pairing: a vivid grass/lime-green `{colors.primary}` (`#7ED957`) used as the CTA pill and brand accent, set against a clean soft canvas `{colors.canvas-soft}` (`#F5F5F5`) running across the hero band, and near-black ink `{colors.ink}` (`#0e0f0c`) with an olive undertone. The brand reads like a calm Scandinavian magazine — generous whitespace, large rounded cards (`{rounded.xl}` 24 px / `{rounded.2xl}` 32 px), full-radius interactive pills (`{rounded.pill}` 9999 px), and punchy display typography.

> **v2 update:** the Geist typography described below and in the `typography` tokens above is superseded. v2 uses the Charion layout type scale in Hello Hyperlocal colors: **Bricolage Grotesque** for headings and display type, **Almarai** for body copy. Headings: h1 46/68/80px (line-height 0.9, -3px tracking), h2 36/40/48px (-2.2px), h3 22px (-1px); body 20/30 and 16/24. Implemented as `type-*` utilities in `app/globals.css`. The `geistClass` values no longer exist in the codebase. Radii are now `rounded-button` 8px, `rounded-card` 10px and `rounded-chip` 6px, replacing the 9999px pill and 24/32px card radii.

In the pre-v2 system, all typography was powered by Vercel's **Geist Typography System** (`GeistSans` and `GeistMono`). Headings make use of calibrated negative letter spacing (`-0.02em` to `-0.06em`), while body copy and buttons leverage dedicated single-purpose classes (`text-heading-*`, `text-copy-*`, `text-label-*`, `text-button-*`).

**Key Characteristics:**
- A single lime-green CTA accent `{colors.primary}` (`#7ED957`) — universal primary action color.
- Geist Typography System ladder — `text-heading-72` to `text-heading-14`, `text-copy-20` to `text-copy-13`, `text-label-14`, `text-button-16`.
- `{rounded.pill}` 9999 px is the canonical radius for all buttons, CTA pills, status tags, and eyebrow pills.
- `{rounded.xl}` 24 px and `{rounded.2xl}` 32 px are the canonical radii for cards, dialogs, and feature mockups.
- Soft canvas `{colors.canvas-soft}` (`#F5F5F5`) is the hero surface; white `{colors.canvas}` is reserved for cards.
- Interactive Local Hub & Deals components.

---

## Section Eyebrow System Specification

All section headers across the site adhere to the unified **Section Eyebrow standard** (`components/site/ui/SectionEyebrow.tsx`):

### 1. Typography & Anatomy
- **Anatomy**: Live-status 10px pulsing lime dot (`bg-hh-lime` / `#7ED957`) with expanding ping ring (`animate-eyebrow-ping`) + text label string. No background container or pill by design.
- **Layout**: `flex items-center gap-[10px]`
- **Typography**: `text-[16px]` / `leading-4`, `font-normal`
- **Casing**: **Title Case** (e.g., *"Hello Linden"*, *"Get Started"*, *"Our Story"*, *"For Residents"*, *"How It Works"*, *"For Businesses"*, *"Frequently Asked Questions"*, *"Local Partners"*)

### 2. Tones & Surface Rules

| Tone | Text Color | Dot Accent | Recommended Usage |
| :--- | :--- | :--- | :--- |
| **`light`** (Default) | `#0e0f0c` (`text-hh-onyx`) | Lime `#7ED957` + ping ring | All white, sage, and light background sections (Hero, Get Started, Our Story, How It Works, For Businesses, FAQ, Partners) |
| **`dark`** | `#e2f6d5` (`text-hh-mint`) | Lime `#7ED957` + ping ring | Dark forest green background sections (`#1C472A`, e.g. For Residents section) |

### 3. Canonical Section Eyebrows

| Section | Tone | Title Case Label | Rendered Component |
| :--- | :--- | :--- | :--- |
| **Hero** | `light` | `Hello Linden` | `<SectionEyebrow label="Hello Linden" tone="light" />` |
| **Get Started** | `light` | `Get Started` | `<SectionEyebrow label="Get Started" tone="light" />` |
| **Our Story** | `light` | `Our Story` | `<SectionEyebrow label="Our Story" tone="light" />` |
| **For Residents** | `dark` | `For Residents` | `<SectionEyebrow label="For Residents" tone="dark" />` |
| **How It Works** | `light` | `How It Works` | `<SectionEyebrow label="How It Works" tone="light" />` |
| **For Businesses** | `light` | `For Businesses` | `<SectionEyebrow label="For Businesses" tone="light" />` |
| **FAQ** | `light` | `Frequently Asked Questions` | `<SectionEyebrow label="Frequently Asked Questions" tone="light" />` |
| **Local Partners** | `light` | `Local Partners` | `<SectionEyebrow label="Local Partners" tone="light" />` |

---

## Icon Box System Specification

Standardized feature icon box primitives used across section feature grids and partner cards (`components/site/sections/Partners.tsx`):

### 1. Canonical Variants & Colors

| Variant | Card Surface (Background) | Icon Container | Icon Color | Heading Typography | Body Copy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`Primary Icon Box`** | `#ffffff` (`canvas`) | `#1C472A` (`ink-deep`) | `#7ED957` (`primary`) | `type-h3` (`22px / 26.4px`, `weight 500`, `letter-spacing -1px`) | `type-body` (`16px / 24px`, `letter-spacing -0.6px`) |
| **`Secondary Icon Box`** | `#f5f5f5` (`canvas-soft`) | `#7ED957` (`primary`) | `#0e0f0c` (`ink`) | `type-h3` (`22px / 26.4px`, `weight 500`, `letter-spacing -1px`) | `type-body` (`16px / 24px`, `letter-spacing -0.6px`) |
| **`Tertiary Icon Box`** | `#e2f6d5` (`primary-pale`) | `#c5edab` (`primary-neutral`) | `#1C472A` (`ink-deep`) | `type-h3` (`22px / 26.4px`, `weight 500`, `letter-spacing -1px`) | `type-body` (`16px / 24px`, `letter-spacing -0.6px`) |

### 2. Geometry & Layout
- **Icon Container**: 48px × 48px (`h-12 w-12`) container (`rounded-[10px]`), 24px icon (`h-6 w-6`, `strokeWidth: 2.2`).
- **Layout**: Vertical stack (`flex flex-col items-start gap-4`).

---

## Semantic Color & Visual Language Matrix

Purpose-driven colors establish a clear, consistent visual hierarchy for feedback, statuses, and community interactions:

| Semantic Purpose | Foreground / Accent | Background Surface | Text Contrast Ratio | Use Cases in Hello Hyperlocal |
| :--- | :--- | :--- | :--- | :--- |
| **Success / Verified** | `#7ED957` / `#054d28` | `#e2f6d5` (mint soft) | **7.6:1 (AAA)** | Physical address verification passes, active resident checkmarks, claimed perk passes, successful form submission confirmations. |
| **Warning / Notice** | `#D97706` / `#B45309` | `#FEF3C7` (amber soft) | **5.4:1 (AA)** | Municipal maintenance advisories, scheduled substation repair notices, pending suburb verification review. |
| **Danger / Outage** | `#DC2626` / `#991B1B` | `#FEE2E2` (rose soft) | **5.8:1 (AA)** | Critical community safety alerts, emergency municipal outages, required form validation errors. |
| **Info / Civic Action** | `#2563EB` / `#1E40AF` | `#DBEAFE` (blue soft) | **6.1:1 (AA)** | Ward infrastructure progress bars, community clean-up milestones, municipal voting dates. |

---

## Accessibility (a11y) & WCAG 2.1 AA Compliance Standards

1. **Contrast Standards**:
   - Standard body text (`#454745` on `#FFFFFF` / `#F5F5F5`): **>4.7:1 (Passes AA)**.
   - Brand deep forest green (`#1C472A` with white `#FFFFFF`): **9.8:1 (Passes AAA)**.
   - Primary action lime (`#7ED957` with dark `#0e0f0c` / `#054d28`): **7.6:1 (Passes AAA)**.
   - Pale mint surface (`#e2f6d5` with forest text `#054d28`): **8.2:1 (Passes AAA)**.

2. **Screen Reader Compatibility**:
   - **Semantic Landmarks**: Clean structure with `header`, `main#main-content`, `footer`, and `nav[aria-label]`.
   - **Skip Link**: Top-level `<a href="#main-content">` accessible via initial `Tab` keypress.
   - **Modals**: Full dialog semantics (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`).
   - **Accordions**: WAI-ARIA Accordion pattern with `aria-expanded`, `aria-controls`, `role="region"`, and `aria-labelledby`.
   - **Non-Text Content (WCAG § 1.1.1)**: Simulated micro-mockup viewports are isolated with `aria-hidden="true"`, while parent containers provide clean, descriptive `aria-label` tags.

3. **Keyboard Navigation**:
   - Visible focus indicators (`focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]`).
   - Full keyboard operability (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`).
   - `Escape` key closes all active modals and dropdown drawers.

