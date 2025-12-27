import { 
  hero, 
  whatTrueGraphDoes,
  whoThisIsFor,
  demoTeams,
  howItWorks,
  dataAndMethod,
  statusAndAccess,
  faq,
  contact
} from './truegraph'

export const copy = {
  hero: {
    title: hero.title as string,
    subtitle: hero.subtitle as string,
    bullets: ('bullets' in hero ? hero.bullets : undefined) as string[] | undefined,
    primaryCTA: hero.primaryCta as string,
    secondaryCTA: hero.secondaryCta as string,
    trustLine: ''
  },

  whatTrueGraphDoes: whatTrueGraphDoes,

  whoThisIsFor: whoThisIsFor,

  demoTeams: demoTeams,

  steps: {
    title: howItWorks.title,
    subtitle: '',
    items: howItWorks.steps.map((step, index) => ({
      number: (index + 1).toString(),
      title: step.title,
      bullets: step.bullets
    }))
  },

  dataAndMethod: dataAndMethod,

  statusAndAccess: statusAndAccess,

  // Legacy fields for compatibility with other pages
  benefits: {
    title: demoTeams.title,
    subtitle: demoTeams.note || '',
    items: []
  },

  pricing: {
    title: 'Pricing',
    subtitle: 'Contact us for pricing information',
    guarantee: 'No subscriptions. Re-run or refund if we miss the agreed parameters.',
    compliance: '',
    enterpriseNote: '',
    std: {
      name: 'Standard',
      price: 'Contact us',
      description: 'Contact us for pricing details',
      footnote: ''
    },
    pro: {
      name: 'Extended',
      price: 'Contact us',
      description: 'Contact us for pricing details'
    }
  },

  methodsQA: {
    title: dataAndMethod.title,
    intro: dataAndMethod.intro,
    sections: [
      {
        title: 'Data sources',
        content: dataAndMethod.bullets[0]
      },
      {
        title: 'Team definition',
        content: dataAndMethod.bullets[1]
      },
      {
        title: 'Signals',
        content: dataAndMethod.bullets[2]
      },
      {
        title: 'Delivery',
        content: dataAndMethod.bullets[3]
      },
      {
        title: 'Positioning',
        content: dataAndMethod.bullets[4]
      }
    ],
    compliance: dataAndMethod.disclaimer,
    cta: statusAndAccess.cta
  },

  faq: {
    title: 'FAQ',
    items: faq.map(item => ({
      question: item.q,
      answer: item.a
    }))
  },

  contact: {
    title: contact.title,
    subtitle: contact.subtitle,
    email: contact.email,
    form: {
      title: 'Get started',
      fields: ['name', 'email', 'company', 'use_case'],
      fallbackNote: 'Or email us directly at hello@nuvel.ai'
    }
  },

  // Legacy content kept for compatibility (may be used by other pages)
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
    text: 'Based on historical public web sources. Supporting evidence only. Client owns decisions. Data cut-off: 2024-12-31.'
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
      title: 'Sample Dossier',
      subtitle: 'This is a watermarked example',
      description: 'Request the full redacted PDF at hello@nuvel.ai.',
      note: 'Get a sample dossier button (mailto: link above).'
    }
  },

  // Email templates
  emails: {
    sampleRequest: {
      subject: 'Request TrueGraph demo',
      body: `Company name:
Use case:
Timeline:`
    },
    
    headerSampleRequest: {
      subject: 'Request TrueGraph demo',
      body: `Company name:
Use case:
Timeline:`
    },
    
    contactForm: {
      subject: 'TrueGraph early access request',
      body: `Name: 
Email: 
Company: 
Use case: `
    }
  }
} as const
