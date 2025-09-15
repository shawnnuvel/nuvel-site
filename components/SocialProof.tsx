import React from 'react'
import { Container } from './Container'
import { socialProof } from '@/content/trueinventor'

export function SocialProof() {
  return (
    <section className="py-16 bg-primary-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {socialProof.title}
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            {socialProof.subtitle}
          </p>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {socialProof.logos.map((logo, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-primary-200 mb-3">
                <div className="w-16 h-16 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-900 text-sm mb-1">
                  {logo.name}
                </h3>
                <p className="text-xs text-primary-500">
                  {logo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-200 max-w-4xl mx-auto">
          <blockquote className="text-lg text-primary-700 italic mb-4">
            "{socialProof.testimonial.quote}"
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="font-semibold text-primary-900">
                {socialProof.testimonial.author}
              </p>
              <p className="text-sm text-primary-500">
                {socialProof.testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
