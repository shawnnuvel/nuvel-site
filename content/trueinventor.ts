export const productName = "Nuvel TrueInventor™ Dossier";

export const hero = {
  title: "Stop cleaning patent exports. Get a decision-ready inventor dossier in 24 hours.",
  subtitle:
    "We turn messy patent lists into a verified, disambiguated people–patent–company dossier you can trust. Every row has a working registry link.",
  primaryCta: "See Sample",
  secondaryCta: "Order a Dossier",
};

export const howItWorks = {
  steps: [
    {
      title: "You define the scope",
      body:
        "Give us a domain (e.g., advanced packaging) or a company list. We also accept seed patents."
    },
    {
      title: "We disambiguate people & companies",
      body:
        "We match names against our global people/company profiles, merge variants, and build clean identities."
    },
    {
      title: "We verify registry links",
      body:
        "Every inventor–patent entry includes a working link to an official registry (USPTO/EPO/WIPO)."
    },
    {
      title: "You receive the dossier in 24 hours",
      body:
        "A single Excel workbook (plus a 2-page PDF brief) that's ready for immediate decision-making."
    }
  ]
};

export const whatsInside = {
  title: "What's in the Dossier",
  bullets: [
    "Single Excel workbook with 4 sheets: Summary, Inventors, Patents, Assignees",
    "Per-row audit trail: direct registry_url + retrieval timestamp",
    "Top inventors & collaboration pods (simple 'top co-inventors' column)",
    "Methods & QC: plain-English notes, coverage, and our accuracy guarantee"
  ],
  note:
    "Designed for research/strategy (R&D/CI). Not a legal product. Data cut-off: 2024-12-31."
};

export const pricing = {
  banner: "Pilot pricing for the first 10 customers",
  std: {
    name: "Standard Dossier",
    price: "$3,500",
    scope: "Up to 200 inventors or 1,000 patents in scope",
    sla: "Delivery: 24 hours (Mon–Fri). Rush 12 hours (+30%).",
    includes: [
      "Single Excel workbook + 2-page PDF brief",
      "Disambiguated inventors & harmonized assignees",
      "Per-row registry links (USPTO/EPO/WIPO; Google as backup)"
    ]
  },
  pro: {
    name: "Extended Dossier",
    price: "$6,000",
    scope: "Up to 1,000 inventors or 5,000 patents in scope",
    sla: "Delivery: 24 hours (Mon–Fri). Rush 12 hours (+30%).",
    includes: [
      "Everything in Standard",
      "Larger scope + denser collaboration pods",
      "Optional 20-min analyst walkthrough"
    ]
  },
  guarantee: [
    "Accuracy SLA: ≤5 errors per 1,000 inventor/assignee links or we re-run or refund.",
    "A 'working link' means a registry or WIPO page that loads and shows the number on the page."
  ],
  footnote:
    "No subscription required. Transparent, project-based pricing. Best-effort coverage; we disclose method and limitations."
};

export const faq = [
  {
    q: "Why not just use our patent platform export?",
    a:
      "Exports are a starting point. We deliver a finished, decision-ready dossier: duplicates merged, variants resolved, and every row linked to a registry page so you can trust it immediately."
  },
  {
    q: "How fresh is the data?",
    a:
      "Patents typically publish ~18 months after filing. We provide a forensic snapshot through 2024-12-31, verified against public registries."
  },
  {
    q: "Is this legally admissible?",
    a:
      "We're a research/strategy product. We include registry links and timestamps to support internal reviews and stakeholder confidence."
  },
  {
    q: "Do you include personal contact info?",
    a:
      "No. We include names as they appear on public patent records and company context where available. No emails or phone numbers."
  },
  {
    q: "What if a link doesn't resolve?",
    a:
      "We auto-replace with an alternate official source where possible, and count only working links toward your guarantee."
  },
  {
    q: "What happens if you miss something material?",
    a:
      "If we exceed the SLA error threshold or miss your stated scope, we re-run at no cost or provide a refund."
  }
];

export const footer = {
  disclaimer:
    "Based on historical public web sources. Supporting evidence only. Client owns decisions. Data cut-off: 2024-12-31."
};
