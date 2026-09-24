# Design direction

Documentation of the portfolio's *current, implemented* design decisions — one file per page/template, grounded in the actual code (not a wishlist, not a redesign brief). Written so a future session (or a human) can stay consistent with existing choices instead of re-deriving them from scratch.

Read [00-shared-foundations.md](00-shared-foundations.md) first — every other file assumes it.

- [00-shared-foundations.md](00-shared-foundations.md) — typography, color, the paper metaphor, motion vocabulary, breakpoints: what's true everywhere.
- [01-homepage.md](01-homepage.md) — `index.html`: hero, the folder-stack case-study list, the three playground hand-offs, footer.
- [02-playground.md](02-playground.md) — `playground.html`: the infinite canvas, card/deck system, popup compositions, mobile fallback.
- [03-case-study.md](03-case-study.md) — `project.html`, standard type: the 7-field case-study template (eFishery, Traveloka, Warung Pintar, Casio).
- [04-leadership-article.md](04-leadership-article.md) — `project.html`, `type: "article"`: the leadership page's stacked-mini-article template.
- [05-context-labs-list.md](05-context-labs-list.md) — `project.html`, `type: "list"`: the Context Labs client-list template.

Each file ends with a short "known gaps" note where the research turned up something inconsistent or unwired in the current code — flagged for awareness, not fixed as part of writing these docs.
