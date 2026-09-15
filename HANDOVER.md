# Hello Hyperlocal Landing Page — Project Handover

**Purpose of this file:** A single source of truth for any AI agent or developer picking up this repo cold. Read it completely before making changes. **Keep it updated** after any significant chunk of work — treat it as part of the deliverable, not a one-off snapshot.

**This is the landing page repo only.** The Expo mobile app is a separate project at `C:\Projects\apps\Hello-Hyperlocal`, with its own `HANDOVER.md`. The two share a brand and a design system but no code.

**Confidentiality:** This project is covered by an NDA. Fine to share this file with another AI tool you (the developer) are using on your own machine — do not post it, or any project content, publicly or to third parties.

---

## 1. What this is

The marketing landing page for **Hello Hyperlocal**. Tagline: "Love where you live." Its job is to connect neighbours, celebrate local culture, get residents to the app stores, and pitch independent local business owners.

**Business context:** Lambert Van Sittert (Wavepoint Studios) building under retainer for JC Snooke / Hello Hyperlocal (Pty) Ltd. Per the original proposal, the landing page is a separate Next.js project from the app — this repo is that project.

---

## 2. Design System & Tokens (Single Source of Truth)

The project's active single source of truth for tokens, typography, radii, and component architecture is:
- **Canonical Design System:** [`design.md`](./design.md)
- **Live Interactive Spec Preview:** `http://localhost:3000/design-md` (also aliased at `/wise-preview`)
- **Phone Frame & Screen Capture Suite:** `http://localhost:3000/preview/phonemockup` (also aliased at `/preview`) — Renders the 1st mockup screen fitted and masked pixel-perfect inside the official `public/phone-2.png` iPhone device frame, with quick toggles between framed and raw 1:1 viewports for all 5 screens.
- **Archived / Legacy Drafts:** [`legacy-design-md/`](./legacy-design-md/) (contains older color/brand boards)

### Core Color Palette
- **`primary` (`#7ED957`)**: Vivid brand lime/grass green.
- **`on-primary` (`#0e0f0c`)**: Deep near-black ink.
- **`canvas` (`#ffffff`)**: Pure white.
- **`canvas-soft` (`#F5F5F5`)**: Crisp neutral canvas background.
- **`canvas-muted` (`#EBEBEB`)**: Soft muted canvas surface for stacked feature cards.
- **`ink-deep` (`#1C472A`)**: Deep Forest Green Ink / Spruce.
- **`primary-pale` (`#e2f6d5`)**: Pale tinted mint green for badges and accents.

### Strict Shadow & Gradient Policy
- **Zero Shadows & Zero Gradients**: All decorative box-shadows, drop-shadows, radial/linear backdrop gradients, and blur glows are strictly prohibited across standard sections and cards.
- **The Only Permitted Shadow**: Strictly reserved for **`card-content-elevated`** (`shadow: 0 4px 24px rgba(14, 15, 12, 0.1)`, `border: none`).
- **v2 Gradient Exception**: In the v2 Charion-layout rebuild, dark gradient veils over full-bleed photography (so white text stays legible) and the soft radial glow behind the ecosystem orbit are permitted. All other decorative gradients, glows and shadows remain prohibited. The zero em dash rule for copy still stands.

### Canonical Card Surface Hierarchy
1. **`card-content`**: Pure white background (`#ffffff`), `rounded-[24px]`, hairline border (`1px solid rgba(14,15,12,0.1)`), no shadow.
2. **`card-content-elevated`**: Pure white background (`#ffffff`), `rounded-[24px]`, `border: none`, subtle elevation (`shadow: 0 4px 24px rgba(14, 15, 12, 0.1)`).
3. **`card-feature-sage`**: Pale neutral sage background (`#F5F5F5`), `rounded-[24px]`.
4. **`card-feature-green`**: Tinted pale green background (`#e2f6d5`), `text-[#054d28]`, `rounded-[24px]`.
5. **`card-feature-dark-primary`**: Deep Forest Green Ink (`#1C472A`), `text-white` with `#7ED957` brand accents, `rounded-[24px]`.
6. **`card-feature-dark-secondary`**: Near-Black Ink (`#0e0f0c`), `text-white`, `rounded-[24px]`.

### Typography Tokens (Geist Typography System)
- **`display-mega`**: `165px` · `line-height: 148px` · `font-weight: 600` · `letter-spacing: -9.9px` (`.text-heading-165`).
- **`display-xl`**: `72px` · `line-height: 72px` · `font-weight: 600` · `letter-spacing: -4.32px` (`.text-heading-72`).
- **`display-md`**: **`50px`** · `line-height: 54px` · `font-weight: 600` · `letter-spacing: -3.00px` (`.text-heading-50` / `.text-display-md`). **Universally used for all Section Headings**.
- **`display-sm`**: `32px` · `line-height: 40px` · `font-weight: 600` · `letter-spacing: -1.28px` (`.text-heading-32`).
- **`body-lg`**: **`20px`** · `line-height: 36px` · `font-weight: 400` (`.text-copy-20`). Used for Section Subtext.
- **`body-md`**: `16px` · `line-height: 24px` · `font-weight: 400` (`.text-copy-16`).
- **`body-sm`**: `14px` · `line-height: 20px` · `font-weight: 400` (`.text-copy-14`).
- **Controls & Labels**:
  - `button-14`: `14px` · `font-weight: 500` · `line-height: 20px`.
  - `label-12-mono`: `12px` GeistMono · `letter-spacing: 0.08em` · `font-weight: 500`.

### Interactive Button Micro-Animations
- **Arrow Flip Animation (`ArrowFlipIcon`)**: Dual-element CSS keyframe slide animation (`.icon-flip`) featuring a diagonal 45° arrow (`ArrowUpRight`). On hover, the primary icon slides up-right while a duplicate emerges from the bottom-left.
- **Rolling Text Button Animation (`RollingText` / `components/ui/RollingText.tsx`)**: Inspired by `examples.motion.dev/ui/sections/button-rolling-text`. Primary call-to-action button labels feature dual-layer typography with custom easing (`cubic-bezier(0.338, 0.015, 0.395, 0.959)`). On hover or focus, the primary label rolls upward while the duplicate rolls in from below. Applied to all standard primary buttons (`SiteHeader`, `ForBusiness`, `MerchantModal`, `not-found`).

---

## 3. Tech Stack

- **Next.js 16.2.6** (App Router, Turbopack), React 19.2.4, TypeScript.
- **Tailwind v4:** Theme tokens live directly inside `@theme` in `app/globals.css`. There is **no `tailwind.config.js`**.
- **Base UI, not Radix:** `components.json` is configured for `base-maia` style with `@base-ui/react`.
- **Icons:** `lucide-react` v1 (core UI icons) and `react-icons/fa` (brand social links in footer).
- **Fonts & Typography:** Official `geist` package (`GeistSans` and `GeistMono`) powering the complete Geist typography hierarchy.
- **Motion (`motion/react`) v13:** For entrance tweens and expanding accordion interactions.
- **Marquee:** `react-fast-marquee` for partner logo strip.
- **Skills:** Impeccable skill installed at `.gemini/skills/impeccable/` for design audits, token enforcement, and frontend polish.
- **No backend:** Every interactive CTA is local `useState` with no external server target.

---

## 4. Page Structure & Component Breakdown

`app/page.tsx` composes the sections in this exact order:

| # | Component | Background | Notes |
|---|---|---|---|
| 1 | `SiteHeader` | floating elevated | **Floating 1280px Header** — Logo (`hello-hyperlocal-logo.png`), client navigation links (`Home`, `Our Story`, `Explore Hello`, `Residents`, `Businesses`, `Partners`, `FAQs`), and `#7ED957` "Join Hello Linden" CTA triggering `JoinModal` |
| 2 | `Hero` | `white` (`#FFFFFF`) | **Centered Full-Impact Hero** — `100px` display headline, positioning statement, launch video poster preview launching `VideoModal` (`/video/Hello Hyper Local.mp4`), dual CTAs (`Founding Neighbour` & `Register Business`), and live `GrowthCounter` |
| 3 | `PartnerStrip` | bg-transparent | **Logos 3 Marquee** — Max-width 1200px. Features Private Property logo first, followed by Linden partners |
| 4 | `OurStory` | `#FCFAF7` | **Founder Narrative** — Personal story of 10+ yr Linden resident & local business owner, problem breakdown, and quote callout |
| 5 | `Vision` | `white` (`#FFFFFF`) | **Hyperlocal Vision** — SA platform expansion starting with Linden; core platform promise + 9-pillar community ecosystem grid |
| 6 | `FeaturesBento` | canvas | **Why Hello Hyperlocal** — 3:6:3 Asymmetrical Layout, Elevated side cards, Flush center phone mockup |
| 7 | `Features` | `#F5F5F5` | **App Experience** — 4 Sticky Stacking Cards (`w-full` alignment, `#EBEBEB` Card 2 fill) |
| 8 | `HowItWorks` | canvas | **8-Screen Visual Showcase** — Interactive tabbed app mockup carousel |
| 9 | `FoundingNeighbours` | `#FCFAF7` | **First 1,000 Founding Neighbours** — Value proposition, perks, and interactive registration form generating numbered member confirmations |
| 10 | `FoundingBusinesses` | `white` (`#FFFFFF`) | **First 100 Founding Businesses** — Merchant pitch, window sticker perk, and Expression of Interest (EOI) form |
| 11 | `PlatformPillars` | canvas | **Our Commitment** — 3-Column Trust Commitments Grid |
| 12 | `PartnersInvestors` | `#FCFAF7` | **Partners & Investors** — Discreet strategic partner overview & prospectus request modal |
| 13 | `FaqSection` | canvas | **Common Questions** — 10-item WAI-ARIA accordion covering 2026 launch, POPIA address privacy, LCA relation, and participation |
| 14 | `DownloadCta` | `#0e0f0c` | **Dark App Banner** — Clean dual store badges & smartphone mockup |
| 15 | `SiteFooter` | bg-transparent | **Footer** — Brand mission, social links, 2-col nav, copyright |

### Key Section Implementations

#### 1. The Hero (`components/landing/Hero.tsx`)
- Standard Eyebrow Pill: `<EyebrowPill icon={Sparkles} variant="standard">The Neighbourhood Network</EyebrowPill>`
- Centered headline in `110px` font size (`600` weight, `-5.5px` letter spacing, single line on desktop) in `#1C472A` Forest Green: *"Love Where You Live."*
- Centered subtext in `body-lg` (**20px** font size, `400` weight, `36px` line height): *"Bringing you everyday local life. Stay informed with suburb updates, support local spots, and back community initiatives."*
- Dual store download buttons with matched equal widths (`w-[190px] sm:w-[210px]`) in canonical `#0e0f0c` Onyx with white text/icons (`dark:bg-white dark:text-[#0e0f0c]`) directly below the subtext (Apple Store and Google Play).
- **Orchestrated Motion Stagger Entrance** (`motion.dev/react/hero-stagger` pattern): Root container orchestrates children with `staggerChildren: 0.12` and subtle blur/rise physics (`y: 28, filter: "blur(4px)"` -> `y: 0, filter: "blur(0px)"`) on the eyebrow, 110px display headline, and subtext, followed by spring-elevated store buttons (`scale: 0.96` -> `1`), and staggered spring-physics side entrances (`stiffness: 140, damping: 18`) for the 3 floating notification cards (*Liam K.*, *Sunrise Walk*, *Ward 99 Alert*) spread generously outward (`-left-6 sm:-left-16 md:-left-24 lg:-left-36` / `-right-6 sm:-right-16 md:-right-24 lg:-right-36`) before entering their ambient floating physics loops.
- **Hero Phone Mockup & Radial Backlight**: Large iPhone mockup (`/iPhone copy.png`) with bottom gradient fade mask, anchored over a soft, subtle radial gradient backdrop in `#cdffad` bright mint/lime (`radial-gradient(50% 50% at 50% 35%, #cdffad 0%, transparent 100%)`) within an isolated stacking container (`isolate`), keeping the backlight permanently visible behind the device without bleeding into the store buttons (`relative z-30`).
- Strictly zero em dashes in all copy.

#### 2. Why Hello Hyperlocal (`components/landing/FeaturesBento.tsx`)
- Standard Eyebrow Pill: `<EyebrowPill icon={Compass} variant="standard">Why Hello Hyperlocal</EyebrowPill>`
- **Section Heading**: `display-md` (**50px** font size, `-3.00px` letter spacing).
- **Subtext**: `body-lg` (**20px** font size, `36px` line height).
- **3-Column Grid Architecture (3 : 6 : 3 Ratio)**:
  - `grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center`.
  - **Left Column (`col-span-3`)**: Vertically centered (`self-center justify-center`), housing 2 stacked **`card-content-elevated`** cards: *Verified Residents* and *Discover Local Spots*.
  - **Center Column (`col-span-6`)**: Bottom-aligned (`self-end items-end`), **zero bottom padding (`pb-0`)**, **no border (`border-none`)**, and **top-only rounded corners (`rounded-t-[32px] rounded-b-none`)**, housing an enlarged, static `public/phone-2.png` iPhone device frame rendering **Screen 1 · Home Feed** with a slow, highly-eased scroll slide-in (`y: 100` -> `y: 0`, `duration: 1.35s`, `ease: [0.19, 1, 0.22, 1]`), bottom bleed off the card boundary, and a **soft white gradient overlay** (`bg-gradient-to-t from-white via-white/80 to-transparent`) across the bottom edge.
  - **Right Column (`col-span-3`)**: Vertically centered (`self-center justify-center`), housing 2 stacked **`card-content-elevated`** cards: *Real-Time Ward Alerts* and *Back Ward Projects*.
- **Strict Copy Rules**: Strictly non-commercial, civic, community-first copy ("Verified residents", "Local spots", "Ward alerts", "Ward projects").
- **Unified Icon Fill Containers**: All 4 outer cards feature `rounded-[16px]` icon boxes filled with `#c5edab` (`{colors.primary-neutral}`) and `#1C472A` (`{colors.ink-deep}`) icons.

#### 3. App Experience — Sticky Stacking Cards (`components/landing/Features.tsx`)
- Standard Eyebrow Pill: `<EyebrowPill icon={Layers} variant="standard">App Experience</EyebrowPill>`
- **Section Header**: Centered flex column, `display-md` (**50px** font size, `600` weight, `-3.00px` tracking) headline, `body-lg` (**20px** font size, `400` weight, `36px` line height) subtext.
- **Sticky Stacking Container**: Relative container housing **4 layered sticky cards** with increasing top offsets and z-indexes (`z-10` to `z-40`, `top-24` to `top-36`).
- **Width & Elevation**: The cards span **`w-full`** across the `max-w-[1240px]` container (`1176px` inner width) with `border-none`. Only the **first card** (*Verified Feed*) carries the soft elevation (`shadow: 0 8px 40px rgba(14, 15, 12, 0.08)`), while subsequent cards stack flatly on top.
- **Individual Card Layout (Alternating 2-Column Split)**:
  - `grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-10 lg:p-12 pb-0 sm:pb-0 lg:pb-0 rounded-3xl`.
  - **Card Headings**: Set to `display-sm` (**32px** font size, `600` weight, `-1.28px` letter spacing).
  - **Cards 1 & 3 (Standard Split)**: Text on the left (`lg:order-1`), phone on the right (`lg:order-2`).
  - **Cards 2 & 4 (Swapped Alternating Split)**: Phone on the left (`lg:order-1`), text on the right (`lg:order-2`).
  - **Enlarged Phone Geometry**: Houses the enlarged `public/phone-2.png` iPhone device frame (`w-[330px] sm:w-[380px] lg:w-[420px]`) rendering tailored in-app mockups with the top half showcased and the bottom half bleeding off and clipped cleanly inside the sticky card boundary (`overflow-hidden`, `-mb-40 sm:-mb-52 lg:-mb-60`).
- **4 Tailored In-App Screen Mockups & Contextual Eyebrow Pills**:
  1. *Verified Feed*: White surface (`#ffffff`), `<EyebrowPill icon={ShieldCheck} variant="standard">Verified Feed</EyebrowPill>`, live municipal grid update (`3rd St Power Substation`), resident cleanup notice (`Sarah v.d. Merwe`), and verified neighbour confirmation tags.
  2. *Local Merchants*: Canvas-muted surface (`#EBEBEB`), `<EyebrowPill icon={Store} variant="standard">Local Merchants</EyebrowPill>`, full-bleed Goddess Café hero photo with overlaid status bar and navigation actions (`‹`, `♡`), cafe story description, operating hours, address metadata, *The Whippet* preview card, and a full-width `Support local` CTA button.
  3. *Civic Action*: Tinted mint surface (`#e2f6d5`), `<EyebrowPill icon={Heart} variant="surface-contrast">Civic Action</EyebrowPill>`, Braamfontein Spruit Solar Trail Lighting project tracker with funding progress bar (`R38.5k / 85%`) and volunteer drive.
  4. *Suburb Events*: Deep Forest Green Ink (`#1C472A`), `<EyebrowPill icon={Calendar} variant="dark">Suburb Events</EyebrowPill>`, Linden Village Craft & Food Market event card with `Sat 15 Aug` badge, attendee counter, and interactive `Going ✓` RSVP button.

#### 4. How It Works (`components/landing/HowItWorks.tsx`)
- Standard Eyebrow Pill: `<EyebrowPill icon={ListOrdered} variant="standard">How It Works</EyebrowPill>`
- **Dual Setup Architecture (Mobile Unpinned / Desktop Sticky)**:
  - **Mobile View (`< lg`)**: Pure unpinned, natural scrolling flow without sticky traps. Renders 3 sequential step cards (`bg-[#F5F5F5] rounded-[28px]`), each with its `Step {number}` badge, heading, body, and a dedicated, proportional non-clipped phone screen preview (`w-[230px] sm:w-[260px]`).
  - **Desktop View (`lg+`)**: Pure 2-column pinned sticky scroll progression (`h-[280vh]` scroll track with `sticky top-0 h-screen`). Left column houses the enlarged iPhone frame (`w-[480px] xl:w-[520px]`), while the right column displays all 3 stacked step cards with active watermark numbers (`"01"`, `"02"`, `"03"`) highlighting dynamically without tab clutter.
  - **Screen Mockups**: Proportional UI font and element scaling inside `Step1Mockup`, `Step2Mockup`, and `Step3Mockup` ensuring crisp, perfectly balanced micro-layouts.

#### 5. For Local Business Owners (`components/landing/ForBusiness.tsx`)
- Standard Eyebrow Pill: `<EyebrowPill icon={Store} variant="standard">For Local Businesses</EyebrowPill>`
- Equal 50/50 two-column responsive grid (`grid-cols-1 lg:grid-cols-2`).
- Left Column: Section heading in `display-md` (**50px** font size, `600` weight, `-3.00px` tracking), `body-lg` (**20px** font size) subtext, mint checkmark pills, and primary brand lime (`#7ED957`) `Store` registration CTA opening `MerchantModal`.
- Right Column: Verified Linden local streetview photography (`/photography/linden-streetview.jpeg`) with `rounded-[32px]`.
- **`components/landing/MerchantModal.tsx`**: Centered registration dialog with business details intake, backdrop click dismiss, `Escape` key dismiss, top and bottom "Back to landing page" controls, and instant confirmation state.

#### 6. Platform Pillars (`components/landing/PlatformPillars.tsx`)
- Standard Eyebrow Pill: `<EyebrowPill icon={ShieldCheck} variant="standard">Our Commitment</EyebrowPill>`
- Section heading at `display-md` (50px · 600 · -3.00px) and subtext at `body-lg` (20px · 400 · 36px).
- 3-column trust matrix in `card-feature-green` (`#e2f6d5` Tinted Mint) with no borders (`border-none`, `rounded-[28px] sm:rounded-[32px]`).
- Matching `rounded-[16px]` icon containers filled with `#c5edab` (`{colors.primary-neutral}`) and `#1C472A` (`{colors.ink-deep}`) deep green icons (*100% Verified Residents*, *Always Free for Residents*, *Backing Local Merchants*).

#### 7. Common Questions & Safety FAQ (`components/landing/FaqSection.tsx`)
- Standard Eyebrow Pill: `<EyebrowPill icon={HelpCircle} variant="standard">Common Questions</EyebrowPill>`
- Section heading at `display-md` (**50px** font size, `600` weight, `-3.00px` tracking): *"Everything you need to know about your neighbourhood."*
- 4-item animated accordion addressing personal data protection and address privacy (encryption, zero public street number broadcasting), resident proof-of-address verification, 100% free tier guarantee, and independent local merchant screening.
- **"Have more questions?" $\rightarrow$ "Get in touch" CTA**: Opens [`components/landing/ContactModal.tsx`](file:///C:/Projects/hello-hyperlocal-landing-page/components/landing/ContactModal.tsx) with quick topic selection, resident messaging intake, and instant confirmation state.

#### 8. Final Download CTA (`components/landing/DownloadCta.tsx`)
- Accent Eyebrow Pill: `<EyebrowPill icon={Smartphone} variant="accent">Get the App</EyebrowPill>`
- Pure 2-column card in `card-feature-dark-primary` (#1C472A Deep Forest Green, `border-none`, `rounded-[32px] sm:rounded-[36px]`, `pb-0`).
- **Column 1 (`lg:col-span-7`)**: `#7ED957` brand lime eyebrow pill, `display-md` (**50px** font size, `600` weight, `-3.00px` tracking) heading in `#7ED957`, `body-lg` (**20px** font size, `400` weight, `36px` line height) subtext, and dual App Store / Google Play download buttons (arrowless).
- **Column 2 (`lg:col-span-5`)**: Phone mockup (`public/phone-2.png`) sitting directly inside the card and bleeding off flush at the bottom edge.

---

## 5. What was deprecated / removed

- **`Expansion.tsx`** & **`Newsletter.tsx`** forms were removed in favor of direct app download CTAs.
- Sticky-scroll pinning on Hero was replaced by a clean, responsive 100vh 2-column flex layout.
- All background gradients, ambient radial glow divs, drop-shadows, and box-shadows were stripped across all components (preserving only `card-content-elevated`).

---

## 6. Help, Support & Legal Documentation System

> [!IMPORTANT]
> **Canonical Documentation Directive:** This clean, card-free 3-column documentation architecture (`components/legal/LegalLayout.tsx` + `components/ui/toc.tsx`) serves as the universal **Help, Support & Legal Documentation Center** for Hello Hyperlocal. In future, **ANY and ALL help guides, resident verification walkthroughs, merchant support FAQs, and legal policies MUST be added to this documentation system** following this exact clean typographic structure.

- **`components/legal/LegalLayout.tsx`**: Universal documentation shell with clean left sidebar navigation, responsible party contact, and sticky right Table of Contents.
- **`components/ui/toc.tsx`**: Active Table of Contents component tracking on-page reading progress with smooth scrolling.
- **`app/not-found.tsx`**: Custom **404 Not Found** page featuring the signature `display-mega` (165px · 600 · -9.9px) headline in `#1C472A` / `#7ED957`, `<EyebrowPill icon={Compass}>Page Not Found</EyebrowPill>`, and "Back to Home" primary CTA with `RollingText` animation in a focused, standalone `100dvh` viewport.
- **`app/help/page.tsx`**: **Help & Verification** guide covering resident address verification protocols, suburb boundary definitions, and resident support contact channels.
- **`app/merchant-support/page.tsx`**: **Merchant Support** guide covering local business profile onboarding, weekly special broadcasts, and partnership desk contact channels.
- **`app/privacy/page.tsx`**: Full **POPIA (Protection of Personal Information Act, Act 4 of 2013)** compliant Privacy Policy covering resident data rights, address privacy guarantees (zero public address broadcasting), Information Officer disclosures, and data retention.
- **`app/terms/page.tsx`**: Complete **Terms of Service** governing resident eligibility, physical residency verification, community anti-harassment standards, local merchant rules, and South African legal jurisdiction.
- **`components/ui/CookieConsent.tsx`**: Full-screen width floating cookie consent banner ("We value your privacy"), configured with equal left, right, and bottom gaps (`bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6`, `max-w-[1280px] mx-auto`), backdrop blur, and "Accept All" / "Essential Only" actions with `focus-visible` accessibility rings.
- **Semantic Colors**: Purpose-driven visual language matrix implemented across `design.md`, `app/globals.css`, and components:
  - *Success / Verified*: `#1C472A` / `#7ED957` / `#e2f6d5` (7.6:1 AAA contrast) for verification badges, passes, and confirmed actions.
  - *Warning / Notice*: `#B45309` / `#D97706` / `#FEF3C7` (5.4:1 AA contrast) for municipal advisories and alerts.
  - *Danger / Outage*: `#991B1B` / `#DC2626` / `#FEE2E2` (5.8:1 AA contrast) for emergency substation alerts and critical safety broadcasts.
  - *Info / Civic*: `#1E40AF` / `#2563EB` / `#DBEAFE` (6.1:1 AA contrast) for ward milestones and community projects.
- **Accessibility & WCAG 2.1 AA Standards**:
  - *Skip Link*: Top-level `<a href="#main-content">` for keyboard users.
  - *Landmarks*: Clean semantic hierarchy (`header`, `main#main-content`, `footer`, `nav[aria-label]`).
  - *Modals & Accordions*: Complete WAI-ARIA patterns (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`, `aria-expanded`, `aria-controls`, `role="region"`).
  - *Keyboard & Focus*: High-contrast `focus-visible:ring-2` indicators on all interactive elements + `Escape` key dismiss listeners.
  - *Non-Text Content (§ 1.1.1)*: `aria-hidden="true"` on decorative micro-mockups and icons with descriptive `aria-label` tags on parent wrappers.

---

## 7. What is explicitly NOT built

- **No backend endpoints**: All interactive components use local React state.
- **Store links are `#` placeholders** in `lib/site-config.ts`.

---

## 8. Maintenance & Commands

- **Run development server:** `npm run dev` (running at `http://localhost:3000`)
- **Type check:** `npm run typecheck`
- **Lint:** `npm run lint`
- **404 Not Found:** `http://localhost:3000/non-existent-page`
- **Help & Verification:** `http://localhost:3000/help`
- **Merchant Support:** `http://localhost:3000/merchant-support`
- **Privacy Policy (POPIA):** `http://localhost:3000/privacy`
- **Terms of Service:** `http://localhost:3000/terms`
- **Design Spec Preview:** `http://localhost:3000/design-md`
- **Eyebrow Studio:** `http://localhost:3000/preview/eyebrows`
