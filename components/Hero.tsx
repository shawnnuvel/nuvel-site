import React from 'react'
import { Container } from './Container'
import { CTAGroup } from './CTAGroup'
import { copy } from '@/content/copy'

export function Hero() {
  return (
    <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto">


          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
            {copy.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-600 mb-6 text-balance leading-relaxed">
            {copy.hero.subtitle}
          </p>

          {/* Outcome Row */}
          <p className="text-lg md:text-xl text-primary-700 mb-10 font-medium">
            {copy.hero.outcomeRow}
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href={copy.hero.primaryCTA === 'Get a sample report' ? 'mailto:hello@nuvel.ai?subject=Sample request — Spinout Origins Baseline&body=Company name:%0ATheme(s):%0ATimeline:' : '#'}
              className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {copy.hero.primaryCTA}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}