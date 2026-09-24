# Case-study template (`project.html`, standard type)

Builds on [00-shared-foundations.md](00-shared-foundations.md). This is the template for the four numeric case studies (eFishery, Traveloka, Warung Pintar, Casio) that follow CLAUDE.md's 7-field framework. `context-labs` and `leadership` route through separate renderers — see [04-leadership-article.md](04-leadership-article.md).

## Section order (as actually rendered)

The 7 content fields don't map 1:1 to visual sections — two pairs get merged:

1. **Hero** — title + company, full-bleed image/video with floating tag chips scattered over it (per-chip tilt, staggered entrance).
2. **Hook** — a bare blockquote, mono font, accent-colored left border. No heading label — the accent border is the only structural marker.
3. **Impact** → heading "Outcome" — a plain `<ol>`. No card grid, no counters, no accent on the numbers. The metric strings do their own work through copy (per CLAUDE.md's "metric + context" rule); the template adds no visual emphasis on top.
4. *(optional)* a per-project custom widget — Traveloka's before/after phone mock, Warung Pintar's picker mock — sits here, before Situation.
5. **Situation + Insight merged** → heading "Situation". Situation paragraph, then any pinned photo, then Insight paragraphs, then a case-specific chart/diagram if this project has one, then remaining section photos.
6. **Direction + Contribution merged** → heading "Approach & Contribution". Either a strategy-card-image layout (eFishery) or plain paragraph flow with photos/widgets interleaved at specific points, ending with the Contribution paragraph. Casio swaps this section for a bespoke trend-timeline instead.
7. **WhatShifted** → heading "My Reflection". Text + optional single screenshot, plus any remaining section photos; Warung Pintar adds a V1/V2 comparison table here.

Sections 5–7 sit inside a **read-gate**: capped to 320px with a bottom fade until the reader clicks "Read case study," which lifts the cap, hides the button, and smooth-scrolls into the reveal. Outcome (and the hero/hook above it) is never gated — the metrics are always visible; only the narrative depth is opt-in. This is the template's one real progressive-disclosure device, and it's deliberate: nothing else on the page (no progress bar, no next/prev nav) tracks reading progress.

## Typography

Split cleanly by role, not by section:

- **Mono (JetBrains Mono)** — hero keyword/company line, hook blockquote, every `.section-heading` label, sidenav, the "Read case study" button, chart/table labels, tag chips. This is the site's structural voice.
- **Serif (Newsreader)** — the hero H1 (24px mobile → 42px desktop) and every actual paragraph/list inside a content section (16px/24px). This is the reading voice — the moment you're in the narrative, the page switches out of "code font" into something built for longer prose.

That mono-for-structure / serif-for-narrative split is the template's core typographic idea, and it's worth keeping intentional: a new section type should ask which of the two roles it's playing before picking a font.

## Color

Flat — one rule, no per-section coding: `--ink` for all body/heading text, `--accent` used exactly once structurally (the hook's left border) plus on the active sidenav link and the "Read case study" hover state. Impact bullets get no accent treatment despite being the page's headline numbers — the emphasis is entirely typographic (the metric text itself), not chromatic. Case-specific widgets (the Traveloka/Warung Pintar phone mocks, the review mind-map) bring their own scoped palettes rather than reusing site tokens, because they're recreating another product's UI, not the site's — consistent with how Roboto/Nunito Sans are scoped the same way in [00](00-shared-foundations.md).

## Data visualization

There's no single "chart component" — each case study that needs one builds a bespoke SVG, hand-fit to its own data:

- **Warung Pintar**: a real scatter-plot pair (picking duration vs. SKU count/lines) with a drawn-in trend line and confidence band, dots that fade/scale/twinkle on scroll-into-view; plus a step timeline and a V1/V2 table.
- **Traveloka**: a radial "mind map" of negative review themes, built from a JS node/link list, connectors drawn via `stroke-dashoffset`, one branch pulled into the accent color while the rest stay muted slate — the accent marks the one insight that mattered, not a decorative default.
- **Casio**: a floating three-circle past/present/future diagram plus a live embedded Google Trends iframe.
- **eFishery**: a static pre-made screenshot, no generated chart — not every case study needs one.

Common thread: charts animate in on scroll (IntersectionObserver-triggered), respect `prefers-reduced-motion`, and use the accent color sparingly — to point at the one thing that matters, never to color a whole chart.

Regular photography goes through `.section-photo` (figure + optional caption, fade/translate-in with a 60ms stagger between images); a `--contained` variant deliberately caps width to 50% so a low-res screenshot is never stretched past its native resolution — a documented rule, not an accident.

## Navigation

Hash-routed (`project.html#id`), read from `data/projects.js`, with a skeleton shown while JS builds the real DOM and a `<noscript>` crawler-readable fallback. Entry/exit both cross-fade via the browser's native View Transitions API where supported (mirroring the homepage's same navigation treatment — see [01-homepage.md](01-homepage.md)) — this is a deliberate cross-page consistency, not a per-page choice.

A left sidebar (desktop only, ≥900px) scrollspies the four section headings (Outcome / Situation / Approach & Contribution / My Reflection) and is hand-rolled in JS rather than `position: sticky`, because the site's `zoom: 1.2` desktop scaling breaks native sticky in most browsers — the same zoom-compensation pattern used for the homepage's hover-preview tooltip. There's no next/prev between case studies; the only way out is back to the folder stack.

## Responsive

Below 900px the sidebar disappears entirely and a mobile-only "←" sits in the hero instead. Both `direction-cols` and `shifted-cols` are single-column flex at every width despite their names — text and image stack vertically with a fixed gap regardless of viewport; there is currently no real side-by-side desktop variant for these two sections. Each custom widget (phone mocks, mind-map, venn diagram) carries its own extra breakpoints tuned to its own content, separate from the template's shared 599/900px pair.

## Rules worth preserving verbatim

- Sticky sidebar under zoom: *"position:sticky doesn't reliably stick here because the page uses CSS `zoom` for desktop scaling, which breaks native sticky positioning in most browsers... same fix pattern used for the homepage hover-preview under zoom."*
- Contained image sizing: *"Diagram/screenshot-style images: show at half width so the source resolution is never stretched up past its native size (avoids pixelation)."*
- Mind-map intent: *"The Check-In branch is highlighted in the site accent; every other branch sits lighter. No frame, no interaction."*
- Cross-page transition consistency: *"Mirrors index.html's cross-document view transition so navigating between project.html and index.html... cross-fades smoothly at the browser level instead of a hard cut."*
- Before/after mock caption sizing: *"Each mockup reserves height for only its OWN longest tab (not shared across projects)... so the phone stays put when switching tabs without padding the box more than it needs."*

## Known gaps (documented, not fixed here)

- `direction-cols`/`shifted-cols` are named for a side-by-side layout that isn't currently implemented at any width — both are single-column flex in the live CSS.
- A `.hero-scatter` (4-photo scattered hero) variant and a riso-grain image filter/hook both exist in code but are dead for every current entry — no project currently satisfies the conditions that would render them.
