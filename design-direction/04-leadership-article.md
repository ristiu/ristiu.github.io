# Leadership article template (`project.html`, `type: "article"`)

Builds on [00-shared-foundations.md](00-shared-foundations.md). One project — "Leadership and Team Management Principle" — renders through a completely different template than the standard case study ([03-case-study.md](03-case-study.md)): a magazine-style stack of mini-articles, not a single linear narrative.

This is the only template that opts out of the sitewide 600px `.paper` column (`.paper--article { max-width: 100% !important }`) — a deliberate choice to give a multi-article page more room than a single case study needs.

## Structure

- **Header** — plain title + company line, plus a leadership-only "sub-hero": two columns, each headed by a hand-written `.leadership-doodle-label` (Square Peg cursive, tilted -2deg) — "Reflection" beside a rotated pull-quote card with a portrait image, "Survey/360 Feedback" beside a small illustration. This sub-hero is the one place on the whole site that pairs the doodle font with real content rather than a margin annotation.
- **Article stack** — one `.article-card` per sub-topic (11 total: "Bridging Design & Business," "Data >< Design Alliance," "Empowering Individual Growth," etc.). Each card always shows its intro; the rest of its content (sections, images, impact/quotes) is collapsed behind a "Read more" toggle. This is not tabs and not an accordion of equal items — it's a vertical stack of self-contained, independently-expandable pieces, closer to a stack of index cards than a document outline.

The sidenav for this template is literally a table of contents into that stack — one link per card, by title — not a scrollspy over document sections like the standard case-study template uses.

## The falling-cards entrance

The signature interaction: cards start collapsed into a tight pile above the viewport and the first four drop in, staggered 130ms apart, with a bouncy `cubic-bezier(0.22, 1, 0.36, 1)` — then, after a short pause, every card (the fallen ones plus the rest, which fade in at this point) spreads into its final reading-list position with its own resting tilt. It's the same "stack, then spread" idea as playground's popup animation ([02-playground.md](02-playground.md)), reused here as a page-load entrance rather than a click response — worth noticing as a cross-page motif: this site likes to show a stack physically resolving into its readable form, in more than one place.

## Card color: a hardcoded retro palette, not the site accent

Each card cycles through five colors — explicitly commented in code as *"Retro palette — warm, muted, pulled from the 'scattered cards' reference"*:

```
#C2CCBE  #EDE4A0  #EEBCAA  #212121  #F5F0E8
```

This is a deliberate departure from [00](00-shared-foundations.md)'s "one accent only" rule, scoped tightly to this one template — the cards are meant to look like a mismatched stack of real paper stock, so having several colors is the point, not an accent leak. The site's actual `--accent` (#FF5E32) still only marks the same kind of thing it always does — the impact/stats label, and a "+" glyph in the sub-hero.

One thing worth flagging: the `articleBg: "#4A5AE8"` field set on this project's data is **not actually wired up anywhere** — a color-transition function that would have read it is an explicit no-op (`"Color transition removed — all pages use white background"`), and the blue you do see in two places (a pull-quote border, a stat-number color) comes from a separately hardcoded literal, not from that field. If this page's color system is ever revisited, that's the field to either wire up for real or remove — right now it's a stale hook.

## Expand/collapse

Opening a card (`.is-open`) unfolds it via a `perspective(600px) rotateX(-12deg → 0deg)` transform (a physical "lifting open" motion, not a simple height reveal), flattens its resting tilt to 0, raises it above every other card, and swaps its color to plain white/black regardless of its original palette slot — restored on collapse. A blurred full-page dim sits behind the open card; clicking it closes the card. Every card also carries the same paper-grain texture (`feTurbulence`, `mix-blend-mode: overlay`) used on the homepage's sticky note and folder cards — same material, same rendering technique, third use across the site.

## Images vs. embedded visualizations

Both static images and two of this project's visuals (`stakeholder-spiderweb.html`, `data-design-alliance.html`, both interactive HTML rather than flat images) go through the same `"image"` section type, but render differently once inside the figure:
- A **static image** is capped to 70% width and centered — shown inset, like a photo in a magazine layout.
- An **embedded HTML visualization** is full-width, fixed 360px height, with a hairline border — given the bounded "panel" treatment, since it's interactive content that needs a stable viewport, not a photo that can flow at any size.

Captions on this template are not visible text — they're used only as `alt`/`title` (invisible, accessibility-only), unlike the standard case-study template's `.section-photo`, which does render a visible figcaption. If a caption should be legible here, that's a template gap, not a content-writing gap.

## Typography specifics

- `.article-title` — Newsreader serif, 42px desktop.
- Body copy for every intro/section/quote/testimonial — Newsreader serif, 16px/24px, matching the standard case-study template's prose voice.
- Labels, numbers, stats — JetBrains Mono, as everywhere else.
- One real quirk: `.article-card-title` is set to `var(--serif)`, but that variable actually resolves to JetBrains Mono (see [00](00-shared-foundations.md) — `--serif` is mono everywhere on this site, a naming leftover, not a live serif token). So each card's own title renders in mono while the prose directly beneath it renders in true Newsreader serif — a real typographic split within the card, whether or not it was the original intent.

## Rules worth preserving verbatim

- *"Retro palette — warm, muted, pulled from the 'scattered cards' reference."*
- *"Color transition removed — all pages use white background."* (why `articleBg` does nothing)
- Sidenav for this template: *"Leadership-style: one nav entry per card, using card id and title."*

## Known gaps (documented, not fixed here)

- `articleBg` is unused/unwired — the field exists in data but nothing reads it.
- `--serif` resolving to a mono stack means `.article-card-title` isn't actually serif despite the variable name.
- Captions on images/embeds are invisible (alt-text only) in this template, unlike the standard case-study template's visible figcaptions.
- `.article-pull-quote` styling exists in CSS but isn't used by any current article entry.
