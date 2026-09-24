# Playground (`playground.html`)

Builds on [00-shared-foundations.md](00-shared-foundations.md). This is the loosest, most experimental page on the site by design — a desk, not a grid.

## Concept

An infinite pannable/zoomable canvas of "cards" scattered like photos and notes left on a desk. Where the homepage and case-study pages are read top-to-bottom, playground is explored — you pan around, zoom in, open things.

## Card types

Three, all sharing the same base `.card` shell:

- **`.card--photo`** — a single image or video.
- **`.card--stack`** — a deck: 2+ photos/videos, one "front" item plus a count badge. Represents a project with multiple supporting shots.
- **`.card--note`** — text only, no media. The card itself is the sheet of paper.

Each card is authored with `data-col` (0–3, which of the four layout columns it sits in) and `data-rot` (its resting tilt in degrees) directly in the markup — placement is hand-picked per card, not algorithmic.

## Layout engine (desktop)

A 4-column packer (`layoutCards()`) positions every card:

- Columns are 400px apart (`COL_GAP`), sized so even the widest authored card (340px) always clears the next column by 60px minimum — cards can never touch horizontally, at any pan or zoom.
- Vertical spacing within a column (`GAP`, 56px) stacks cards top-to-bottom as each one's height is measured.
- Columns alternate a subtle depth offset (`--cardZ`, ±10px) so the canvas reads as having real depth under its perspective transform, checkerboard-style.
- A mousemove parallax (`rotateX`/`rotateY` on `#canvas-root`) adds a subtle tilt-with-the-cursor effect, independent of each card's own resting `data-rot`.

Pan/zoom range is 0.15x–5x standalone. **When embedded on the homepage** (inside the `playground-embed` iframe), zoom is locked to 1x — cards never scale past native resolution, panning stays free. This is a deliberate homepage constraint, not a playground default.

## Mobile: a different mode, not a shrunk desktop

Below 700px width (`isMobile`, a separate check from the 900px popup breakpoint below — see [00](00-shared-foundations.md)), the canvas abandons the pan/zoom metaphor entirely: `#canvas-perspective` flattens to `display: contents`, cards become a native-scrolling flex row, straight (no tilt), fixed 260px width, with a colorful horizontal progress bar tracking scroll position. This isn't a responsive reflow of the desktop layout — it's a second, simpler layout for a context where "explore an infinite desk" doesn't work with a thumb.

## Deck thumbnails: one photo, not a fan

A `.card--stack` on desktop shows only its first (front) image/video — every other item in the deck is `display: none !important` on the thumbnail. A small badge, bottom-right of the media, reads `attr(data-count)` (e.g. "3 photos") in the deck's tally — solid `var(--ink)` background, white text, 2px corner radius (matching `.stack-card-tag`'s chip corner on the homepage, so the two pages share one "tag" language).

On mobile, every item in the deck shows in normal document flow instead (the same selector is forced back to `display: block !important` under the `max-width: 899px` block) — there is no thumbnail/reveal distinction on mobile, only "show everything."

## Captions

`.card-caption` = title (bold) + `.card-tag` (the category chip) + body text. Body text can opt into two states:
- **`.card-body-preview`** — a short truncated string ending "..." plus a "Read more" trigger (styled muted, underlined).
- **`.card-body-full`** — the complete text, hidden by default.

On desktop, a card can show either; when its popup opens, the full text always takes over. On mobile there is no popup to reveal the rest, so `.card-body-preview` is hidden and `.card-body-full` always shows — nothing on a phone should require a tap to read.

## The popup (desktop only)

Gated entirely behind `isDesktopViewport()` (`min-width: 900px`) — below that width there is no lightbox, no tabIndex/keyboard handling for cards, no click listener at all. This is a hard fork, not a graceful degradation: mobile and desktop run genuinely different interaction models on the same markup.

When a card opens, its cloned media + caption fan out into one of four fixed compositions, chosen automatically by photo count/shape:

1. **`is-single`** — one photo. Max-height scales to fill up to ~88vh (no siblings to share room with).
2. **`is-pair`** — exactly two photos, default grid (`"wide wide"` area) when the second photo is a letterbox shape.
3. **`is-pair[data-layout="fan"]`** — exactly two photos where the second needs its own column rather than stacking under the first (`"hero caption" / "hero wide"` grid areas). Authored per-card via `data-layout="fan"` when the reference composition calls for it.
4. **`.card-media--collage`** (3+ photos) — a hand-laid flex-wrap of tiles, the first (hero) tile bigger (`max-width: 54%`, taller height clamp) than the rest (`max-width: 44%` each), each with its own authored tilt and z-index so the deck reads as fanned-out sheets, not a grid.

Every photo, everywhere in the popup, is sized by a **scale-1-with-a-ceiling** rule: `max-height: min(natural-height, generous-vh-ceiling)` — never upscaled past its real resolution, capped so nothing pushes the caption off-screen. The ceiling is tuned per composition (a lone photo gets more headroom than one of three collage tiles sharing a row).

One-off exception: Kemo(n)!'s third sheet is a wide three-column composite image that the standard 44%-wide collage tile would crush unreadably small. It gets a scoped override (`img[src*="playground-kemon-context-2"]`, up to 78% width / 44vh) rather than changing the shared collage rule — a deliberate call to fix one card without resizing every other deck's tiles.

### Open animation: stack, then spread

On open, every piece (each photo + the caption) is momentarily forced to the deck's stacked position (dx/dy/rotation all zeroed, scaled to 0.9) with no transition present, then a layout flush, then a transition class is added and the pieces are released back to their authored fanned positions — staggered 25ms apart per piece. It reads as the deck physically spreading out from a stack, not fading into its final layout. Easing: `cubic-bezier(0.22, 1, 0.36, 1)`, ~0.32s + stagger.

Dragging: once open, every photo and the caption card can be repositioned (`cursor: move`, pointer-driven `--dx`/`--dy`), on top of their authored resting tilt — a "these are physical objects on the desk" affordance, not just a static viewer.

## Video handling

- A deck's **first/hero** video autoplays (`video[autoplay]`) — muted, looped, playsinline.
- A **secondary** video in the same deck stays static on the thumbnail via a `poster` frame (no `autoplay` attribute) but plays once the deck is opened in the popup. The distinction is enforced in JS by scoping bulk `.play()` calls to `video[autoplay]` specifically — a blanket `querySelectorAll('video')` would incorrectly wake every video on canvas load.

## Relationship to the homepage

Playground is embedded on the homepage three separate ways (see [01-homepage.md](01-homepage.md) for the homepage-side treatment): a live `<iframe>` of the full canvas (zoom-locked), a curated static grid of link-cards, and — mobile-only — a small three-item snippet composition. All three point back to `playground.html` as the canonical full experience.
