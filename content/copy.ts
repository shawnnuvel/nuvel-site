export const copy = {
  hero: {
    title: 'Stop paging through patents. Start gathering experts.',
    subtitle: 'Nuvel graphs millions of raw data points into a verified, expert map you can act on immediately.',
    outcomeRow: '',
    primaryCTA: 'Get a report',
    secondaryCTA: '',
    trustLine: ''
  },

  steps: {
    title: 'How it works',
    subtitle: 'Four simple steps',
    items: [
      {
        number: '1',
        title: 'You provide seed patents or a domain description',
        description: 'Share your technical domain or specific patents to analyze.'
      },
      {
        number: '2',
        title: 'We build the expert map',
        description: 'We map inventors, co-inventor networks, and employment context.'
      },
      {
        number: '3',
        title: 'We verify public registry links',
        description: 'We verify links (EPO → WIPO → USPTO), flagging anything that doesn\'t resolve.'
      },
      {
        number: '4',
        title: 'You receive a pack within 48 hours',
        description: 'Get your research pack with verified data and registry links (24h rush available).'
      }
    ]
  },

  benefits: {
    title: 'What you get',
    subtitle: 'Deliverables (Research Pack)',
    items: [
      {
        title: 'Inventors in your domain',
        description: 'With patent IDs, titles, years'
      },
      {
        title: 'Co-inventor networks',
        description: 'Who published with whom'
      },
      {
        title: 'Relationships',
        description: 'Co-invention edges; optional co-employment edges where available'
      },
      {
        title: 'Methods and coverage metrics',
        description: 'Data sources, limitations, and registry link rates'
      },
      {
        title: 'Optional: 1-page PDF summary',
        description: 'Executive summary for stakeholders'
      }
    ]
  },

  pricing: {
    title: 'Research Pack — from $7,500',
    subtitle: 'Includes expert_map.csv, clusters_top.csv, edges.csv, readme.pdf, and Top-N registry-linked guarantee. 48-hour standard delivery.',
    guarantee: 'We guarantee a minimum number of registry-linked entries per pack (e.g., Top-100 linked) and clearly flag unlinked ones.',
    compliance: 'Employment data cutoff: Dec 31, 2024. We do not provide legal advice.',
    enterpriseNote: 'Need court-ready sourcing? Contact us for Enterprise.'
  },

  faq: {
    title: 'FAQ',
    items: [
      {
        question: 'Is this legally admissible?',
        answer: 'We provide factual data and public registry links. This is a research product, not legal advice. For litigation workflows, contact us about our Enterprise offering.'
      },
      {
        question: 'How fresh is the data?',
        answer: 'Patent registries are public and stable. Employment context is historical up to Dec 31, 2024, and flagged as such.'
      },
      {
        question: 'What happens when a link doesn\'t resolve?',
        answer: 'We include the patent identifier and mark the record as "unlinked." The pack\'s summary reports the exact coverage.'
      },
      {
        question: 'Can you include co-employment?',
        answer: 'Yes — where available, we add co-employment edges. You\'ll see these as a separate edge type in edges.csv.'
      }
    ]
  },

  contact: {
    title: 'Contact',
    email: 'hello@nuvel.ai',
    form: {
      title: 'Get started',
      fields: ['name', 'email', 'company', 'theme'],
      fallbackNote: 'Or email us directly at hello@nuvel.ai'
    }
  },

  // Patent Expert Maps specific content
  whyUseful: {
    title: 'Why this is useful',
    columns: [
      {
        title: 'R&D & Strategy',
        description: 'See who\'s building what, where. Map collaboration networks behind critical tech areas. Identify potential partners, advisors, and acquisition targets.'
      },
      {
        title: 'Competitive Intel',
        description: 'Understand competitor portfolios by people, not just counts. Find influential inventors at the edges of your domain.'
      }
    ],
    note: 'We provide factual, people-centric patent evidence — no predictions, no recommendations.'
  },

  quality: {
    title: 'Quality & Coverage',
    description: 'We run a registry-link check on a stratified sample of the output and report coverage in every pack. Our latest audit shows ~80–85% overall registry linkage, with EU/US ~95%+, JP ~85%, KR ~55–60%. We guarantee a minimum number of registry-linked entries (e.g., Top-100) and clearly flag unlinked ones.',
    note: 'Employment data cutoff: Dec 31, 2024. We do not provide legal advice.'
  },

  legalDisclaimer: {
    text: 'Nuvel provides factual data compilations and public registry references. No recommendations or legal advice are provided.'
  },

  guarantee: {
    short: 'If your scope returns <2 high-confidence teams: full refund or free re-run.',
    full: `Results Guarantee
If your defined scope yields fewer than 2 high-confidence teams, you choose: full refund or a free re-run on an adjacent theme.

Scope = theme, 3–6 anchor employers, region(s), roles, team size 2–5
High-confidence = day-level dates for all members, ≥90-day co-work at the same employer, dense connections (≥0.50), layoff spikes excluded, patent/role evidence.

Claim within 5 days of delivery at hello@nuvel.ai.
Exclusions: scopes changed after intake, outside intake limits, or unrelated requests.`,
    scopeHelper: 'Scope = theme, 3–6 anchor employers, region(s), roles, team size 2–5.'
  },

  // Page-specific content
  pages: {
    cohort: {
      title: 'Investor Cohort Verification',
      subtitle: 'Due diligence-ready team verification for investment committees',
      description: 'When evaluating portfolio companies or investment targets, understanding team composition and credentials is critical. Our Investor Cohort Verification service provides comprehensive documentation of team overlaps, employment histories, and professional credentials in a format designed for IC presentations.',
      features: [
        {
          title: 'Team Overlap Analysis',
          description: 'Identify shared employment history and professional connections between team members'
        },
        {
          title: 'Credential Verification', 
          description: 'Validate claimed positions, company affiliations, and tenure periods'
        },
        {
          title: 'Confidence Scoring',
          description: 'Each data point includes confidence levels and verification methodology'
        },
        {
          title: 'IC-Ready Format',
          description: 'Professional presentation format suitable for investment committee review'
        }
      ],
      process: [
        'Submit team roster with claimed positions and companies',
        'Automated verification against public professional data sources',
        'Manual QA and confidence scoring by our verification team',
        'Delivery of branded Evidence Pack with findings and methodology'
      ]
    },
    
    sample: {
      title: 'Sample Report',
      subtitle: 'This is a watermarked example',
      description: 'Request the full redacted PDF at hello@nuvel.ai.',
      note: 'Get a sample report button (mailto: link above).'
    }
  },

  // Email templates
  emails: {
    sampleRequest: {
      subject: 'Request sample pack — Patent Expert Maps',
      body: `Company name:
Technical domain:
Timeline:`
    },
    
    headerSampleRequest: {
      subject: 'Request sample pack — Patent Expert Maps',
      body: `Company name:
Technical domain:
Timeline:`
    },
    
    contactForm: {
      subject: 'Contact request — Patent Expert Maps',
      body: `Name: 
Email: 
Company: 
Technical domain: `
    }
  }
} as const