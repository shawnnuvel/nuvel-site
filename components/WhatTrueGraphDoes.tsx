import React from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function WhatTrueGraphDoes() {
  return (
    <section id="what-truegraph-does" className="py-16 md:py-24 bg-white">
      <Container size="md">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {copy.whatTrueGraphDoes.title}
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            {copy.whatTrueGraphDoes.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {copy.whatTrueGraphDoes.features.map((feature, index) => (
            <div key={index} className="card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-primary-700 mb-4 leading-relaxed">
                {feature.description}
              </p>
              {feature.bullets && feature.bullets.length > 0 && (
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-sm text-primary-600">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

