const projects = [
  {
    id: "offline-to-online",
    title: "Shaping Product Vision Through Omnichannel O2O Design Strategy",
    subtitle: "with Offline to Online Design Strategy",
    company: "eFishery",
    industry: "Agriculture · Ecommerce",
    year: "2023",
    role: "Design Manager with a team of 4",
    tags: ["Strategy", "Field Research", "Leadership", "Omnichannel"],

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
    heroImage: "assets/images/offline-to-online-2.jpeg",
    screenshots: ["assets/images/offline-to-online-1.jpeg"],
    images: []
  },
  {
    id: "reorder-lifecycle",
    title: "Accelerating the Re-Order Lifecycle",
    subtitle: "using Funnel Analysis",
    company: "eFishery",
    industry: "Ecommerce, Agriculture",
    year: "",
    role: "",
    impact: [
      "New flow produced higher conversion rate of confirmed orders compared to the regular flow (+16.5%, p-value 0.0026)",
      "Generated GMV IDR 9.77 billion within the first month of release"
    ],
    situation: "We observed a declining conversion rate from catalog to purchase across two primary segments — Cash (3.92%) and Paylater (4.77%). Agricultural cycles are predictable; farmers typically purchase the same supplies throughout a specific cultivation phase. The current search-from-scratch flow creates unnecessary friction. High intent was also lost when users searched for specific products only to find them out of stock, leading to purchase abandonment.",
    solutionSpace: [
      "Implemented a Reorder Feature that leverages historical transaction data. By showing personalized recommendations based on previous purchases, we shortcut the discovery phase — so farmers can bypass the catalog and move directly to checkout."
    ],
    contribution: "",
    projectPlanning: [
      {
        label: "Funnel Analysis",
        description: "Identifying drop-off points across Cash and Paylater segments",
        bold: true,
        image: "assets/images/reorder-lifecycle-1.jpeg"
      },
      {
        label: "Solution Design & Testing",
        description: "Reorder feature with personalised recommendations",
        bold: false,
        image: ""
      }
    ],
    images: []
  },
  {
    id: "price-perception",
    title: "Improving Price Perception in Hotel Booking Discovery",
    subtitle: "with Gestalt Principles",
    company: "Traveloka",
    industry: "Pricing, Travel, Ecommerce",
    year: "",
    role: "",
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
    id: "service-prototyping",
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
