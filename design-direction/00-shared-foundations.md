# Shared foundations

Tokens and conventions that hold across `index.html`, `playground.html`, and `project.html`. Page-specific docs assume this file and don't repeat it.

## Typography

Four typefaces, each with a fixed job. Nothing is decorative-only — the choice of face is itself a signal of what kind of content it's wrapping.

- **JetBrains Mono** (`--mono`) — the default voice everywhere. Body copy, captions, tags, nav, UI chrome. Loaded weights: 400/700 regular, 400 italic. This is a portfolio that talks like a builder, not a magazine, so the base face is a code font.
- **Newsreader** (`--serif` on playground; used directly by class elsewhere) — the editorial voice. Reserved for hooks, pull-quotes, headings that need to read as "written," not "printed." Falls back to Georgia.
- **Square Peg** (cursive) — hand-written annotation marks: doodle callouts, tilted labels pointing at something. Always small, always tilted a couple of degrees, always muted (`rgba(33,33,33,0.6)` or `--ink`), never a full sentence. It's a margin note, not a heading.
- **Roboto** / **Nunito Sans** — scoped exclusively to specific phone-mockup UI recreations inside case studies (project.html lines ~187, ~497). They exist to make a screenshotted app UI read as that app's own type, not the site's. Never used for the site's own voice.

`html { font-size: 14px }` is the root; everything scales off that rem base.

## Color

Three inks, one accent, no palette beyond that:

```
--ink:        #212121   body text, borders, default UI
--ink-muted:  #666666   secondary text, de-emphasized captions
--accent:     #FF5E32   the one color the whole site is allowed to reach for
--cream:      #ffffff   ground
```

`--accent` (a warm orange-red) marks: the thing you're meant to notice. Hero metrics, live-status dots, hover states on links, tags. It is not used for large fills — it's a highlight color, not a brand block. When a case study needs its own identity color (leadership's `articleBg: #4A5AE8`, a folder's `folderColor`), that's a per-entry override, not a second site accent — the shared palette stays fixed at one.

## The paper metaphor

`.paper` (max-width 600px, centered, white) is the literal page — most content lives inside it, reinforcing "this is a printed/physical thing rendered on screen," which is why the mono font, the tilt motifs, and the hand-written doodles all cohere: everything is styled like it was laid out on a desk, not a grid system.

## Motion vocabulary

- **Tilt as "placed by hand."** Small rotation values (1–3deg, occasionally more) on cards, photos, doodle labels. Never applied uniformly — each element gets its own authored angle so nothing reads as a repeated pattern.
- **drop-shadow, not box-shadow, on anything with real transparency.** Repeated rule across the codebase: box-shadow always follows an element's rectangular box; drop-shadow follows the actual rendered alpha silhouette. Any transparent PNG (stickers, cutouts) must use `filter: drop-shadow(...)`, stacked as two passes (a tight near shadow + a soft far one) — never box-shadow, which would draw a rectangle of shadow around the transparent padding.
- **Motion is functional, not ambient.** Transitions exist to make a state change legible (something opening, spreading, revealing) with `cubic-bezier(0.22, 1, 0.36, 1)` as the house easing — a quick-start, gentle-settle curve used for the playground's popup spread and elsewhere. Nothing loops or plays for decoration alone except explicitly "alive" indicators (the live-status dot).

## Breakpoint

`900px` is the one breakpoint that matters sitewide: below it, there is no hover, no popups, and every "tap to expand" interaction degrades to "already fully shown, scroll to see it." Above it, `html { zoom: 1.2 }` kicks in — a whole-layout scale-up (same mechanism as the browser's own Cmd+ zoom) rather than a separate desktop stylesheet, so one set of measurements produces both densities.

## Cross-cutting mechanics

- **Custom cursor** (`cursor.js`) loads on all three pages — explicitly called out in CLAUDE.md as do-not-touch. It's part of the site's identity, not a per-page decoration.
- **Google Fonts** are preconnected and loaded per-page (each page only pulls the families it actually uses), not from one shared `<head>` partial — there's no templating layer, so this is duplicated by hand across the three HTML files.
- **No dark mode, no theming system.** One light palette, everywhere.

## What ties it together

Handwriting (doodles) + typewriter (mono) + editorial serif (Newsreader), tilted like paper on a desk, with exactly one accent color allowed to shout. Every page-specific pattern documented in the other files in this folder is a variation on that same triad — never a departure from it.
