import React from 'react'
import Link from 'next/link'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function Hero() {
  return (
    <section className="pt-20 pb-20 lg:pt-28 lg:pb-28 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
            {copy.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-600 mb-8 text-balance leading-relaxed max-w-3xl mx-auto">
            {copy.hero.subtitle}
          </p>

          {/* Bullets */}
          {copy.hero.bullets && (
            <ul className="space-y-3 mb-10 text-left max-w-2xl mx-auto">
              {copy.hero.bullets.map((bullet: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-primary-700">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Request TrueGraph demo"
            >
              {copy.hero.primaryCTA}
            </Link>
            <Link
              href="#demo-teams"
              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-accent-500 text-accent-600 hover:bg-accent-50 font-semibold text-lg transition-colors duration-200"
              aria-label="See example teams"
            >
              {copy.hero.secondaryCTA}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}