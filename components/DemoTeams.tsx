import React from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function DemoTeams() {
  return (
    <section id="demo-teams" className="py-16 md:py-24 bg-white">
      <Container size="md">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {copy.demoTeams.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {copy.demoTeams.cards.map((card, index) => (
            <div key={index} className="card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                {card.title}
              </h3>
              {card.bullets && card.bullets.length > 0 && (
                <ul className="space-y-3">
                  {card.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-primary-700">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {copy.demoTeams.note && (
          <p className="text-center text-primary-600 max-w-3xl mx-auto">
            {copy.demoTeams.note}
          </p>
        )}
      </Container>
    </section>
  )
}

