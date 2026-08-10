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
| 1 | `SiteHeader` | floating elevated | **Floating 1280px Header** — Rounded pill with `card-content-elevated` shadow, backdrop blur, wordmark, nav links, and `#7ED957` "Get the app" CTA |
| 2 | `Hero` | `white` (`#FFFFFF`) | **Centered Full-Impact Hero** — `display-xxl` (96px) headline, centered `body-lg` subtext, and dual store download buttons |
| 3 | `PartnerStrip` | bg-transparent | **Logos 3 Marquee** — Max-width 1200px. Desaturated logos color on hover |
| 4 | `FeaturesBento` | canvas | **Why Hello Hyperlocal** — 3:6:3 Asymmetrical Layout, Elevated side cards, Flush center phone mockup |
| 5 | `Features` | `#F5F5F5` | **App Experience** — 4 Sticky Stacking Cards (`w-full` alignment, `#EBEBEB` Card 2 fill) |
| 6 | `HowItWorks` | canvas | **3-Step Flex Accordion** — Hover-expand onboarding flow with simulated screens |
| 7 | `ForBusiness` | `#F5F5F5` / panel | **Local Merchant Pitch** — Direct partnership CTA + Linden Market photography |
| 8 | `PlatformPillars` | canvas | **Our Commitment** — 3-Column Trust Commitments Grid |
| 9 | `DownloadCta` | `#0e0f0c` | **Dark App Banner** — Clean dual store badges & smartphone mockup |
| 10 | `SiteFooter` | bg-transparent | **Footer** — Brand mission, social links, 2-col nav, copyright |

### Key Section Implementations

#### 1. The Hero (`components/landing/Hero.tsx`)
- Eyebrow pill: *"The Neighbourhood Network"*
- Centered headline in `display-xxl` (**96px** font size, `600` weight, `-4.32px` letter spacing): *"Love where you live."*
- Centered subtext in `body-lg` (**20px** font size, `400` weight, `36px` line height): *"Bringing you everyday local life. Stay informed with suburb updates, support local spots, and back community initiatives."*
- Dual store download buttons directly below the subtext (Apple Store and Google Play).
- Strictly zero em dashes in all copy.

#### 2. Why Hello Hyperlocal (`components/landing/FeaturesBento.tsx`)
- **Section Heading**: `display-md` (**50px** font size, `-3.00px` letter spacing).
- **Subtext**: `body-lg` (**20px** font size, `36px` line height).
- **3-Column Grid Architecture (3 : 6 : 3 Ratio)**:
  - `grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center`.
  - **Left Column (`col-span-3`)**: Vertically centered (`self-center justify-center`), housing 2 stacked **`card-content-elevated`** cards: *Verified Residents* and *Discover Local Spots*.
  - **Center Column (`col-span-6`)**: Bottom-aligned (`self-end items-end`), **zero bottom padding (`pb-0`)**, **no border (`border-none`)**, and **top-only rounded corners (`rounded-t-[32px] rounded-b-none`)**, housing an enlarged, static `public/phone-2.png` iPhone device frame rendering **Screen 1 · Home Feed** with a slow, highly-eased scroll slide-in (`y: 100` -> `y: 0`, `duration: 1.35s`, `ease: [0.19, 1, 0.22, 1]`) and bottom bleed off the card boundary.
  - **Right Column (`col-span-3`)**: Vertically centered (`self-center justify-center`), housing 2 stacked **`card-content-elevated`** cards: *Real-Time Ward Alerts* and *Back Ward Projects*.
- **Strict Copy Rules**: Strictly non-commercial, civic, community-first copy ("Verified residents", "Local spots", "Ward alerts", "Ward projects").

#### 3. App Experience — Sticky Stacking Cards (`components/landing/Features.tsx`)
- **Section Header**: Centered flex column, `display-md` (**50px** font size, `600` weight, `-3.00px` tracking) headline, `body-lg` (**20px** font size, `400` weight, `36px` line height) subtext.
- **Sticky Stacking Container**: Relative container housing **4 layered sticky cards** with increasing top offsets and z-indexes (`z-10` to `z-40`, `top-24` to `top-36`).
- **Width & Elevation**: The cards span **`w-full`** across the `max-w-[1240px]` container (`1176px` inner width) with `border-none`. Only the **first card** (*Verified Feed*) carries the soft elevation (`shadow: 0 8px 40px rgba(14, 15, 12, 0.08)`), while subsequent cards stack flatly on top.
- **Individual Card Layout (Alternating 2-Column Split)**:
  - `grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-10 lg:p-12 pb-0 sm:pb-0 lg:pb-0 rounded-3xl`.
  - **Card Headings**: Set to `display-sm` (**32px** font size, `600` weight, `-1.28px` letter spacing).
  - **Cards 1 & 3 (Standard Split)**: Text on the left (`lg:order-1`), phone on the right (`lg:order-2`).
  - **Cards 2 & 4 (Swapped Alternating Split)**: Phone on the left (`lg:order-1`), text on the right (`lg:order-2`).
  - **Enlarged Phone Geometry**: Houses the enlarged `public/phone-2.png` iPhone device frame (`w-[330px] sm:w-[380px] lg:w-[420px]`) rendering tailored in-app mockups with the top half showcased and the bottom half bleeding off and clipped cleanly inside the sticky card boundary (`overflow-hidden`, `-mb-40 sm:-mb-52 lg:-mb-60`).
- **4 Tailored In-App Screen Mockups**:
  1. *Verified Feed*: White surface (`#ffffff`), live municipal grid update (`3rd St Power Substation`), resident cleanup notice (`Sarah v.d. Merwe`), and verified neighbour confirmation tags.
  2. *Local Merchants*: Canvas-muted surface (`#EBEBEB`), full-bleed Goddess Café hero photo with overlaid status bar and navigation actions (`‹`, `♡`), cafe story description, operating hours, address metadata, *The Whippet* preview card, and a full-width `Support local` CTA button.
  3. *Civic Action*: Tinted mint surface (`#e2f6d5`), Braamfontein Spruit Solar Trail Lighting project tracker with funding progress bar (`R38.5k / 85%`) and volunteer drive.
  4. *Suburb Events*: Deep Forest Green Ink (`#1C472A`), Linden Village Craft & Food Market event card with `Sat 15 Aug` badge, attendee counter, and interactive `Going ✓` RSVP button.

#### 4. How It Works (`components/landing/HowItWorks.tsx`)
- **2-Column Responsive Header Layout**:
  - **Column 1 (`lg:col-span-7`)**: Eyebrow pill (`How It Works`) + `display-md` (**50px** font size, `-3.00px` tracking) headline: *"Getting started in 3 simple steps."*
  - **Column 2 (`lg:col-span-5`)**: `body-lg` (**20px** font size, `400` weight, `36px` line height) subtext aligned to the bottom.
- **2-Column Steps Architecture**:
  - **Column 1 (Left Phone Mockup, `lg:col-span-6`)**: Container with tinted mint surface (`#e2f6d5`), set to stretch to the exact full height of Column 2's cards (`h-full items-stretch`), housing an enlarged `public/phone-2.png` iPhone device frame (`w-[360px] sm:w-[440px] lg:w-[490px] xl:w-[530px]`) with top-half showcase and bottom clipped bleed, dynamically rendering the active step mockup screen (Step 1 Suburb Selector, Step 2 Resident Pass, Step 3 Live Suburb Feed).
  - **Column 2 (Right Step Cards, `lg:col-span-6`)**: 3 stacked borderless cards (`border-none`, `min-h-[160px] sm:min-h-[180px]`) with background watermark numbers (`"01"`, `"02"`, `"03"`) positioned at the top (`top-4 sm:top-5 left-5 sm:left-7`) for unobstructed visibility, and heading + text contained in a bottom-aligned container (`flex flex-col justify-end pt-8 sm:pt-10 mt-auto`). Card headings use `display-sm` (**32px** font size, `600` weight, `-1.28px` tracking). Features a **100vh full-screen sticky scroll progression** (`h-[260vh] sm:h-[300vh]` scroll track with `sticky top-0 h-screen flex flex-col justify-center`): as the user scrolls, the active step switches to `card-feature-dark-primary` (#1C472A Forest with `#7ED957` brand lime heading and watermark) while the other two cards rest in `card-feature-green` (#e2f6d5 Tinted Mint with `#0e0f0c` ink text), synchronizing the phone mockup screen before releasing smoothly to the next section.

#### 5. For Local Business Owners (`components/landing/ForBusiness.tsx`)
- Section heading in unified `display-md` (**50px** font size, `600` weight, `-3.00px` tracking) with solid ink color: *"Grow your business where it matters most: your neighbourhood."*
- Section subtext in `body-lg` (**20px** font size, `400` weight, `36px` line height).
- Local business value propositions with `#e2f6d5` mint checkmark pills + `Store` registration CTA button with `ArrowFlipIcon`.
- Verified Linden Village Market photography (`/photography/linden-market.jpg`) with `rounded-[32px]`.

#### 6. Platform Pillars (`components/landing/PlatformPillars.tsx`)
- Section heading at `display-md` (50px · 600 · -3.00px) and subtext at `body-lg` (20px · 400 · 36px).
- 3-column trust matrix in `card-feature-green` (`#e2f6d5` Tinted Mint) with no borders (`border-none`, `rounded-[28px] sm:rounded-[32px]`).
- Circle icon containers with a slightly darker green fill (`bg-[#c5edab]` / `{colors.primary-neutral}`) and `#054d28` deep green icons (*100% Verified Residents*, *Always Free for Residents*, *Backing Local Merchants*).

#### 7. Final Download CTA (`components/landing/DownloadCta.tsx`)
- Pure 2-column card in `card-feature-dark-primary` (#1C472A Deep Forest Green, `border-none`, `rounded-[32px] sm:rounded-[36px]`, `pb-0`).
- **Column 1 (`lg:col-span-7`)**: `#7ED957` brand lime eyebrow pill, `display-md` (**50px** font size, `600` weight, `-3.00px` tracking) heading in `#7ED957`, `body-lg` (**20px** font size, `400` weight, `36px` line height) subtext, and dual App Store / Google Play download buttons (arrowless).
- **Column 2 (`lg:col-span-5`)**: Phone mockup (`public/phone-2.png`) sitting directly inside the card and bleeding off flush at the bottom edge.

---

## 5. What was deprecated / removed

- **`Expansion.tsx`** & **`Newsletter.tsx`** forms were removed in favor of direct app download CTAs.
- Sticky-scroll pinning on Hero was replaced by a clean, responsive 100vh 2-column flex layout.
- All background gradients, ambient radial glow divs, drop-shadows, and box-shadows were stripped across all components (preserving only `card-content-elevated`).

---

## 6. What is explicitly NOT built

- **No backend endpoints**: All interactive components use local React state.
- **Store links are `#` placeholders** in `lib/site-config.ts`.
- **Footer legal links are `#` placeholders**.

---

## 7. Maintenance & Commands

- **Run development server:** `npm run dev` (running at `http://localhost:3000`)
- **Type check:** `npm run typecheck`
- **Lint:** `npm run lint`
- **Design Spec Preview:** `http://localhost:3000/design-md`
