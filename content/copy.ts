export const copy = {
  hero: {
    title: 'Identify Specialized Teams for Deal-sourcing',
    subtitle: 'Data reports of niche professionals with proven collaboration within a vertical. Trusted by top Corporate Venture & Corporate Development teams.',
    outcomeRow: '',
    primaryCTA: 'Get a sample report',
    secondaryCTA: '',
    trustLine: ''
  },

  steps: {
    title: 'How it works',
    subtitle: 'Three simple steps',
    items: [
      {
        number: '1',
        title: 'Pick your scope',
        description: 'Choose your search parameters: vertical (eg, Robotics, AI, Biotech), anchor employers (eg, OpenAI, AWS), geography, roles.'
      },
      {
        number: '2',
        title: 'Pods detection',
        description: 'Nuvel uses a graph of ~800+M employment stint data points to surface clusters of people with documented co-employment and/or co-created patents'
      },
      {
        number: '3',
        title: 'What\'s delivered',
        description: 'Report + Pod card that produces immediate and actionable data'
      }
    ]
  },

  benefits: {
    title: 'What\'s inside the report',
    subtitle: '',
    items: [
      {
        title: 'Executive Summary (1 page)',
        description: 'Top pods ranked with short reasons.'
      },
      {
        title: 'Pod Cards (1 page each)',
        description: 'Initials or full names, roles then/now, overlap periods, craft evidence (patents/role), confidence (HIGH/MED), and why it matters.'
      },
      {
        title: 'CSV export',
        description: 'Pod rows with date fields, confidence, and assumptions.'
      },
      {
        title: 'Methodology & definitions',
        description: 'Thresholds, layoff guard, and data sources.'
      },
      {
        title: 'Compliance',
        description: 'Based on historical public web sources. Supporting evidence only. Client owns decisions.'
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
    subtitle: 'One-off, no subscription.',
    packages: [
      {
        title: 'Baseline',
        price: '$4,000',
        description: 'per theme/company analysis (48h)',
        features: []
      },
      {
        title: '3-Pack',
        price: '$10,000',
        description: '(prepay)',
        features: []
      },
      {
        title: '10-Pack', 
        price: '$25,000',
        description: '(prepay)',
        features: []
      }
    ],
    addOns: [
      {
        title: 'Pod Dossier',
        price: '$2,000',
        description: 'deep dive on one pod'
      },
      {
        title: 'Intro-Path Map',
        price: '$1,500', 
        description: 'warm path suggestions'
      },
      {
        title: 'Acquihire Package',
        price: '$4,000',
        description: 'comp bands, retention risk, integration notes'
      }
    ],
    guarantee: 'Money-back/credit if <2 HIGH pods in scope.'
  },

  faq: {
    title: 'FAQ',
    items: [
      {
        question: 'What data sources do you use?',
        answer: 'We use historical public web sources to identify team overlaps and provide supporting evidence for your sourcing decisions.'
      },
      {
        question: 'Is this a legal verification or background check?',
        answer: 'No. It\'s supporting evidence for sourcing and strategy. You own decisions.'
      },
      {
        question: 'Do you cover my region/sector?',
        answer: 'Yes—specify theme and anchors (e.g., Vision/AR; AI infra; Robotics; Biotech).'
      },
      {
        question: 'How fast is delivery?',
        answer: '48 hours for the Baseline. Add-ons can extend by 1–2 days.'
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