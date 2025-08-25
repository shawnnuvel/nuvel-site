import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { EvidencePackMock } from '@/components/EvidencePackMock'
import { copy } from '@/content/copy'
import { createMailtoLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Sample Evidence Pack - Nuvel Verify Graph',
  description: 'Preview of our verification deliverables. All personal information has been anonymized while preserving the structure and analytical approach.',
  openGraph: {
    title: 'Sample Evidence Pack - Nuvel Verify Graph',
    description: 'Preview of our verification deliverables. All personal information has been anonymized while preserving the structure and analytical approach.',
  },
}

export default function SamplePage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-white to-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-success-50 border border-success-200 text-success-800 text-sm font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Redacted Sample
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
              {copy.pages.sample.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-primary-600 mb-10 text-balance leading-relaxed">
              {copy.pages.sample.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-primary-600 leading-relaxed max-w-3xl mx-auto mb-10">
              {copy.pages.sample.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Sample preview section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Visual */}
              <div>
                <EvidencePackMock />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                  What's included
                </h2>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Executive summary with key findings',
                    'Individual verification status for each candidate',
                    'Confidence scores and methodology notes',
                    'Timeline analysis and employment gaps',
                    'Cross-reference validation results',
                    'Data sources and collection methodology'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-success-500 rounded-full mr-4"></div>
                      <span className="text-primary-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                  <h3 className="font-semibold text-primary-900 mb-2">
                    Full Access Available
                  </h3>
                  <p className="text-sm text-primary-600 mb-4">
                    {copy.pages.sample.note}
                  </p>
                  <a 
                    href={createMailtoLink(
                      'hello@nuvel.ai',
                      copy.emails.ndaSampleRequest.subject,
                      copy.emails.ndaSampleRequest.body
                    )}
                    className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium transition-colors"
                  >
                    Request full sample under NDA
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Download section */}
      <section className="section-padding bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Download Sample Pack
            </h2>
            <p className="text-xl text-primary-600 mb-10">
              Get a redacted version to evaluate our format and methodology
            </p>

            {/* Download placeholder */}
            <div className="card p-12 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-7 13h10a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Sample Evidence Pack
              </h3>
              <p className="text-primary-600 mb-6">
                Redacted 5-person verification sample (PDF + CSV)
              </p>
              
              {/* Placeholder button */}
              <a 
                href={createMailtoLink(
                  'hello@nuvel.ai',
                  copy.emails.downloadSampleRequest.subject,
                  copy.emails.downloadSampleRequest.body
                )}
                className="btn-primary w-full inline-block text-center"
              >
                Download Sample
              </a>
              
              <p className="text-xs text-primary-500 mt-4">
                Full samples available under NDA
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}