const projects = [
  {
    id: "offline-to-online",
    title: "Shaping Product Vision",
    subtitle: "with Offline to Online Design Strategy",
    company: "eFishery",
    industry: "Ecommerce, Agriculture",
    year: "2023",
    role: "Design Manager",
    impact: [
      "Uplift adoption of self-transaction behaviors by 35% — very challenging for low tech savvy users in rural conditions",
      "Released quick order feature that drove significantly higher conversion by +16.5%",
      "Contributed to a digital transformation strategy, resulting in 5,000 MAU",
      "Improved user acquired rates"
    ],
    situation: "Farmers in rural areas often have low signal and varying tech-savviness, leading to high costs for field team assistance. To reduce operational cost (OPEX) we (product, data, design, eng, marketing) tailored digital solutions that cater to different tech levels, across offline and online touch points.",
    solutionSpace: [
      "WhatsApp Chatbot for Low Tech-Savvy Segment — designed for areas with poor signal, it prioritizes only the essential features, reducing dependency on field teams while still impressing farmers.",
      "eFisheryKu App for High Tech-Savvy Segment — offering extensive features similar to e-commerce platforms style."
    ],
    contribution: "As Design Manager, I facilitated collaborative sessions to bridge local realities with a strategic framework. By aligning our product, marketing, data, and engineering teams, we focused on Value Creation vs. Value Capture. Field visits grounded us in determining strategic levers and design decisions.",
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
    subtitle: "Service Prototyping",
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
