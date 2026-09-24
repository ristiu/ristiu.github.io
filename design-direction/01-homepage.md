# Homepage (`index.html`)

Builds on [00-shared-foundations.md](00-shared-foundations.md). If playground is a desk you explore, the homepage is a desk you're handed — same physical-paper language, but curated and sequential: hero, then the case-study stack, then playground, then footer.

## Structure

One `<main class="page home-grid">` inside `.paper.home-paper` — no separate nav/header. In DOM (= mobile) order:

1. **Hero** — a red sticky-note card (greeting + career highlights + live-status dot), a frosted-glass "stamp" plaque, a black-bordered "open to opportunities" chip styled like a design-tool selection box, and a cursor-avoidant leaf illustration.
2. **Bio paragraph.**
3. **"Study Case" folder stack** — six overlapping `.stack-card` project folders (Traveloka, Warung Pintar, Casio, Context Labs, eFishery, Leadership), built at runtime from `data/projects.js`.
4. **Playground section** — sticky heading bar, then a responsive-swapped trio (mobile snippet / desktop live iframe / mobile static grid — see below).
5. **Footer** — résumé download + LinkedIn, icon-suffixed.

Desktop (`min-width: 1024px`) reflows this into a 2-column grid (hero+bio+footer left, folder stack right, playground/footer-figure full-width below) via named grid-template-areas — the DOM order above stays the linear/mobile reading order; desktop is a placement change, not a content change.

## The folder stack — the page's signature mechanic

Each case study is a folder-tab card, absolutely overlapped (negative `margin-top`, ~-168px desktop / -130px mobile — the mobile value is hand-tuned in code comments against exact px clearances, not a round number) with a slight per-card rotation for a fanned, physical stack. Six colors, one per card, driving a `--folder-color` custom property:

```
Traveloka       #8CA0B3   muted blue-grey
Warung Pintar   #EDE4A0   pale yellow
Casio           #D9D9D9   light grey
Context Labs    #FF5E32   the site accent, reused
eFishery        #C2CCBE   sage
Leadership      #EEBCAA   pale orange
```

The discipline tag chip (`.stack-card-tag`) is deliberately a **bordered, transparent chip, never filled** — quoting the code directly: *"the folders come in six colours and turn into their own `--folder-color` on hover, and a filled chip would need a colour that works on all of them. A border in the ink does."* This is the clearest single design rule on the page: color belongs to the folder, not to the UI chrome sitting on top of it.

**Hover** (desktop): the card lifts (`translateY(-32px)`), un-rotates flat, fills with its folder color, and a paper-grain texture (SVG turbulence, `mix-blend-mode: overlay`) fades in — bouncy overshoot easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`, 0.4s). **Tap** (touch) mirrors the same visual state faster (0.18–0.22s), distinguishing a real tap from a scroll by a small movement threshold. Once a folder has been opened, `.is-visited` (tracked in `sessionStorage`, cleared on hard reload) keeps its color permanently for the rest of the session — a folder you've been in doesn't go back to looking unopened.

**Click bursts**: before navigating into a case study, three different cards fire three different particle micro-interactions — most cards fan the project's own tags out as small pill chips; the Leadership card bursts colored sticky-note icons + confetti; Context Labs bursts its own letters apart. All three persist scroll position first, so returning via back-navigation restores the page and replays a small bounce on the card you came from. This is a deliberate "this folder is not disposable — you're going somewhere and can come back" affordance, distinct enough per-card that no two folders open identically.

Desktop-only entrance: the whole stack starts collapsed onto the front card and un-stacks outward in sequence, a beat after the hero note finishes dropping in — choreographed, not simultaneous.

## Playground: three treatments, one destination

Rather than linking to `playground.html` once, the homepage embeds it three redundant ways, swapped by breakpoint:

- **Mobile (≤1023px)**: `.playground-snippet`, a small pale frame with three individually-rotated loose images/video (a book, a cookie video, a transparent-PNG sticker via `drop-shadow`, never `box-shadow`) — a physical "corkboard clipping" preview, not a live canvas.
- **Mobile fallback grid**: `.playground-grid`, a static list of `.playground-grid-item` cards (image/video + caption + tag) — a real, crawlable fallback since a phone doesn't get the live embed at all.
- **Desktop (≥1024px)**: `.playground-embed`, a full-bleed `<iframe>` of the actual `playground.html` canvas, breaking out of the centered paper column (`width: 100vw`) with a top mask-fade and scroll-containment so trackpad panning inside it never triggers the browser's own back/forward swipe. Zoom is locked to 1x inside this embed (see [02-playground.md](02-playground.md)) — you can pan the real canvas from the homepage, but not zoom past native size.

## Motifs specific to this page

- **Sticky-note hero**: a clipped paper corner + separate curl SVG + turbulence-grain texture, built to read as "paper under a light, not a flat fill" (direct code comment). Same grain technique is reused on the folder cards for visual consistency across the site's two "paper" moments.
- **Frosted-glass stamp plaque**: `backdrop-filter: blur(16px) saturate(130%)` plus four corner "bolt" gradients, explicitly meant to read as bolted through glass.
- **"Selection tool" chip**: the "open to opportunities" callout is styled like a design-tool marquee selection (corner handles), a small in-joke appropriate to a design portfolio.
- **Hello color-wave**: hovering the word "Hello" staggers each letter through the accent color and back, 60ms apart per letter.
- **Leaf cursor-avoidance**: the hero illustration physically flees the cursor within a 200px radius, eased rather than snapping.
- **Hover-preview thumbnails**: any `.preview-trigger` link (footer items, inline "playground" mention) shows a small floating image near the cursor on desktop — a preview before you commit to the click.
- **Whole-page view-transitions**: navigating between pages cross-fades (0.3–0.45s) in browsers that support the View Transitions API, with a manual opacity-fade JS fallback elsewhere. Back-navigation is detected before first paint specifically so entrance animations never replay on a return visit.

## Explicit rules worth preserving verbatim

- Folder tag color: *"the folders come in six colours... a filled chip would need a colour that works on all of them. A border in the ink does."*
- Desktop card shadow: *"No hard vector outlines — soft ambient shadow instead, so the cards read as stacked paper rather than bordered boxes."*
- Animation ownership: *"the sticker-drop animation already owns the transform property for its 1.3s duration... a transform-based shift here would only apply the instant the animation ends, snapping 50px sideways"* — hence the hero shifts via `margin`, not `transform`, on desktop.
- Iframe fade: *"Native mask fades cards from inside the canvas's own top edge — replaces the old `::after` overlay div, which... could read as a hard white rectangle artifact."*

## Known gaps (documented, not fixed here)

- `#terminal-cursor` (the custom cursor element) has no corresponding visual CSS rule in `style.css` on this page — `cursor.js` positions it and toggles state classes, but nothing currently renders it. Flagging for awareness, not touching per the do-not-touch rule on `cursor.js`.
- The accordion click-handler JS (`.js-tree-root` etc.) runs on this page but the homepage markup contains none of the elements it targets — dead code here, live on `project.html`.
