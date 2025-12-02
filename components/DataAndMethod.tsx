import React from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function DataAndMethod() {
  return (
    <section id="data-and-method" className="py-16 md:py-24 bg-primary-50">
      <Container size="sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {copy.dataAndMethod.title}
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto mb-8">
            {copy.dataAndMethod.intro}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 mb-8">
            {copy.dataAndMethod.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start text-primary-700">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {copy.dataAndMethod.disclaimer && (
            <p className="text-sm text-primary-500 text-center max-w-2xl mx-auto italic">
              {copy.dataAndMethod.disclaimer}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}

