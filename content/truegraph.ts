export const productName = "TrueGraph (by Nuvel)";

export const hero = {
  title: "TrueGraph finds real teams, not random profiles.",
  subtitle:
    "Nuvel's TrueGraph surfaces small teams of people who actually worked together at companies like Google and TSMC — with employment history and patent signals you can inspect.",
  bullets: [
    "2–5 person teams with verified overlap at the same employer.",
    "Global coverage across thousands of locations and tech domains.",
    "Built for corp dev, CVC, PE and technical due diligence."
  ],
  primaryCta: "Request TrueGraph demo",
  secondaryCta: "See example teams"
};

export const whatTrueGraphDoes = {
  title: "What TrueGraph actually does",
  intro: "TrueGraph surfaces small teams of people who really worked together, built from public employment histories and patents on a static baseline.",
  features: [
    {
      title: "Teams first",
      description: "You don't start with individuals, you start with small teams who have actually worked together.",
      bullets: [
        "2–5 people with 90+ day verified overlap",
        "Same employer, meaningful overlap period"
      ]
    },
    {
      title: "Evidence, not vibes",
      description: "Each team comes with roles, dates, locations, and patent signals where available.",
      bullets: [
        "Backed by links to public sources",
        "Employment history you can inspect"
      ]
    },
    {
      title: "Static, auditable baseline",
      description: "TrueGraph is built from a static historical cut of public data. It's designed for diligence and research, not live sourcing.",
      bullets: [
        "No scraping while you browse",
        "Same inputs every time you rerun a query"
      ]
    }
  ]
};

export const whoThisIsFor = {
  title: "Who TrueGraph is for",
  tiles: [
    {
      title: "Corp Dev / Strategy",
      description: "Check acqui-hire stories against reality.",
      bullets: [
        "See intact teams around an anchor company or theme",
        "Verify roll-up theses before you write a cheque"
      ]
    },
    {
      title: "CVC / VC investors",
      description: "Go beyond 'ex-Google' labels.",
      bullets: [
        "Spot operator teams and repeat collaborators",
        "Anchor on real co-work, not just logos"
      ]
    },
    {
      title: "PE / Growth",
      description: "See the people risk behind a platform thesis.",
      bullets: [
        "Find intact operating teams around key anchors",
        "Check how long they actually worked together"
      ]
    },
    {
      title: "R&D / IP strategy",
      description: "Tie inventors and teams together around specific themes.",
      bullets: [
        "Link patents back to real employment histories",
        "See which teams are driving a theme, not just names"
      ]
    }
  ]
};

export const demoTeams = {
  title: "Current demo teams",
  cards: [
    {
      title: "Google hero teams (US anchor)",
      bullets: [
        "40 teams and 87 current Google/Alphabet employees",
        "Teams of 2–4 people with a median ~7 year overlap",
        "26 countries represented, some teams include inventors"
      ]
    },
    {
      title: "TSMC chip teams (semiconductors)",
      bullets: [
        "14 teams and 32 people anchored on TSMC entities",
        "Small teams of chip, process and packaging engineers",
        "Patent fields attached where available"
      ]
    }
  ],
  note: "We're adding more presets around anchor companies and themes as we work with early design partners."
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
  intro: "TrueGraph is built from a static baseline of public employment and patent records. We turn that into teams using simple, transparent rules.",
  bullets: [
    "Data sources: historical public employment profiles plus patent data.",
    "Teams: 2–5 people with verified overlap at the same employer, usually 90+ days.",
    "Signals: roles, dates, locations and patent counts where available.",
    "Delivery: prebuilt Parquet indexes (people, experience, teams and team presets) that our API reads at query time.",
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

