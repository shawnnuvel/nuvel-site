import React from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'

// Benefit icons
const benefitIcons = [
  // Scale icon
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="scale">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  
  // Standardized icon
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="standard">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  
  // Audit icon
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="audit">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>,
  
  // Clock/SLA icon
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="clock">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  
  // White-label icon
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="brand">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a4 4 0 004 4z" />
  </svg>,
  
  // Security/privacy icon  
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="security">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
]

export function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-primary-50">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {copy.benefits.title}
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            {copy.benefits.subtitle}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.benefits.items.map((benefit, index) => (
            <div key={benefit.title} className="card p-8 card-hover">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 text-accent-600 rounded-xl mb-6">
                {benefitIcons[index]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-primary-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}