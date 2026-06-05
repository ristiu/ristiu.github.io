# Claude Code Prompt — O2O Case Study
# Copy this entire block and paste into Claude Code

---

Read CLAUDE.md first. Follow everything in it.

## Task

Update the content for the case study with ID `offline-to-online` in the `data/` folder.

Only update this entry. Do not touch other case studies, CSS, or HTML structure.

Before making changes, tell me:
1. Which file in `data/` holds the case study content
2. What the current field structure looks like for this entry

Then update it with the content below, mapped to the field names in CLAUDE.md.

---

## Content

```json
{
  "hook": "How do you reduce the cost of field officers when maintaining human services for every farmer is unsustainable?",

  "impact": [
    "+35% self-transaction adoption — up from 20% baseline, rural low-tech users",
    "+16.5% conversion uplift — quick order feature built on this strategy",
    "5,000 MAU — 6 months post-launch",
    "Field officer role shifted from order-taking to account management"
  ],

  "situation": "Fish farmers in rural East Java order supplies by calling field officers. One officer serves maybe 10 farmers, doesn't work 24 hours, and delays cost orders. We built an app — farmers found it frustrating and kept calling anyway. The company was paying for field officers to do work that could be handled differently, and it wasn't scaling.",

  "insight": "We went to East Java expecting farmers couldn't use apps. That was wrong. 90% of them were already on WhatsApp every day. The problem wasn't capability — it was that we assumed everyone would want to use the app. We designed one solution and expected it to fit everyone. It didn't.",

  "direction": "Instead of forcing farmers into the app, we built a second path. WhatsApp for farmers who prefer it. App for farmers who don't.\n\nI framed this with the team using BCA's model — they don't force everyone to mobile. Some customers go to the teller. Some use ATM. Some use the app. We did the same thing.\n\nI wrote the strategy document to align product, marketing, data, and engineering. Everyone was working in silos. I brought them together with one framework: Value Creation vs. Value Capture — what farmers actually need versus what we want from them.\n\nWhat we killed: the assumption that everyone can use an app. That was the real blocker.",

  "contribution": "Design Manager with a team of 4. I owned the strategy direction, did the field research, wrote the cross-functional alignment document, and made the design calls for both WhatsApp and the app.",

  "whatShifted": "Before: a field officer spent most of their day taking orders. After: farmers could order at 2am when they realised they needed fish food.\n\nField officers stopped doing operational tasks and started doing relationship work — the kind that actually needs a person. The goal was never to make farmers use the product more. It was to make them need us less, for the things that didn't need us."
}
```

---

## After updating

Show me the full updated entry in the data file so I can verify before we move on.
