import React from 'react'
import Link from 'next/link'
import { Container } from './Container'
import { copy } from '@/content/copy'
import { pricingPlans, addOns } from '@/lib/pricing'

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {copy.pricing.title}
          </h2>
          <div className="text-sm text-primary-500 mb-4">
            Data cut-off: 2024-12-31
          </div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            On-demand reports. No subscriptions. 24–48h delivery.
          </p>
        </div>

        {/* Trust banner */}
        <div className="text-center mb-12 p-4 bg-primary-50 rounded-lg">
          <p className="text-primary-700">
            Evidence built from historical public web sources; attachable for IC. 24–48h turnaround.
          </p>
        </div>

        {/* Main packages (three cards) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="card p-8 text-center card-hover relative">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                {plan.name} ({plan.subtitle}) — US${plan.price.toLocaleString()}
              </h3>
              <div className="text-sm text-primary-600 mb-4">
                <p><strong>Scope:</strong> {plan.scope.themes} theme{plan.scope.themes > 1 ? 's' : ''}, up to {plan.scope.anchors} anchor employer{plan.scope.anchors > 1 ? 's' : ''}, {plan.scope.regions === 999 ? 'global' : plan.scope.regions + ' region' + (plan.scope.regions > 1 ? 's' : '')}</p>
                <p><strong>Output:</strong> {plan.output.pods} High-confidence pods guaranteed (names visible), {plan.output.includes.join(', ')}</p>
                <p><strong>Turnaround:</strong> {plan.turnaround}{plan.rushCost ? ` (24h rush +$${plan.rushCost.toLocaleString()})` : ''}</p>
              </div>
              <Link 
                href={`/#contact?plan=${plan.id}`}
                className="w-full px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors inline-block text-center"
                aria-label={`Get a report — ${plan.name}`}
              >
                Get a report
              </Link>
              <div className="mt-3">
                <Link 
                  href={`/scope#${plan.id}`}
                  className="text-sm text-accent-600 hover:text-accent-700 underline"
                >
                  See exactly what's included
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons in accordion */}
        <div className="mb-12 text-center">
          <details className="group inline-block">
            <summary className="cursor-pointer text-accent-600 hover:text-accent-700 font-medium">
              See all add-ons
            </summary>
            <div className="mt-6 grid md:grid-cols-3 gap-6 text-left">
              {addOns.map((addon) => (
                <div key={addon.id} className="card p-6 text-center">
                  <h4 className="text-lg font-semibold text-primary-900 mb-1">
                    {addon.name}
                  </h4>
                  <div className="text-xl font-bold text-accent-600 mb-2">
                    +${addon.price.toLocaleString()}
                  </div>
                  <p className="text-sm text-primary-600">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </details>
        </div>

        {/* Guarantee (clarified) */}
        <div className="text-center p-6 bg-accent-50 rounded-lg border border-accent-200">
          <div className="text-lg font-semibold text-accent-700 mb-2">
            Guarantee
          </div>
          <p className="text-accent-700">
            If your ordered scope yields fewer than the guaranteed number of High-confidence pods, you choose: a full refund or a no-cost re-run with adjusted scope.
            High-confidence = 2–5 people, same employer, ≥90 days overlap, density ≥50%, passes layoff-timing filter; contractors/interns excluded. Role/patent evidence included when available.
          </p>
        </div>
      </Container>
    </section>
  )
}