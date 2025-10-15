import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { copy } from '@/content/copy'
import { createMailtoLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Methods & QA - TrueInventor™ Dossier',
  description: 'How we turn messy public patent data into a decision-ready dossier.',
  openGraph: {
    title: 'Methods & QA - TrueInventor™ Dossier',
    description: 'How we turn messy public patent data into a decision-ready dossier.',
  },
}

export default function MethodsQAPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-white to-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
              {copy.methodsQA.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 mb-10 text-balance leading-relaxed">
              {copy.methodsQA.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Methods sections */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {copy.methodsQA.sections.map((section, index) => (
                <div key={index} className="card p-8">
                  <h2 className="text-2xl font-semibold text-primary-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-primary-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Compliance section */}
      <section className="section-padding bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 bg-white">
              <h2 className="text-2xl font-semibold text-primary-900 mb-4">
                Compliance & Auditability
              </h2>
              <p className="text-primary-700 leading-relaxed">
                {copy.methodsQA.compliance}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-white">
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
                'Request sample dossier — TrueInventor Dossier',
                `Company name:
Technical domain:
Timeline:`
              )}
              className="btn-primary text-lg py-4 px-8"
            >
              {copy.methodsQA.cta}
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
