import React from 'react'
import Link from 'next/link'
import { Container } from './Container'
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

          {/* Trust line */}
          {copy.hero.trustLine && (
            <p className="text-lg text-primary-500 mb-8 font-medium">
              {copy.hero.trustLine}
            </p>
          )}



          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sample"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-accent-500 text-accent-600 hover:bg-accent-50 font-semibold text-lg transition-colors duration-200"
              aria-label="See Sample"
            >
              {copy.hero.primaryCTA}
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Order a Dossier"
            >
              {copy.hero.secondaryCTA}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}