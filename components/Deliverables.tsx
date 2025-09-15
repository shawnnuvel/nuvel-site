import React from 'react'
import { Container } from './Container'
import { deliverables } from '@/content/trueinventor'
import { StaticWebBriefTeaser } from './StaticWebBriefTeaser'

export function Deliverables() {
  return (
    <section id="whats-inside" className="section-padding bg-primary-50">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {deliverables.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {deliverables.bullets.map((bullet, index) => (
              <div key={index} className="card p-6 sm:p-8 card-hover">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 text-accent-600 rounded-xl mb-4 sm:mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-3">
                  {bullet}
                </h3>
                <p className="text-sm sm:text-base text-primary-600 leading-relaxed">
                  {deliverables.descriptions[index]}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <StaticWebBriefTeaser />
          </div>

          <div className="text-center">
            <a href="/samples/redacted" className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium text-lg transition-colors">
              See a redacted sample →
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}