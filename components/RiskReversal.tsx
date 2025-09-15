import React from 'react'
import { Container } from './Container'
import { updatedPricing } from '@/content/trueinventor'

export function RiskReversal() {
  return (
    <section className="py-16 bg-accent-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-accent-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-xl mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Our Guarantee
            </h2>
            <p className="text-lg text-primary-700 mb-6">
              {updatedPricing.guarantee}
            </p>
            <div className="bg-accent-50 rounded-lg p-4">
              <p className="text-sm text-accent-700 font-medium">
                ✓ No subscriptions • ✓ Full refund if we miss spec
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
