# Alice Julia Design System

Design system for **Alice Julia's UGC (User-Generated-Content) creator portfolio** — a single-page site used to apply to UGC platforms and win brand bookings. Rebuilt from an existing Canva draft (structure/copy largely finalised) into a sleeker, editorial, non-"creator template" visual language.

**Sources provided** (in `uploads/`, referenced but not redistributed as design-system assets):
- `Landing page.png`, `About Me.png`, `Videography.png`, `Services & Pricing.png`, `Contact.png`, `Why UGC.png` — screenshots of the existing Canva draft (maroon #3d0f0f + white, condensed grotesque type). Content/copy and section structure are ground truth; the maroon colour scheme was explicitly rejected.
- `The Row Template.png` — a screenshot of a Squarespace template ("The Red" by Row Creative), given as a *vibe and typography* reference only ("fun, luxe and business," bold-but-polished editorial feel) — not for its red palette.

No codebase or Figma file was attached; this is a from-scratch system built to brief.

## Components
`components/core/` — **Button**, **Tag**
`components/navigation/` — **NavLink**
`components/media/` — **PhoneFrame**
`components/content/` — **SectionHeading**, **IconListItem**, **QuoteBlock**, **ServiceCard**

These are standard primitives sized to this one site (no existing component library to inherit from). See each `*.prompt.md` for usage.

## UI Kit
`ui_kits/portfolio-site/` — the full scrolling one-page site (Header/Hero → About → Content Optimised & Built For → Why UGC quote → UGC Examples → Case Studies → Services & Pricing → Deliverables → Contact/Footer), composed from the components above. Open `index.html`.

## Index
- `styles.css` — root stylesheet, imports everything under `tokens/`
- `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups) for the Design System tab
- `components/` — reusable primitives (see above)
- `ui_kits/portfolio-site/` — the full site build
- `thumbnail.html` — project tile
- `SKILL.md` — portable skill file for Claude Code

## Content fundamentals
Voice is first-person, direct, and confident without being salesy. "Hi, I'm Alice — a UGC creator who builds content that feels native to the platform it's on, not like an ad." Sentences are conversational but precise about strategy ("what's the hook, what's the proof point, and what actually makes someone stop scrolling"). No emoji. Section labels are terse and scannable (e.g. "Content Optimised For", "Content Built For") — bullet phrases, not paragraphs. Pricing and deliverables copy is plain and factual, ranges given in £, no hard-sell language. Small print used for context/disclaimers is set in italic ("Example content created to showcase style and process — not paid brand partnerships.").

## Visual foundations
- **Colour**: two backgrounds only — warm ivory `#f6f1ea` and near-black warm ink `#221b18` — alternated section to section. One accent, deep burgundy `#7a2330` (deepening to `#4f141c` on hover/press), used narrowly — never more than ~10% of any view: section eyebrow labels + their marker dot, button hover fills, nav-link underlines on hover, and small icon accents.
- **Type**: single grotesque family, Manrope, carrying both display and body via weight only (800/700 for headings, 500/400 for body) — no serif pairing, matching the Row reference's approach.
- **Layout motif**: a short hairline rule + small accent dot + uppercase eyebrow label opens every section (borrowed from the Row reference's "• Boost your..." dot styling), followed by a large, tightly-tracked heading.
- **Imagery**: every embedded video (intro reel, UGC examples, case studies) sits inside a CSS-built iPhone bezel (`PhoneFrame`) — bezel + dynamic-island notch, no real device photography. Photo/video content itself is left as `<image-slot>` placeholders for the user's real footage.
- **Cards**: light-surface or ink-surface, 14px radius, soft ambient shadow that intensifies and lifts the card 4px on hover (never a coloured left border).
- **Motion**: 220–420ms eased transitions only (`--ease-standard`), never instant or bouncy. Buttons: outline → solid fill + 1.03 scale on hover. Nav links: underline draws in left-to-right. Cards: lift + shadow. Sections fade up (24px) and reveal staggered as they scroll into view (`Reveal` helper in the UI kit, threshold-based, ~100ms stagger).
- **Shape**: 6px small radius (chips), 14px medium (cards), 26px large (dark panels/quote blocks), pill for buttons/tags. No inner shadows, no gradients, no blur/glass except a subtle nav backdrop-blur on scroll.
- **Borders**: 1.5px, warm taupe `#ddd0c1` on light surfaces; none on dark surfaces (contrast alone separates them).

## Iconography
No icon font or SVG icon set was provided. Platform icons (TikTok, Instagram, YouTube, Pinterest) are loaded from the **Simple Icons CDN** (`https://cdn.simpleicons.org/<slug>/<hex>`) — a legitimate open icon service, not hand-drawn — recolourable to ink or ivory per background. Generic UI marks (checkmarks) are plain glyphs, not icon-font dependent. No emoji is used anywhere on the site, matching the brand's plain, confident tone.

## Logo
No logo file was supplied. The wordmark is set in Manrope Black wherever a mark would otherwise go ("Alice Julia" / "AJ"). If a logo exists, add it to `assets/` and this note can be removed.

## Fonts
Target: **Aktiv Grotesk** (identified from the Row reference) — a paid Dalton Maag font, not freely embeddable. Substituted with **Manrope** (free, Google Fonts), per the brief's own suggested equivalents (Hanken Grotesk / Plus Jakarta Sans / Manrope) — picked for its versatile grotesque character across the weight range needed for both display and body use. Loaded via Google Fonts `@import` in `tokens/typography.css` (no local font files bundled, since none were supplied) — flag this to the user if brand font files become available later.
