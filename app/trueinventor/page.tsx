import type { Metadata } from 'next'
import Link from 'next/link'
import { ProblemSolution } from '@/components/ProblemSolution'
import { HowTeamsUse } from '@/components/HowTeamsUse'
import { Deliverables } from '@/components/Deliverables'
import { WhyNuvel } from '@/components/WhyNuvel'
import Pricing from '@/components/Pricing'
import { RiskReversal } from '@/components/RiskReversal'
import { TrueInventorRequestForm } from '@/components/TrueInventorRequestForm'
import { Container } from '@/components/Container'
import { hero as trueInventorHero, updatedFaq } from '@/content/trueinventor'

export const metadata: Metadata = {
  title: 'TrueInventor™ Dossier | Nuvel',
  description: 'The only patent data provider that delivers decision-ready inventor data. Clean, registry-verified inventor lists, ready for high stakes decisions.',
  openGraph: {
    title: 'TrueInventor™ Dossier | Nuvel',
    description: 'The only patent data provider that delivers decision-ready inventor data.',
  },
}

// Create a custom Hero component for TrueInventor page
function TrueInventorHero() {
  return (
    <section className="pt-20 pb-20 lg:pt-28 lg:pb-28 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
            {trueInventorHero.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-600 mb-10 text-balance leading-relaxed max-w-3xl mx-auto">
            {trueInventorHero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#request-form"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {trueInventorHero.primaryCta}
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-accent-500 text-accent-600 hover:bg-accent-50 font-semibold text-lg transition-colors duration-200"
            >
              {trueInventorHero.secondaryCta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

// Create a custom FAQ component for TrueInventor
function TrueInventorFAQ() {
  return (
    <section id="faq" className="section-padding bg-primary-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            FAQ
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {updatedFaq.map((item, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// Public-50 Sample Section
function Public50Sample() {
  return (
    <section className="py-16 md:py-24 bg-primary-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            See a live sample
          </h2>
          <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
            Explore our Public-50 HBM TrueInventor dossier to see the registry-linked format we deliver.
          </p>
          <Link
            href="/public-50"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Public-50 HBM showcase
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default function TrueInventorPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <TrueInventorHero />
      <ProblemSolution />
      <Public50Sample />
      <HowTeamsUse />
      <Deliverables />
      <WhyNuvel />
      <Pricing />
      <RiskReversal />
      <TrueInventorFAQ />
      <TrueInventorRequestForm />
    </div>
  )
}

