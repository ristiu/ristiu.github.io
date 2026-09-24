# Context Labs list template (`project.html`, `type: "list"`)

Builds on [00-shared-foundations.md](00-shared-foundations.md). One project — "Context Labs" (CLAUDE.md's "Collective Case Study") — renders through the plainest of the three `project.html` templates: no cards, no stack, no chart, just a description and a flat list of clients.

Unlike the leadership article template ([04](04-leadership-article.md)), this one stays inside the standard `.paper` column (max 600px on mobile) — it doesn't ask for extra width, because it doesn't need it.

## Structure

- **Hero** — reuses the generic hero title treatment, but with no image and no tag chips: just the title and a single keyword line (the company name, "Context Labs"). This is the only project whose hero has no photo at all.
- **Description** — the project's `description` field, split into paragraphs, in the same Newsreader serif used for case-study prose.
- **Clients** — one `.content-section`, heading "Clients," containing a flat vertical list of rows (6 in the current data): client name + optional external-link icon + an industry pill, followed by that client's own description. Hairline borders separate rows — no card elevation, no per-client color.

The sidenav for this template doesn't scrollspy at all — it's a single static label ("Client industry focus" + a comma-joined list of every client's industry), set once and left alone. This is a real, intentional difference from every other template: there's nothing to track scroll position against, because there's no multi-section narrative here to navigate.

## Typography — one visible inconsistency worth knowing about

The top-level `description` paragraphs render in Newsreader serif (matching case-study prose everywhere else on the site), but each individual client's own `.client-description` has no font-family override and falls back to the page's base mono font. So within this one template, the page's intro paragraph and each client blurb beneath it are set in two different typefaces — not an intentional split like the leadership template's mono-title/serif-body pattern, just an unstyled rule. Worth a deliberate decision either way if this page is revisited: give `.client-description` the same serif treatment as the description above it, or keep the mono deliberately to mark it as "metadata" rather than narrative.

## Color

None. `folderColor` exists on this project's data (like every project) but is only ever read by the homepage's folder-stack, never by `project.html` — so on the detail page itself, Context Labs has no accent, no per-client hue, nothing beyond flat ink-on-white. The industry pills use a neutral `rgba(0,0,0,0.05)` chip background, not a client-specific color.

## Motion

None beyond the shared chrome's hand-rolled sticky sidenav. No hover reveal, no expand/collapse, no entrance choreography — the plainest page on the site, matching its plainest content shape (a list, not a narrative).

## Rules worth preserving verbatim

- Sidenav branch comment, contrasting directly with the leadership template: *"Context Labs-style: show industry focus label, no nav links."*

## Known gaps (documented, not fixed here)

- `.client-description` inherits mono instead of the serif used by the description paragraph directly above it — likely unintentional, not confirmed either way.
