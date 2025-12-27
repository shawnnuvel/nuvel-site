import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { WhatTrueGraphDoes } from '@/components/WhatTrueGraphDoes'
import { WhoThisIsFor } from '@/components/WhoThisIsFor'
import { DataAndMethod } from '@/components/DataAndMethod'
import { FAQ } from '@/components/FAQ'
import { BetaSignupForm } from '@/components/BetaSignupForm'
import { hero, demoTeams } from '@/content/truegraph'

export const metadata: Metadata = {
  title: 'TrueGraph IP + Talent Maps | Nuvel',
  description: 'Power Semiconductor Devices IP & inventor maps for deal teams. Segment-level views of companies, countries, and inventors from a static public-data baseline.',
  openGraph: {
    title: 'TrueGraph IP + Talent Maps | Nuvel',
    description: 'Power Semiconductor Devices IP & inventor maps for deal teams.',
  },
}

// Custom Hero for TrueGraph page
function TrueGraphHero() {
  return (
    <section className="pt-20 pb-20 lg:pt-28 lg:pb-28 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-600 mb-10 text-balance leading-relaxed max-w-3xl mx-auto">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#beta-signup"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#example-views"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-accent-500 text-accent-600 hover:bg-accent-50 font-semibold text-lg transition-colors duration-200"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

// Power Semis Preset section
function PowerSemisPreset() {
  return (
    <section id="example-views" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {demoTeams.title}
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto mb-8">
              {demoTeams.description}
            </p>
          </div>
          <div className="card p-8 bg-primary-50">
            <ul className="space-y-4">
              {demoTeams.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-primary-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          {demoTeams.note && (
            <p className="text-center text-primary-600 mt-6">
              {demoTeams.note}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}

export default function TrueGraphPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <TrueGraphHero />
      <WhatTrueGraphDoes />
      <WhoThisIsFor />
      <PowerSemisPreset />
      <DataAndMethod />
      <FAQ />
      <BetaSignupForm />
    </div>
  )
}

