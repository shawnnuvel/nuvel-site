import React from 'react'
import { Container } from './Container'
import { createMailtoLink } from '@/lib/utils'
import { copy } from '@/content/copy'

export function RiskReversal() {
  const backtestEmailLink = createMailtoLink(
    'hello@nuvel.ai',
    copy.emails.backtestRequest.subject,
    copy.emails.backtestRequest.body
  )

  return (
    <section className="section-padding bg-accent-600">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-700/20 border border-accent-400/30 text-accent-100 text-sm font-medium mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Risk-free validation
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {copy.riskReversal.title}
          </h2>

          {/* Description */}
          <p className="text-xl text-accent-100 mb-10 leading-relaxed">
            {copy.riskReversal.description}
          </p>

          {/* CTA */}
          <a 
            href={backtestEmailLink}
            className="inline-flex items-center px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-accent-50 transition-colors group"
          >
            {copy.riskReversal.cta}
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Trust signals */}
          <div className="mt-12 pt-8 border-t border-accent-400/20">
            <p className="text-sm text-accent-200">
              NDA available • 24-48h sample turnaround • No setup fees
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}