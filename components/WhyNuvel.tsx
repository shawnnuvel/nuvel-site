import React from 'react'
import { Container } from './Container'
import { whyNuvel } from '@/content/trueinventor'

export function WhyNuvel() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {whyNuvel.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyNuvel.bullets.map((bullet, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-primary-700">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
