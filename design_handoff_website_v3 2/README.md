# Handoff: Danielle Zimmerman — Website v3 ("Deep Ink" redesign)

## Overview
A 5-page marketing site for **Danielle Zimmerman**, a Fractional Growth Executive for B2B SaaS. This handoff redesigns the existing v2 site into a new visual direction ("Deep Ink"): the same copy, layout logic, and type system as v2, but on a deep teal-slate background instead of pure black, with a new signature hero graphic ("chaos → clarity") replacing the old teal "signal" graphic.

Pages: **Home**, **How I Work**, **Results**, **About**, **Contact**.

## About the Design Files
The files in `design-references/` are **design references created in HTML** (Design-Component prototypes). They demonstrate the intended look, type, spacing, color, and the hero animation — they are **not production code to lift directly**. They rely on a small prototyping runtime (`support.js`) that you should **not** carry into production.

Your task: **recreate these designs in the target codebase's real environment** using its established patterns and libraries. If no codebase exists yet, a good default is **Next.js (React) + plain CSS / CSS Modules or Tailwind**; the site is content-driven and static, so any modern framework or even a static-site generator is appropriate. Rebuild the components natively — do not embed the prototype HTML.

To view a reference: open any `.dc.html` in `design-references/` directly in a browser (they self-render). `Home.dc.html` is the fully built home page and the canonical template. `Hero Options.dc.html` shows the three background directions that were explored (the client chose option **1C, "Deep ink"** — that is what `Home.dc.html` uses and what this spec documents).

## Fidelity
**High-fidelity.** Exact colors, typography, spacing, and the hero animation are specified below. Recreate the UI pixel-accurately using the codebase's libraries. Copy is final (see per-page sections).

---

## Design Tokens

### Color
| Token | Value | Use |
|---|---|---|
| `--bg` | `#172023` | Page background (deep teal-slate) |
| `--surface` | `#1c2629` | Alternating section bands, elevated sections |
| `--card` | `#1e292c` | Cards (engagements) |
| `--card-alt` | `#172023` | Cards sitting on a `--surface` band (results) |
| `--ink` | `#eef1f0` | Primary text |
| `--ink-72` | `rgba(238,241,240,0.72)` | Body text (primary paragraphs) |
| `--ink-62` | `rgba(238,241,240,0.62)` | Secondary / muted body |
| `--ink-55` | `rgba(238,241,240,0.55)` | Tertiary (footer, captions) |
| `--ink-50` | `rgba(238,241,240,0.5)` | Faint labels |
| `--hairline` | `rgba(238,241,240,0.1)` | Dividers, borders, band edges |
| `--accent` | `oklch(0.8 0.12 190)` ≈ `#2fd4cb` | Teal — eyebrows, links, buttons, stats, list markers |
| `--accent-hover` | `oklch(0.88 0.11 190)` | Link/hover teal |

**Light bands** (the site alternates dark and light sections — see Section rhythm):
| Token | Value | Use |
|---|---|---|
| `--bg-light` | `#f2eee4` | Warm-paper background for light sections |
| `--card-light` | `#fbf8f1` | Cards / highlighted panels on a light band |
| `--ink-dark` | `#1a1810` | Primary text on light bands |
| `--ink-dark-74` | `rgba(26,24,16,0.74)` | Body text on light |
| `--ink-dark-60` | `rgba(26,24,16,0.6)` | Secondary text on light |
| `--ink-dark-50` | `rgba(26,24,16,0.5)` | Faint labels on light |
| `--hairline-dark` | `rgba(26,24,16,0.13)` | Dividers / borders on light |
| `--accent-deep` | `oklch(0.5 0.13 195)` | Teal on light bands (eyebrows, markers, step/quote borders, links, stat/result text) — deeper for contrast against paper |

> The accent is defined in **oklch** so it can be re-hued cleanly. Keep chroma/lightness; only hue (190) would change for a variant. A near-equivalent hex is `#2fd4cb` if oklch is unavailable.
> On **light bands** the teal shifts to `--accent-deep` (`oklch(0.5 0.13 195)`) for legible contrast against the warm paper; the bright `--accent` is only used on dark bands. Note the default link color set in CSS is the bright dark-band teal — inside light sections, links, and any teal text must be overridden inline to `--accent-deep`.

### Typography
Three Google Fonts:
- **Bricolage Grotesque** — display / headlines. Weights 700, 800. `letter-spacing: -0.02em` to `-0.025em`, tight `line-height` (1.0–1.15).
- **Instrument Sans** — body, UI, buttons. Weights 400, 500, 600.
- **JetBrains Mono** — eyebrows, labels, meta, stat labels, footer. Weights 400, 500 (+ italic 500 for the graphic label). Almost always **UPPERCASE** with wide `letter-spacing` (0.03em–0.18em).

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:ital,wght@0,400;0,500;1,500&display=swap
```

### Type scale
| Role | Font | Size | Weight | Line-height | Letter-spacing | Notes |
|---|---|---|---|---|---|---|
| Hero H1 | Bricolage | 68px | 800 | 1.0 | -0.025em | `max-width: 15ch`, `text-wrap: balance` |
| Section H2 | Bricolage | 40px | 800 | 1.06 | -0.02em | |
| Closing CTA H2 | Bricolage | 46px | 800 | 1.08 | -0.02em | centered, `max-width: 20ch` |
| Card H3 | Bricolage | 22–23px | 700 | 1.1–1.15 | -0.015em | |
| Statement / blockquote | Bricolage | 22–28px | 700 | 1.25–1.3 | -0.015em | left border 2px accent, 24–28px padding-left |
| Subhead (hero) | Instrument | 21px | 400 | 1.5 | — | `max-width: 62ch` |
| Body | Instrument | 17px | 400 | 1.6 | — | color `--ink-72` (primary) or `--ink-62` (secondary) |
| Card body | Instrument | 14.5px | 400 | 1.55 | — | `--ink-66` = `rgba(238,241,240,0.66)` |
| Button label | Instrument | 15.5–16px | 600 | — | — | |
| Eyebrow | JetBrains Mono | 12–12.5px | 400 | — | 0.16–0.18em | UPPERCASE, `--accent` |
| Meta / small label | JetBrains Mono | 10–11.5px | 400/500 | — | 0.03–0.08em | UPPERCASE |
| Stat number | Bricolage | 42px | 700 | 1.0 | -0.02em | `--accent` |
| Stat label | JetBrains Mono | 11px | 400 | 1.35 | 0.03em | `--ink-62` |

### Spacing & layout
- **Content container**: `max-width: 1320px`, centered (`margin: 0 auto`).
- **Horizontal padding**: 72px on sections (64px on the graphic/proof band).
- **Section vertical padding**: 112px (top & bottom); closing CTA uses 120px; hero uses 96px top.
- **Nav padding**: 24px vertical, 72px horizontal.
- **Footer padding**: 44px vertical, 72px horizontal.
- Spacing rhythm used: 3, 8, 9, 12, 16, 20, 22, 24, 28, 32, 40, 44, 56, 72px.

### Radius, borders, shadow
- **Radius**: 4px (buttons, chips, mono CTA), 5px (large buttons), 8px (cards, graphic band, elevated sections).
- **Borders / dividers**: 1px solid `--hairline`. Step cards & blockquotes use a **2px solid `--accent`** accent edge.
- **Elevated shadow** (only where a component floats, e.g. option cards in the prototype): `0 30px 80px -30px rgba(0,0,0,0.35)`. The production page itself uses band color changes, not shadows, to separate sections.

### Section rhythm
The site **alternates dark and light bands** (echoing the client's v2 PDF), which is the defining rhythm of the design. Dark bands use `--bg` (`#172023`); light bands use `--bg-light` (`#f2eee4`, warm paper) with dark ink and the deeper `--accent-deep` teal. Each band is separated from the next by a 1px hairline in the appropriate tone (`--hairline` on dark edges, `--hairline-dark` on light edges) — the color change itself carries the seam.

**Home** order (D = dark, L = light): Hero + graphic + proof (D) → Who I work with (D) → **The pattern (L)** → Point of view (D) → **The method (L)** → Engagements (D) → **Selected outcomes (L)** → Why Danielle (D) → Closing CTA (D) → Footer (D).

**How I Work** order: Hero (D) → **Opening (L)** → Four moves / steps (D) → **AI (L)** → The diagnostic (D) → Closing CTA (D) → Footer (D).

Rule of thumb for the remaining pages: keep the hero and closing CTA dark; alternate interior content sections, putting the more "reference / list" sections on light paper and the narrative/statement sections on dark. Cards on a light band use `--card-light`; cards on a dark band use `--card` / `--card-alt`.

---

## Components

### TopNav (sticky)
- Sticky, `top: 0`, `z-index: 10`. Background `rgba(23,32,35,0.82)` + `backdrop-filter: blur(12px)`. Bottom border 1px `--hairline`.
- **Left**: two stacked lines — `DANIELLE ZIMMERMAN` (Bricolage 700, 16px, `letter-spacing: 0.14em`) over `FRACTIONAL GROWTH EXECUTIVE · B2B SAAS` (JetBrains Mono 10px, `letter-spacing: 0.14em`, `--ink-55`).
- **Right**: nav links `How I work` / `Results` / `About` (Instrument 14px, `--ink-62`) + a **ghost button** "Start a conversation".

### Buttons
- **Ghost (primary)**: transparent background, `1px solid --accent`, text `--accent`. **Hover**: background `--accent`, text `--bg`. Radius 5px (hero/CTA) or 4px (nav). This is the primary button style in Deep Ink.
- **Text link (secondary)**: `--ink` text with a 1px `--accent` bottom border, 2px padding-bottom. e.g. "See how I work →".
- **Mono CTA link**: JetBrains Mono 12px, `--accent`, used inside cards ("Discuss a diagnostic →").

### Eyebrow
JetBrains Mono, 12–12.5px, UPPERCASE, `letter-spacing: 0.16–0.18em`, color `--accent`, `margin-bottom: 22–26px`. Sits above every section H2.

### ClarityGraphic (signature hero graphic) — see full spec below.

### ProofBand
4-column CSS grid, bounded top & bottom by `--hairline`, each column separated by a right `--hairline`. Each cell: 32px/40px padding, a large Bricolage stat number in `--accent`, and a JetBrains Mono label below in `--ink-62`. Values: `3× / AI-guided product adoption`, `67% / trial-to-paid conversion lift`, `30% / NRR increase`, `23% YoY / expansion revenue growth`.

### TickList (used in "Who I work with", How I Work step lists)
Vertical flex, **14–16px gap, no dividers**. Each row: a fixed 22×22px circular marker (1.5px `--accent` border, transparent fill) containing a small teal check SVG (`<path d="M2.5 6.2 L5 8.5 L9.5 3.5">`, 1.6px round stroke), then the item text (15–15.5px, `rgba(238,241,240,0.85–0.88)` on dark; use `--ink-dark` tones on light bands). This replaces the older em-dash row (which was overused). Single column when it sits in a narrow content column; a 2-col grid (`gap:14px 40px`) when it has full width.

### NumberedList (used in "The pattern")
Two-column grid. Each row: top border `--hairline`, 20px vertical padding. A `01`–`06` JetBrains Mono index in `--accent`, then the item text (16px, `--ink-82`).

### StepCard (Method, 4-up grid)
Top border **2px solid `--accent`**, 22px padding-top. JetBrains Mono step label (`01 · EXPERIENCE THE JOURNEY`) in `--accent`, then a 15px body paragraph.

### Statement / Blockquote
Bricolage 700, 22–28px, left border 2px `--accent`, 24–28px padding-left. Used for punchy POV lines.

### EngagementCard (3-up grid)
`--card` background, 1px `--hairline` border, radius 8px, 34px/30px padding, flex column. Contents: mono meta label (`--accent`), Bricolage H3 title, body paragraph, a bulleted list (· markers in `--accent`), an italic emphasis line pushed to the bottom (`margin-top: auto`), and a mono CTA link.

### CaseCard (Results, 2-up grid)
`--card-alt` background on the surface band, 1px `--hairline`, radius 8px, 36px/34px padding. Bricolage H3 title, then labeled blocks — mono uppercase label "WHAT THE EVIDENCE SHOWED" / "WHAT CHANGED" (`--ink-50`) each followed by a 14.5px body paragraph — then a row of **result chips** (JetBrains Mono 11.5px, `--accent` text, 1px `rgba(238,241,240,0.14)` border, radius 4px, 6px/10px padding).

### Footer
Flex row, space-between, wraps. Left: `Danielle Zimmerman · dani.zimmerman@gmail.com · LinkedIn` (JetBrains Mono 11.5px, `--ink-55`). Right: `© 2026 Danielle Zimmerman · Fractional Growth Executive for B2B SaaS` (JetBrains Mono 11px, `--ink-40`).

---

## The ClarityGraphic (signature asset) — full spec

**Concept.** A single line drawing that reads left → right as "chaos to clarity." On the left, several tangled scribble threads (the different departments each chasing growth on their own) overlap in a dense knot. The knot loosens rightward, the threads converge, and resolve into **one clean straight line** running to a single point labeled **"One source of truth"** with the sub-caption *"who your customers are · what they need · how to deliver value."* This replaces the old teal "signal" graphic and encodes Danielle's core message.

**Reference file:** `design-references/ClarityGraphic.dc.html`.

**Construction (procedural — reproduce this, don't hand-draw an SVG):**
- SVG `viewBox="-90 0 1270 360"`, `preserveAspectRatio="xMidYMid meet"`, `overflow: visible`, width 100% / height auto. Midline y = 180.
- **Threads**: 3 procedurally-generated open paths. Thread 1 is the primary (`--ink`, stroke-width 1.5); threads 2 & 3 are faint (`--faint` = `rgba(238,241,240,0.24)`, stroke-width 1). All use `stroke-linecap/linejoin: round`, `fill: none`.
- Each thread is sampled over `N = 1100` points, `t = i/N` in [0,1], with a chaos envelope that decays to 0 so the loops tighten on the left and flatten into a lead-in line by t = chaosEnd:

```js
// W = 520 (chaos width), midY = 180
function threadPath(s) { // s = one spec object below
  let d = '';
  for (let i = 0; i <= 1100; i++) {
    const t = i / 1100;
    const env = Math.pow(Math.max(0, (s.chaosEnd - t) / s.chaosEnd), 1.4);
    const x = t * 520 + env * s.A * (Math.sin(t*s.f1 + s.ph)*0.6 + Math.sin(t*s.f2 + s.ph*1.7)*0.45);
    const y = 180 + s.yoff * env + env * s.A * (Math.cos(t*s.f3 + s.ph*0.5)*0.75 + Math.sin(t*s.f4 + s.ph)*0.5);
    d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
  }
  return d.trim();
}
const specs = [
  { A:118, f1:71, f2:129, f3:97,  f4:151, ph:0.0, chaosEnd:0.50, yoff:0 },  // primary
  { A:96,  f1:83, f2:112, f3:132, f4:167, ph:1.9, chaosEnd:0.46, yoff:-7 }, // faint
  { A:104, f1:64, f2:143, f3:88,  f4:175, ph:3.4, chaosEnd:0.52, yoff:9 },  // faint
];
```
- **Resolved line**: a separate straight path `M520 180 L858 180`, stroke `--accent`, width 2.2.
- **Endpoint**: a filled `--accent` circle at (862, 180) r=5, plus a concentric hollow `--accent` ring that pulses.
- **Label** (HTML overlay, absolutely positioned at ~75.5% width, vertically centered): line 1 "One source of truth" (JetBrains Mono **italic** 500, 15px, `--ink`); line 2 the sub-caption (JetBrains Mono 10.5px, `--ink-55`).
- To imply a **single** unified path instead of multiple department threads, hide threads 2 & 3 (a `converge` vs `single` toggle exists in the prototype). Default is `converge` (multi-thread).

**Animation (draw-on, plays on load; "Replay" button restarts it):**
- Threads: `stroke-dasharray: 9000; stroke-dashoffset: 9000` animating offset → 0. Faint threads over **3s** (delay 0.1s), primary over **3.1s** (delay 0.15s), easing `cubic-bezier(.2,.7,.25,1)`. Draws left (dense knot) → right.
- Resolved line: `stroke-dasharray: 520` offset → 0 over **0.85s**, delay **2.45s**, easing `cubic-bezier(.4,0,.2,1)`.
- Endpoint dot: scale/opacity pop (`cubic-bezier(.34,1.4,.5,1)`) over 0.5s, delay 3.15s. Ring: a slower 1.6s ease-out expand, delay 3.2s.
- Label: fade + 8px slide-in over 0.7s, delay 3.35s.
- **Replay**: re-mount / re-key the SVG to restart the CSS animations.

**Implementation note for production:** generate the three `d` strings once (they're deterministic), inline them into an SVG component, and drive the draw-on with CSS keyframes or a small IntersectionObserver so it plays when scrolled into view. No runtime randomness — the shapes are fixed by the specs above.

---

## Screens / Views

All pages share the sticky **TopNav** and the **Footer**. All follow the section rhythm and components above. Copy below is final. (Full copy is also in `WEBSITE-COPY.md`.)

### 1. Home (`Home.dc.html` — fully built reference)
Purpose: primary landing / positioning page.
Sections, in order:
1. **Hero** — eyebrow `Fractional Growth Executive · B2B SaaS`; H1 "Growth stalled. The real problem crosses departments."; subhead "I help B2B SaaS leadership teams figure out where growth is really breaking down—and build the fix across Product, GTM, Customer Success, data, and AI."; secondary line "Your customers experience one company. Your organization manages departments. Growth stalls in the gaps between them."; buttons "Tell me where growth stalled" (ghost) + "See how I work →" (text link).
2. **ClarityGraphic** band.
3. **ProofBand** (4 stats above).
4. **Who I work with** — 2-col: left = H2 "Leadership teams with plenty of data—and no shared answer." + 2 paragraphs; right = 7-item TickList. (Items in `WEBSITE-COPY.md`.)
5. **The pattern** (surface band) — H2 "Everyone has a theory. Each theory lives in someone else's department." + 6-item NumberedList + closing line "These are not six separate problems…".
6. **The point of view** — H2 "Who is buying fills the funnel. Who is succeeding determines whether growth holds." + 2 paragraphs + Statement "Otherwise, new logos simply backfill churn—and the topline calls it growth."
7. **The method** (surface band) — eyebrow "The method · The Growth Operating System"; H2 "A practical operating model for finding—and fixing—the constraints behind growth."; intro paragraph; 4 StepCards; "The goal is capability, not dependency. Explore how I work →".
8. **Engagements** — H2 "Start with the constraint. Build only what the evidence supports."; 3 EngagementCards (Diagnostic / Fractional Leadership / Advisory); note "Most engagements begin with the diagnostic."
9. **Selected outcomes** (surface band) — H2 "Evidence, not theater."; 4 CaseCards; link "See the work behind the numbers →".
10. **Why Danielle** — 2-col: H2 "I have spent my career following the customer." + 2 paragraphs + Statement + "More about Danielle →".
11. **Closing CTA** (surface band, centered) — H2 "Tell me where growth stalled. I'll tell you where I would look first."; support line; "Start a conversation" ghost button.
12. **Footer**.

### 2. How I Work (`how-i-work`)
Purpose: explain the Growth Operating System method in depth.
- **Hero**: eyebrow "The Growth Operating System"; H1 "Find the constraint. Align the company. Build the fix."; subhead "The work begins with the customer journey, connects evidence across departments, and ends with accountable execution."
- **Opening**: H2 "Most growth problems do not belong to one function." + 4 paragraphs.
- **Step 01 — Experience the customer journey**: H2 "Leadership teams often know the journey through dashboards—not direct experience." + a 7-item question list + closing line. Use the StepCard/Step-section treatment (accent top-border section header with `01 · EXPERIENCE THE CUSTOMER JOURNEY`).
- **Step 02 — Connect the evidence**: H2 "I synthesize the evidence no single department owns." + 8-item evidence list + "three questions" sub-list.
- **Step 03 — Map the growth constraint**: H2 "Specific enough to act on. Broad enough to explain the pattern." + example-constraints list.
- **Step 04 — Build and transfer**: H2 "The diagnosis becomes a sequenced operating plan." + 3 paragraphs.
- **AI**: eyebrow "AI"; H2 "AI is a leverage decision, not a feature checklist." + wrong-question/useful-question framing + 4 StepCards (Accelerate humans / Guide customers / Automate operations / Create new value) + evaluation-criteria line.
- **The diagnostic**: H2 "What a diagnostic looks like." + 3 phase columns (Before kickoff / Week 1 / Week 2) each a checklist + Statement "You do not need another list of ideas. You need to know which constraint matters most."
- **CTA** "Discuss a diagnostic." + Footer.

### 3. Results (`results`)
Purpose: detailed case studies.
- **Hero**: eyebrow "Selected work"; H1 "The work behind the numbers."; subhead "Twenty-plus years across Product, Customer Success, Customer Experience, and Growth in B2B SaaS."
- **5 detailed CaseCards** (expanded versions of the home cases), each with Situation / What the evidence showed / What changed / Results labels and result chips. (Case 5 = "From rising support cost to AI-first service": 95% deflection, 90% CSAT, lower cost-to-serve.)
- **Closing**: H2 "The numbers matter. The operating capability behind them matters more." + button "Talk through your growth constraint" + Footer.

### 4. About (`about`)
Purpose: narrative bio + principles.
- **Hero**: eyebrow "About Danielle"; H1 "I have spent my career following the customer." + intro paragraphs + Statement "What is preventing customers from succeeding, and how should the business organize itself to solve that?"
- **Narrative**: multi-paragraph story (Product → Customer Success → Growth) with two embedded Statements.
- **Experience**: H2 "Across QuickBase, Wistia, Jungle Scout, and Knack, I have:" + 11-item accomplishment list.
- **What I believe**: H2 "A few things I hold to." + 9-item beliefs list.
- **What I will not do**: 6-item list.
- **Closing**: Statement + CTA "Start a conversation." + Footer.

### 5. Contact (`contact`)
Purpose: start a conversation.
- **Hero**: eyebrow "Start a conversation"; H1 "Tell me where growth stalled." + 2 paragraphs.
- **Useful context to bring**: H2 "A few things that make the first conversation productive." + 5-item list.
- **Contact details**: eyebrow "Contact"; H2 "Reach out directly."; Email `dani.zimmerman@gmail.com`, LinkedIn `linkedin.com/in/dani-zimmerman`, Website `daniellezimmerman.com`; button "Schedule a conversation".
- **Footer**.

---

## Interactions & Behavior
- **Nav**: sticky with translucent blurred background. Links route to the 5 pages. Ghost button → Contact.
- **Button hover**: ghost buttons fill with `--accent` and switch text to `--bg`; ~150ms ease is fine. Text links can brighten to `--accent-hover`.
- **Links**: default color `--accent`, hover `--accent-hover`.
- **ClarityGraphic**: draws on load (see animation spec). Add a "↻ Replay" affordance (JetBrains Mono 10.5px, `--ink-55`) that restarts it. Consider triggering the draw on scroll-into-view for pages where the graphic is below the fold. Respect `prefers-reduced-motion`: render the final drawn state with no animation.
- **Responsive** (prototype is desktop-first at 1320px): collapse all 2-col and multi-col grids to single column under ~900px; reduce hero H1 to a `clamp(40px, 8vw, 68px)`; stack the nav into a menu under ~720px; the ClarityGraphic scales with its container (keep the viewBox, let width be 100%).

## State Management
Minimal — this is a static content site. Only local UI state:
- ClarityGraphic: a `replayKey` (or an `isPlaying` flag) to restart the animation; optionally an IntersectionObserver "hasPlayed" flag.
- Nav: mobile menu open/closed.
No data fetching. Contact "Schedule a conversation" links to email or a scheduling URL (client to provide).

## Assets
- **Fonts**: Google Fonts (Bricolage Grotesque, Instrument Sans, JetBrains Mono) — see import URL above. Self-host for production if preferred.
- **ClarityGraphic**: generated in code (no image file). Spec + algorithm above.
- **No photography or logos** are used in the design. Client logos (QuickBase, Wistia, Jungle Scout, Knack) are referenced in copy as text only.
- No icon set is required; the only glyphs are typographic (—, ·, →, ↻).

## Screenshots (in `screenshots/`)
Rendered captures of the two fully-built reference pages, top-to-bottom:
- `01–08-home.png` — the Home page (frame 01 shows the ClarityGraphic fully drawn).
- `01–06-how-i-work.png` — the How I Work page.
Use these to confirm intended color, spacing, and section rhythm without opening the prototypes.

## Files (in `design-references/`)
- `Home.dc.html` — **the canonical, fully-built home page** in the Deep Ink system. Primary reference.
- `How I Work.dc.html` — **the second fully-built page.** Shows how the system extends to a deeper content page: the sticky-heading opening, the four-move step layout (sticky label + heading left, evidence lists right), the AI "wrong question / useful question" card pair, and the 3-phase diagnostic cards. Use alongside Home as the pattern library for the remaining three pages.
- `ClarityGraphic.dc.html` — the signature hero graphic component (procedural paths + animation + Replay).
- `Hero Options.dc.html` — the three explored background directions (1A black / 1B warm light / 1C deep ink). Client chose **1C**. Useful to see the rejected alternatives.
- `HeroOption.dc.html` — the themeable hero used by the options file (shows how the same hero maps across palettes).
- `support.js` — prototyping runtime for the `.dc.html` files. **Do not use in production**; it only exists so the references render in a browser.

> The `.dc.html` files use inline styles and a prototype runtime. Reimplement as real components with your own styling layer; use `WEBSITE-COPY.md` for exact copy.
