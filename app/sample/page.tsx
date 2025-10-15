import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { EvidencePackMock } from '@/components/EvidencePackMock'
import { copy } from '@/content/copy'
import { createMailtoLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Sample Dossier - TrueInventor™ Dossier',
  description: 'This is a watermarked example. Request the full redacted PDF at hello@nuvel.ai.',
  openGraph: {
    title: 'Sample Dossier - TrueInventor™ Dossier',
    description: 'This is a watermarked example. Request the full redacted PDF at hello@nuvel.ai.',
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
                  What&apos;s included
                </h2>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Summary sheet: Overview and key metrics',
                    'Inventors sheet: Disambiguated inventor profiles',
                    'Patents sheet: Patent details with registry links',
                    'Assignees sheet: Harmonized company information',
                    'Web Brief (HTML): Executive summary and methodology'
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

                {/* CTA */}
                <div className="text-center">
                  <a 
                    href={createMailtoLink(
                      'hello@nuvel.ai',
                      copy.emails.sampleRequest.subject,
                      copy.emails.sampleRequest.body
                    )}
                    className="btn-primary text-lg py-4 px-8"
                  >
                    Get a sample dossier
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
              Request your TrueInventor Dossier today
            </p>

            <a 
              href={createMailtoLink(
                'hello@nuvel.ai',
                copy.emails.sampleRequest.subject,
                copy.emails.sampleRequest.body
              )}
              className="btn-primary text-lg py-4 px-8"
            >
              Get a sample dossier
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