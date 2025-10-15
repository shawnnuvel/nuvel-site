import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { createMailtoLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Redacted Sample - TrueInventor™ Dossier',
  description: 'Request a redacted sample of our TrueInventor™ Dossier.',
  openGraph: {
    title: 'Redacted Sample - TrueInventor™ Dossier',
    description: 'Request a redacted sample of our TrueInventor™ Dossier.',
  },
}

export default function RedactedSamplePage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-white to-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 border border-accent-200 text-accent-800 text-sm font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Redacted Sample
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
              See a Redacted Sample
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 mb-10 text-balance leading-relaxed">
              Get a watermarked example of our TrueInventor™ Dossier
            </p>
          </div>
        </Container>
      </section>

      {/* Sample preview section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Visual placeholder */}
              <div className="bg-gray-100 rounded-lg p-12 text-center">
                <svg className="w-24 h-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500">Sample dossier preview</p>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                  What&apos;s included in the sample
                </h2>

                <div className="space-y-4 mb-8">
                  {[
                    'Excel workbook with 4 sheets (Summary, Inventors, Patents, Assignees)',
                    'Web Brief (HTML) — shareable link for quick reviews',
                    'Per-row proof — registry URLs + retrieval timestamps',
                    'QC stats — precision sample and coverage notes'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-success-500 rounded-full mr-4"></div>
                      <span className="text-primary-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-8">
                  <a href="/public-50" className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium text-lg transition-colors">
                    See the Public-50 showcase →
                  </a>
                </div>

                <div className="bg-primary-50 rounded-lg p-6 mb-8">
                  <p className="text-sm text-primary-600">
                    <strong>Note:</strong> Patents publish ~18 months after filing; we provide a forensic snapshot of the public record.
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <a
                    href={createMailtoLink(
                      'hello@nuvel.ai',
                      'Request redacted sample — TrueInventor™ Dossier',
                      `Company name:
Technical domain:
Timeline:`
                    )}
                    className="btn-primary text-lg py-4 px-8"
                  >
                    Request sample dossier
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-primary-600 mb-10">
              Request your TrueInventor™ Dossier today
            </p>

            <a
              href={createMailtoLink(
                'hello@nuvel.ai',
                'Request sample dossier — TrueInventor™ Dossier',
                `Company name:
Technical domain:
Timeline:`
              )}
              className="btn-primary text-lg py-4 px-8"
            >
              Request sample dossier
            </a>

            <p className="mt-6">
              <a href="/public-50" className="text-accent-600 hover:text-accent-700 font-medium">
                Browse the Public-50 showcase →
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
