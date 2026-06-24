# Beanform — Component Specifications

Stack: Next.js 16 App Router · Tailwind CSS v4 · TypeScript
All class names assume Tailwind v4 with the token set from `tokens.css`.

---

## Nav

A sticky top navigation bar that remains visible as the user scrolls.

### Anatomy

```
┌─────────────────────────────────────────────────────────────────────┐
│  [◉ BEANFORM]     Home   Menu   Our Story   Find Us     [Order →]   │
└─────────────────────────────────────────────────────────────────────┘
```

- **Logo:** Circular badge SVG + wordmark "BEANFORM" in DM Sans weight 600, `tracking-caps`
- **Links:** DM Sans, `text-sm`, weight 500, `text-parchment`, hover `text-chalk`
- **Active link:** `text-gold`, with a 1px underline growing from center on hover
- **CTA:** Primary button variant (see Button component)
- **Background:** `bg-moss/90 backdrop-blur-sm` — the blur creates the sense of glass over the page

### Code pattern

```tsx
<nav className="sticky top-0 z-nav bg-moss/90 backdrop-blur-sm border-b border-fern">
  <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

    {/* Logo */}
    <a href="/" className="flex items-center gap-3 shrink-0">
      <div className="w-9 h-9 rounded-full border border-gold-dim flex items-center justify-center">
        {/* SVG badge icon */}
      </div>
      <span className="font-body text-sm font-semibold tracking-caps text-chalk uppercase">
        Beanform
      </span>
    </a>

    {/* Links — hidden on mobile */}
    <ul className="hidden md:flex items-center gap-8">
      {links.map(link => (
        <li key={link.href}>
          <a
            href={link.href}
            className="
              font-body text-sm font-medium text-parchment
              hover:text-chalk transition-colors duration-[150ms]
              relative after:absolute after:bottom-0 after:left-0 after:right-0
              after:h-px after:bg-gold after:scale-x-0 after:origin-center
              hover:after:scale-x-100 after:transition-transform after:duration-[250ms]
            "
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <a href="/order" className="hidden md:flex btn-primary">
      Order for pickup
    </a>

    {/* Mobile hamburger */}
    <button className="md:hidden text-chalk" aria-label="Open menu">
      {/* Lucide Menu icon */}
    </button>
  </div>
</nav>
```

### States

| State | Appearance |
|---|---|
| Default | `bg-moss/90 backdrop-blur-sm` |
| Scrolled past hero | `bg-espresso/95 shadow-md` — darken slightly |
| Mobile open | Full-screen drawer, `bg-espresso`, links stack vertically with `text-xl` |

### Accessibility

- `<nav aria-label="Main navigation">`
- Active page link: `aria-current="page"`
- Mobile trigger: `aria-expanded`, `aria-controls` pointing to drawer id

---

## Hero

Full-viewport opening section. The signature moment of the design.

### Anatomy

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   SPECIALTY ROASTS ──────────────────────────── [product image]     │
│                                                                      │
│   Start Your Life                              [product image]       │
│   With a Coffee                                                      │
│                                                                      │
│   We source directly from 14 farms across     [product image]       │
│   Ethiopia and Colombia. No middlemen.                               │
│   Every cup traceable to its origin.                                 │
│                                                                      │
│   [Explore the menu →]   [Our story]                                │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

- **Eyebrow:** DM Sans, `text-sm`, `tracking-caps`, `text-gold`, ALL CAPS
- **H1:** Cormorant Garamond, `text-4xl sm:text-6xl lg:text-7xl`, weight 700, `tracking-display`, `leading-tight`
- **Lead:** DM Sans, `text-lg`, weight 300, `text-parchment`, `max-w-md`
- **Buttons:** Primary + Ghost side by side
- **Image:** Right half of the desktop layout — product photography with `overlay`

### Code pattern

```tsx
<section className="
  relative min-h-screen bg-forest overflow-hidden
  flex items-center
">
  {/* Botanical illustration texture — very low opacity */}
  <div className="
    absolute inset-0 z-below opacity-[0.06]
    bg-[url('/illustrations/coffee-branch.svg')] bg-no-repeat bg-right-top bg-contain
  " aria-hidden="true" />

  <div className="relative z-base max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 py-32">

    {/* Text column */}
    <div className="flex flex-col gap-8 motion-safe:animate-hero-enter">
      <p className="
        font-body text-sm font-medium tracking-caps text-gold uppercase
      ">
        Specialty Roasts
      </p>
      <h1 className="
        font-display text-5xl sm:text-6xl lg:text-7xl font-bold
        tracking-display leading-tight text-chalk
      ">
        Start Your Life<br />
        With a <em className="not-italic text-gold">Coffee</em>
      </h1>
      <p className="
        font-body text-lg font-light text-parchment leading-relaxed max-w-md
      ">
        We source directly from 14 farms across Ethiopia and Colombia.
        No middlemen. Every cup traceable to its origin.
      </p>
      <div className="flex items-center gap-4 flex-wrap">
        <a href="/menu" className="btn-primary">Explore the menu</a>
        <a href="/story" className="btn-ghost">Our story</a>
      </div>
    </div>

    {/* Image column */}
    <div className="
      relative hidden lg:flex items-center justify-center
      motion-safe:animate-hero-image
    ">
      <div className="relative w-full aspect-square max-w-lg rounded-xl overflow-hidden">
        <Image
          src="/hero-product.jpg"
          alt="Beanform specialty coffee cup with kraft paper sleeve"
          fill
          className="object-cover"
          priority
        />
        {/* Palette overlay */}
        <div className="absolute inset-0 bg-forest/15 mix-blend-multiply" />
      </div>
    </div>

  </div>
</section>
```

### Hero entrance animation

Define in `globals.css` inside `@media (prefers-reduced-motion: no-preference)`:

```css
@keyframes hero-enter {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-hero-enter > * {
  opacity: 0;
  animation: hero-enter var(--duration-reveal) var(--ease-out-expo) forwards;
}
.animate-hero-enter > *:nth-child(1) { animation-delay: 0ms;   }
.animate-hero-enter > *:nth-child(2) { animation-delay: 100ms; }
.animate-hero-enter > *:nth-child(3) { animation-delay: 280ms; }
.animate-hero-enter > *:nth-child(4) { animation-delay: 420ms; }

@keyframes hero-image {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}
.animate-hero-image {
  opacity: 0;
  animation: hero-image var(--duration-reveal) var(--ease-out-expo) 500ms forwards;
}
```

---

## Button

### Variants

**Primary** — `btn-primary`
The main call-to-action. One per section maximum.

```
Background: gold   →   gold-light (hover)
Text: espresso (dark text on gold — highest contrast)
Shape: rounded-full
Shadow: shadow-glow on hover
```

```tsx
<button className="
  inline-flex items-center gap-2 px-6 py-3 rounded-full
  font-body text-sm font-semibold tracking-wide
  bg-gold text-espresso
  hover:bg-gold-light hover:shadow-glow
  transition-all duration-[250ms] ease-out
  focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest
">
  Explore the menu
  <ArrowRight className="w-4 h-4" />
</button>
```

**Secondary** — `btn-secondary`
Supporting action. Used when a primary already exists nearby.

```
Background: moss   →   fern (hover)
Text: chalk
Border: 1px fern   →   gold-dim (hover)
Shape: rounded-full
```

```tsx
<button className="
  inline-flex items-center gap-2 px-6 py-3 rounded-full
  font-body text-sm font-semibold
  bg-moss text-chalk border border-fern
  hover:bg-fern hover:border-gold-dim
  transition-all duration-[250ms] ease-out
  focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest
">
  View all roasts
</button>
```

**Ghost** — `btn-ghost`
Tertiary action. Appears alongside a primary button.

```
Background: transparent   →   chalk/5 (hover)
Text: parchment   →   chalk (hover)
Border: none
Shape: rounded-full
Underline: appears on hover
```

```tsx
<button className="
  inline-flex items-center gap-2 px-6 py-3 rounded-full
  font-body text-sm font-medium text-parchment
  hover:text-chalk hover:bg-chalk/5
  transition-all duration-[250ms] ease-out
  focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest
">
  Our story
</button>
```

### Size variants

| Size | Padding | Font size | Use |
|---|---|---|---|
| Small | `px-4 py-2` | `text-xs` | Inline actions, tags |
| Default | `px-6 py-3` | `text-sm` | Most contexts |
| Large | `px-8 py-4` | `text-base` | Hero CTAs only |

### States

| State | Visual |
|---|---|
| Default | As above |
| Hover | Color shift + shadow-glow (primary) |
| Active/pressed | `scale-[0.98]` |
| Disabled | `opacity-40 cursor-not-allowed` — never `pointer-events-none` alone |
| Loading | Spinner replaces icon, label stays visible |

---

## Card

### Product Card

Used in menu/shop listings.

```
┌─────────────────────────────┐
│                             │
│         [image]             │
│                             │
├─────────────────────────────┤
│  ETHIOPIA BLEND  ←eyebrow   │
│  Yirgacheffe Natural        │
│  Sweet, bright, blueberry   │
│                             │
│  $18.00          [Order →]  │
└─────────────────────────────┘
```

```tsx
<article className="
  group bg-moss rounded-lg overflow-hidden
  border border-fern hover:border-gold-dim
  shadow-sm hover:shadow-md hover:-translate-y-1
  transition-all duration-[250ms] ease-out
">
  {/* Image */}
  <div className="relative aspect-square overflow-hidden">
    <Image
      src={product.image}
      alt={product.imageAlt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-[400ms] ease-out"
    />
    <div className="absolute inset-0 bg-forest/15" />
  </div>

  {/* Content */}
  <div className="p-6 flex flex-col gap-3">
    <p className="font-body text-xs font-medium tracking-caps text-gold uppercase">
      {product.origin}
    </p>
    <h3 className="font-display text-2xl font-semibold tracking-heading text-chalk leading-snug">
      {product.name}
    </h3>
    <p className="font-body text-sm text-parchment leading-normal">
      {product.tasting}
    </p>
    <div className="flex items-center justify-between mt-2">
      <span className="font-mono text-xl text-chalk">
        ${product.price.toFixed(2)}
      </span>
      <button className="btn-primary text-xs px-4 py-2">
        Order
      </button>
    </div>
  </div>
</article>
```

### Feature Card

Used in "Our Process", "Why Beanform", "Values" sections.

```
┌────────────────────────────────────────────────┐
│  ◉                    ← circular icon container │
│                                                │
│  Direct Trade                                  │
│  We work with farm owners directly,            │
│  not exporters. This keeps prices              │
│  fair on both ends.                            │
└────────────────────────────────────────────────┘
```

```tsx
<div className="flex flex-col gap-5 p-8 bg-moss rounded-lg border border-fern">
  {/* Icon container — circular, the signature shape */}
  <div className="w-12 h-12 rounded-full bg-forest border border-gold-dim flex items-center justify-center">
    <Leaf className="w-5 h-5 text-gold" />
  </div>

  <div className="flex flex-col gap-3">
    <h3 className="font-display text-2xl font-semibold tracking-heading text-chalk">
      {feature.title}
    </h3>
    <p className="font-body text-base font-light text-parchment leading-relaxed max-w-prose">
      {feature.description}
    </p>
  </div>
</div>
```

---

## Badge / Label

### Circular Badge (Logo variant)

The brand stamp. Used in the nav, hero, footer, and as a watermark.

```tsx
<div className="
  w-16 h-16 rounded-full
  border-2 border-gold
  flex flex-col items-center justify-center gap-1
  text-center
">
  {/* SVG coffee cup icon */}
  <span className="font-body text-[9px] font-semibold tracking-caps text-gold uppercase leading-none">
    Beanform
  </span>
</div>
```

Sizes: `w-9 h-9` (nav) · `w-16 h-16` (hero watermark) · `w-24 h-24` (footer feature)

### Text Badge

Small inline label for tags: roast level, origin region, flavors.

```tsx
<span className="
  inline-flex items-center px-3 py-1 rounded-sm
  font-body text-xs font-medium tracking-wide
  bg-espresso text-parchment border border-fern
">
  {label}
</span>
```

Variants:
- Default: `bg-espresso text-parchment border-fern`
- Gold: `bg-gold-dim/30 text-gold border-gold-dim` — for featured/highlighted
- Active: `bg-gold text-espresso border-gold` — for selected filter

---

## Section

Reusable page section wrapper with consistent vertical rhythm.

```tsx
<section className="py-24 px-8 bg-[var(--surface)]">
  <div className="max-w-7xl mx-auto">

    {/* Section header — optional */}
    <header className="flex flex-col gap-4 mb-16 max-w-2xl">
      <p className="font-body text-sm font-medium tracking-caps text-gold uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-heading text-chalk leading-snug">
        {heading}
      </h2>
      {description && (
        <p className="font-body text-lg font-light text-parchment leading-relaxed">
          {description}
        </p>
      )}
    </header>

    {/* Content */}
    {children}

  </div>
</section>
```

Alternating section backgrounds to create depth:
- Odd sections: `bg-forest`
- Even sections: `bg-espresso`
- Feature callout sections: `bg-moss`

---

## Divider

A botanical line illustration used between sections as a decorative separator. Appears only on desktop. Never used more than once per page.

```tsx
<div className="py-12 flex items-center justify-center" aria-hidden="true">
  <div className="flex items-center gap-6 opacity-30">
    <div className="h-px w-24 bg-fern" />
    {/* Small coffee bean SVG icon */}
    <svg width="20" height="20" viewBox="0 0 20 20" className="text-gold fill-current">
      {/* coffee bean path */}
    </svg>
    <div className="h-px w-24 bg-fern" />
  </div>
</div>
```

---

## Form Elements

### Text Input

```tsx
<div className="flex flex-col gap-2">
  <label
    htmlFor={id}
    className="font-body text-sm font-medium text-parchment"
  >
    {label}
  </label>
  <input
    id={id}
    type={type}
    className="
      w-full px-4 py-3 rounded-md
      bg-espresso border border-fern text-chalk
      font-body text-base
      placeholder:text-latte
      hover:border-gold-dim
      focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1 focus:ring-offset-forest
      transition-colors duration-[150ms]
    "
  />
</div>
```

### Select

Same visual treatment as text input. Use native `<select>` styled identically — custom dropdowns only when native is insufficient.

---

## Footer

Full-width dark footer. Uses `bg-espresso` to visually terminate the page.

### Anatomy

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  [◉ BEANFORM]                                                      │
│  Clean Coffee, Pure Focus.                                         │
│                                                                    │
│  Menu          Visit           Connect                             │
│  Our Roasts    Locations       Instagram                           │
│  Subscriptions Hours           Twitter                             │
│  Gift Cards    Contact         Newsletter                          │
│                                                                    │
│  ─────────────────────────────────────────────────────────────    │
│  © 2025 Beanform. All rights reserved.    Privacy · Terms          │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

```tsx
<footer className="bg-espresso border-t border-fern">
  <div className="max-w-7xl mx-auto px-8 py-16">

    {/* Top: brand + nav columns */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      {/* Brand column */}
      <div className="flex flex-col gap-4 md:col-span-1">
        {/* Logo badge */}
        <p className="font-body text-sm font-light text-latte leading-relaxed max-w-xs">
          Clean Coffee, Pure Focus.
        </p>
      </div>

      {/* Nav columns */}
      {footerNav.map(col => (
        <div key={col.heading} className="flex flex-col gap-4">
          <p className="font-body text-xs font-semibold tracking-caps text-gold uppercase">
            {col.heading}
          </p>
          <ul className="flex flex-col gap-3">
            {col.links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-parchment hover:text-chalk transition-colors duration-[150ms]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div className="pt-8 border-t border-fern flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-body text-xs text-latte">
        © 2025 Beanform. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a href="/privacy" className="font-body text-xs text-latte hover:text-parchment transition-colors">Privacy</a>
        <a href="/terms"   className="font-body text-xs text-latte hover:text-parchment transition-colors">Terms</a>
      </div>
    </div>

  </div>
</footer>
```

---

## Global CSS Utilities

Add these to `globals.css` to keep component code clean:

```css
@layer utilities {
  .btn-primary {
    @apply inline-flex items-center gap-2 px-6 py-3 rounded-full
           font-body text-sm font-semibold tracking-wide
           bg-gold text-espresso
           hover:bg-gold-light hover:shadow-glow
           transition-all duration-[250ms] ease-out
           focus-visible:ring-2 focus-visible:ring-gold
           focus-visible:ring-offset-2 focus-visible:ring-offset-forest;
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 px-6 py-3 rounded-full
           font-body text-sm font-semibold
           bg-moss text-chalk border border-fern
           hover:bg-fern hover:border-gold-dim
           transition-all duration-[250ms] ease-out
           focus-visible:ring-2 focus-visible:ring-gold
           focus-visible:ring-offset-2 focus-visible:ring-offset-forest;
  }

  .btn-ghost {
    @apply inline-flex items-center gap-2 px-6 py-3 rounded-full
           font-body text-sm font-medium text-parchment
           hover:text-chalk hover:bg-chalk/5
           transition-all duration-[250ms] ease-out
           focus-visible:ring-2 focus-visible:ring-gold
           focus-visible:ring-offset-2 focus-visible:ring-offset-forest;
  }

  .eyebrow {
    @apply font-body text-sm font-medium tracking-[0.14em] text-gold uppercase;
  }

  .section-heading {
    @apply font-display text-4xl font-semibold tracking-[-0.01em] text-chalk leading-snug;
  }

  .body-lead {
    @apply font-body text-lg font-light text-parchment leading-relaxed;
  }
}
```
