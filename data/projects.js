const projects = [
  {
    id: "offline-to-online",
    folderColor: "#ffffff",
    title: "Shaping Omni-channel Product Vision",
    subtitle: "Design Strategy",
    company: "eFishery",
    industry: "Agriculture",
    year: "2023",
    role: "Design Manager with a team of 4",
    tags: ["Ecommerce", "Design Strategy", "Omnichannel", "Agriculture"],

    hook: "How do you reduce the cost of field officers when maintaining human services for every farmer is unsustainable?",

    situation: "Fish farmers routinely ordered heavy aquaculture supplies by calling local field officers directly. Because officers couldn't work 24/7, this manual process caused severe order delays and operational bottlenecks. While the company launched a native app (eFisheryku) to solve this, adoption stagnated at 19%.",

    insight: "Farmers found the app frustrating and kept calling anyway. Field officers faced intense burnout, and operations couldn't scale. While 90% of these farmers used WhatsApp daily, the company had mistakenly built a single complex app solution, expecting rural, low-tech users to completely change their tech habits overnight.",

    direction: "As Design Manager, I partnered with the Head of Design to co-author a Design Strategy Document. We broke down existing organizational silos by aligning Product, Marketing, Data, and Engineering around a unified framework: Value Creation (what farmers need) vs. Value Capture (what the business wants).\n\nWith Design strategy that we create, it's introduced a omnichannel strategy inspired by BCA (Teller vs. ATM vs. Mobile App). Instead of forcing all farmers into a single app, we designed a dual-path ecosystem: a streamlined app for tech-ready farmers and an automated WhatsApp ordering channel built directly on top of their existing habits.\n\nI led a team of 8 designers through deep field research, facilitated cross-functional alignment workshops, and made the final design calls for both channels. By did this we're debunking the internal assumption that a mobile app is the only solution for rural users.",

    whatShifted: "In rural B2B2C ecosystems, human relationships are the core foundation of trust. Purchasing aquaculture supplies directly impacts a farmer's primary livelihood and involves significant capital. Naturally, they rely on direct communication with field officers not just to place orders, but to seek vital consultation for their cultivation process.\n\nOur goal shouldn't be to aggressively digitize humans out of the loop just to cut costs. I recognized this from day one, but shifting a company away from a rigid, top-down \"app-only\" mandate required driving leadership without borders. By building cross-functional alliances across siloed departments.\n\nTrue digital transformation in low-tech markets succeeds when we digitize the friction, not the relationship.",

    impact: [
      "+35% self-transaction adoption, up from 19% baseline, rural low-tech users",
      "+16.5% conversion uplift, quick order feature built on this design strategy",
      "5,000 MAU, 6 months post-launch",
    ],

    
    strategyCardImage: "assets/portfolio/o2o-strategy-card-opt.jpg",
    heroImage: "assets/portfolio/efishery-hero.mp4",

  },
  {
    id: "price-perception",
    folderColor: "#ffffff",
    title: "Redesigning Hotel Booking Discovery",
    subtitle: "Optimizing Pricing Element for 35M Users",
    company: "Traveloka",
    industry: "Pricing, Travel, Ecommerce",
    tags: ["Design Interaction", "Gestalt Principles", "Pricing Enginee", "Ecommerce"],

    hook: "How do you optimize pricing perception for 35 million users when the operation behind it is still managing labels manually?",

    impact: [
      "Pricing label hierarchy integrated directly into Traveloka's pricing engine, less manual work per campaign. The Pricing Enginee now serves hotel-facing, internal, affiliate, and marketing campaigns in one unified platform",
    ],

    situation: "Pricing is the deciding factor for Traveloka's 35 million MAU when choosing a hotel. But the system is not yet optimized to scale. Every campaign, partnership, and special event required manual label management across four different audiences, hotel-facing, internal, affiliate, and marketing. The hotel listing had the same problem. Information has no clear grouping and pricing buried in visual noise. On the other hand, our research confirmed that photos and price are the first things users look at, and neither was getting the hierarchy it deserved.",

    direction: "We worked on two solutions in parallel. For the back-office, I and Senior PM create a concept of ranking system that defined which label type wins when multiple rules apply, and how visual prominence should reflect that. This got integrated directly into the pricing engine so campaigns could launch without manual intervention.\n\nFor the consumer-facing side, I applied Gestalt principles of similarity and proximity to reorganize the hotel listing. Similar information was grouped together with consistent visual treatment: hotel details in one cluster, pricing in another, credibility signals in a third. Color associations were tightened so similar colors only appeared on related information. The result was bite-sized, scannable chunks instead of a wall of competing elements.",

    contribution: "My role as Interaction Designer. I handled both the back-office pricing label framework and the consumer-facing redesign. The solution went through escalation to VP of Product, Head of Pricing, and CEO before launch. Since hotel bookings represented big chunck of Traveloka's revenue at the time, so even small changes is matters for the business.",

    whatShifted: "This was the first time I worked on something where the design decision carried direct revenue risk at scale. I exposed to pricing principle which integrity, traveloka famous for 'honest price' guarantees you pay exactly what you see. No hidden booking fees, sudden that inflate your total when checking out.\n\nWorking inside a large corporation also taught me that small changes need a lot of alignment. Different levels, different business lines, all with legitimate stakes in the same decision",

    heroImage: "assets/portfolio/traveloka-hero.mp4",
    sectionImages: [
      { url: "assets/portfolio/before-after-hotel.jpg", section: "situation" },

    ]
  },
  {
    id: "warehouse-logistics",
    folderColor: "#ffffff",
    title: "Reducing Warehouse Fullfilment Time",
    subtitle: "Service Prototyping",
    company: "Warung Pintar",
    industry: "Supply Chain, Retail",
    year: "",
    role: "UX Researcher",
    tags: ["Service Design", "Data >< Design", "Service Prototyping", "Warehouse Operations"],
    heroImage: "assets/portfolio/warehouse-hero.mp4",

    hook: "How do you optimize up warehouse picking processes that accomodate varying order volumes and variant SKUs?",

    impact: [
      "6.7x faster probable picking time from simulation zone & cluster picking vs discrete singular picking",
      "Cluster picking adopted in high-volume warehouses post-rollout",
      "Picker app designed heavy on simple visual cues, to accommodate diverse literacy levels",
    ],

    situation: "Since Warung Pintar built its own distribution center to serve micro retail warungs, shops that order 4x more SKU lines than typical e-commerce. The original picking method had one picker handling one order at a time. As order volume grew, pickers were overwhelmed while checkers sat idle waiting. The picking system need to be optimized for bigger scale.",

    insight: "Traveling between warehouse locations from shelf to shelf took the longest time. Data confirmed, that picking duration correlated with SKU line variety, not quantity. A picker walking to collect 3 different items took longer than one collecting 100 units of the same item.",

    direction: "We started with zero context on warehouse operations. Desktop research surfaced several picking methods but none were obviously right for Warung Pintar's unique order profile. We mapped them on two axes: order volume and territory. That gave us the direction, from discrete singular picking to zone and cluster/batch picking.\n\nBefore touching the real warehouse, we ran a service prototyping that included VP, data scientists, PMs, and engineers all became pickers and checkers for a day. Everyone felt the experience firsthand. That session surfaced things no diagram would have caught.\n\nWhat we killed was the assumption that one picking method could work across all warehouse types. New conclusions were drawn based on the specific context of each warehouse. High-volume warehouses got cluster picking. New warehouses kept the simpler flow.",

    contribution: "As UX Researcher. I ran field observation using timed tracking, identified the traveling bottleneck from data, designed the service prototyping session, accompanied the live rollout, and designed the picker app interface. I collaborate a lot with Data Analyst for hypothesis making and raw data analysis after the experiment.\n\nPickers came from diverse local backgrounds — some not fully fluent in Bahasa Indonesia. I designed the UI to be understood without depending on language, using visual cues that worked across literacy levels.",

    whatShifted: "As Coldplay famously sang, \"if you never try, you'll never know.\" Entering this project with zero warehouse context taught me that building untested systems when heavy infrastructure investment is on the line is a massive risk. To de-risk this, we ran live service prototypes with our VP, PMs, data scientists, and engineers, letting everyone experience the physical operational friction firsthand. I learned that introducing too many variables at once makes it impossible to isolate what actually works, which completely reshaped how I structure experiments which are designing scaled tests with distinct objectives, using data-driven mini-zones and dummy orders that replicated real profiles.\n\nUltimately, partnering UX Research with Data Analytics created a powerful analysis engine that combined qualitative user pain points with quantitative behavioral metrics, allowing us to confidently influence decision-makers.",

    sectionImages: [
      { url: "https://static.wixstatic.com/media/242cb7_68b9577e5e5b43f2ba8c550838a39d3a~mv2.jpg",  caption: "Warung — the micro retail stores Warung Pintar serves",                        section: "situation", afterPara: 0 },
      { url: "https://static.wixstatic.com/media/242cb7_f69062528b57422ba517613f41f46bed~mv2.png", caption: "Picking duration correlates with SKU line variety — not quantity",             section: "insight" },
      { url: "https://static.wixstatic.com/media/242cb7_716a0c48ae634ab2990d3eb6d563f4f7~mv2.png", caption: "No pattern between quantity and duration. Variety is the real driver.",        section: "insight" },
      { url: "https://static.wixstatic.com/media/242cb7_091fea75ec054b76ad38bb38b6eaee63~mv2.png", caption: "Planning before the warehouse simulation",                                      section: "direction", afterPara: 1 },
      { url: "https://static.wixstatic.com/media/242cb7_7bf9baabc9b543fcbbb271cdcf0ddcd9~mv2.png", caption: "Cross-functional team acting as pickers and checkers",                         section: "direction", afterPara: 1 },
      { url: "https://static.wixstatic.com/media/242cb7_148734a84e524d9e93c52d6b2760e0b2~mv2.png", caption: "Field observation during production rollout",                                   section: "contribution" },
      { url: "https://static.wixstatic.com/media/242cb7_f68d87b518304760908d0f446d7f5589~mv2.png", caption: "Timed activity tracking using Google Sheets script",                           section: "contribution" },
      { url: "https://static.wixstatic.com/media/242cb7_4d3f607b4ea7412a932be163a273bf5c~mv2.png", caption: "Sorting to rack: a redundant step consuming 30–50% of picker time",            section: "contribution" },
      { url: "https://static.wixstatic.com/media/242cb7_9a3b2fbd544341d68cac703d7188177b~mv2.png", caption: "Picker app — designed for visual clarity across literacy levels",              section: "contribution" }
    ]
  },
  {
    id: "product-trends",
    folderColor: "#ffffff",
    title: "Forecasting Visual Product Trends",
    subtitle: "Japan & Indonesia Youth Segment",
    company: "Joint venture: Casio Design Japan, Chiba University, Institut Teknologi Bandung",
    industry: "Consumer Electronics",
    year: "2014",
    role: "Design Researcher",
    tags: ["Trend Forecasting", "Design Speculation", "Design Research", "Ethnography", "Consumer Electronics"],

    hook: "On the next 4 years, what will happen to visual imagery product with the rise of digital photography?",

    impact: [
      "Forecast validated within 3 year. Instagram's Boomerang launched, echoing the same morphing-photo instinct",
      "Analog camera resurgence confirmed the predicted retro nuance trend",
    ],

    situation: "We conducted a cross-cultural ethnographic study with 150 participants in Indonesia and Japan, tracking youth behavior from 2012 to 2014. Our research decoded a clear disconnect between digital convenience and physical permanence, identifying three driving signals:",

    insight: "The Rise of Retro: Youth behavior shifted away from heavy digital filters toward natural, analog aesthetics (accelerated by early Instagram and #ootd trends). We flagged that this old-school nuance was a cyclical macro-trend impacting music, fashion, and product design.\n\nThe Digital Storage Burden: The explosion of cheap, high-quality smartphone cameras made photo-taking effortless but disposable. Users habitually shot 3 to 6 redundant group photos of a single moment just to pick one \"perfect\" shot for social media, creating a massive storage crisis.\n\nThe Value of the Physical: Early digital photos were easily lost during device changes, whereas physical prints remained safely intact. Users were highly selective printing only the most meaningful milestones as physical mementos.\n\nSeeing the pattern as opportunity, our team proposed a physical-digital hybrid product that blurred the boundaries between real and virtual photography.",

    direction: "",

    contribution: "As the Design Researcher, I synthesized the end-to-end ethnographic data across 150 participants and led the design concept from trend forecasting through to physical prototyping.",

    whatShifted: "The forecast held up. Boomerang launched on Instagram, built on the same morphing-photo instinct we'd prototyped earlier with physical cards. Analog cameras came back, exactly the retro nuance we'd flagged. I remember being genuinely amazed watching it happen in real time.\n\nWhat stuck with me long after this project ended was learning that trends move in cycles, not lines. What looks retro today repeats because people are wired to circle back to what felt good before. I still use that lens now. When something looks new, I ask what older pattern it's actually replaying.",

    heroImage: "assets/portfolio/casio-hero.mp4",

    sectionImages: []
  },
  {
    id: "context-labs",
    type: "list",
    folderColor: "#ffffff",
    title: "Leading Fractional UX Across Client",
    company: "Context Labs",
    description: "As a Design Consultant doing the \"Fractional Design Lead\" and High-Impact IC (HI-IC) thing, I basically act as the bridge between executive leadership and the execution that delivers value for my client.\n\nBecause of my background in design leadership, I used to zoom out and zoom in to handle everything from high-level design strategy and product discovery to final execution. Lately, what works for me on embedding AI into the workflow, is using it for \"vibe coding\" to quickly spin up micro-apps and tools that automate redundant tasks, and accelerating prototypes so we can review it to user/stakeholder faster.",
    clients: [
      {
        client: "Japan Foundation",
        industry: "Public Institution",
        url: "https://ja.jpf.go.jp/id/",
        description: "Facilitated HAND's Online Design Thinking workshop for 80+ participants during the pandemic, focused on plastic research and sustainable design methods."
      },
      {
        client: "Epsylon",
        industry: "Ads Management",
        url: "https://epsylonhome.com/",
        description: "Led end-to-end UX redesign for a 30-year-old enterprise advertising platform. Conducted UX audit, established a Design System, and validated changes through usability testing on highest-risk operational flows."
      },
      {
        client: "Pintaria",
        industry: "Edutech",
        url: "https://campus.quipper.com/pintaria",
        description: "Design research to improve conversion rate. Product iteration to capture revenue from Kartu Prakerja participants."
      },
      {
        client: "Wisataone",
        industry: "Travel",
        url: "https://www.instagram.com/wisataoneid/",
        description: "UI design for Europe trip planning. Shipped."
      },
      {
        client: "Vaya Constellar",
        industry: "Sales Distribution",
        url: "https://vayaconstellar.com/",
        description: "Reponsible for developing company storytelling pitch narratives to communicate organizational vision alongside with managing director that serve +150 community and 15 small and medium-sized enterprises (SMEs). Directing company logos and brand identity systems and manage vendor selection for production."
      },
      {
        client: "Teacup Project",
        industry: "Community",
        url: "https://www.instagram.com/project.teacups/",
        description: "Designed visual sticker pack design during women international days ."
      },
    ]
  },
  {
    id: "leadership",
    type: "article",
    folderColor: "#ffffff",
    title: "Leadership and Team Management Principle",
    subtitle: "Build High Performing Team",
    company: "",
    tags: ["Leadership", "Team Management", "Design Ops"],
    heroImage: "",
    articleBg: "#4A5AE8",
    articles: [
      {
        id: "high-performing-team",
        title: "Building High Performing Team",
        sections: [
          {
            type: "intro",
            text: "In leadership, the same logic applies as in design: focus on what actually moves people. For me, that comes down to three principles: Purpose, People, and Process."
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/high-performing-team.jpg",
            caption: "Purpose, People, Process, the three principles I use to sustain a high-performing team"
          },
          {
            type: "section",
            number: "1 |",
            title: "Purpose",
            subtitle: "Shared sense of direction",
            body: "The team works best when everyone knows where they're going and why it matters. Ambitious but achievable challenges, matched to individual strengths, tend to produce outcomes that are both portfolio-worthy for the person and high-impact for the collective.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "People",
            subtitle: "Psychological safety as a foundation",
            body: "The environment should make it safe to share half-baked ideas, take risks, and stay playful. Regular 1:1s help reduce the power distance, not just checking on work, but getting to know the person behind the role.",
            quotes: [
              "Risti puts in effort to get to know me as a person. My home life she knows best — she assigns me work that plays to my strength. — Sr. Interaction Designer",
              "What I appreciate the most from Risti are the candidness, the openness, the trust. I feel those 3 things come simultaneously in building the confidence in me. — Sr. UX Writer"
            ]
          },
          {
            type: "section",
            number: "3 |",
            title: "Process",
            subtitle: "Feedback and quality as growth levers",
            body: "Reflection and retrospectives are embedded into the workflow, turning feedback into a mechanism for continuous improvement rather than a one-time event. High-quality output is the primary way to earn trust across the organization. Tried applying a spider web framework to the team, and it helps manage relationships systematically so expectations stay calibrated at every level.",
            quotes: [
              "Risti is a high performer, that holds to the farmer-first vision and incorporates it with company strategy. — CPO"
            ]
          },
          {
            type: "impact",
            body: "From the yearly NPS Stakeholder survey, we surveyed 41 respondents from Product, Engineering, Data and Marketing. Turns out, through transparency and supportive leadership, 85% of collaborators and team members enjoy a productive partnership that consistently drives objectives as a team (PM: 8/10 & Engineering: 9/10).",
            stats: [],
            note: "Measured as proof of a high-performing team, not a delusional claim ^^",
            quotes: [
              "Risti's team has the capacity to own the goal and the problem. They help PMs drive the business. — Sr. Product Manager"
            ]
          }
        ]
      },
      {
        id: "directing-design-system",
        title: "Directing Design System & Illustration with Hyperlocal Concept",
        sections: [
          {
            type: "intro",
            text: "Early on, each designer had their own UI kit. It caused complications during handoff to engineers and made it hard for the design team to maintain consistency. The challenge: bring it together without slowing down a company that was already scaling fast."
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/design-system.jpg",
            caption: "Hyperlocal design system directing UI consistency across 10 platforms"
          },
          {
            type: "section",
            number: "1 |",
            title: "Hyperlocal as the Main Concept",
            subtitle: "From fragmented kits to one shared system",
            body: "Hyperlocal became the unifying concept. The work covered UI design principles, UI audits, readability testing with users, contrast color testing, and close collaboration with engineering and branding teams. Direction ran all the way through to execution by UI Designers and Illustrators.",
            quotes: []
          },
          {
            type: "impact",
            body: "The design system supported company hypergrowth across 10 crucial platforms serving farmers, agents, buyers, and country expansion. Adoption spread company-wide, with the biggest impact felt by the marketing and engineering teams. Now there's one shared visual language built on the hyperlocal concept.",
            stats: [
              "Supported company hypergrowth that applied 10 crucial platforms for farmers, agents, buyers, and country expansion",
              "The design system is widely adopted across the company, reducing time on recreating components and allowing more tinkering time for more iteration"
            ],
            quotes: []
          }
        ]
      },
      {
        id: "armor-ally",
        title: "Bridging Design & Business, on Engaging Non-Designers at All Levels",
        sections: [
          {
            type: "intro",
            text: "The first setup isn't to design well. It's to make sure the right people understand how design brings value to the business and the team dynamic. Only then does the work land the way it should."
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/armor-ally.jpg",
            caption: "Bridging design and business by engaging non-designers at every level"
          },
          {
            type: "section",
            number: "1 |",
            title: "Set Business Goals as Common Ground",
            subtitle: "",
            body: "Designers with a business-aware mindset contribute more. The role of a design leader here is to translate business goals into design directions the team can actually act on.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "Be an ally, not a barrier with rigid design approach",
            subtitle: "",
            body: "Building trust means showing others we are reliable and transparent. One tactical way to do that is reading the room, understanding what the other person actually needs right now, whether that is speed, visual clarity, or strategic framing. The process can change and adapt, but the anchor stays fixed: user-centered design as the core value to maintain. Becoming a thinking partner reduces the friction between top-down and bottom-up cultures.",
            quotes: []
          },
          {
            type: "section",
            number: "3 |",
            title: "Build spider web of stakeholder",
            subtitle: "",
            body: "A spider web diagram is a visual mapping technique that helps understand how different individuals, groups, or teams interact. Applied to the team and senior members, it keeps relationships managed systematically so expectations stay calibrated at every level.",
            quotes: []
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/stakeholder-spiderweb.html",
            caption: "Spider web stakeholder map: Advocates, Skeptics, Informed followers, Monitored"
          },
          {
            type: "section",
            number: "4 |",
            title: "Find shared non-work interests",
            subtitle: "",
            body: "People connect over shared interests outside of work. Bonding over food or sports builds rapport that carries into collaboration. But connection shouldn't be forced. If the personal vibe isn't there, the focus stays on high-value work conversations with people who are genuinely open.",
            quotes: [
              "Our stakeholders suit is so thick — they think 'collaboration' means everyone agrees with me."
            ]
          },
          {
            type: "impact",
            body: "How's non design stakeholder view design team that I manage?",
            stats: [],
            quotes: [
              "... I noticed Risti receives positive feedback 360, from Heads of Product and many PM — CPO",
              "Risti good at setting up simple frameworking to facilitate discussion — AVP Pricing Management"
            ]
          }
        ]
      },
      {
        id: "leading-through-changes",
        title: "Leading through changes: What Strategies Provoke Humility and Resilience During Challenging Times?",
        sections: [
          {
            type: "intro",
            text: "The feedback that comes up most from peers is, I stay calm and strategic when things get unclear. As I reflect on those moments, I realise there are a few things I consistently do:"
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/weather.jpg",
            caption: "Leading through change — humility and resilience as strategy"
          },
          {
            type: "section",
            number: "1 |",
            title: "Keep People Relations Intact",
            subtitle: "",
            body: "Damage control during restructuring and efficiency cuts has two layers: the business context and the people dynamics. Business context can be learned. Relational dynamics are harder to repair once broken. The first rule is keeping team counterparts intact, keeping IxD and PM tandems together, unless it's truly the last resort.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "Strategize with Realistic Optimism",
            subtitle: "",
            body: "Realistic optimism means striking a balance between the pessimism of the intellect and the optimism of the will. Map the risk. Plan for worst to best case scenarios. But along the way, celebrate the small wins.\n\nFor managers, maintaining this balance matters most when the team needs someone to stay strategic through the chaos.",
            quotes: [
              "Your ability to stay calm even in stressful situations, has made working together a lot easier — Interaction Designer"
            ]
          },
          {
            type: "section",
            number: "3 |",
            title: "Provoke Transparency with Team",
            subtitle: "",
            body: "The team can handle uncertainty better than most managers assume. What I've learned is that keeping people informed builds resilience faster than protecting them from the truth. What to share directly, what to share later, and what to leave unsaid. It's deeply situational. But getting the timing right is what holds a team together when things are uncertain.",
            quotes: [
              "Risti demonstrated emotional intelligence, even extending to her own manager (me!) — Head of Product Design"
            ]
          },
          {
            type: "impact",
            body: "Every year the design department, led by the Head of Design, runs a Pulse Check with the team. The intention is to reflect on how we lead and get better as an organisation. The last one came back with the highest scores in transparency, direction, and empowerment at 3.8/5, highest across all design teams. Turns out the things I did all this time got noticed and appreciated by the team.",
            stats: [],
            quotes: [
              "...as it takes skills and effort to keep up with change, Design team is very adaptive to it — Product Manager"
            ]
          }
        ]
      },
      {
        id: "raising-team-bar",
        title: "Raising Team Bar for Strategic Influence",
        sections: [
          {
            type: "quote",
            text: "Bad leaders stagnate. Good leaders are determined to grow. Great leaders grow the people around them, and in the process grow themselves.",
            author: "Adam Grant"
          },
          {
            type: "intro",
            text: "Raising the bar isn't about pushing harder. It's about creating the conditions where the team wants to grow."
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/strength-interest.jpg",
            caption: "Raising the team bar through strength-based growth and collective wins"
          },
          {
            type: "section",
            number: "1 |",
            title: "Encourage teamwork NOT competition amongst team members",
            subtitle: "",
            body: "Competition within a team divides more than it motivates. What actually moves people is winning together. The focus stays on collective goals, not individual comparison. As a team lead, everyone comes with different strengths and gaps. The real question is how to balance that through team composition, less like a manager assigning tasks, more like a football coach building a lineup where each player's strength covers someone else's weakness.",
            quotes: [
              "What I've really valued is your consistent support and encouragement, which have created a really enjoyable room for me and teams to speed up our growth — Interaction Designer"
            ]
          },
          {
            type: "section",
            number: "2 |",
            title: "Emphasize Teamwork for High-Quality Work",
            subtitle: "",
            body: "Tasks get assigned based on individual strengths, with team members complementing each other's gaps. Team goals anchor everything: actionable insights and quality of deliverables. Manager and team members both contribute to making sure those goals land.",
            quotes: []
          },
          {
            type: "impact",
            body: "The NPS Stakeholder survey reflects what the team built together. Quality of deliverables scored 8/10 from PMs and 9/10 from Engineering. The teamwork didn't just meet expectations. It often exceeded them. So... kudos to the team!",
            stats: [],
            quotes: [
              "Strong report storytelling really help us, PM, to use to convince our business stakeholders to drive impact — Product Manager"
            ]
          }
        ]
      },
      {
        id: "empowering-individual-growth",
        title: "Empowering Individual Growth & Career Development",
        sections: [
          {
            type: "quote",
            text: "There is a difference between motivating a team and stressing them out.",
            author: ""
          },
          {
            type: "intro",
            text: "Individual growth doesn't happen by pushing harder. It happens when the conditions are right and the goals feel personal."
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/goal-setting.jpg",
            caption: "Empowering individual growth through goal setting rooted in personal aspiration"
          },
          {
            type: "section",
            number: "1 |",
            title: "Growth Happens in Practice",
            subtitle: "",
            body: "Self-improvement isn't just theory. It requires actively applying new skills and mindsets to daily work. Real development comes from doing, reflecting, and adapting through real experiences, not just reading about them.\n\nIn practice, that looks like pairing team members with someone more expert in what they need, senior with junior, strength with weakness. And when hiring, the mindset is attracting candidates who can complement the team's existing gaps, not just add more of what's already there.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "Evaluate where standards are dropping before set ambitious goals",
            subtitle: "",
            body: "Clear, ambitious goals matter. But setting standards based on outliers sets the team up for failure. Before raising the bar, it's worth understanding where things are actually dropping first. Not everyone grows at the same pace, and that's not a problem to fix.",
            quotes: []
          },
          {
            type: "section",
            number: "3 |",
            title: "Establish Boundaries with Individual Goal Setting",
            subtitle: "",
            body: "Not everyone wants to grow at the same speed, and that's okay. Growth is ultimately individual responsibility. What a manager can do is keep the feedback loop active and make sure goal setting starts from personal aspiration first, then connects to the day to day work. Not everyone grows at the same pace, and that's not a problem to fix by the manager.",
            quotes: []
          },
          {
            type: "impact",
            body: "In the yearly Pulse Check, growth scored highest at 3.5/5 across all design teams. The number matters less than what it signals. For me it meant people felt supported in moving forward at their own pace.",
            stats: [],
            quotes: [
              "Risti maintains high standards for projects and team, even to herself. She's dedicated to her team's growth improvement. — Product Researcher"
            ]
          }
        ]
      },
      {
        id: "ai-embed-design-workflow",
        title: "AI-Embed Design Workflow Minimize *Language Friction & Quick Prototyping",
        sections: [
          {
            type: "intro",
            text: "We experimented with various AI tools. V0 by Vercel emerged as the most effective for our discovery and delivery process (because it's free, late 2025).\n\nBut tools alone don't shift a workflow. For this to work, PM, Designer, and Engineer all need an exploration mindset. A willingness to challenge how things get done and collaborate in ways that feel unfamiliar at first."
          },
          {
            type: "section",
            number: "1 |",
            title: "The Results of Using V0 as the Primary Delivery Tool",
            subtitle: "Pros",
            body: "It's proven to speed up both discovery and delivery.\n\nShared language between Design and PM: everyone speaks in UI flows and working interactions instead of static mockups and verbal descriptions.\n\nShared language between Design and Engineering: communication happens in code prototypes generated by AI. Less handoff friction, less misinterpretation.\n\nThe focus shifts from building layouts to validating ideas with users. Design and engineering converge faster.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "The Trade-off",
            subtitle: "Cons",
            body: "We noticed a lot of tweaking around editability and stylistic control. The output needed more grooming than expected, and that shifted some of the designer's role toward quality control rather than creation.\n\nAs of 2026, looking back, the flow is getting better. This reflection may change.",
            quotes: []
          }
        ]
      },
      {
        id: "remote-leadership",
        title: "Remote Leadership, on Building Culture Without Borders",
        sections: [
          {
            type: "intro",
            text: "Distance doesn't break teams. Invisible uncertainty does. That's the one thing a decade of remote work across Indonesia, the UK, and Germany made undeniably clear. The framework that helped comes down to three pillars:"
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/fun-bonding.jpg",
            caption: "Building culture without borders — remote rituals that keep teams human"
          },
          {
            type: "section",
            number: "1 |",
            title: "Radical Transparency",
            subtitle: "",
            body: "To support radical transparency, weekly structured updates keep blockers visible before they become blockers. Work in progress gets shared early, not when it's polished. A capacity map in Jira functions as a workload guide, not a surveillance tool. Everything lives in the cloud by default, Figma, Notion, all public and shareable. Each team member keeps a short \"How to Work with Me\" doc covering how they prefer feedback and when to reach them for urgent versus casual things.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "Autonomy & Purpose",
            subtitle: "",
            body: "Every task connects back to a shared team objective, so individual autonomy is backed by collective purpose, not just personal preference. The 2 to 3 hour timezone overlap between Southeast Asia and the UK becomes the golden window for high-impact synchronous work. Weekly 1:1s stay focused on wellbeing and personal support, not status updates.",
            quotes: []
          },
          {
            type: "section",
            number: "3 |",
            title: "Intentional Fun Ritual",
            subtitle: "",
            body: "Remote teams lose the watercooler. In an office you can suddenly meet peers during lunch, in the pantry, a hallway conversation, afternoon chat after hours, commuting together. In a remote setting none of that happens by accident. It has to be prepared, not waited for. Monthly social syncs with no work agenda. Shared traditions that build identity over time. Once, the team built a Spotify playlist together. Small thing. Stayed with people longer than most retrospectives did.",
            quotes: []
          }
        ]
      },
      {
        id: "facilitating-design-workshop",
        title: "Facilitating Design Workshop for Strategic Levers and Collaborative Culture",
        sections: [
          {
            type: "intro",
            text: "Workshops fail when the goal is unclear or co-owned by no one. The ones that work tend to have a sharp question going in, the right people in the room, and a clear output coming out. This is a reflection of what I do when facilitating workshops with PMs and Heads across strategic and cultural themes."
          },
          {
            type: "quote",
            text: "Great things in business are never done by one person. They're done by a team of people.",
            author: "Steve Jobs"
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/design-workshop.jpg",
            caption: "Cross department design workshop with sales, product, marketing, operations, data, and engineering."
          },
          {
            type: "section",
            number: "1 |",
            title: "Strategic Lever",
            subtitle: "Value creation and long-term thinking",
            body: "Thematic workshops focused on what actually moves the business. Examples include value creation sessions, long-term product roadmap planning, and hypothesis collection for experimentation. The goal is always a decision the team can act on, not a pile of sticky notes.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "Collaborative Culture",
            subtitle: "Making space between top-down and bottom-up",
            body: "Thematic workshops focused on how the team works together. Examples include roadmap check-ins that balance top-down direction with bottom-up input, and retrospectives across multiple departments. The format matters less than who is actually in the room and whether they feel safe enough to be honest.",
            quotes: []
          },
          {
            type: "section",
            number: "3 |",
            title: "My Principle as Facilitator",
            subtitle: "From kickoff to actionable item",
            body: "Sessions open with shared goal-setting so no one is guessing what we are trying to accomplish. Then the right frameworks get curated for the room, Value vs. Effort, Hypothesis Dumping, Ideation, to focus energy on the target. During the session the work is keeping that energy pointed at outcomes, not conversations that circle. At the end, output becomes clear next steps.",
            quotes: [
              "Always love to work with the design and research team especially for design workshops. Critical thinking partner I always looked up to. — Head of Product"
            ]
          }
        ]
      },
      {
        id: "data-design-alliance",
        title: "Data >< Design Alliance for Greater Impact",
        sections: [
          {
            type: "intro",
            text: "One thing I lean into as a design manager is a close partnership with the Data team. Qualitative and quantitative together drive results that neither can reach alone."
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/design-data.jpg",
            caption: "Data & Product Design producing actionable insight, Product Management influencing business strategy with user-focused value"
          },
          {
            type: "section",
            number: "1 |",
            title: "How the alliance works",
            subtitle: "Three roles, one feedback loop",
            body: "",
            quotes: []
          },
          {
            type: "image",
            url: "assets/portfolio-leadership/data-design-alliance.html",
            caption: "Data & Product Design produce actionable insight. Product Management influences business strategy with user-focused value."
          },
          {
            type: "section",
            number: "2 |",
            title: "What we built together",
            subtitle: "Reports that drove real decisions",
            body: "Reports and research that drove real decisions:\n\n- Identifying Loyal User Segments\n- Hypothesis Testing for Churn Predictors\n- Warehouse Fulfillment Time Optimisation\n- A/B Testing\n- and more",
            quotes: []
          },
          {
            type: "impact",
            body: "The collaboration improved purchasing efficiency and enhanced loyal segment retention. +16.5% conversion rate uplift, statistically significant at p-value 0.0026. 30% churn reduction in one business line through loyal segment strategy.",
            stats: [
              "+16.5% conversion rate uplift — statistically significant, p-value 0.0026",
              "−30% churn in 1 business line — through loyal segment strategy"
            ],
            quotes: [
              "Design team excels at strategizing team collaboration, ensuring clear actionable and effective facilitation between product, business, and data teams. — Sr. Data Manager"
            ]
          }
        ]
      }
    ]
  }
];
