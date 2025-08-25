export const copy = {
  hero: {
    title: 'Bulk Employment Verification for Executive Search',
    subtitle: 'White-label Evidence Packs powered by the Nuvel Verify Graph',
    primaryCTA: 'Get Sample Evidence Pack',
    secondaryCTA: 'Start $5k Pilot'
  },

  steps: {
    title: 'How it works',
    subtitle: 'Three simple steps to verified employment data',
    items: [
      {
        number: '1',
        title: 'Upload CSV',
        description: 'Provide names + companies or profile links via secure upload'
      },
      {
        number: '2',
        title: 'Verify via Graph',
        description: 'Strict normalization, ≥30d/≥60d rules, confidence flags applied'
      },
      {
        number: '3',
        title: 'Deliver Evidence Pack',
        description: 'Your-branded PDF + CSV + Method, QA, Deletion Attestation within 24–48h SLA'
      }
    ]
  },

  benefits: {
    title: 'Why firms choose Nuvel',
    subtitle: 'Enterprise-grade verification with complete transparency',
    items: [
      {
        title: 'Scale without strain',
        description: 'Process 500+ verifications per month without operational overhead'
      },
      {
        title: 'Standardized methodology',
        description: 'Consistent approach across desks, regions, and team members'
      },
      {
        title: 'Audit-ready',
        description: 'All assumptions and confidence flags fully disclosed'
      },
      {
        title: '24–48h SLA',
        description: 'Guaranteed delivery timeframe with fee credits on breach'
      },
      {
        title: 'White-label output',
        description: 'Evidence Packs delivered under your brand identity'
      },
      {
        title: 'Data minimization',
        description: 'Client uploads securely deleted within 48 hours'
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
    text: 'Nuvel processes data from public professional web sources to produce supporting evidence for business decisions. Not a CRA/FCRA report. Client uploads deleted within 48 hours.'
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