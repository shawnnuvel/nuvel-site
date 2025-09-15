import React from 'react'
import { Container } from './Container'
import { howTeamsUse } from '@/content/trueinventor'

export function HowTeamsUse() {
  return (
    <section id="how-teams-use-this" className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-900 mb-4">
              {howTeamsUse.title}
            </h2>
          </header>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {howTeamsUse.cards.map((card, index) => (
              <div key={index} className="p-6 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-semibold mb-3 text-primary-900">{card.title}</h3>

                <div className="mb-4">
                  <p className="text-slate-600 font-medium mb-2">Outcome:</p>
                  <p className="text-slate-700">{card.outcome}</p>
                </div>

                <div className="mb-4">
                  <p className="text-slate-600 font-medium mb-2">How it works:</p>
                  <ol className="list-decimal list-inside space-y-1 text-slate-700 text-sm">
                    {card.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="mt-4">
                  <a href="/samples/redacted" className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium">
                    {card.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
