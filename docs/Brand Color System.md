# Hello Hyperlocal — Brand Color System & Production Tokens

**Design Architecture:** Color Token Specification  
**Primary Surface Default:** Warm White (`#FCFAF7`)  
**Primary Dark Surface:** Dark Spruce (`#1C472A`)

---

## 1. Production Color Palette

The Hello Hyperlocal color system is built around a warm, organic, yet vibrant modern palette. Every token has a strict, functional purpose across light and dark surfaces.

| Token Name | Hex Code | RGB | Role / Surface Application |
| :--- | :--- | :--- | :--- |
| **Warm White** | `#FCFAF7` | `252, 250, 247` | **Dominant Canvas** — Default background for every screen, page, and sheet. |
| **Dark Spruce** | `#1C472A` | `28, 71, 42` | **Primary Dark Surface** — Hero cards, dark ledgers, primary buttons, floating bottom nav fill. |
| **Hunter Green** | `#47663B` | `71, 102, 59` | **Secondary Accents** — Subtitles, section eyebrows, metadata tags, muted icons. |
| **Radioactive Grass** | `#7ED957` | `126, 217, 87` | **Primary Call-to-Action (CTA)** — Active states, primary action buttons, notification badges, interactive focus rings. |
| **Onyx** | `#0F0F0F` | `15, 15, 15` | **Text Anchor** — Body copy, primary text titles, technical values, numbers. |

---

## 2. Supporting & Utility Colors

For status badges, alerts, and subtle surface highlights:

| Token Name | Hex Code | Purpose & Context |
| :--- | :--- | :--- |
| **Soft Sage** | `#E8EFE6` | Background tint for active pill tabs, subtle list dividers, soft hover states. |
| **Light Grey** | `#F3F4F6` | Secondary input field fills, skeleton shimmer cards, inactive toggle tracks. |
| **Amber Gold** | `#F59E0B` | Status pills (e.g., `Pending Verification`, `Pending RSVP`). |
| **Charcoal** | `#262626` | Secondary text copy, footer metadata, disabled state labels. |

---

## 3. Structural Rules & Application Guidelines

### Rule 1: Spruce Over Onyx
* **Dark Spruce (`#1C472A`)** is the mandatory fill color for dark UI elements (Hero announcements, banner cards, bottom navigation containers).
* **Onyx (`#0F0F0F`)** is demoted to a text-only anchor. Large containers or card fills must **never** be pure black/onyx.

### Rule 2: High-Impact Grass Usage
* **Radioactive Grass (`#7ED957`)** is reserved strictly for positive actions, key highlights, active bottom nav indicators, and primary CTAs.
* Avoid using Radioactive Grass as large background fills on text-heavy cards to prevent visual fatigue and maintain contrast legibility.

### Rule 3: High Contrast & Readability
* On **Dark Spruce** backgrounds, text must render in **Warm White (`#FCFAF7`)** or **Radioactive Grass (`#7ED957`)**.
* On **Warm White** backgrounds, primary body text must render in **Onyx (`#0F0F0F`)** and secondary copy in **Hunter Green (`#47663B`)**.

---

## 4. UI Component Mapping Examples

```tsx
// Tailwind CSS Token Mapping Reference
const colors = {
  canvas: "bg-[#FCFAF7]",        // Warm White Screen Background
  cardDark: "bg-[#1C472A]",      // Dark Spruce Hero Card Fill
  accentText: "text-[#47663B]",   // Hunter Green Eyebrows & Tags
  ctaButton: "bg-[#7ED957]",    // Radioactive Grass Action CTA
  bodyText: "text-[#0F0F0F]",     // Onyx Body Copy
};