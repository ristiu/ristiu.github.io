const projects = [
  {
    id: "offline-to-online",
    folderColor: "#C2CCBE",
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

    // kept for project approach section
    solutionSpace: [
      "WhatsApp Chatbot for Low Tech-Savvy Segment — designed for areas with poor signal, it prioritizes only the essential features, reducing dependency on field teams while still impressing farmers.",
      "eFisheryKu App for High Tech-Savvy Segment — offering extensive features similar to e-commerce platforms style."
    ],
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
    ],
    strategyVol: 1,
    strategyTitle: "Reflection on self transaction's Beli Pakan as hygiene volume driver",
    strategyCardImage: "assets/images/o2o-strategy-card-opt.jpg",
    heroImage: "assets/images/efishery-hero.gif",
    screenshots: ["assets/images/o2o-whatsapp-opt.jpg"],
    images: []
  },
  {
    id: "reorder-lifecycle",
    folderColor: "#B8CED8",
    title: "",
    subtitle: "",
    company: "",
    industry: "",
    year: "",
    role: "",
    impact: [],
    situation: "",
    solutionSpace: [],
    contribution: "",
    projectPlanning: [],
    images: []
  },
  {
    id: "price-perception",
    folderColor: "#E4C4A4",
    title: "Improving Price Perception in Hotel Booking Discovery",
    subtitle: "with Gestalt Principles",
    company: "Traveloka",
    industry: "Pricing, Travel, Ecommerce",
    year: "",
    role: "",
    tags: ["Gestalt Principles", "Price Perception", "Hotel Booking", "Design Systems", "Travel", "Ecommerce"],
    heroImage: "assets/images/traveloka-hero.gif",
    impact: [
      "The pricing label hierarchy now streamlines all strategic partnerships and campaigns, integrating directly into the Traveloka pricing engine",
      "The design underwent escalation up to VP and CEO level, ensuring alignment with strategic goals and mitigating potential risk"
    ],
    situation: "Pricing is critical to driving transactions. Traveloka aimed to avoid making users promo-dependent, but acknowledged that best price is the deciding factor for +35M MAU. Without a proper system to display pricing labels based on prioritized rules, manual processes became a blocker for the company roadmap.",
    solutionSpace: [
      "Back-Office Solution — Defined a pricing label hierarchy framework based on pricing rules, with visual prominence for the best price vs. normal price, setting promo ranking later implemented in the pricing engine.",
      "Consumer Facing Solution — Applied Gestalt principles (Similarity & Proximity) to simplify information by grouping hotel-related details separately from pricing info. Designed bite-sized info chunks and color associations to improve UI comprehension. Photos were identified as a critical deciding factor and given prominent treatment."
    ],
    contribution: "",
    projectPlanning: [
      {
        label: "Before vs After",
        description: "Old and new hotel card design comparison",
        bold: true,
        image: "assets/images/price-perception-1.jpeg"
      },
      {
        label: "Pricing Label Hierarchy",
        description: "Framework for label rules implemented in pricing engine",
        bold: false,
        image: "assets/images/price-perception-2.jpeg"
      }
    ],
    images: []
  },
  {
    id: "warehouse-logistics",
    folderColor: "#EDE4A0",
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

    solutionSpace: [],
    projectPlanning: [],
    images: [],

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
    folderColor: "#C8C0B8",
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
    solutionSpace: [],
    projectPlanning: [],
    images: [],

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
    id: "service-prototyping",
    folderColor: "#EDE4A0",
    title: "Improving Warehouse Logistics Efficiency",
    subtitle: "with Service Prototyping",
    company: "Warung Pintar",
    industry: "Supply Chain, Retail, Warehousing",
    year: "",
    role: "",
    impact: [
      "Increased probable picking order efficiency by 1.3x when serving +40k MAU for Mom & Pop Business Owners",
      "During simulation, picker traveling time was significantly reduced"
    ],
    situation: "How can we reduce the traveling time during the warehouse picking process to improve order processing efficiency? Warung Pintar, a micro-retail technology company, enables digitalization for grassroots segments through digitized warungs (mom-and-pop shops). Traveling time was the longest part of the picking process, hindering timely delivery of orders. We found SKU lines (number of different items per order) correlated with longer picking times, while SKU quantity did not.",
    solutionSpace: [
      "Moved from discrete picking to cluster/batch picking and zone picking through service prototyping. All stakeholders — including data scientists, engineers, and business leads — participated to experience the new workflow firsthand, de-risking the cost of investing in untested solutions."
    ],
    contribution: "",
    projectPlanning: [
      {
        label: "Service Prototyping in Warehouse",
        description: "All stakeholders experienced the new picking workflow firsthand",
        bold: true,
        image: "assets/images/service-prototyping-1.jpeg"
      },
      {
        label: "Zone Picking Simulation",
        description: "Physical mapping of cluster and batch picking routes",
        bold: false,
        image: "assets/images/service-prototyping-2.jpeg"
      }
    ],
    images: []
  },
  {
    id: "visual-trends",
    folderColor: "#C8C0B8",
    title: "Forecasting Visual Product Trends",
    subtitle: "Japan & Indonesia Youth Segment",
    company: "Casio",
    industry: "Electronics Manufacturing",
    year: "2014",
    role: "",
    impact: [
      "In 2016, the trend forecast was successfully validated — marked by the emergence of similar product concepts and the resurgence of analogue cameras"
    ],
    situation: "Initiated in 2014, this project aimed to predict visual imagery product trends for the next 3 years. The Casio design and research team collaborated with members from Japan and Indonesia, conducting surveys with 150 participants across both countries.",
    solutionSpace: [
      "Pattern Identification — Retro trends in fashion, music, and digital aesthetics (e.g. photo filters) show cyclical patterns where older aesthetics appeal to newer generations. Smartphone cameras and social media (Instagram) have accelerated and globalized retro trends.",
      "Causal Factors — Smartphones transformed photography into an instant yet ubiquitous activity, leading to exponential data storage explosion.",
      "Industrial Manufacturing Feasibility — Observed potential design production opportunities as smartphones became the primary camera device, with CASIO as manufacturer and cloud storage innovations as context."
    ],
    contribution: "",
    projectPlanning: [
      {
        label: "Trend Research & Pattern Identification",
        description: "Survey of 150 participants across Japan and Indonesia",
        bold: true,
        image: "assets/images/visual-trends-1.jpeg"
      },
      {
        label: "Concept Framework",
        description: "Eliminating the boundary between analogue and digital photos",
        bold: false,
        image: "assets/images/visual-trends-2.jpeg"
      }
    ],
    images: []
  }
];
