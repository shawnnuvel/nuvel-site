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

          {/* CTAs */}
          <CTAGroup 
            primaryText={copy.hero.primaryCTA}
            secondaryText={copy.hero.secondaryCTA}
            className="justify-center"
          />

          {/* Trust line */}
          <p className="text-sm text-primary-500 mt-8">
            {copy.hero.trustLine}
          </p>
        </div>
      </Container>
    </section>
  )
}