# Portfolio — Claude Code Source of Truth
# ristiu/ristiu.github.io

Read this file before doing anything. Every session starts here.

---

## Stack
- Plain HTML / CSS / JS. No framework.
- Hosted on GitHub Pages.
- `index.html` — homepage with accordion case study list
- `project.html` — renders individual case study content
- `data/` — content lives here (JSON or JS files)
- `assets/` — images and media
- `style.css` — global styles
- `cursor.js` — custom cursor, do not touch
- `prompts/` — case study content prompts, written in claude.ai, executed here

---

## Writing tone
- Fluent English. Not native. Not AI-polished.
- Conversational. Short sentences.
- No em-dashes. No "leverage". No "delve". No "stakeholders".
- No tables unless specifically asked.
- Do not add sections that were not asked for.
- Do not smooth away the human voice.

---

## Case study framework (always follow this order)

Every case study has exactly these fields, in this order:

1. **hook** — one sharp question. Not a statement. Ends with ?
2. **impact** — array of outcome bullet points. Each item: metric + context. Never bare numbers.
3. **situation** — the constraint. 2 sentences max.
4. **insight** — what field research or data revealed. The thing that changed direction.
5. **direction** — what was decided and why. What was killed. Use \n\n between paragraphs.
6. **contribution** — ownership explicit. Who did what. One short paragraph.
7. **whatShifted** — what changed beyond the numbers. Use \n\n between paragraphs.

### Field format reference

```json
{
  "hook": "How do you...?",
  "impact": [
    "+35% self-transaction adoption — from 20% baseline, rural low-tech users",
    "+16.5% conversion uplift — quick order feature built on this strategy",
    "5,000 MAU — 6 months post-launch"
  ],
  "situation": "Short paragraph. 2 sentences max.",
  "insight": "Short paragraph. The turning point.",
  "direction": "First paragraph.\n\nSecond paragraph if needed.",
  "contribution": "Design Manager with a team of 4. One sentence ownership.",
  "whatShifted": "First paragraph.\n\nSecond paragraph if needed."
}
```

---

## Philosophy spine
Inject these naturally into copy. Never literally quote them.

- Design reduces dependency, not increases it
- Direction compounds. Gatekeeping decays.
- Proximity to humans is the moat — field research is irreplaceable
- Taste must scale through systems
- Comfortable with chaos, grounded in evidence
- Old guard instincts (10+ yrs, 6 industries) + AI-curious mindset
- One solution does not fit all users

---

## Hero metrics (always accurate, never change without asking)
- IDR 9.77B GMV — month 1, reorder feature, eFishery
- +16.5% conversion uplift — p-value 0.0026, statistically significant
- +35% self-transaction adoption — from 20% baseline, rural low-tech users
- 45M MAU — across career, multiple products
- 5,000 MAU — eFishery O2O, 6 months post-launch

---

## Content update rules

**When updating a case study:**
- Only touch the specific entry in `data/`
- Do not touch other entries
- Do not touch `style.css` or layout files
- Do not add new sections to the HTML structure
- Confirm what file and field you are editing before making changes

**When adding a new case study:**
- Follow the exact same JSON/JS structure as existing entries
- Use the case study framework above
- Ask before creating new fields that don't exist yet

**When updating design:**
- Only when explicitly asked
- Never mix content changes and design changes in the same session
- Confirm the specific element before changing

---

## Case studies (current)

| ID | Title | Status |
|---|---|---|
| offline-to-online | Shaping Product Vision — O2O Strategy | ✅ Content written |
| reorder-lifecycle | Accelerating the Re-Order Lifecycle | ✅ Content written |
| leadership | Leadership and Team Management Principle | 🔲 To do |
| price-perception | Improving Price Perception in Hotel Booking | ✅ Content written |
| warehouse-logistics | Improving Warehouse Logistics Efficiency | ✅ Content written |
| product-trends | Forecasting Visual Product Trends | ✅ Content written |
| context-labs | Collective Case Study — Context Labs | ✅ Content written |

---

## Prompts folder

All case study content prompts live in `/prompts/`. Each file is one case study.

To run a task, I will say:
"Read CLAUDE.md then read prompts/[filename].md and do the task"

You read both files and execute. Do not ask me to re-explain what is already in CLAUDE.md.

### Current prompt files

| File | Case Study | Status |
|---|---|---|
| `prompts/claudecode-prompt-o2o.md` | Offline-to-Online Strategy | ✅ Ready |
| `prompts/claudecode-prompt-reorder.md` | Re-Order Lifecycle | 🔲 Coming |
| `prompts/claudecode-prompt-leadership.md` | Leadership Principle | 🔲 Coming |
| `prompts/claudecode-prompt-hotel.md` | Hotel Booking Discovery | 🔲 Coming |
| `prompts/claudecode-prompt-warehouse.md` | Warehouse Logistics | 🔲 Coming |
| `prompts/claudecode-prompt-trends.md` | Forecasting Product Trends | 🔲 Coming |

### Prompt file structure (every file follows this)

Each prompt file contains:
- `## Task` — what to do and which data entry to update
- `## Content` — the full case study copy in the 7-field format above
- `## After updating` — what to show me before finishing

---

## Do not
- Auto-fix things that were not broken
- Rename files without asking
- Change the accordion interaction behaviour
- Add animations or new UI patterns without asking
- Push to main without confirming the changes look right locally first
