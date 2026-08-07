# Hello Hyperlocal Landing Page — Project Handover

**Purpose of this file:** a single source of truth for any AI agent or
developer picking up this repo cold. Read it completely before making
changes. **Keep it updated** after any significant chunk of work — treat it
as part of the deliverable, not a one-off snapshot.

**This is the landing page repo only.** The Expo mobile app is a separate
project at `C:\Projects\apps\Hello-Hyperlocal`, with its own `HANDOVER.md`.
The two share a brand and a design system but no code. Note that the Expo
repo's handover currently lists the landing page as "not started" under its
§7 — that line is stale as of 2026-08-06.

**Confidentiality:** this project is covered by an NDA (see the Expo repo's
`docs/HHL NDA (1).pdf`). Fine to share this file with another AI tool you
(the developer) are using on your own machine — do not post it, or any
project content, publicly or to third parties.

---

## 1. What this is

The marketing landing page for **Hello Hyperlocal** (first suburb: Linden,
Johannesburg). Tagline: "Love where you live." Its job is to explain the app
to residents, get them to the app stores, collect suburb-expansion interest,
and pitch local business owners.

**Business context:** Lambert Van Sittert (Wavepoint Studios) building under
retainer for JC Snooke / Hello Hyperlocal (Pty) Ltd. Per the original
proposal, the landing page is a separate Next.js project from the app — this
repo is that project.

---

## 2. Where the design came from

The page is an implementation of a **Claude Design comp**, not an original
design. The comp is the source of truth for layout, type scale and colour:

- Project: `https://claude.ai/design/p/46ed070d-e6e9-456d-a737-5134be41412d`
- File: `Hello Hyperlocal Landing.dc.html`
- Design system: `_ds/hello-hyperlocal-design-system-7b16bf08-.../`
  (`tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`)

Read the comp before changing visual decisions — most of what looks arbitrary
in the code (`clamp()` values, exact pixel sizes, the `0.14em` eyebrow
tracking) is copied from it deliberately.

The design system is **light-only**. There is no dark variant of these tokens,
which is why the page renders identically regardless of theme — see §6.

---

## 3. Tech stack (do not deviate without a reason)

- **Next.js 16.2.6** (App Router, Turbopack), React 19.2.4, TypeScript.
- **Tailwind v4.** There is **no `tailwind.config.js`** — theme tokens live in
  `@theme` inside `app/globals.css`. Don't create a config file.
- **Base UI, not Radix.** `components.json` is on the `base-maia` style and
  `package.json` has `@base-ui/react` with no `@radix-ui/*`. Most shadcn block
  code found online is Radix-era and uses `asChild`; this project wants Base
  UI's `render` prop. Adapt pasted code rather than installing Radix.
- **Icons: `lucide-react` v1.** Note v1 renamed some icons — `Home` is now
  `House`. (`components.json` says `phosphor` and `@phosphor-icons/react` is
  installed, but no code uses it — lucide is what's actually in use.)
- **Fonts:** DM Sans (`--font-sans`) and DM Mono (`--font-mono`), both via
  `next/font/google` in `app/layout.tsx`. DM Mono is used in exactly one
  place — the `01`–`04` step numerals in `HowItWorks` — matching the design
  system's rule that mono is for numeric/technical values only.
- **Motion (`motion/react`) v13** for the hero's animation — entrance tweens
  plus `useScroll`/`useSpring`/`useTransform` for its scroll-driven phase. It is
  the only animated component; everything else uses CSS.
- **No backend.** Every form is local `useState` with no submit target. See §7.

---

## 4. Page structure

`app/page.tsx` composes nine pieces, in this order:

| Component | Section id | Background | Notes |
|---|---|---|---|
| `SiteHeader` | — | canvas, sticky | Wordmark + nav + "Get the app" pill |
| `Hero` | — | canvas | **Scroll-pinned, 2 viewports tall** — see below |
| `PartnerStrip` | — | panel (white) | Four partner names, **plain text** — see §8 |
| `Features` | `#features` | canvas | 3 cards, third is dark spruce |
| `HowItWorks` | `#how` | canvas | 4-step walkthrough, **client component** |
| `Expansion` | `#expansion` | canvas | Dark spruce panel, suburb waitlist |
| `ForBusiness` | `#business` | panel (white) | Copy + Linden Market photo |
| `DownloadCta` | `#get` | canvas | Store badges + logo card |
| `Newsletter` | `#newsletter` | canvas | White card, email capture |
| `SiteFooter` | — | canvas | Legal links, all placeholders |

**Backgrounds alternate canvas/panel deliberately** so no two same-coloured
blocks touch. If you insert a section, keep the alternation going.

`HowItWorks`, `Newsletter`, `Expansion` and `Hero` are client components — they
hold state or animate. Everything else renders on the server; keep it that way
unless a section genuinely needs interactivity.

### The hero

`components/landing/Hero.tsx` is a **scroll-driven animation on a sticky pin**:
a `200dvh`-equivalent section with a `sticky` one-viewport stage inside it, so
the hero holds on screen for a viewport of scroll before releasing. On mount:
a staggered blur-fade headline (`BlurText`, inlined in the same file), an
ambient elliptical glow rising from below, then the phone sliding up. On
scroll: the headline scales 1 → 1.3 and the phone pushes down 15%.

It also renders standalone at **`/hero-preview`** (`app/hero-preview/page.tsx`)
for iterating without the rest of the page. **Same component both places** —
edit `Hero.tsx` and both update.

Full spec, measured reference values and the implementation traps are in
`handdown.md`. Read it before changing the hero — several of its gotchas look
like the code "not working" rather than a mistake.

**`--site-header-h`** (in `globals.css`) is the single source of truth for the
header height. `SiteHeader` sets its height from it and `Hero` subtracts it to
size the pinned stage so the phone lands flush with the viewport bottom. It's a
CSS variable rather than a JS constant because Tailwind's scanner only reads
literal class strings — an interpolated `h-[calc(...${X}...)]` is never
generated, but `var()` inside a literal class resolves fine.

---

## 5. Components

**`components/ds/`** — ported from the design system's `_ds_bundle.js`:
`FacilityCard`, `HeroCard`, `ListRow`, `StatChip`. These mirror the bundle's
implementations. If the design system changes upstream, these are what need
re-syncing.

`HeroCard` and `StatChip` render their CTA as an inert `<span>` when no
handler is passed — they appear inside non-interactive phone mockups, which
should stay out of the tab order. Pass a handler and they become real buttons.

**`components/landing/`** — the page sections above, plus:
- `StoreButtons` — App Store / Google Play badges, inline SVG, no dependency.
- `PhoneBottomNav` — the floating nav inside the phone mockups.

**`components/`** (root) — `theme-provider.tsx` and `theme-toggle.tsx`
survive from an earlier draft. See §6.

---

## 6. Design tokens and theming

Brand tokens live in `@theme` in `app/globals.css` as `--color-brand-*`,
usable as `bg-brand-spruce`, `text-brand-muted`, `border-brand-line-soft`
etc. They mirror the design system's `tokens/colors.css`:

Dark Spruce `#1C472A` · Radioactive Grass `#7ED957` · Hunter Green `#47663B` ·
Warm White `#FCFAF7` · Onyx `#0F0F0F` · Panel `#FFFFFF` · Muted `#6F6F68`

Radius scale from the comp: 16 (small cards) / 24 (hero cards) / 32 (section
cards) / 999 (pills). Voice: sentence case everywhere, uppercase only for
wide-tracked eyebrows, no emoji.

**Dark mode is effectively dead.** The design system is light-only, so the
page hardcodes brand colours and renders identically in either theme.
`ThemeProvider` is still mounted in `layout.tsx` and still binds a global
**"d" hotkey** that toggles the `.dark` class — currently a visual no-op.
`ThemeToggle` is unreferenced by any rendered component. Either wire a
toggle back in and build real dark variants, or remove all three; the
current half-state is the thing to fix, not preserve.

**Motion:** three keyframes (`hhl-float`, `hhl-float-b`, `hhl-pulse`) are
defined at the bottom of `globals.css` with a `prefers-reduced-motion` block
that stops them **and restores the phones' resting rotation** — the rotation
lives in the keyframes, so `animation: none` alone would un-rotate them.

---

## 7. What's explicitly NOT built (don't assume it exists)

- **No form goes anywhere.** `Newsletter` and `Expansion` both flip a
  `useState` boolean and render a success message. Nothing is validated
  server-side, sent, stored or emailed. Wiring these to a real destination
  (Supabase, Resend, a form service) is unstarted work.
- **Store URLs are `#` placeholders** in `lib/site-config.ts`. The app isn't
  listed in either store yet. Drop real `https://` URLs in there and
  `StoreButtons` switches to `target="_blank" rel="noopener noreferrer"`
  automatically — no component change needed.
- **Business partnership intake was deliberately removed** (2026-08-06). The
  section pitches local businesses but gives them **no way to respond**. This
  is a known, accepted gap pre-launch. When ready, the cheapest fix is a
  mailto button under the benefits list, not rebuilding the form.
- **Footer legal links are placeholders** — "Privacy policy" and "Terms" both
  point at `#top`. No legal pages exist.
- **No testimonials.** A testimonials section existed briefly and was removed
  because the quotes were invented and the product has no users. If real
  quotes arrive, it's recoverable from commit `bfc541d`.
- **The header logo is a text wordmark, not the logo file.** Swapped while
  alternative marks are being designed for the client. `/logo/hhl-logo.png` is
  still in `public/` and still used by `DownloadCta`.
- **The phone mockup's screen is empty.** `hero_iPhone20Hand-p-1080.webp` has a
  transparent screen, so the hero's glow shows through it. An app screenshot
  needs to be composited in, or the glow masked behind the phone.
- **No analytics, no SEO beyond the page `metadata`, no sitemap, no OG image.**
- **Not deployed anywhere.** No hosting, no CI, no preview URL.

---

## 8. Known issues / open decisions

- **`public/partner-logos/` is unused.** Four real logos (Goddess Cafe, LCA,
  Linden Lanes, Linden Market) sit there, referenced by nothing.
  `PartnerStrip` currently renders partner **names as plain text** at 55%
  opacity. Wiring the logos in is an obvious next step — note only two of the
  four strip entries have a matching logo, and two logos (Goddess Cafe,
  Linden Lanes) are businesses not currently listed in the strip at all, so
  the list and the assets need reconciling first.
- **`docs/` is intentionally untracked** (~28 MB of PDFs including the NDA)
  and is in neither git nor `.gitignore`. Leave it that way unless asked.
- **`npm audit` reports 4 advisories** (`next`, `postcss`, `sharp`, `hono`),
  all pre-existing and inherited from Next.js itself. Not introduced by
  feature work.
- **Line endings**: the repo has no `.gitattributes` and git warns
  `LF will be replaced by CRLF` on every commit from Windows. Harmless but
  noisy; a `.gitattributes` with `* text=auto eol=lf` would settle it.
- **Prettier config vs reality**: `.prettierrc` sets `semi: false`, and all
  current code follows it. If you paste in code with semicolons, run
  `npx prettier --write` on it rather than leaving the repo mixed.

---

## 9. Key decisions worth knowing (to avoid re-litigating)

- **The hero is not from the design comp.** The comp's hero (two floating phone
  mockups, "Love where you live.", store badges) was replaced by the
  scroll-pinned hero. Its motion is modelled on https://novawell.webflow.io/ —
  referenced for animation behaviour only, not design or dark theme. **That name
  must not appear in file, component or route names.** The comp's hero is
  recoverable from commit `21ca651` if it's ever wanted back. The brand line and
  store badges were deliberately left out of the new hero; badges still live in
  `DownloadCta`.
- **The comp replaced an earlier draft.** A different AI tool built a first
  pass (`HeroSection`, `StorySection`, `AppShowcase`, `ExploreLocal`,
  `WhatsOn`, `Navbar`, `Footer`, `Newsletter`, `BusinessIntake`). When the
  design comp arrived, that draft was replaced wholesale — `Newsletter` and
  `BusinessIntake` were rebuilt in the design system's language and the rest
  deleted. All of it is recoverable from commit `bfc541d`'s parent.
  **`ExploreLocal` in particular had real substance** (filterable "hidden
  gems" cards with upvotes and per-merchant offers) that the comp has no
  equivalent for — worth revisiting if the page needs more depth.
- **Store badges are hand-built, on purpose.** `react-mobile-app-button` was
  tried and removed. It renders its badge as a `<div>` with an `onClick`
  calling `window.open` — no `href`, `tabIndex: -1`, unreachable by keyboard,
  invisible to crawlers — and ships Vite and Babel as *runtime* dependencies
  (136 packages, 2 advisories). **Don't reinstall it.** The inline-SVG version
  in `StoreButtons.tsx` is visually identical and renders on the server.
- **Photography is real, not stock.** Client-supplied Linden photos, copied
  from the Expo repo's `assets/photography/`. The earlier draft used Unsplash
  placeholders; don't reintroduce stock imagery.
- **The phone mockups are decorative but readable.** They're not marked
  `aria-hidden` — the copy inside them is real product content — but they
  contain no focusable elements by design.

---

## 10. How to resume work

```bash
cd C:\Projects\hello-hyperlocal-landing-page
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run lint         # eslint — currently clean, keep it that way
npm run build        # production build
npm run format       # prettier over **/*.{ts,tsx}
```

Branch is `feat/design-comp-landing`, off `master`. Nothing is pushed —
**there is no git remote configured.**

---

## 11. Maintenance

**Update this file** whenever you complete a meaningful chunk of work — new
sections, new decisions, new known issues, changes to what's deferred.
Sections 4 (page structure), 7 (not built) and 8 (open issues) go stale
fastest.
