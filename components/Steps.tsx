import React from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'

const stepIcons = [
  // Upload icon
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="upload">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>,
  
  // Graph/network icon  
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="graph">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>,
  
  // Document/delivery icon
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="delivery">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
]

export function Steps() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {copy.steps.title}
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            {copy.steps.subtitle}
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {copy.steps.items.map((step: any, index: number) => (
            <div key={step.number} className="relative">
              {/* Step number and icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-2xl mb-6 mx-auto md:mx-0">
                {stepIcons[index]}
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-accent-600 text-white text-sm font-bold rounded-full mr-3">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-primary-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-primary-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection line (hidden on mobile) */}
              {index < copy.steps.items.length - 1 && (
                <div className="hidden md:block absolute top-8 left-16 w-full h-px bg-primary-200 transform translate-y-0">
                  <div className="absolute right-0 top-0 w-2 h-2 bg-primary-200 rounded-full transform translate-x-1 -translate-y-0.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}