# Claude Code Prompt — Leadership Articles Body & Intro Updates
# Copy this entire block and paste into Claude Code

---

Read CLAUDE.md first. Follow everything in it.

## Task

Update the `body` and `text` (intro) fields inside the `articles` array
of the `leadership` entry in `projects.js`.

Only update the fields listed below.
Do not touch other entries, other articles, image URLs, quotes, stats, or impact body unless specified.
Show me each updated article section before moving to the next.

### Typography & color instruction
Before updating any HTML asset, read the live site at https://ristiu.github.io/index.html
and extract the exact values used for:
- Primary font family
- Background color
- Primary ink / text color
- Muted text color
- Accent color

Apply those exact values to stakeholder-spiderweb.html and data-design-alliance.html.
Do not hardcode guessed values. Match what the live site actually uses.

---

## Article 1 — high-performing-team

### intro text
"In leadership, the same logic applies as in design: focus on what actually moves people. For me, that comes down to three principles: Purpose, People, and Process."

### section 1 | Purpose body
"The team works best when everyone knows where they're going and why it matters. Ambitious but achievable challenges, matched to individual strengths, tend to produce outcomes that are both portfolio-worthy for the person and high-impact for the collective."

### section 2 | People body
"The environment should make it safe to share half-baked ideas, take risks, and stay playful. Regular 1:1s help reduce the power distance, not just checking on work, but getting to know the person behind the role."

### section 3 | Process body
"Reflection and retrospectives are embedded into the workflow, turning feedback into a mechanism for continuous improvement rather than a one-time event. High-quality output is the primary way to earn trust across the organization. Tried applying a spider web framework to the team, and it helps manage relationships systematically so expectations stay calibrated at every level."

### impact body
"From the yearly NPS Stakeholder survey, through transparency and supportive leadership, 85% of collaborators and team members enjoy a productive partnership that consistently drives objectives as a team."

---

## Article 2 — directing-design-system

### intro text
"Early on, each designer had their own UI kit. It caused complications during handoff to engineers and made it hard for the design team to maintain consistency. The challenge: bring it together without slowing down a company that was already scaling fast."

### section 1 | Hyperlocal body
"Hyperlocal became the unifying concept. The work covered UI design principles, UI audits, readability testing with users, contrast color testing, and close collaboration with engineering and branding teams. Direction ran all the way through to execution by UI Designers and Illustrators."

### impact body
"The design system supported company hypergrowth across 10 crucial platforms serving farmers, agents, buyers, and country expansion. Adoption spread company-wide, with the biggest impact felt by the marketing and engineering teams. Now there's one shared visual language built on the hyperlocal concept."

---

## Article 3 — armor-ally

### Add new intro section (insert before section 1)
type: "intro"
text: "The first setup isn't to design well. It's to make sure the right people understand how design brings value to the business and the team dynamic. Only then does the work land the way it should."

### section 1 | Set Business Goals body
"Designers with a business-aware mindset contribute more. The role of a design leader here is to translate business goals into design directions the team can actually act on."

### section 2 | Be an ally body
"Building trust means showing others we are reliable and transparent. One tactical way to do that is reading the room, understanding what the other person actually needs right now, whether that is speed, visual clarity, or strategic framing. The process can change and adapt, but the anchor stays fixed: user-centered design as the core value to maintain. Becoming a thinking partner reduces the friction between top-down and bottom-up cultures."

### section 3 | Build spider web body
"A spider web diagram is a visual mapping technique that helps understand how different individuals, groups, or teams interact. Applied to the team and senior members, it keeps relationships managed systematically so expectations stay calibrated at every level."

### Add image asset after section 3 body
Add a new section of type "image" after section 3:
{
  type: "image",
  url: "assets/portfolio-leadership/stakeholder-spiderweb.html",
  caption: "Spider web stakeholder map: Advocates, Skeptics, Informed followers, Monitored"
}

Note: stakeholder-spiderweb.html is attached. Save it to assets/portfolio-leadership/
and ensure it inherits the site typography (Courier New, #faf8f3 bg, #111 ink).

### section 4 | Find shared non-work interests body
"People connect over shared interests outside of work. Bonding over food or sports builds rapport that carries into collaboration. But connection shouldn't be forced. If the personal vibe isn't there, the focus stays on high-value work conversations with people who are genuinely open."

---

## Article 4 — leading-through-changes

### intro text
"The feedback that comes up most from peers is, I stay calm and strategic when things get unclear. As I reflect on those moments, I realise there are a few things I consistently do:"

### section 1 | Keep People Relations Intact body
"Damage control during restructuring and efficiency cuts has two layers: the business context and the people dynamics. Business context can be learned. Relational dynamics are harder to repair once broken. The first rule is keeping team counterparts intact, keeping IxD and PM tandems together, unless it's truly the last resort."

### section 2 | Strategize with Realistic Optimism body
"Realistic optimism means striking a balance between the pessimism of the intellect and the optimism of the will. Map the risk. Plan for worst to best case scenarios. But along the way, celebrate the small wins.\n\nFor managers, maintaining this balance matters most when the team needs someone to stay strategic through the chaos."

### section 3 | Provoke Transparency body
"The team can handle uncertainty better than most managers assume. What I've learned is that keeping people informed builds resilience faster than protecting them from the truth. What to share directly, what to share later, and what to leave unsaid. It's deeply situational. But getting the timing right is what holds a team together when things are uncertain."

### impact body
"Every year the design department, led by the Head of Design, runs a Pulse Check with the team. The intention is to reflect on how we lead and get better as an organisation. The last one came back with the highest scores in transparency, direction, and empowerment at 3.8/5, highest across all design teams. Turns out the things I did all this time got noticed and appreciated by the team."

---

## Article 5 — raising-team-bar

### intro text
"\"Bad leaders stagnate. Good leaders are determined to grow. Great leaders grow the people around them, and in the process grow themselves.\" — Adam Grant\n\nRaising the bar isn't about pushing harder. It's about creating the conditions where the team wants to grow."

### section 1 | Encourage Teamwork body
"Competition within a team divides more than it motivates. What actually moves people is winning together. The focus stays on collective goals, not individual comparison. As a team lead, everyone comes with different strengths and gaps. The real question is how to balance that through team composition, less like a manager assigning tasks, more like a football coach building a lineup where each player's strength covers someone else's weakness."

### section 2 | Emphasize Teamwork body
"Tasks get assigned based on individual strengths, with team members complementing each other's gaps. Team goals anchor everything: actionable insights and quality of deliverables. Manager and team members both contribute to making sure those goals land."

### impact body
"The NPS Stakeholder survey reflects what the team built together. Quality of deliverables scored 8/10 from PMs and 9/10 from Engineering. The teamwork didn't just meet expectations. It often exceeded them. So... kudos to the team!"

---

## Article 6 — empowering-individual-growth

### intro text
"\"There is a difference between motivating a team and stressing them out.\"\n\nIndividual growth doesn't happen by pushing harder. It happens when the conditions are right and the goals feel personal."

### section 1 | Growth Happens in Practice body
"Self-improvement isn't just theory. It requires actively applying new skills and mindsets to daily work. Real development comes from doing, reflecting, and adapting through real experiences, not just reading about them.\n\nIn practice, that looks like pairing team members with someone more expert in what they need, senior with junior, strength with weakness. And when hiring, the mindset is attracting candidates who can complement the team's existing gaps, not just add more of what's already there."

### section 2 | Evaluate Standards body
"Clear, ambitious goals matter. But setting standards based on outliers sets the team up for failure. Before raising the bar, it's worth understanding where things are actually dropping first. Not everyone grows at the same pace, and that's not a problem to fix."

### section 3 | Establish Boundaries body
"Not everyone wants to grow at the same speed, and that's okay. Growth is ultimately individual responsibility. What a manager can do is keep the feedback loop active and make sure goal setting starts from personal aspiration first, then connects to the day to day work. Not everyone grows at the same pace, and that's not a problem to fix by the manager."

### impact body
"In the yearly Pulse Check, growth scored highest at 3.5/5 across all design teams. The number matters less than what it signals. For me it meant people felt supported in moving forward at their own pace."

---

## Article 7 — ai-embed-design-workflow

### intro text
"We experimented with various AI tools. V0 by Vercel emerged as the most effective for our discovery and delivery process (because it's free, late 2025).\n\nBut tools alone don't shift a workflow. For this to work, PM, Designer, and Engineer all need an exploration mindset. A willingness to challenge how things get done and collaborate in ways that feel unfamiliar at first."

### section 1 | Results body
"It's proven to speed up both discovery and delivery.\n\nShared language between Design and PM: everyone speaks in UI flows and working interactions instead of static mockups and verbal descriptions.\n\nShared language between Design and Engineering: communication happens in code prototypes generated by AI. Less handoff friction, less misinterpretation.\n\nThe focus shifts from building layouts to validating ideas with users. Design and engineering converge faster."

### section 2 | Trade-off body
"We noticed a lot of tweaking around editability and stylistic control. The output needed more grooming than expected, and that shifted some of the designer's role toward quality control rather than creation.\n\nAs of 2026, looking back, the flow is getting better. This reflection may change."

---

## Article 8 — remote-leadership

### intro text
"Distance doesn't break teams. Invisible uncertainty does. That's the one thing a decade of remote work across Indonesia, the UK, and Germany made undeniably clear. The framework that helped comes down to three pillars:"

### section 1 | Radical Transparency body
"To support radical transparency, weekly structured updates keep blockers visible before they become blockers. Work in progress gets shared early, not when it's polished. A capacity map in Jira functions as a workload guide, not a surveillance tool. Everything lives in the cloud by default, Figma, Notion, all public and shareable. Each team member keeps a short \"How to Work with Me\" doc covering how they prefer feedback and when to reach them for urgent versus casual things."

### section 2 | Autonomy & Purpose body
"Every task connects back to a shared team objective, so individual autonomy is backed by collective purpose, not just personal preference. The 2 to 3 hour timezone overlap between Southeast Asia and the UK becomes the golden window for high-impact synchronous work. Weekly 1:1s stay focused on wellbeing and personal support, not status updates."

### section 3 | Intentional Fun Ritual body
"Remote teams lose the watercooler. In an office you can suddenly meet peers during lunch, in the pantry, a hallway conversation, afternoon chat after hours, commuting together. In a remote setting none of that happens by accident. It has to be prepared, not waited for. Monthly social syncs with no work agenda. Shared traditions that build identity over time. Once, the team built a Spotify playlist together. Small thing. Stayed with people longer than most retrospectives did."

---

## Article 9 — facilitating-design-workshop

### intro text
"Workshops fail when the goal is unclear or co-owned by no one. The ones that work tend to have a sharp question going in, the right people in the room, and a clear output coming out. This is a reflection of what I do when facilitating workshops with PMs and Heads across strategic and cultural themes."

### Add opening quote section (insert after intro, before section 1)
{
  type: "quote",
  text: "Great things in business are never done by one person. They're done by a team of people.",
  author: "Steve Jobs"
}

### section 1 | Strategic Lever body
"Thematic workshops focused on what actually moves the business. Examples include value creation sessions, long-term product roadmap planning, and hypothesis collection for experimentation. The goal is always a decision the team can act on, not a pile of sticky notes."

### section 2 | Collaborative Culture body
"Thematic workshops focused on how the team works together. Examples include roadmap check-ins that balance top-down direction with bottom-up input, and retrospectives across multiple departments. The format matters less than who is actually in the room and whether they feel safe enough to be honest."

### section 3 title update
Change title from "My Approach as Facilitator" to "My Principle as Facilitator"
Change subtitle from "From kickoff to action in four moves" to "From kickoff to actionable item"

### section 3 | My Principle as Facilitator body
"Sessions open with shared goal-setting so no one is guessing what we are trying to accomplish. Then the right frameworks get curated for the room, Value vs. Effort, Hypothesis Dumping, Ideation, to focus energy on the target. During the session the work is keeping that energy pointed at outcomes, not conversations that circle. At the end, output becomes clear next steps."

---

## Article 10 — data-design-alliance

### intro text
"One thing I lean into as a design manager is a close partnership with the Data team. Qualitative and quantitative together drive results that neither can reach alone."

### section 1 | How the Alliance Works body
Replace current body with image asset reference.
Add a new section of type "image" after the section 1 intro:
{
  type: "image",
  url: "assets/portfolio-leadership/data-design-alliance.html",
  caption: "Data & Product Design produce actionable insight. Product Management influences business strategy with user-focused value."
}

Note: data-design-alliance.html is attached. Save it to assets/portfolio-leadership/
and ensure it inherits the site typography (Courier New, #faf8f3 bg, #111 ink, #c8843a amber).

### section 2 | What We Built Together body
Replace current body with a simple list:
"Reports and research that drove real decisions:\n\n- Identifying Loyal User Segments\n- Hypothesis Testing for Churn Predictors\n- Warehouse Fulfillment Time Optimisation\n- A/B Testing\n- and more"

### impact body
"The collaboration improved purchasing efficiency and enhanced loyal segment retention. +16.5% conversion rate uplift, statistically significant at p-value 0.0026. 30% churn reduction in one business line through loyal segment strategy."

---

## After updating

Show me the full updated articles array so I can verify all changes before we move on.
Do not push to main until I confirm.
