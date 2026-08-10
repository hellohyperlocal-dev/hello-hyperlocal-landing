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
    geistClass: "text-button-16"

rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md} {spacing.xl}"
  button-arrow-flip:
    description: "Interactive button variant featuring dual-element sliding arrow flip animation on hover (Arrow 1 exits top-right, Arrow 2 slides in from bottom-left)."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md} {spacing.xl}"
    animation: "icon-flip (duration: 0.3s, easing: cubic-bezier(0.16, 1, 0.3, 1))"
  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md} {spacing.xl}"
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xl}"
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
  currency-converter-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
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

Hello Hyperlocal wears its identity in a signature pairing: a vivid grass/lime-green `{colors.primary}` (`#7ED957`) used as the CTA pill and brand accent, set against a clean soft canvas `{colors.canvas-soft}` (`#F5F5F5`) running across the hero band, and near-black ink `{colors.ink}` (`#0e0f0c`) with an olive undertone. The brand reads like a calm Scandinavian magazine — generous whitespace, large rounded cards (`{rounded.xl}` 24 px), and punchy display typography.

In this system, all typography is powered by Vercel's **Geist Typography System** (`GeistSans` and `GeistMono`). Headings make use of calibrated negative letter spacing (`-0.02em` to `-0.06em`), while body copy and buttons leverage dedicated single-purpose classes (`text-heading-*`, `text-copy-*`, `text-label-*`, `text-button-*`).

**Key Characteristics:**
- A single lime-green CTA accent `{colors.primary}` (`#7ED957`) — universal primary action color.
- Geist Typography System ladder — `text-heading-72` to `text-heading-14`, `text-copy-20` to `text-copy-13`, `text-label-14`, `text-button-16`.
- `{rounded.xl}` 24 px is the canonical card and button radius.
- Soft canvas `{colors.canvas-soft}` (`#F5F5F5`) is the hero surface; white `{colors.canvas}` is reserved for cards.
- Interactive Local Hub & Deals components.
