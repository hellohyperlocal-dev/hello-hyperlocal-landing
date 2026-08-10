# Hello Hyperlocal — Living Brand Kit & Design Specification (Archived)

> [!NOTE]
> This is a legacy design draft. For the current canonical design system, see [`../design.md`](../design.md).

**Tagline:** Love where you live.  
**Specification:** Living Brand Kit & Design System  
**Creator:** Wavepoint Studio

---

## 01. Identity System

### Brand Identity & Logo Lockups
The speech-bubble mark stays fixed — only the canvas behind it changes per surface. No redraws, no simplified variants beyond what's shown here.

#### Lockup Variations
* **Primary:** On Dark Spruce
* **Primary:** On Warm White
* **Icon / App Symbol:** Standalone Speech Bubble Mark

### Construction Notes & Design Architecture
* **Primary Mark:** Centers around a speech bubble representing active community conversation, neighborhood connection, and local proximity.
* **Handwritten Script:** The handwritten 'Hello' script is preserved exclusively as a static brand master-asset to anchor visual identity.
* **Regional Scalability:** Suburb sub-brands (e.g., *Hello Parkhurst*, *Hello Greenside*, *Hello Linden*) maintain this exact structural speech bubble icon, dynamically adapting the geometric suburb wordmark lockup beneath to ensure absolute network-wide consistency.
* **Clearspace:** Minimum clearspace around the mark equals the height of the speech-bubble tail. Never crop the tail.

---

## 02. Color Architecture (Production Tokens)

> **Note:** Dark Spruce is the dominant dark branding tone — every dark container (hero cards, ledgers, CTAs, nav) fills with spruce, not onyx. Onyx is demoted to a text-only anchor.

| Token Name | Hex Code | Usage & Application |
| :--- | :--- | :--- |
| **Warm White** | `#FCFAF7` | Dominant canvas — every screen default background. |
| **Dark Spruce** | `#1C472A` | Primary dark surface — hero cards, ledgers, CTAs, bottom nav bar fill. |
| **Hunter Green** | `#47663B` | Secondary accents, eyebrows, tags, meta text. |
| **Radioactive Grass** | `#7ED957` | Action callouts, primary CTAs, active/highlight states only. |
| **Onyx** | `#0F0F0F` | Text-only anchor — body copy, numerals, technical values. |

---

## 03. Typographic System

### Font Family: DM Sans (The Only In-App Voice)
One geometric sans across every surface, matching the weight and tracking used in the live app screens.

| Level / Token | Example Text | Specifications | Context / Use Case |
| :--- | :--- | :--- | :--- |
| **Display** | `Hello, User.` | `38px` / `800` \| Line height `1.05` \| Tracking `-0.02em` | Greeting header, hero titles |
| **Heading** | `Facilities` | `22px` / `800` \| Line height `1.2` | Screen titles |
| **Card Title** | `Streamline Visitor Entry at the Gate` | `15px` / `700` \| Line height `1.35` | Hero card, listing titles |
| **Body** | `Looking for someone who can teach piano to my 8-year-old...` | `13px` / `400` \| Line height `1.6` | Post bodies, descriptions |
| **Label** | `Pre-Approved by Chris` | `12px` / `700` \| Line height `1.4` | Status labels, meta text |
| **Eyebrow** | `TRENDING · COMMUNITY` | `11px` / `700` \| Tracking `0.14em` \| Uppercase | Category tabs, filters |

> **Enforcement Rule:** Script and handwritten typefaces are prohibited from every interactive component in the library — enforced at the design-token level. The wordmark's handwritten "Hello" exists only inside the static logo asset and is never substituted as a live font anywhere in the UI.

---

## 04. Spatial & Radius Scale

The radius scale observed across the live screens — pill buttons, rounded stat chips, and soft card corners:

* `rounded-xl` (**12px**): Chips, small tags
* `rounded-2xl` (**16px**): Stat chips, list cards
* `rounded-3xl` (**24px**): Hero cards, sheets, modal containers
* `rounded-full` (**Pill**): Bottom nav bar, category tabs, primary CTAs

---

## 05. Component Standards

Production-ready layout modules and visual interface patterns engineered for Hello Hyperlocal design token parameters.

### 1. Home · Top Stat Row (Stat Chip Pair)
* **Components:** `R240` (Love Local savings) → | `03` (Open RSVPs) →
* **Pattern:** Two grass-filled chips, full-bleed pair, with dark circular arrow affordance top-right of each chip.

### 2. Visitors · Trending Filter (Segmented Pill Tabs)
* **Tabs:** `Local news` \| `Events` \| `Marketplace`
* **Pattern:** Track background is a soft spruce tint; active pill is solid **Dark Spruce** with grass label text.

### 3. Home · Announcement (Dark Hero Card)
* **Eyebrow:** Around the neighbourhood
* **Title:** Load-shedding schedule update
* **Body:** Stage 2 tonight from 8pm–10:30pm. Linden falls under block 4.
* **CTA:** `Read more →`
* **Pattern:** **Dark Spruce** card fill, grass eyebrow, white title and body, white pill CTA.

### 4. Community · Visitor List (List Row: Avatar + Status)
* **Row 1:** `TW` | **The Whippet Coffee** | New special posted · 12m ago | Status: `Live`
* **Row 2:** `LN` | **Linden Village Market** | RSVP requested · 1h ago | Status: `Pending`
* **Pattern:** Initials avatar, two-line meta stack, right-aligned status pill — grass tint for live/approved, warm amber tint for pending.

### 5. Facilities · Grid Card (Listing / Facility Card)
* **Listings:**
  * **The Whippet** — Free entry
  * **Linden Market** — R30 per stall
  * **Goddess Cafe Linden** — Free entry
  * **Weekend Breakfast Spec** — R85
* **Pattern:** Standardized grid geometry and aspect-ratio parameters engineered for regional brand imagery.

### 6. Payments · Fee Breakdown (Dark Ledger Card + CTA)
* **Summary:** Total due this month: **R380**
* **Breakdown:**
  * Featured listing: `R250`
  * Marketplace boost: `R130`
* **CTA:** `Pay R380`
* **Pattern:** **Dark Spruce** fill, reused verbatim for business-side marketplace billing — grass pill CTA pinned to the bottom.

### 7. Global · Create + Navigate (Create-Post Button & Floating Nav)
* **Primary Action:** `+ Share something great`
* **Floating Nav Bar:** `⌂ Home` \| `♡ Love Local` \| `⌕ Explore` \| `◔ What's On` \| `☰ Menu`
* **Pattern:** **Dark Spruce** full-width button with grass "+", sentence-case label per microcopy rules ("Share something great," not "Submit Content"). Floating nav bar detached from the screen edge on spruce fill — active state gets a grass ring, never a filled background.

---

## 06. Photography & Brand Imagery Direction

Real neighbourhood imagery, not stock photography. Warm, natural light, honest moments — coffee, tree-lined streets, weekend markets, local shop owners.

### Standardized Media Asset Framework & Aspect Ratios
* **4:3** — Listing Cover
* **16:9** — Event Banner
* **1:1** — Business Avatar
* **3:4** — Community Post

> **Grid Geometry Rule:** Every frame renders with `background-size: cover` so mixed source aspect ratios never distort the grid.

---

*Generated with love by Wavepoint Studio*
