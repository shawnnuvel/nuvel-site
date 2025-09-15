export const productName = "Nuvel TrueInventor™ Dossier";

export const hero = {
  title: "The only patent data provider that delivers decision-ready inventor data",
  subtitle:
    "Clean, registry-verified inventor lists, ready for high stakes decisions",
  primaryCta: "Request a sample dossier",
  secondaryCta: "See pricing",
};

export const socialProof = {
  title: "Trusted by leading companies",
  subtitle: "Join forward-thinking teams who've moved beyond messy patent exports",
  logos: [
    { name: "Fortune 500 Tech Company", description: "R&D Strategy" },
    { name: "Global Semiconductor Leader", description: "Competitive Intelligence" },
    { name: "Top-Tier VC Firm", description: "Due Diligence" },
    { name: "IP Law Firm", description: "Litigation Support" }
  ],
  testimonial: {
    quote: "Finally, patent data we can trust immediately. No more days of cleanup.",
    author: "VP of Strategy",
    company: "Fortune 500 Tech Company"
  }
};

export const howItWorks = {
  steps: [
    {
      title: "You define the scope",
      body:
        "Give us a domain/vertical (e.g., advanced packaging) or a company list. We also accept seed patents."
    },
    {
      title: "We disambiguate people & companies",
      body:
        "We match names against our global people/company profiles datasets, merge variants, and build clean identities."
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

export const problemSolution = {
  problem: {
    title: "The Patent Data Export Problem",
    bullets: [
      "Duplicate inventors - 'J. Smith', 'John Smith', and 'Smith, John' counted as separate people",
      "Company subsidiaries listed as different companies",
      "Days of cleanup before anyone trusts the data"
    ]
  },
  solution: {
    title: "The Nuvel TrueInventor™ Edge",
    bullets: [
      "Clean inventor list with duplicates merged",
      "Companies consolidated (subsidiaries rolled up)",
      "Every row linked to official patent registry",
      "Ready-to-use Excel workbook + shareable web page"
    ]
  }
};

export const howTeamsUse = {
  title: "How Teams Use This",
  cards: [
    {
      title: "R&D Strategy: Build/Buy/Partner Decisions",
      outcome: "Defensible inventor shortlist you can act on this week",
      steps: [
        "Send domain terms or company list",
        "Get cleaned inventor list with proof links",
        "Share web brief with stakeholders"
      ],
      link: "See a redacted sample →"
    },
    {
      title: "Competitive Intelligence: Pressure-test Claims",
      outcome: "Registry-backed evidence to separate slideware from reality",
      steps: [
        "Filter by competitor + adjacent suppliers/universities",
        "Inspect cluster density and filing cadence",
        "Drop link-back proof into your exec deck"
      ],
      link: "See a redacted sample →"
    }
  ]
};

export const deliverables = {
  title: "What you get",
  bullets: [
    "Excel Workbook",
    "Web Brief",
    "Proof per-row",
    "QC Statistics"
  ],
  descriptions: [
    "4 sheets: Summary, Inventors, Patents, Assignees",
    "Simple visualization page you can share with your team",
    "Registry URLs + retrieval timestamps",
    "Precision stats and coverage notes for your scope"
  ],
  note: "Patents publish ~18 months after filing; we provide a forensic snapshot of the public record."
};

export const whyNuvel = {
  title: "Why Nuvel",
  bullets: [
    "Identity cleaning is the product (not a chore you do later).",
    "Auditability by default (every row has a source).",
    "Fixed price, fast turnaround, no subscription.",
    "Pilot accuracy target; if we miss spec, we re-run or refund."
  ]
};

export const updatedPricing = {
  banner: "Limited: Pilot pricing for first 10 customers",
  std: {
    name: "Standard Dossier",
    price: "$3,500",
    description: "Up to 1,000 patents or 200 inventors • 48-hour delivery • Excel + Web Brief + QC stats",
    footnote: "If your scope exceeds limits, we'll confirm an upgrade before we start."
  },
  pro: {
    name: "Extended Dossier", 
    price: "$6,000",
    description: "Up to 5,000 patents or 1,000 inventors • 48-hour delivery • Everything in Standard"
  },
  guarantee: "No subscriptions. Re-run or refund if we miss the agreed parameters."
};

export const updatedFaq = [
  {
    q: "Why not use Orbit/PatentSight/Espacenet exports?",
    a: "Those are great for search—but you still get a messy CSV. We deliver a cleaned, deduplicated, audit-ready dossier with a quality target and a re-run/refund guarantee."
  },
  {
    q: "How fresh is the data?",
    a: "Patents publish ~18 months after filing; we provide a forensic snapshot of the public record (not 'real-time')."
  },
  {
    q: "Do you include names—is that compliant?",
    a: "Yes—only names as they appear on public patent records. We don't include private contact details."
  },
  {
    q: "What if something's wrong?",
    a: "If we miss the agreed spec, we re-run at no charge or refund you. We also publish QC stats per dossier."
  },
  {
    q: "Is there a subscription?",
    a: "No. Order on demand."
  }
];

export const methodsQA = {
  title: "Methods & QA",
  intro: "How we turn messy public patent data into a decision-ready dossier.",
  sections: [
    {
      title: "Data sources",
      content: "Public patent registries; we include registry links per row."
    },
    {
      title: "Identity resolution",
      content: "We match names to our people/company profiles, cluster variants, and hand-review low-confidence cases."
    },
    {
      title: "Accuracy & guarantees",
      content: "Pilot accuracy target; we publish QC stats with every dossier. If we miss spec, we'll re-run or refund."
    },
    {
      title: "Data freshness",
      content: "Patents publish ~18 months after filing; this is a forensic snapshot."
    },
    {
      title: "Security & privacy",
      content: "No private contact info. We deliver via secure links and can sign NDAs."
    }
  ],
  cta: "Request a sample dossier",
  compliance: "Official registry publications are generally treated as self-authenticating public records; we link directly to those records and timestamp retrieval for traceability. For matters requiring certified copies, your counsel may still request official certifications."
};

export const footer = {
  disclaimer:
    "Based on historical public web sources. Supporting evidence only. Client owns decisions. Data cut-off: 2024-12-31."
};
