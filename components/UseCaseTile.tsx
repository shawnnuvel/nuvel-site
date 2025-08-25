import React from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function UseCaseTile() {
  return (
    <section id="use-cases" className="section-padding bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Main use case card */}
          <div className="card p-8 md:p-12 bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center mr-3">
                    {/* Investment/portfolio icon */}
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                    Use Case
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                  {copy.cohortVerification.title}
                </h3>
                
                <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                  {copy.cohortVerification.description}
                </p>

                <a 
                  href="/sample"
                  className="inline-flex items-center text-accent-700 hover:text-accent-800 font-medium group transition-colors"
                >
                  {copy.cohortVerification.cta}
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Visual element */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}