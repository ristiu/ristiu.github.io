const projects = [
  {
    id: "offline-to-online",
    folderColor: "#ffffff",
    title: "Shaping Product Vision Through Omnichannel O2O Design Strategy",
    subtitle: "with Offline to Online Design Strategy",
    company: "eFishery",
    industry: "Agriculture",
    year: "2023",
    role: "Design Manager with a team of 4",
    tags: ["Ecommerce", "Strategy", "Omnichannel", "Field Research", "Agriculture", "UX Research"],

    hook: "How do you reduce the cost of field officers when maintaining human services for every farmer is unsustainable?",

    situation: "Fish farmers in rural East Java order supplies by calling field officers. One officer serves maybe 10 farmers, doesn't work 24 hours, and delays cost orders. We built an app — farmers found it frustrating and kept calling anyway. The company was paying for field officers to do work that could be handled differently, and it wasn't scaling.",

    insight: "We went to East Java expecting farmers couldn't use apps. That was wrong. 90% of them were already on WhatsApp every day. The problem wasn't capability — it was that we assumed everyone would want to use the app. We designed one solution and expected it to fit everyone. It didn't.",

    direction: "Instead of forcing farmers into the app, we built a second path. WhatsApp for farmers who prefer it. App for farmers who don't.\n\nI framed this with the team using BCA's model — they don't force everyone to mobile. Some customers go to the teller. Some use ATM. Some use the app. We did the same thing.\n\nI wrote the strategy document to align product, marketing, data, and engineering. Everyone was working in silos. I brought them together with one framework: Value Creation vs. Value Capture — what farmers actually need versus what we want from them.\n\nWhat we killed: the assumption that everyone can use an app. That was the real blocker.",

    contribution: "Design Manager with a team of 4. I owned the strategy direction, did the field research, wrote the cross-functional alignment document, and made the design calls for both WhatsApp and the app.",

    impact: [
      "+35% self-transaction adoption — up from 20% baseline, rural low-tech users",
      "+16.5% conversion uplift — quick order feature built on this strategy",
      "5,000 MAU — 6 months post-launch",
      "Field officer role shifted from order-taking to account management"
    ],

    whatShifted: "Before: a field officer spent most of their day taking orders. After: farmers could order at 2am when they realised they needed fish food.\n\nField officers stopped doing operational tasks and started doing relationship work — the kind that actually needs a person. The goal was never to make farmers use the product more. It was to make them need us less, for the things that didn't need us.",

    strategyVol: 1,
    strategyTitle: "Reflection on self transaction's Beli Pakan as hygiene volume driver",
    strategyCardImage: "assets/images/o2o-strategy-card-opt.jpg",
    heroImage: "assets/images/efishery-hero.gif",
    screenshots: ["assets/images/o2o-whatsapp-opt.jpg"],

    projectPlanning: [
      {
        label: "Kick off project",
        description: "output and outcome alignment, design and research process, roles involved, timeline estimation",
        bold: true,
        image: "assets/images/offline-to-online-2.jpeg"
      },
      {
        label: "Field Visit & Hypothesis Dumping",
        description: "",
        bold: false,
        image: "assets/images/offline-to-online-1.jpeg"
      },
      {
        label: "Prioritisation",
        description: "",
        bold: false,
        image: ""
      }
    ]
  },
  {
    id: "reorder-lifecycle",
    folderColor: "#ffffff",
    title: "",
    subtitle: "",
    company: "",
    industry: "",
    year: "",
    role: "",
    impact: [],
    situation: "",
    contribution: ""
  },
  {
    id: "price-perception",
    folderColor: "#ffffff",
    title: "Improving Price Perception in Hotel Booking Discovery",
    subtitle: "with Gestalt Principles",
    company: "Traveloka",
    industry: "Pricing, Travel, Ecommerce",
    tags: ["Interaction Design", "Gestalt Principles", "Pricing System", "Ecommerce"],

    hook: "How do you fix pricing perception for 35 million users when the team behind it is still managing labels manually?",

    impact: [
      "Pricing label hierarchy integrated directly into Traveloka's pricing engine — no more manual work per campaign",
      "Design escalated to VP of Product, Head of Pricing, and CEO — hotel contributed 50%+ of company revenue",
      "System now serves hotel-facing, internal, affiliate, and marketing campaigns in one unified framework",
      "Gestalt-based redesign grouped scattered information into clear clusters: hotel info, pricing info, credibility info"
    ],

    situation: "Pricing is the deciding factor for Traveloka's 35 million MAU when choosing a hotel. But there was no system behind it. Every campaign, partnership, and special event required manual label management across four different audiences: hotel-facing, internal, affiliate, and marketing. The hotel listing had the same problem. Information was scattered with no clear grouping, similar colors representing unrelated things, and pricing buried in visual noise. Research confirmed what the team suspected: photos and price are the first things users look at, and neither was getting the hierarchy it deserved.",

    direction: "We worked on two solutions in parallel. For the back-office, I designed a pricing label hierarchy framework — a ranking system that defined which label type wins when multiple rules apply, and how visual prominence should reflect that. This got integrated directly into the pricing engine so campaigns could launch without manual intervention.\n\nFor the consumer-facing side, I applied Gestalt principles of similarity and proximity to reorganize the hotel listing. Similar information was grouped together with consistent visual treatment: hotel details in one cluster, pricing in another, credibility signals in a third. Color associations were tightened so similar colors only appeared on related information. The result was bite-sized, scannable chunks instead of a wall of competing elements.",

    contribution: "Interaction Designer. I owned both the back-office framework and the consumer-facing redesign. The solution went through escalation to VP of Product, Head of Pricing, and CEO before launch. Hotel bookings represented more than 50% of Traveloka's revenue at the time, so even small changes required sign-off at the top.",

    whatShifted: "This was the first time I worked on something where the design decision carried direct revenue risk at scale. 50% of company revenue going through one product category makes every label choice feel less like a UI decision and more like a business policy.\n\nWhat I learned: a good pricing system is invisible to the user and irreplaceable to the business. The goal was never to make pricing more prominent. It was to make the right price feel obvious at the right moment, without the user noticing the system behind it.\n\nWorking inside a large corporation also taught me that small changes need a lot of alignment. Different levels, different business lines, all with legitimate stakes in the same decision. The escalation to VP and CEO wasn't bureaucracy. It was the system working as it should when the risk is real.",

    heroImage: "assets/images/traveloka-hero.gif",

    sectionImages: [
      { url: "assets/hotel-booking/gestalt-before-after-wireframe.png", caption: "Before: similar colors representing unrelated information, no clear grouping. After: Gestalt principles applied, grouped by type.", section: "situation" },
      { url: "assets/hotel-booking/gestalt-principles.png",             caption: "Gestalt law of Similarity and Proximity: the theoretical foundation for the redesign",                                              section: "direction" },
      { url: "assets/hotel-booking/hotel-card-old-vs-new.png",          caption: "Old hotel card design vs new. Pricing, credibility, and hotel info now in distinct visual clusters.",                               section: "direction" }
    ]
  },
  {
    id: "warehouse-logistics",
    folderColor: "#ffffff",
    title: "Improving Warehouse Logistics Efficiency",
    subtitle: "Service Prototyping",
    company: "Warung Pintar · Supply Chain",
    industry: "Supply Chain, Retail",
    year: "",
    role: "UX Researcher",
    tags: ["Service Design", "Field Research", "Data Analysis", "UX Research", "Supply Chain", "Warehouse Operations"],
    heroImage: "assets/images/warehouse-hero.gif",

    hook: "How do you speed up warehouse picking when the bottleneck isn't the people — it's the system they're trapped in?",

    impact: [
      "6.7x faster picking time — zone & cluster picking vs discrete singular picking",
      "Cluster picking adopted permanently in high-volume warehouses post-rollout",
      "Simpler method retained for new warehouses — right-sized by context, not forced to fit",
      "Picker app designed to work without relying on language fluency"
    ],

    situation: "Warung Pintar built its own distribution center to serve micro retail warungs — shops that order 4x more SKU lines than typical e-commerce. The original picking method had one picker handling one order at a time. As order volume grew, pickers were overwhelmed while checkers sat idle waiting. The system wasn't broken — it was just designed for a scale that no longer existed.",

    insight: "Traveling between warehouse locations — not searching, not picking — took the longest time. Data confirmed it: picking duration correlated with SKU line variety, not quantity. A picker walking to collect 3 different items took longer than one collecting 100 units of the same item. The problem wasn't speed. It was distance.",

    direction: "We started with zero context on warehouse operations. Desktop research surfaced several picking methods — but none were obviously right for Warung Pintar's unique order profile. We mapped them on two axes: order volume and territory. That gave us the direction: from discrete singular picking to zone and cluster/batch picking.\n\nBefore touching the real warehouse, we ran a service prototype — VP, data scientists, PMs, and engineers all became pickers and checkers for a day. Everyone felt the experience firsthand. That session surfaced things no diagram would have caught.\n\nWhat we killed: the assumption that one picking method could work across all warehouse types. High-volume warehouses got cluster picking. New warehouses kept the simpler flow.",

    contribution: "UX Researcher. I ran field observation using timed tracking, identified the traveling bottleneck from data, designed the service prototyping session, accompanied the live rollout, and designed the picker app interface. Pickers came from diverse local backgrounds — some not fully fluent in Bahasa Indonesia. I designed the UI to be understood without depending on language, using visual cues that worked across literacy levels.",

    whatShifted: "Before: checkers played Mobile Legend waiting for pickers who were exhausted walking the full warehouse alone. After: the workload balanced because the system matched how the warehouse actually operated.\n\n\"But if you never try, you'll never know.\" I came into this with zero warehouse context. What I learned: too many variables in one experiment makes it hard to isolate what actually worked. That honesty shaped how I design experiments now.",

    sectionImages: [
      { url: "https://static.wixstatic.com/media/242cb7_68b9577e5e5b43f2ba8c550838a39d3a~mv2.jpg",  caption: "Warung — the micro retail stores Warung Pintar serves",                        section: "situation" },
      { url: "https://static.wixstatic.com/media/242cb7_f69062528b57422ba517613f41f46bed~mv2.png", caption: "Picking duration correlates with SKU line variety — not quantity",             section: "insight" },
      { url: "https://static.wixstatic.com/media/242cb7_716a0c48ae634ab2990d3eb6d563f4f7~mv2.png", caption: "No pattern between quantity and duration. Variety is the real driver.",        section: "insight" },
      { url: "https://static.wixstatic.com/media/242cb7_47ac1be737bd42f69daeb83fd79b0edf~mv2.png", caption: "Mapping picking methods: order volume vs territory",                           section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_916a8b112d83419da4deeb1ca8a36501~mv2.png", caption: "Service prototyping strategy — each scale of test had its own objective",      section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_091fea75ec054b76ad38bb38b6eaee63~mv2.png", caption: "Planning before the warehouse simulation",                                      section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_7bf9baabc9b543fcbbb271cdcf0ddcd9~mv2.png", caption: "Cross-functional team acting as pickers and checkers",                         section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_148734a84e524d9e93c52d6b2760e0b2~mv2.png", caption: "Field observation during production rollout",                                   section: "contribution" },
      { url: "https://static.wixstatic.com/media/242cb7_f68d87b518304760908d0f446d7f5589~mv2.png", caption: "Timed activity tracking using Google Sheets script",                           section: "contribution" },
      { url: "https://static.wixstatic.com/media/242cb7_4d3f607b4ea7412a932be163a273bf5c~mv2.png", caption: "Sorting to rack: a redundant step consuming 30–50% of picker time",            section: "contribution" },
      { url: "https://static.wixstatic.com/media/242cb7_9a3b2fbd544341d68cac703d7188177b~mv2.png", caption: "Picker app — designed for visual clarity across literacy levels",              section: "contribution" },
      { url: "https://static.wixstatic.com/media/242cb7_bfff809fd4ea400dab78049817081f12~mv2.png", caption: "V2 zone & cluster picking: 6.7x faster than V1 discrete singular picking",    section: "whatShifted" }
    ]
  },
  {
    id: "product-trends",
    folderColor: "#ffffff",
    title: "Forecasting Visual Product Trends",
    subtitle: "Japan & Indonesia Youth Segment",
    company: "Joint venture: Casio Design Japan, Chiba University, Institut Teknologi Bandung",
    industry: "Design Research, Consumer Electronics",
    year: "2014",
    role: "Design Researcher",
    tags: ["Trend Forecasting", "Ethnography", "Design Speculation", "Design Research", "Consumer Electronics"],

    hook: "What happens when you ask 150 people across two countries the same question: what will you do with your photos two years from now?",

    impact: [
      "Forecast validated within a year. Instagram's Boomerang launched, echoing the same morphing-photo instinct",
      "Analog camera resurgence confirmed the predicted retro nuance trend",
      "150 participants studied across Indonesia and Japan. Full ethnographic ownership",
      "Concept never commercialized, but the trend signal it was built on proved accurate"
    ],

    situation: "Casio Design Japan, Chiba University, and Institut Teknologi Bandung partnered to ask a forward looking question. What if the boundary between physical and digital photos disappeared. Smartphone cameras were getting good and cheap. Storage was filling up fast. Instagram had just shown up. Nobody yet knew what came next.",

    insight: "People weren't just taking more photos. They were quietly mourning the ones they lost. 6 out of 10 participants admitted their digital photos from 10 years ago were gone. The printed ones from the same decade were still sitting safely in a wardrobe. Digital was convenient. Physical was permanent. People wanted both, and nothing was giving them both at once.",

    direction: "I ran the full ethnographic study myself, across 150 participants in Indonesia and Japan. We built a simple framework: look at the recent past, look at the present, project forward. Three repeating signals stood out: a pull toward retro nuance, a growing storage problem, and a quiet preference for physical permanence.\n\nFrom there we explored a concept: lenticular photos, the kind that shift and move depending on the angle you view them. Physical, but alive. We tested reactions with three sample cards: a flat photo, a morphing lenticular photo, and a 3D lenticular photo. People were genuinely intrigued by the morphing one. It felt like the photo had a secret.\n\nWe explored building it end to end. NFC chip embedded in the printed photo, tap it with your phone, and it pulls the full photo series from the cloud. We even designed a 360 degree adjustable camera rig to capture the right angles for the lenticular effect.\n\nWhat we killed: mass production. Industrial lenticular printers needed heat processes and large material sizes, viable for ad campaigns, not for someone's family photo from a weekend trip. We never followed up on solving that cost problem, and the concept stayed at the prototype stage.",

    contribution: "Design Researcher. I owned the ethnographic research end to end across all 150 participants in both countries, synthesized the trend signals, and led the design concept from lenticular photo prototyping through to the NFC interaction model.",

    whatShifted: "The forecast held up. Boomerang launched on Instagram, built on the same morphing-photo instinct we'd prototyped earlier with physical cards. Analog cameras came back, exactly the retro nuance we'd flagged. I remember being genuinely amazed watching it happen in real time.\n\nWhat stuck with me long after this project ended wasn't the lenticular photo itself. It was learning that trends move in cycles, not lines. What looks retro today repeats because people are wired to circle back to what felt good before. I still use that lens now. When something looks new, I ask what older pattern it's actually replaying.",

    heroImage: "assets/images/casio-hero.gif",

    sectionImages: [
      { url: "https://static.wixstatic.com/media/242cb7_5c2b375bb3dd46e58ba5e5bc0b535be1~mv2.png",                   caption: "Tracking trend signals across past and present to project forward",                                             section: "situation" },
      { url: "https://static.wixstatic.com/media/242cb7_89aa46a90c4f40b3a5dfcd081ad2559b~mv2_d_4032_3024_s_4_2.png", caption: "Participants reproduced several takes per moment, then kept only the best one",                                 section: "insight" },
      { url: "https://static.wixstatic.com/media/242cb7_8c0ed5b4e8a447f293d44a73fc42f031~mv2.gif",                   caption: "The lenticular concept: a photo that shifts and moves depending on viewing angle",                            section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_d6fe5dc389024891931ac46d0328f9be~mv2.png",                   caption: "Tap to connect: NFC chip links the printed photo to its full series in the cloud",                            section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_c30a698baede4a01871b4483987dc436~mv2.jpg",                   caption: "Exploring the end to end experience, from capture to print to interaction",                                    section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_95020ef2345141d08d8e739ab6fb7650~mv2.png",                   caption: "Industrial lenticular printers required heat processing and large material, too costly for personal use",         section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_6b429834df9a432aab775ef77defbfde~mv2.png",                   caption: "A modular camera rig designed to capture the angles needed for the lenticular effect",                          section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_1a274806132d42d1ad30a1d48ef42cd9~mv2.png",                   caption: "Connected experience concept: tap, choose an action, link to cloud gallery",                                   section: "contribution" }
    ]
  },
  {
    id: "context-labs",
    type: "list",
    folderColor: "#ffffff",
    title: "Collective Case Study as Fractional UX Lead",
    company: "Context Labs · Design Consultancy",
    heroImage: "assets/images/logo-context-labs.png",
    description: "As Fractional Design Lead, embedded AI design workflows while helping establish design expectations and the hiring roadmap for the first design team. Acting as a bridge between design and executive leadership for design strategy, product discovery, and design execution.",
    clients: [
      {
        client: "HAND's by Japan Foundation",
        industry: "Institution",
        description: "Facilitated online Design Thinking workshop for 80+ participants during the pandemic, focused on plastic research and sustainable design methods."
      },
      {
        client: "Epsylon",
        industry: "Ads Management & SysAd",
        description: "Led end-to-end UX redesign for a 30-year-old enterprise advertising platform. Conducted UX audit, established a Design System, and validated changes through usability testing on highest-risk operational flows."
      },
      {
        client: "Pintaria",
        industry: "Edutech",
        description: "Design research to improve conversion rate. Product iteration to capture revenue from Kartu Prakerja participants."
      },
      {
        client: "Wisataone",
        industry: "Travel",
        description: "UI design for Europe trip planning. Shipped."
      },
      {
        client: "Vaya Constellar",
        industry: "Company Branding",
        description: "Brand identity and logo for a sales strategy and distribution partner. Deliverables: brand system aligned to their positioning as a trusted end-to-end commercial partner."
      }
    ]
  },
  {
    id: "leadership",
    type: "article",
    folderColor: "#ffffff",
    title: "Leadership and Team Management Principle",
    subtitle: "Build High Performing Team",
    company: "eFishery · Design Leadership",
    tags: ["Leadership", "Team Management", "Design Ops"],
    heroImage: "",
    articleBg: "#4A5AE8",
    articles: [
      {
        id: "high-performing-team",
        title: "Leadership and Team Management to Build High Performing Team",
        sections: [
          {
            type: "intro",
            text: "In leadership, I apply the same logic I use in design: focus on what actually moves people, not what looks good on a framework. For me, that comes down to three principles to sustain a high-performing team — Purpose, People, and Process."
          },
          {
            type: "image",
            url: "assets/leadership/leadership-principles.png",
            caption: "Purpose, People, Process — the three principles I use to sustain a high-performing team"
          },
          {
            type: "section",
            number: "1 |",
            title: "Purpose",
            subtitle: "Shared sense of direction",
            body: "I align the team around a clear vision, strategy, and direction. By setting ambitious yet achievable challenges through a strength-based approach, I encourage outcomes that are both portfolio-worthy for the individual and high-impact for the collective.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "People",
            subtitle: "Psychological safety as a foundation",
            body: "I facilitate an environment where team members feel safe to share ideas, take risks, and stay playful. Through regular 1:1s, I aim to reduce power dynamics and build genuine openness by getting to know the person behind the role.",
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
            body: "I embed reflection and retrospectives into our workflow, turning feedback into a mechanism for intentional, continuous improvement. High-quality output is our primary way to earn trust across the organization. To manage this I establish a spider web framework for the team and senior design members to manage relationships systematically. This approach ensures we are managing expectations at all levels.",
            quotes: [
              "Risti is a high performer, that holds to the farmer-first vision and incorporates it with company strategy. — CPO"
            ]
          },
          {
            type: "impact",
            body: "Through transparency and supportive leadership, 85% of collaborators and team members enjoy a productive partnership that consistently drives objectives as a team.",
            stats: [
              "PM: 8/10 — 41 respondents from Product, Engineering, Data and Marketing",
              "Engineering: 9/10"
            ],
            note: "Measured as proof of a high-performing team, not a delusional claim",
            quotes: [
              "Risti's team has the capacity to own the goal and the problem. They help PMs drive the business. — Sr. Product Manager"
            ]
          }
        ]
      },
      {
        id: "facilitating-design-workshop",
        title: "Facilitating Design Workshop for Strategic Levers and Collaborative Culture",
        sections: [
          {
            type: "intro",
            text: "Led and facilitated workshops with PMs and Heads to drive strategic leverage across the organization."
          },
          {
            type: "image",
            url: "assets/leadership/design-workshop.png",
            caption: "Cross department design workshop with sales, product, marketing, operations, data, and engineering."
          },
          {
            type: "section",
            number: "1 |",
            title: "Strategic Lever",
            subtitle: "Value creation and long-term thinking",
            body: "Workshops built around what actually moves the business — not just output. We mapped long-term roadmaps, surfaced hypotheses, and tied every idea back to a real lever. The goal was always a decision the team could act on.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "Collaborative Culture",
            subtitle: "Making space between top-down and bottom-up",
            body: "Cross-functional check-ins with product, engineering, data, marketing, and design. Retrospectives built to make it safe to say what isn't working. The format matters less than who's actually in the room.",
            quotes: []
          },
          {
            type: "section",
            number: "3 |",
            title: "My Approach as Facilitator",
            subtitle: "From kickoff to action in four moves",
            body: "I open with shared goal-setting so no one's guessing what we're trying to accomplish. Then I curate the right frameworks — Value vs. Effort, Hypothesis Dumping, Ideation — to focus the room. During the session I keep energy pointed at the target, not the conversation. At the end, output becomes clear next steps, not a pile of sticky notes.",
            quotes: [
              "Always love to work with the design and research team especially for design workshops. Critical thinking partner I always looked up to. — Head of Product"
            ]
          }
        ]
      }
    ]
  }
];
