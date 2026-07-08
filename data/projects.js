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
    tags: ["Ecommerce", "Design Strategy", "Omnichannel", "Ethnography", "Agriculture", "UX Research"],

    hook: "How do you reduce the cost of field officers when maintaining human services for every farmer is unsustainable?",

    situation: "Fish farmers in rural area order supplies by calling field officers by phone. One officer doesn't work 24 hours, and resulted in delays that orders. We built an app, called eFisheryku yet majority farmers found it frustrating and kept calling anyway to order a supplies. The company only counted on field officers, and field officers feels burnout due to so many tasks and it wasn't scaling.",

    insight: "90% of them were already on WhatsApp every day. But the app adoption is stagnant at 19%, We assumed every farmer would learned to use the app. We designed one solution and expected it to fit everyone. But It didn't.",

    direction: "Instead of forcing farmers into the app, we built a second path. WhatsApp for farmers who prefer it that build on top of exisiting habits. App for farmers who don't.\n\nI framed this with the team using BCA's model of interfacing they don't force everyone to mobile. Some customers go to the teller. Some use ATM. Some use the app. \n\nMe, my team, and head of design initiate to wrote the design strategy document to align product, marketing, data, and engineering. Since there's a tendenyc everyone was working in silos. We brought them together with framework: Value Creation vs. Value Capture or What farmers actually need versus what we want from them.\n\nIn that what we killed was the assumption that everyone can use an app. That was the real blocker. My contribution as Design Manager with a team of 8. We owned the strategy direction, did the field research, facilitated the cross-functional design workshop to align the team, and made the design calls for both WhatsApp and the app.",

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
    title: "Improving Price Perception in Hotel Booking Discovery",
    subtitle: "with Gestalt Principles",
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
    title: "Improving Warehouse Logistics Efficiency",
    subtitle: "Service Prototyping",
    company: "Warung Pintar",
    industry: "Supply Chain, Retail",
    year: "",
    role: "UX Researcher",
    tags: ["Service Design", "Data Analysis", "Service Prototyping", "Warehouse Operations"],
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

    contribution: "As UX Researcher. I ran field observation using timed tracking, identified the traveling bottleneck from data, designed the service prototyping session, accompanied the live rollout, and designed the picker app interface. Pickers came from diverse local backgrounds — some not fully fluent in Bahasa Indonesia. I designed the UI to be understood without depending on language, using visual cues that worked across literacy levels.",

    whatShifted: "Coldplay said \"if you never try, you'll never know.\" I came in with zero warehouse context. During service prototyping, too many variables in one experiment makes it hard to isolate what worked — that honesty shaped how I design experiments now.\n\nIt's a huge risk to build something untested when warehouse investment is on the line. So before touching the real warehouse, we ran a service prototype with the full team — VP, data scientists, PMs, and engineers — everyone felt the experience firsthand. That session surfaced things no diagram would have caught: the tools needed, the flow gaps. Each scale of test had its own objective and measurement. Mini zones built from data, dummy orders that replicated real profiles.",

    sectionImages: [
      { url: "https://static.wixstatic.com/media/242cb7_68b9577e5e5b43f2ba8c550838a39d3a~mv2.jpg",  caption: "Warung — the micro retail stores Warung Pintar serves",                        section: "situation", afterPara: 0 },
      { url: "https://static.wixstatic.com/media/242cb7_f69062528b57422ba517613f41f46bed~mv2.png", caption: "Picking duration correlates with SKU line variety — not quantity",             section: "insight" },
      { url: "https://static.wixstatic.com/media/242cb7_716a0c48ae634ab2990d3eb6d563f4f7~mv2.png", caption: "No pattern between quantity and duration. Variety is the real driver.",        section: "insight" },
      { url: "https://static.wixstatic.com/media/242cb7_091fea75ec054b76ad38bb38b6eaee63~mv2.png", caption: "Planning before the warehouse simulation",                                      section: "direction", afterPara: 1 },
      { url: "https://static.wixstatic.com/media/242cb7_7bf9baabc9b543fcbbb271cdcf0ddcd9~mv2.png", caption: "Cross-functional team acting as pickers and checkers",                         section: "direction", afterPara: 1 },
      { url: "https://static.wixstatic.com/media/242cb7_916a8b112d83419da4deeb1ca8a36501~mv2.png", caption: "Service prototyping strategy — each scale of test had its own objective",      section: "direction" },
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
    industry: "Consumer Electronics",
    year: "2014",
    role: "Design Researcher",
    tags: ["Trend Forecasting", "Design Speculation", "Design Research", "Ethnography", "Consumer Electronics"],

    hook: "On the next 4 years, what will happen to visual imagery product with the rise of digital photography?",

    impact: [
      "Forecast validated within 3 year. Instagram's Boomerang launched, echoing the same morphing-photo instinct",
      "Analog camera resurgence confirmed the predicted retro nuance trend",
    ],

    situation: "We came with so many proposals but the question that stick to us is, what if the boundary between physical and digital photos disappeared. Smartphone cameras were getting good and cheap. Storage was filling up fast. Instagram had just shown up. Nobody yet knew what came next.",

    insight: "6 out of 10 targeted consumers admitted their digital photos from 10 years ago were gone. The printed ones from the same decade were still sitting safely in a wardrobe. Digital was convenient. Physical was more lasting. People wanted both, and nothing was giving them both at once.",

    direction: "We ran the full ethnographic study, across 150 participants in Indonesia and Japan. We built a simple framework: look at the recent past trend, look at the present trend, project forward. Three repeating signals stood out which are a pull toward retro nuance, a growing storage problem, and a quiet preference for physical permanence.\n\nFrom there we explored a concept: lenticular photos, the kind that shift and move depending on the angle you view them. Physical, but alive. We tested reactions with three sample cards: a flat photo, a morphing lenticular photo, and a 3D lenticular photo. People were genuinely intrigued by the morphing one. It felt like the photo had a secret.\n\nWe explored building it end to end. NFC chip embedded in the printed photo, tap it with your phone, and it pulls the full photo series from the cloud. We even designed a 360 degree adjustable camera rig to capture the right angles for the lenticular effect.\n\nWhat we killed: mass production. Industrial lenticular printers needed heat processes and large material sizes, viable for ad campaigns, not for someone's family photo from a weekend trip. We never followed up on solving that cost problem, and the concept stayed at the prototype stage.",

    contribution: "As a Design Researcher. I synthesized the ethnographic research end to end across all 150 participants in both countries for the trend signals, and led the design concept from lenticular photo prototyping through to the NFC interaction model.",

    whatShifted: "The forecast held up. Boomerang launched on Instagram, built on the same morphing-photo instinct we'd prototyped earlier with physical cards. Analog cameras came back, exactly the retro nuance we'd flagged. I remember being genuinely amazed watching it happen in real time.\n\nWhat stuck with me long after this project ended was learning that trends move in cycles, not lines. What looks retro today repeats because people are wired to circle back to what felt good before. I still use that lens now. When something looks new, I ask what older pattern it's actually replaying.",

    heroImage: "assets/portfolio/casio-hero.mp4",

    sectionImages: [
      { url: "https://static.wixstatic.com/media/242cb7_8c0ed5b4e8a447f293d44a73fc42f031~mv2.gif",                   caption: "The lenticular concept: a photo that shifts and moves depending on viewing angle",                            section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_d6fe5dc389024891931ac46d0328f9be~mv2.png",                   caption: "Tap to connect: NFC chip links the printed photo to its full series in the cloud",                            section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_c30a698baede4a01871b4483987dc436~mv2.jpg",                   caption: "Exploring the end to end experience, from capture to print to interaction",                                    section: "direction" },
      { url: "assets/portfolio/lenticular-booth.jpg",                                                                                 caption: "Industrial lenticular printers, A modular camera rig to capture the lenticular effect",                     section: "direction" },
      { url: "https://static.wixstatic.com/media/242cb7_1a274806132d42d1ad30a1d48ef42cd9~mv2.png",                   caption: "Connected experience concept: tap, choose an action, link to cloud gallery",                                   section: "contribution" }
    ]
  },
  {
    id: "context-labs",
    type: "list",
    folderColor: "#ffffff",
    title: "Collective Case Study as Fractional UX Lead",
    company: "Context Labs",
    description: "As Fractional Design Lead, what i do was embedded AI design workflows while helping establish design expectations and the hiring roadmap for the first design team. Acting as a bridge between design and executive leadership for design strategy, product discovery, and design execution.",
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
            text: "In leadership, I apply the same logic I use in design: focus on what actually moves people. For me, that comes down to three principles to sustain a high-performing team which are Purpose, People, and Process."
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
        id: "directing-design-system",
        title: "Directing Design System & Illustration with Hyperlocal Concept",
        sections: [
          {
            type: "intro",
            text: "When I first joined, each designer had their own UI kit, complicating cross-project collaboration and causing issues for engineers. Facilitating company hypergrowth."
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
            body: "We unsung Hyperlocal as the main concept. Key activities that I facilitate included: Tinkering UI Design principles, UI audits, readability testing with the user, contrast color testing, establish close collaboration with engineering, branding teams, up until directed the execution by UI Designers & Illustrator.",
            quotes: []
          },
          {
            type: "impact",
            body: "How's the impact to company wide?",
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
            type: "image",
            url: "assets/portfolio-leadership/armor-ally.jpg",
            caption: "Bridging design and business by engaging non-designers at every level"
          },
          {
            type: "section",
            number: "1 |",
            title: "Set Business Goals as Common Ground",
            subtitle: "",
            body: "Designers with a business-aware mindset tend to contribute significantly. As a design leader, act as a 'translator' of business goals into actionable design strategies.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "Be an ally, not a barrier with rigid design approach",
            subtitle: "",
            body: "To build trust, I adapt my design approach based on what a stakeholder needs most — whether that is speed, visual appeal, or strategic alignment. While I pivot my methods to support them, I always keep user-centered design as the non-negotiable core value.\n\nBy becoming a stakeholder thinking partner can reduce the friction of top-down and bottom-up cultures.",
            quotes: []
          },
          {
            type: "section",
            number: "3 |",
            title: "Build spider web of stakeholder",
            subtitle: "",
            body: "I establish a structured system for myself and my senior team members to manage relationships across the company. This ensures we are systematically managing expectations at all levels and staying connected to every corner of the business.",
            quotes: []
          },
          {
            type: "section",
            number: "4 |",
            title: "Find shared non-work interests",
            subtitle: "",
            body: "At the end of the day, we are social creatures. I encourage bonding over shared interests like food or sports to build rapport. However, I don't force a connection. If the personal \"vibe\" isn't there, I keep the focus on high-value work conversations and prioritize stakeholders who are open and receptive.",
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
            text: "My peers noted that I excel in anticipatory planning especially during crises. My best practices include:"
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
            body: "My approach to damage control during restructuring and efficiency focuses on both people and context. While the business context can be learned, the most challenging aspect is managing changes in relational dynamics among people. The first rule is to keep team counterparts remain intact — like to keep IxD & PM tandem, unless it's last resort.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "Strategize with Realistic Optimism",
            subtitle: "",
            body: "I practice realistic optimism by striking a balance between the pessimism of the intellect and the optimism of the will to map out the risk, worst to best case scenarios. But along the way, keep celebrate small wins.\n\nFor managers, maintaining this balance is crucial, because team need you to stay strategic to navigate through challenging situations.",
            quotes: [
              "Your ability to stay calm even in stressful situations, has made working together a lot easier — Interaction Designer"
            ]
          },
          {
            type: "section",
            number: "3 |",
            title: "Provoke Transparency with Team",
            subtitle: "",
            body: "By doing this facilitate team members to understand situation as it is, ultimately building resilience by keeping everyone informed about the potential path forward.\n\nKnowing what to share directly, indirectly, even what to leave unsaid, all delivered in a timely manner.",
            quotes: [
              "Risti demonstrated emotional intelligence, even extending to her own manager (me!) — Head of Product Design"
            ]
          },
          {
            type: "impact",
            body: "How's the impact to the team? Pulse Check, among other design team we scored highest scores satisfaction in transparency, direction and empowerment (3.8/5), reflect ability to empower the team and provide clear guidance.",
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
            type: "intro",
            text: "\"Bad leaders stagnate. Good leaders determined to grow, great leaders grow the people around them, and in the process grow themselves\" - Adam Grant, Organizational Psychologist\n\nMy approach to raising the team bar centers on practical team growth."
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
            body: "Avoid excessive competition since it can divide — it's counterproductive.\n\nRather than pushing for individual wins, emphasize winning as a team.",
            quotes: [
              "What I've really valued is your consistent support and encouragement, which have created a really enjoyable room for me and teams to speed up our growth — Interaction Designer"
            ]
          },
          {
            type: "section",
            number: "2 |",
            title: "Emphasize Teamwork for High-Quality Work",
            subtitle: "",
            body: "Assign tasks based on individual strengths. Complement weaknesses with skills from other team members. Set team goals such as: (1) Actionable Insights (2) Quality of Deliverables. Manager + Team members contribute to ensure collective success.",
            quotes: []
          },
          {
            type: "impact",
            body: "How's the impact to the team? NPS Stakeholder reflect commitment to growth for excellence: Quality of Deliverables (8/10) from PMs, (9/10) from Engineering, indicating the teamwork not only meets, but often exceeds expectations.",
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
            type: "intro",
            text: "\"There is a difference between motivating team and stressing them out\"\n\nMy approach to raising the team bar centers on practical individual growth."
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
            body: "Pairing less experienced members with seasoned professionals, and attracting strong candidates.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "Evaluate where standards are dropping before set ambitious goals",
            subtitle: "",
            body: "I believe in setting clear, ambitious goals. It's crucial not to set standards based on outliers — pushing too hard can set the team up for failure.\n\nRecognize that not everyone wants to grow at the same pace.",
            quotes: []
          },
          {
            type: "section",
            number: "3 |",
            title: "Establish Boundaries with Individual Goal Setting",
            subtitle: "",
            body: "NOT everyone wants to grow, so growth is individual responsibility.\n\nManager ensures feedback loops are active and goal setting is rooted on the individual aspiration, then aligning with day to day project.",
            quotes: []
          },
          {
            type: "impact",
            body: "How's the impact to the team? Pulse Check — Growth scored the highest at (3.5/5) among other design team.",
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
            text: "We experimented with various AI tools, and V0 (Vercel) emerged as the most effective solution for our discovery and delivery process.\n\nThe Prerequisites for Success: For this to work Product Manager, Designer, and Engineer must maintain an \"exploration mindset.\" Shifting the workflow requires a willingness to challenge the status quo and collaborate in entirely new ways."
          },
          {
            type: "section",
            number: "1 |",
            title: "The Results of Using V0 as the Primary Delivery Tool",
            subtitle: "Pros",
            body: "It's proven to speed discovery and delivery process. Shared Language: Design + PM — All speak in UI flows & working interactions. Design + Engineering — Communicate in code prototypes generated by AI.\n\nFocus shifts from building layout to validating ideas with the users. Minimizes rework and misinterpretation; design & eng converge faster.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "The Trade-off",
            subtitle: "Cons",
            body: "We noticed a decline in job satisfaction as roles shifted primarily toward \"Quality Control\".",
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
            text: "With a decade of experience, including 7 years working remotely in Indonesia, and across the UK and Germany. I prioritize visibility to eliminate the uncertainty in distributed environments. My framework focuses on three pillars:"
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
            body: "Weekly Blockbusters: Structured updates focusing addressing blockers.\n\nWIP over Perfection: Encouraging over-communication and early-stage sharing to reduce silos.\n\nThe Capacity Map: Using Jira as a visual workload guide rather than a surveillance tool.\n\nCloud-First Workflow: Eliminating local files, all artifacts (Figma, Notion) are public and shareable by default.\n\nThe User Manual: Every team member maintains a \"How to Work with Me\" doc. This covers: How I prefer to receive feedback. My \"Emergency\" vs. \"Casual\" contact channels.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "Autonomy & Purpose",
            subtitle: "",
            body: "Goal Alignment: Connecting every task to a shared team objective to ensure individual autonomy is backed by collective purpose.\n\nThe \"Golden Window\": Maximizing the 2–3 hour timezone overlap (e.g., SE Asia and UK) for high-impact synchronous collaboration.\n\n1:1: Weekly \"pulse check\" meetings dedicated to well-being and personal support rather than just status updates.",
            quotes: []
          },
          {
            type: "section",
            number: "3 |",
            title: "Intentional Fun Ritual",
            subtitle: "",
            body: "Protected Social Syncs: Monthly non-work rituals designed to replicate \"watercooler\" spontaneity in a digital space.\n\nShared Traditions: Building team identity through collaborative activities. My team once created a Spotify playlist together.",
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
            text: "Led and facilitated workshops with PMs and Heads to drive strategic leverage across the organization."
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
      },
      {
        id: "data-design-alliance",
        title: "Data >< Design Alliance for Greater Impact",
        sections: [
          {
            type: "intro",
            text: "What sets me apart from other design managers is how I lean into a close partnership with the Data team to drive actionable results using qualitative and quantitative data."
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
            body: "Data Team quantifies qualitative hypotheses from Product Research. Product Researcher bridges storytelling and data to produce actionable insights — or finds the signal from the Data team in the field. IxD and UX Writer use funnel analysis to inform design decisions. On the other side, Product Manager gains confidence from having both qualitative and quantitative data to influence business strategy.",
            quotes: []
          },
          {
            type: "section",
            number: "2 |",
            title: "What we built together",
            subtitle: "Reports that drove real decisions",
            body: "Sample reports from our close collaboration on strategic levers include: Identifying Loyal User Segments and Hypothesis Testing for Churn Predictors. Each report started from a design or research hypothesis and ended as an input to product and business roadmaps.",
            quotes: []
          },
          {
            type: "impact",
            body: "The collaboration improved purchasing efficiency and enhanced loyal segment retention.",
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
