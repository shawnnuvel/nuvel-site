import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { CTAGroup } from '@/components/CTAGroup'
import { EvidencePackMock } from '@/components/EvidencePackMock'
import { copy } from '@/content/copy'

export const metadata: Metadata = {
  title: 'Investor Cohort Verification - Nuvel Verify Graph',
  description: 'Due diligence-ready team verification for investment committees. Comprehensive documentation of team overlaps, employment histories, and professional credentials.',
  openGraph: {
    title: 'Investor Cohort Verification - Nuvel Verify Graph',
    description: 'Due diligence-ready team verification for investment committees. Comprehensive documentation of team overlaps, employment histories, and professional credentials.',
  },
}

export default function InvestorCohortVerificationPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-white to-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-50 border border-accent-200 text-accent-800 text-sm font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Investment Due Diligence
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
              {copy.pages.cohort.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-primary-600 mb-10 text-balance leading-relaxed">
              {copy.pages.cohort.subtitle}
            </p>

            {/* CTAs */}
            <CTAGroup 
              primaryText="Get Sample Evidence Pack"
              secondaryText="Start $5k Pilot"
              className="justify-center mb-8"
            />

            {/* Description */}
            <p className="text-primary-600 leading-relaxed max-w-3xl mx-auto">
              {copy.pages.cohort.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Features section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
                  What we verify
                </h2>
                
                <div className="space-y-6">
                  {copy.pages.cohort.features.map((feature, index) => (
                    <div key={feature.title} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-primary-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="lg:order-first">
                <EvidencePackMock />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process section */}
      <section className="section-padding bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Our process
              </h2>
              <p className="text-xl text-primary-600">
                Designed for investment committee requirements
              </p>
            </div>

            <div className="space-y-6">
              {copy.pages.cohort.process.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-semibold mr-6">
                    {index + 1}
                  </div>
                  <div className="card p-6 flex-1">
                    <p className="text-lg text-primary-800">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <CTAGroup 
                primaryText="View Sample Report"
                secondaryText="Schedule Discussion"
                className="justify-center"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}