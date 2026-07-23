# START HERE — building this site with Claude Code

This folder is a **design handoff** for the Danielle Zimmerman website (v3, "Deep Ink" — alternating dark/light). It contains everything needed to build the real site.

## What's in here
- `README.md` — the full, self-sufficient design spec: tokens, components, the signature graphic's algorithm, and every page's layout. **Read this first.**
- `WEBSITE-COPY.md` — final copy for all five pages.
- `design-references/` — HTML prototypes (`Home.dc.html` and `How I Work.dc.html` are fully built). **Visual references only — do not ship these or `support.js`.**
- `screenshots/` — rendered captures of the two built pages, top to bottom.

## How to use it
1. Put this `design_handoff_website_v3/` folder at the root of your project (new empty folder, or an existing repo).
2. Open Claude Code in that folder.
3. Paste the starter prompt below.

## Starter prompt (paste into Claude Code)

> Read `design_handoff_website_v3/README.md` and `design_handoff_website_v3/WEBSITE-COPY.md` in full, and look at the images in `design_handoff_website_v3/screenshots/`.
>
> Recreate this design as a production website using [**pick one: Next.js (React) / Astro / your existing stack**]. The HTML files in `design-references/` and `support.js` are **prototype references only** — rebuild the UI as real, reusable components in the chosen framework; do not embed the prototype HTML or ship `support.js`.
>
> Build in this order and pause after each for me to review:
> 1. Shared layout: the sticky TopNav, the Footer, the color/type tokens, and the ClarityGraphic component (follow the procedural algorithm + animation timing in the README exactly; respect `prefers-reduced-motion`).
> 2. **Home** — match `design-references/Home.dc.html` and the `01–08-home.png` screenshots pixel-closely, including the dark↔light section rhythm.
> 3. **How I Work** — match `How I Work.dc.html` and `01–06-how-i-work.png`.
> 4. **Results**, **About**, **Contact** — build from the layout specs in the README and the copy in `WEBSITE-COPY.md`, reusing the components from steps 1–3.
>
> Use the three Google Fonts named in the README. Keep the accent teal in `oklch` as specified (deeper `--accent-deep` on light bands). Make it responsive per the README's responsive notes.

## Before you ship — things Claude Code needs from you
- **Real URLs/routes** for the nav links and every CTA button.
- A **scheduling destination** for Contact's "Schedule a conversation" (Calendly, email `mailto:`, etc.).
- Confirm the **client logos** (QuickBase, Wistia, Jungle Scout, Knack) stay as text, or supply logo assets if you want marks.
- Decide whether the **closing CTA** stays dark (current design) or flips to light.
