import React from 'react'
import { Container } from './Container'
import { CTAGroup } from './CTAGroup'
import { copy } from '@/content/copy'

export function Hero() {
  return (
    <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-50 border border-accent-200 text-accent-800 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
            24–48h SLA with fee credits
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
            {copy.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-600 mb-10 text-balance leading-relaxed">
            {copy.hero.subtitle}
          </p>

          {/* CTAs */}
          <CTAGroup 
            primaryText={copy.hero.primaryCTA}
            secondaryText={copy.hero.secondaryCTA}
            className="justify-center"
          />

          {/* Trust bullets */}
          <ul className="text-sm text-primary-500 mt-8 space-y-2 max-w-2xl mx-auto">
            <li className="flex items-center justify-center">
              <div className="w-1 h-1 bg-primary-400 rounded-full mr-3"></div>
              Factual, time-boxed overlaps with day-level assumptions labeled
            </li>
            <li className="flex items-center justify-center">
              <div className="w-1 h-1 bg-primary-400 rounded-full mr-3"></div>
              Confidence bands (HIGH/MED) with big-brand/location safeguards
            </li>
            <li className="flex items-center justify-center">
              <div className="w-1 h-1 bg-primary-400 rounded-full mr-3"></div>
              White-label PDF + CSV, "historical public web sources," deletion in 48h
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}