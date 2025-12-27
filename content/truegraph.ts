export const productName = "TrueGraph (by Nuvel)";

export const hero = {
  title: "Power Semiconductor Devices IP & inventor maps for deal teams.",
  subtitle:
    "TrueGraph builds segment-level views of companies, countries, and inventors around Power Semiconductor Devices from a static public-data baseline.",
  primaryCta: "Join Power Semis beta",
  secondaryCta: "See example views"
};

export const whatTrueGraphDoes = {
  title: "What TrueGraph does",
  intro: "TrueGraph builds segment-level IP and talent maps from a static public-data baseline. Start from a segment like Power Semiconductors and see which companies and countries are active by patent and inventor counts over time.",
  features: [
    {
      title: "Segment-first views",
      description: "Start from a technical segment and see company × country and company × year breakdowns built from inventor employment histories plus patent data.",
      bullets: [
        "Company × country and company × year indexes per segment",
        "Built from inventor employment histories plus patent data"
      ]
    },
    {
      title: "Inventor evidence drawers",
      description: "When you click a company/year in the UI, you see the underlying inventors, their anchor company, roles, and related patents.",
      bullets: [
        "Top inventors per company with employment + patent evidence",
        "Pods/pairs shown as supporting evidence, not the main product"
      ]
    },
    {
      title: "Static baseline for diligence",
      description: "TrueGraph is built from a static 2010–2022 baseline for forensic diligence, not live scraping.",
      bullets: [
        "Static AS-OF date snapshot",
        "Designed for diligence and research, not live sourcing"
      ]
    }
  ]
};

export const whoThisIsFor = {
  title: "Who it's for",
  tiles: [
    {
      title: "Corp Dev",
      description: "Segment-level IP and talent signals for acquisition diligence.",
      bullets: [
        "See which companies are active in Power Semis by country and year",
        "Identify top inventors per company with employment + patent evidence"
      ]
    },
    {
      title: "CVC",
      description: "Segment-level IP and talent signals for investment theses.",
      bullets: [
        "Map company × country and company × year activity",
        "Assess people risk and technical depth"
      ]
    },
    {
      title: "PE/VC",
      description: "Segment-level IP and talent signals for deal teams.",
      bullets: [
        "Understand segment-level IP and talent landscape",
        "Identify key companies and inventors in Power Semis"
      ]
    },
    {
      title: "IP and R&D Strategy",
      description: "Segment-level IP and talent maps for strategic planning.",
      bullets: [
        "Company × country and company × year views per segment",
        "Top inventors per company with employment + patent evidence"
      ]
    }
  ]
};

export const demoTeams = {
  title: "Power Semis preset",
  description: "The first preset focuses on Power Semiconductor Devices and includes:",
  bullets: [
    "Tens of thousands of patents and tens of thousands of inventors",
    "Company × country and company × year breakdowns",
    "Top inventors per company with basic evidence"
  ],
  note: "We're adding more segment presets as we work with early design partners."
};

export const howItWorks = {
  title: "How TrueGraph works",
  steps: [
    {
      title: "Pick an anchor and theme",
      bullets: [
        "Choose an anchor company like Google or TSMC",
        "Optionally pick a theme such as chip teams or AI infra"
      ]
    },
    {
      title: "Filter teams",
      bullets: [
        "Filter by team size, overlap days, location and current employer",
        "Get a shortlist of teams that match your thesis"
      ]
    },
    {
      title: "Open the evidence",
      bullets: [
        "Inspect roles, dates, locations and patent counts",
        "Follow outbound links to public sources"
      ]
    }
  ]
};

export const dataAndMethod = {
  title: "Data and method",
  intro: "TrueGraph is built from a static baseline of public employment and patent records. We build segment-level indexes from inventor employment histories plus patent data.",
  bullets: [
    "Data sources: historical public employment profiles plus patent data.",
    "Segment indexes: company × country and company × year views built from inventor employment histories plus patent data.",
    "Inventor evidence: top inventors per company with employment + patent evidence, including pods/pairs as supporting evidence.",
    "Delivery: prebuilt segment indexes (company × country, company × year, inventor evidence) that our API reads at query time.",
    "Positioning: a signal layer to support your own diligence, not legal verification."
  ],
  disclaimer: "TrueGraph is a signal layer. It does not replace your own background checks or legal diligence."
};

export const statusAndAccess = {
  title: "Status and access",
  description: "TrueGraph is in private preview with a small set of design partners. We're running paid pilots and one-off analyses while we harden the product and the underlying indexes. If you want early access and a say in the roadmap, reach out.",
  cta: "Request early access"
};

export const faq = [
  {
    q: "Is TrueGraph live or static?",
    a: "Static. We work from a historical 'as-of' snapshot so you can treat outputs as a stable exhibit in your own work."
  },
  {
    q: "Where does the data come from?",
    a: "From historical public employment profiles and patent databases. We aggregate and structure it; we don't scrape private data."
  },
  {
    q: "Is this a recruiting tool?",
    a: "No. TrueGraph is aimed at corp dev, investors and strategy teams who care about who actually worked together, not at bulk recruiting."
  },
  {
    q: "What do you mean by 'teams'?",
    a: "Teams are 2–5 people who overlapped at the same employer for at least 90 days. Internally we call them pods, but in the UI we just say teams."
  },
  {
    q: "Can I export the raw data?",
    a: "In private preview we provide exports as part of paid pilots and analysis projects. Self-serve exports will come later if the product earns it."
  },
  {
    q: "What about privacy and compliance?",
    a: "We work with historical public data and treat TrueGraph as a research and analysis layer. You should always combine it with your own checks and internal policies."
  }
];

export const contact = {
  title: "Request early access to TrueGraph",
  subtitle: "Tell us about your use case and we'll get back to you.",
  email: "hello@nuvel.ai"
};



