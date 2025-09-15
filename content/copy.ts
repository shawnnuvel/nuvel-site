import { 
  hero, 
  howItWorks, 
  whatsInside, 
  pricing, 
  faq, 
  footer,
  problemSolution,
  howTeamsUse,
  deliverables,
  whyNuvel,
  updatedPricing,
  updatedFaq,
  methodsQA,
  socialProof
} from './trueinventor'

export const copy = {
  hero: {
    title: hero.title,
    subtitle: hero.subtitle,
    outcomeRow: '',
    primaryCTA: hero.primaryCta,
    secondaryCTA: hero.secondaryCta,
    trustLine: ''
  },

  socialProof: socialProof,

  problemSolution: {
    problem: problemSolution.problem,
    solution: problemSolution.solution
  },

  howTeamsUse: howTeamsUse,

  deliverables: deliverables,

  whyNuvel: whyNuvel,

  steps: {
    title: 'How it works',
    subtitle: 'Four simple steps',
    items: howItWorks.steps.map((step, index) => ({
      number: (index + 1).toString(),
      title: step.title,
      description: step.body
    }))
  },

  benefits: {
    title: whatsInside.title,
    subtitle: 'Deliverables (TrueInventor Dossier)',
    items: whatsInside.bullets.map((bullet, index) => ({
      title: bullet.split(':')[0] || `Feature ${index + 1}`,
      description: bullet.split(':').slice(1).join(':').trim() || bullet
    }))
  },

  pricing: {
    title: 'TrueInventor Dossier Pricing',
    subtitle: updatedPricing.banner,
    guarantee: updatedPricing.guarantee,
    compliance: whatsInside.note,
    enterpriseNote: pricing.footnote,
    std: updatedPricing.std,
    pro: updatedPricing.pro
  },

  faq: {
    title: 'FAQ',
    items: updatedFaq.map(item => ({
      question: item.q,
      answer: item.a
    }))
  },

  methodsQA: methodsQA,

  contact: {
    title: 'Get Your TrueInventor™ Dossier',
    subtitle: 'Request a dossier for your preferred vertical/company',
    email: 'hello@nuvel.ai',
    form: {
      title: 'Get started',
      fields: ['name', 'email', 'company', 'theme'],
      fallbackNote: 'Or email us directly at hello@nuvel.ai'
    }
  },

  // Legacy content kept for compatibility
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
    text: footer.disclaimer
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
      title: 'Sample Dossier',
      subtitle: 'This is a watermarked example',
      description: 'Request the full redacted PDF at hello@nuvel.ai.',
      note: 'Get a sample dossier button (mailto: link above).'
    }
  },

  // Email templates
  emails: {
    sampleRequest: {
      subject: 'Request sample dossier — TrueInventor Dossier',
      body: `Company name:
Technical domain:
Timeline:`
    },
    
    headerSampleRequest: {
      subject: 'Request sample dossier — TrueInventor Dossier',
      body: `Company name:
Technical domain:
Timeline:`
    },
    
    contactForm: {
      subject: 'Contact request — TrueInventor Dossier',
      body: `Name: 
Email: 
Company: 
Technical domain: `
    }
  }
} as const