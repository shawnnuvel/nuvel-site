import React from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function WhoThisIsFor() {
  return (
    <section id="who-this-is-for" className="py-16 md:py-24 bg-primary-50">
      <Container size="md">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {copy.whoThisIsFor.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {copy.whoThisIsFor.tiles.map((tile, index) => (
            <div key={index} className="card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                {tile.title}
              </h3>
              <p className="text-primary-700 mb-4 leading-relaxed">
                {tile.description}
              </p>
              {tile.bullets && tile.bullets.length > 0 && (
                <ul className="space-y-2">
                  {tile.bullets.map((bullet, bulletIndex) => (
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



