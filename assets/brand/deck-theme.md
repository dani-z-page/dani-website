# Zimmerman Advisory — Deck Theme

The "Deep Ink" presentation system for Zimmerman Advisory: warm near-black or cream
backgrounds, one teal accent, a bold grotesque display face. Editorial, executive,
evidence-forward — the same design system as daniellezimmerman.co. Source of truth for
colors/fonts: `design-tokens.json` and `assets/css/styles.css`.

## Color Palette

- **Teal Accent**: `#2FD4CB` — primary accent on dark backgrounds (keywords, rules, data)
- **Deep Teal**: `#12867F` — accent on light/cream backgrounds
- **Ink Black**: `#172023` — primary dark background
- **Surface**: `#1E292C` — cards / panels on dark
- **Warm Paper**: `#F2EEE4` — primary light background
- **Paper Card**: `#FBF8F1` — cards / panels on cream
- **Near-White Ink**: `#EEF1F0` — text on dark
- **Warm Near-Black**: `#1A1810` — text on light
- **Hairline (dark)**: `#EEF1F0` at 10% — dividers on dark
- **Hairline (light)**: `#1A1810` at 13% — dividers on cream

## Typography

- **Headers**: Bricolage Grotesque (fallbacks: Archivo, Arial) — extrabold (800), tight tracking (-0.02em)
- **Body Text**: Instrument Sans (fallbacks: Aptos, Calibri, Arial)
- **Labels / Eyebrows / Data**: JetBrains Mono (fallback: Consolas) — UPPERCASE, letter-spaced 0.14em

> Font mode: **Brand** = install the three Google Fonts (free) for a fully on-brand deck.
> **Safe** = use the fallbacks so it renders identically on any machine. Ask for whichever you want per deck.

## Logo

- Dark slides → light logo: `assets/brand/zimmerman-logo-light-transparent.png` (mark: `zimmerman-mark-light-transparent.png`)
- Light/cream slides → dark logo: `assets/brand/zimmerman-logo-dark-transparent.png` (mark: `zimmerman-mark-dark-transparent.png`)
- Place bottom-left or top-left; clear space ≥ the size of the teal dot.

## Slide Styling

- **Backgrounds**: Ink Black for title/section/impact slides; Warm Paper for content-heavy or print-friendly slides. Alternate for rhythm.
- **Headlines**: large Bricolage, tight leading, left-aligned. A mono eyebrow label (uppercase, teal) sits above the headline.
- **One accent per slide**: a single teal keyword, rule, or number — never over-color.
- **Data**: teal bars/lines on ink, deep-teal on cream; hairline gridlines; big numbers set in Bricolage (like the site's proof metrics).
- **Dividers**: thin hairlines, not boxes. Generous margins. Evidence-forward, not decorative.

## Best Used For

Zimmerman Advisory client decks, GTM/customer diagnostics, board & PE readouts, workshop
materials, and any external presentation that should match the website's brand.
