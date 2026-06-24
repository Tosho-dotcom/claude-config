# Beanform — Style Guide

Brand: **Beanform** · "Clean Coffee, Pure Focus"
Stack: Next.js 16 App Router · Tailwind CSS v4 · TypeScript
Reference: `docs/design/reff/1.png.webp`

---

## 1. Brand Identity

Beanform is a premium artisan coffee brand. Every design decision should feel like it belongs in a well-lit specialty coffee shop: materials that are honest (dark wood, kraft paper, glazed ceramic), light that is warm and directional, and nothing that is there just to fill space.

The brand position sits between rustic warmth and modern precision. It is not farmhouse. It is not tech-startup. It is the coffee shop that opened on a side street, has no neon signs, and always has a queue.

---

## 2. Color

All token definitions are in `tokens.css`. This section explains how to apply them.

### Palette

| Token | Hex | Role |
|---|---|---|
| `espresso` | `#141A12` | Deepest background — overlays, modals, deepest shadow |
| `forest` | `#263328` | **Primary page background** — use on `<body>` and `<main>` |
| `moss` | `#344539` | Raised surfaces — cards, panels, nav background |
| `fern` | `#4A6152` | Borders and dividers |
| `gold` | `#C49A3C` | **Primary accent** — CTAs, active nav links, highlights |
| `gold-light` | `#D9B86A` | Gold hover state |
| `gold-dim` | `#8A6A28` | Gold at low luminance — rings, subtle borders |
| `chalk` | `#F7F2EB` | **Primary text** on dark backgrounds |
| `parchment` | `#E8D8BC` | Secondary text, captions, labels |
| `latte` | `#A8845A` | Tertiary — placeholders, disabled states |

### Rules

**Backgrounds layer in one direction only.** The order is: `espresso` → `forest` → `moss`. A card on a page sits on `moss`; the page sits on `forest`. Never put `forest` on top of `moss`, and never put a `moss` card on an `espresso` section — it breaks the sense of depth.

**Gold is a single accent, not a theme color.** Use it for one primary CTA per section, the active navigation link, and hover underlines. If three elements on screen are gold simultaneously, one of them should not be.

**No white.** `chalk` (`#F7F2EB`) is the lightest text color. Pure white `#ffffff` is never used — it reads as a mistake against the green backgrounds.

**No pure black.** `espresso` (`#141A12`) is the darkest surface. `#000000` is never used.

**Opacity over grey.** When something needs to be de-emphasized, reduce its opacity (`text-chalk/50`) rather than switching to a grey value outside the palette.

---

## 3. Typography

### Families

**Cormorant Garamond** — Display only.
- Weight: 300 (italic only), 400, 500, 600 (headings), 700 (brand name/hero)
- The defining characteristic is high stroke contrast: thick verticals, hairline horizontals. This contrast becomes dramatic and beautiful at large sizes (60px+). Do not use it for body copy — the hairlines collapse at small sizes.
- Italic in Cormorant is expressive and should be used sparingly for emphasis words within headlines, not for full sentences.
- Loaded via Google Fonts.

**DM Sans** — Body, UI, labels, navigation.
- Weight: 300 (long body copy), 400 (default), 500 (labels, bold emphasis), 600 (nav items, subheadings)
- Variable font with optical size axis — use `opsz` variation for long paragraphs: the letterforms open up slightly for better readability.
- Loaded via Google Fonts.

**Geist Mono** — Data, prices, quantities, code.
- Already loaded by the Next.js layout via `next/font/google`.
- Use for any numbers that align vertically (price lists, nutritional info, statistics).

### Hierarchy

```
──────────────────────────────────────────────────────
Level      Font         Size         Weight  Tracking
──────────────────────────────────────────────────────
Display    Cormorant    text-7xl     700     tracking-display (-0.025em)
Hero H1    Cormorant    text-6xl     600     tracking-display
Section H2 Cormorant    text-4xl     600     tracking-heading
Card H3    Cormorant    text-3xl     500     tracking-heading
Sub-head   Cormorant    text-2xl     400     tracking-heading
Eyebrow    DM Sans      text-sm      500     tracking-caps (0.14em), ALL CAPS
Lead       DM Sans      text-lg      300     tracking-body
Body       DM Sans      text-base    400     tracking-body
Small      DM Sans      text-sm      400     tracking-body
Caption    DM Sans      text-xs      400     tracking-wide
Price      Geist Mono   text-xl      400     tracking-body
──────────────────────────────────────────────────────
```

### Eyebrows / Overlines

Eyebrows are short ALL-CAPS labels that precede a heading. They must:
- Use DM Sans, `text-sm`, weight 500, `tracking-caps` (0.14em)
- Be colored `gold` — they are the only text that is regularly gold
- Contain 1–4 words maximum
- Encode something true: a category, a step in a real sequence, or a label — not decoration

```html
<!-- Correct usage -->
<p class="font-body text-sm font-medium tracking-caps text-gold uppercase">
  Specialty Roasts
</p>
<h2 class="font-display text-4xl font-semibold tracking-heading text-chalk">
  Every bean has a story
</h2>

<!-- Wrong: eyebrow that's just decoration -->
<p class="...">01</p>  ← numbered unless there's a real sequence
```

### Line Lengths

Body copy maximum: **70 characters** (`max-w-prose`). Never let a body paragraph span a full wide container — readable line length is a fundamental quality signal.

---

## 4. Spacing

The spacing scale is in `tokens.css` as `--spacing-*`. These map to Tailwind utility classes automatically in v4.

**Section vertical padding:** `py-24` (96px) on desktop, `py-16` (64px) on mobile.

**Content container:** `max-w-7xl mx-auto px-8` on desktop, `px-5` on mobile.

**Component internal padding rhythm:**
- Cards: `p-8` external, `gap-4` between internal elements
- Buttons: `px-6 py-3` (standard), `px-8 py-4` (large CTA)
- Nav: `h-16` height, `px-8` horizontal padding

**Spatial hierarchy:** Tighten spacing within a component; open up space between components. The eye should group things that belong together and breathe between sections.

---

## 5. Shape Language

The Beanform logo is a circular badge/stamp. This circle is the brand's signature geometric.

Across the design:
- **Avatar containers** are circular (`rounded-full`)
- **The logo** is always presented inside or adjacent to a circle
- **Feature icons** live inside circles: `w-12 h-12 rounded-full bg-moss flex items-center justify-center`
- **Decorative elements** — the botanical illustrations from the reference — are circular arrangements of line-drawn coffee plants

Cards and panels use `rounded-lg` (14px) — enough to feel intentional, not so much as to feel playful. Only the primary CTA button uses `rounded-full`.

**Zero border-radius is never used.** Even the full-bleed hero image has `overflow-hidden` so its child image fills with no square corners visible.

---

## 6. Imagery

**Product photography:** High-key, warm-toned. Coffee cups, bags, beans with directional lighting against dark or neutral backgrounds. Never bright-white studio backgrounds — they conflict with the dark palette.

**Atmospheric photography:** Coffee shop interiors, hands holding cups, steam — always warm, slightly underexposed to let the dark backgrounds breathe.

**Illustrations:** Botanical line drawings (coffee plants, leaf sprigs) in `gold` or `parchment`. Used as texture overlays at 8–15% opacity, never as standalone graphic elements. They recede into the background and add materiality without competing with content.

**Image treatment:** All images have a subtle overlay — `bg-forest/20` — to tie photography into the brand palette. Never display an image without it.

---

## 7. Motion

The page has one choreographed moment: the hero section entrance.

```
t=0ms    Eyebrow fades in (opacity 0→1, translateY 8px→0)
t=100ms  H1 line 1 fades in (same)
t=200ms  H1 line 2 fades in (same)
t=350ms  Body copy fades in
t=500ms  CTA button fades in + subtle scale (0.96→1)
t=650ms  Product image slides in from right (translateX 20px→0)
```

Duration for each step: `var(--duration-reveal)` (700ms), easing `var(--ease-out-expo)`.

Every other animation is a hover micro-interaction only:
- Buttons: background color + subtle box-shadow glow — `transition-all duration-[250ms] ease-out`
- Nav links: underline grows from center — `after:scale-x-0 hover:after:scale-x-100`
- Cards: lift — `hover:-translate-y-1 hover:shadow-lg transition-transform duration-[250ms]`

**Reduced motion:** All animations respect `prefers-reduced-motion`. Wrap entrance animations in `@media (prefers-reduced-motion: no-preference)` so users who need it get static content instantly.

---

## 8. Iconography

Use a single icon library — **Lucide React** is recommended for its clean, geometric strokes that match DM Sans. Icon size: `w-5 h-5` (20px) in body contexts, `w-6 h-6` (24px) in navigation and buttons.

Icons are never used decoratively. Every icon has an `aria-label` or accompanies visible text.

Icon color: match surrounding text — `text-chalk`, `text-parchment`, or `text-gold` for accent icons.

---

## 9. Responsive Behavior

The design is mobile-first. Three breakpoints are meaningful:

| Breakpoint | Tailwind | Width | Layout change |
|---|---|---|---|
| Mobile | (default) | < 640px | Single column, `px-5` |
| Tablet | `sm:` | ≥ 640px | Two columns unlock |
| Desktop | `lg:` | ≥ 1024px | Full layout, `px-8` |
| Wide | `xl:` | ≥ 1280px | Max container `max-w-7xl` centers |

Hero text scales down: `text-4xl sm:text-6xl lg:text-7xl`. Body text stays `text-base` at all breakpoints.

Navigation collapses to a hamburger at mobile. The mobile menu slides down from the top with a dark `espresso` background.

---

## 10. Accessibility

**Color contrast:** All body text (`chalk` on `forest`) passes WCAG AA at 4.5:1. `parchment` on `forest` passes at 3.1:1 — use only for secondary/non-essential text. `gold` on `forest` is 3.4:1 — acceptable for large text (18px+) and UI components, not for small body copy.

**Focus styles:** Never remove the default focus ring — override it. Focused interactive elements get `ring-2 ring-gold ring-offset-2 ring-offset-forest`. This is the gold accent applied functionally.

**Motion:** Use `motion-safe:` prefix for all animations. Static state must be correct and complete.

**Semantic HTML:** Use real heading hierarchy (`h1` → `h2` → `h3`), `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`. Never use a `<div>` where a semantic element exists.

---

## 11. Voice and Copy

Beanform's copy is direct and specific — never poetic for its own sake.

**Headlines:** Active, present tense. Name the thing precisely.
```
✓ "We source from 14 farms across Ethiopia and Colombia."
✗ "A journey from bean to cup."
```

**CTAs:** Say exactly what happens next.
```
✓ "Explore the menu"  "Order for pickup"  "See today's roasts"
✗ "Learn more"  "Get started"  "Discover"
```

**Eyebrows:** Category or step labels only.
```
✓ "Seasonal Roasts"  "Our Process"  "Find a Location"
✗ "Experience"  "01"  "More"
```

**Error/empty states:** State the fact and the action.
```
✓ "No orders yet. Visit the menu to place your first order."
✗ "Nothing here yet!"
```
