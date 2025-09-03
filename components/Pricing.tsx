'use client'

import { useState } from 'react'
import Link from 'next/link'
import { pricingPlans, addOns } from '@/lib/pricing'
import { copy } from '@/content/copy'

export default function Pricing() {
  const [expandedDetails, setExpandedDetails] = useState<string | null>(null)
  const [expandedAddOns, setExpandedAddOns] = useState(false)

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {copy.pricing.title}
          </h2>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl shadow-lg p-8 relative ${
                plan.recommended ? 'ring-2 ring-accent-500' : ''
              }`}
            >
              {/* Badges */}
              <div className="flex justify-between items-start mb-4">
                {plan.recommended && (
                  <span className="bg-accent-100 text-accent-800 text-sm font-medium px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}
                {!plan.recommended && (
                  <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
                    Most comprehensive
                  </span>
                )}
              </div>

              {/* Title and Price */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-accent-600">
                  {plan.subtitle}
                </p>
              </div>

              {/* Who it's for */}
              <p className="text-gray-600 mb-4">{plan.bestFor}</p>

              {/* Scope */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Scope:</p>
                <p className="text-gray-700">
                  {plan.scope.themes} theme{plan.scope.themes > 1 ? 's' : ''} • up to {plan.scope.anchors} anchor employer{plan.scope.anchors > 1 ? 's' : ''} • {plan.scope.regions === 999 ? 'global' : `${plan.scope.regions} region${plan.scope.regions > 1 ? 's' : ''}`}
                </p>
              </div>

              {/* Output */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Output:</p>
                <p className="text-gray-700">
                  {plan.output.pods} HIGH-confidence pods guaranteed{plan.output.includes.includes('IC slide per pod') ? ' + IC slide per pod' : ''}, PDF + CSV
                </p>
              </div>

              {/* Turnaround */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Turnaround:</p>
                <p className="text-gray-700">
                  {plan.turnaround}
                  {plan.rushCost && ` (24h rush +$${(plan.rushCost / 1000).toFixed(0)}k)`}
                </p>
              </div>

              {/* CTA */}
              <Link 
                href={`/#contact?plan=${plan.id}`}
                className="w-full px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors inline-block text-center mb-4"
                aria-label={`Get a report — ${plan.name}`}
              >
                Get a report
              </Link>

              {/* See exactly what's included */}
              <details className="group">
                <summary className="text-sm text-accent-600 hover:text-accent-700 cursor-pointer font-medium">
                  See exactly what's included
                </summary>
                <div className="mt-4 text-sm text-gray-600 space-y-2">
                  <p><strong>Verification rules:</strong> 2–5 people, ≥90 days same employer/window, density ≥50%, layoff filter pass</p>
                  <p><strong>Identity mode:</strong> Names visible</p>
                  <p><strong>Deliverables:</strong> PDF + CSV</p>
                  {plan.output.includes.includes('IC slide per pod') && (
                    <p><strong>Bonus:</strong> IC slide per pod, Theme Expansion included</p>
                  )}
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Add-ons Accordion */}
        <div className="max-w-4xl mx-auto mb-8">
          <details className="bg-white rounded-lg shadow-sm border">
            <summary className="px-6 py-4 text-lg font-semibold text-gray-900 cursor-pointer hover:bg-gray-50">
              See all add-ons
            </summary>
            <div className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {addOns.map((addon) => (
                  <div key={addon.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium text-gray-900">{addon.name}</p>
                      <p className="text-sm text-gray-600">{addon.description}</p>
                    </div>
                    <span className="text-accent-600 font-semibold">+${addon.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>

        {/* Guarantee */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-accent-50 border border-accent-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-accent-900 mb-3">Guarantee</h3>
            <p className="text-accent-800 text-sm leading-relaxed">
              {copy.pricing.guarantee}
            </p>
          </div>
        </div>

        {/* Compliance Footer */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            {copy.pricing.compliance}
          </p>
        </div>
      </div>
    </section>
  )
}