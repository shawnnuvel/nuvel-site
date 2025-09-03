export const copy = {
  hero: {
    title: 'Identify specialized teams for strategic investments',
    subtitle: 'Evidence-based pod reports (2–5 people) with verified co-work history. Delivered in 24–48 hours. Data cut-off: 2024-12-31.',
    outcomeRow: '',
    primaryCTA: 'Get sample',
    secondaryCTA: 'How it works',
    trustLine: ''
  },

  steps: {
    title: 'How it works',
    subtitle: 'Three simple steps',
    items: [
      {
        number: '1',
        title: 'Set your scope',
        description: 'Choose your vertical (e.g., AI infra, robotics), anchor employer(s), region(s), and roles.'
      },
      {
        number: '2',
        title: 'We detect proven teams',
        description: 'Nuvel runs proprietary graph algorithms across ~800+M employment-stint records to surface thematic clusters of professionals with co-work experience and patent/role evidence (if available).'
      },
      {
        number: '3',
        title: 'You get the exhibit',
        description: 'Board-ready report + pod cards in 48h (24h rush). Each pod shows dates, confidence, and a data freshness band.'
      }
    ]
  },

  benefits: {
    title: 'What\'s inside',
    subtitle: '',
    items: [
      {
        title: 'Verified pods (2–5)',
        description: 'With ≥90-day overlap, team-density score, layoff-filter status.'
      },
      {
        title: 'Names + identity anchors',
        description: 'Nuvel Person ID, headline snippet, last two employers, country/city.'
      },
      {
        title: 'PDF + CSV',
        description: 'Clear "How to read this" page, 24–48h turnaround.'
      }
    ]
  },

  method: {
    title: 'Method',
    items: [
      'Real co-work: ≥90 days together at the same employer; pod size 2–5; dense ties (≥1 triangle).',
      'Craft evidence: co-inventor/patent class links or strong role/topic coherence.',
      'Layoff guard: we down-rank or exclude pods inside large layoff spikes.'
    ]
  },

  pricing: {
    title: 'Pricing',
    subtitle: 'On-demand reports. No subscriptions. 24–48h delivery.',
    // 3-tier "Good-Better-Best" improves conversion and average order value. Harvard Business Review
    packages: [
      {
        title: 'GOOD — Pods Report',
        price: '$4,000',
        description: '2–5 person teams with proven collaboration.',
        cta: 'Get sample',
        plan: 'good',
        popular: false
      },
      {
        title: 'BETTER — Scouting Bundle',
        price: '$5,500',
        description: 'Pods + warm organizational bridges.',
        cta: 'Get sample',
        plan: 'better',
        popular: true
      },
      {
        title: 'BEST — IC-Ready Bundle',
        price: '$6,000',
        description: 'Pods + board slides + pilot brief.',
        cta: 'Get sample',
        plan: 'best',
        popular: false
      }
    ],
    addOns: [
      {
        title: 'Pod Dossier',
        price: '$1,500',
        description: 'Deep dive on one pod.'
      },
      {
        title: 'Organizational Bridges Kit',
        price: '$2,000',
        description: 'Warm paths via mutual connections.'
      },
      {
        title: 'IC Slide Pack',
        price: '$1,000',
        description: '5 board-ready slides.'
      }
    ],
    moreAddOns: [
      {
        title: 'BU Pilot Brief',
        price: '$1,500',
        description: '1-page BU sponsor brief with pilot angles.'
      },
      {
        title: 'Timing Risk Signal',
        price: '$1,000',
        description: 'Historical timing indicator for competitive interest (CSV).'
      },
      {
        title: 'Theme Expansion Pack',
        price: '$2,500',
        description: '3–5 more pods from adjacent themes (PDF + CSV).'
      }
    ],
    guarantee: 'Money-back/credit if <2 HIGH pods in scope.'
  },

  faq: {
    title: 'FAQ',
    items: [
      {
        question: 'How fresh is the data?',
        answer: 'We analyze historical records through Data cut-off: **2024-12-31** for repeatability. Some profiles are fresher, some older. We focus on evidence of past collaboration (team chemistry), not real-time tracking.'
      },
      {
        question: 'What is a "high-confidence team"?',
        answer: '2–5 people who worked together 90+ days, with over half of teammate pairs overlapping in the same org/time window, day-precise dates, and no mass-layoff timing.'
      },
      {
        question: 'What does "team density" mean?',
        answer: 'Of all possible teammate pairs in a pod, the share that overlapped together in the same org/window. Higher density = tighter, real team.'
      },
      {
        question: 'Are you a background check?',
        answer: 'No—this is historical team analysis for investment/strategy, not a consumer report.'
      },
      {
        question: 'Can you include profile links?',
        answer: 'By default we use identity anchors. With NDA/consent, we can include public profile links.'
      },
      {
        question: 'What if you find fewer pods than promised?',
        answer: 'You choose a full refund or a free one-time re-run with widened scope.'
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

  compliance: {
    text: 'Based on historical public web sources. Supporting evidence only. Client owns decisions.'
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
      subject: 'Sample request — Spinout Origins Baseline',
      body: `Company name:
Theme(s):
Timeline:`
    },
    
    headerSampleRequest: {
      subject: 'Sample request — Spinout Origins Baseline',
      body: `Company name:
Theme(s):
Timeline:`
    },
    
    contactForm: {
      subject: 'Contact request — Spinout Origins Baseline',
      body: `Name: 
Email: 
Company: 
Theme: `
    }
  }
} as const