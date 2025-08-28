export const copy = {
  hero: {
    title: 'Prove who actually worked together',
    subtitle: 'An attachable management-team overlap exhibit for Private Equity — delivered in 24 hours.',
    outcomeRow: 'Eliminate "we worked together" disputes before your next IC/board meeting.',
    primaryCTA: 'Get sample exhibit',
    secondaryCTA: 'View explainer',
    trustLine: 'Also used by Corporate Development teams.'
  },

  steps: {
    title: 'How it works',
    subtitle: 'Three simple steps',
    items: [
      {
        number: '1',
        title: 'Upload names (CSV of 8–15 execs)',
        description: 'Management team roster with claimed positions and companies'
      },
      {
        number: '2',
        title: 'We verify overlaps (Nuvel Verify Graph with assumptions labeled)',
        description: 'Factual overlap analysis with confidence scoring and location safeguards'
      },
      {
        number: '3',
        title: 'You attach the pack (PDF + CSV into IC/board materials)',
        description: 'White-label evidence ready for investment committee presentations'
      }
    ]
  },

  benefits: {
    title: 'What\'s inside the Evidence Pack',
    subtitle: 'Attachable exhibits for IC and board materials',
    items: [
      {
        title: 'Verified Overlaps (entity/same-country)',
        description: 'Factual, time-boxed overlaps with day-level assumptions labeled'
      },
      {
        title: 'Brand-level Overlaps (different/unknown office)',
        description: 'Confidence bands (HIGH/MED) with big-brand/location safeguards'
      },
      {
        title: 'Assumptions & QA notes, Report ID, deletion pledge',
        description: 'White-label PDF + CSV, "historical public web sources," deletion in 48h'
      }
    ]
  },

  cohortVerification: {
    title: 'Investor Cohort Verification',
    description: 'IC-ready Evidence Packs documenting team overlaps and credentials.',
    cta: 'View a redacted sample →'
  },

  riskReversal: {
    title: 'Risk-free validation',
    description: 'Backtest 3–5 closed placements under NDA. If useful, start a $5k / 50-pack / 60-day pilot (100% credit to annual).',
    cta: 'Backtest my last 5 placements →'
  },

  compliance: {
    text: 'Supporting evidence only; not a consumer report. Based on historical public web sources (2015–2022 baseline; later updates where available).'
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
      title: 'Sample Evidence Pack',
      subtitle: 'Preview of our verification deliverables',
      description: 'This redacted sample demonstrates the format and depth of our Evidence Pack deliverables. All personal information has been anonymized while preserving the structure and analytical approach.',
      note: 'Full Evidence Packs include detailed methodology, confidence scores, and deletion attestations. Contact us for access to complete samples under NDA.'
    }
  },

  // Email templates
  emails: {
    sampleRequest: {
      subject: 'Sample Evidence Pack Request',
      body: `Hello,

I'd like to request a sample Evidence Pack to evaluate Nuvel Verify Graph for our executive search practice.

Company: [Your firm name]
Use case: [Brief description of your verification needs]
Volume: [Approximate monthly verification volume]

Please send a redacted sample under NDA.

Best regards,
[Your name]`
    },
    
    backtestRequest: {
      subject: 'Backtest Request - 5 Placements',
      body: `Hello,

I'm interested in backtesting Nuvel Verify Graph on 5 recent placements to evaluate the service quality.

Company: [Your firm name]
Role: [Your role]
Typical verification scope: [Brief description]

I can provide candidate lists under NDA for backtesting. Please confirm next steps and NDA requirements.

Best regards,
[Your name]`
    },
    
    pilotRequest: {
      subject: 'Start $5k Pilot - Nuvel Verify Graph',
      body: `Hello,

I'm interested in starting a $5k / 50-pack / 60-day pilot of Nuvel Verify Graph.

Company: [Your firm name]
Expected monthly volume: [Number of verifications]
Primary use case: [Brief description]

Please send pilot terms and onboarding details.

Best regards,
[Your name]`
    },
    
    headerSampleRequest: {
      subject: 'Sample Evidence Pack Request',
      body: `Hello,

I'd like to request a sample Evidence Pack to evaluate Nuvel Verify Graph for our executive search practice.

Company: [Your firm name]
Use case: [Brief description of your verification needs]
Volume: [Approximate monthly verification volume]

Please send a redacted sample under NDA.

Best regards,
[Your name]`
    },
    
    ndaSampleRequest: {
      subject: 'NDA Sample Request',
      body: `Hello,

I'd like to access a complete Evidence Pack sample under NDA to evaluate Nuvel Verify Graph.

Company: [Your firm name]
Role: [Your role]
Use case: [Brief description]

Best regards,
[Your name]`
    },
    
    downloadSampleRequest: {
      subject: 'Sample Download Request',
      body: `Hello,

Please send me the redacted Evidence Pack sample.

Best regards,
[Your name]`
    }
  }
} as const