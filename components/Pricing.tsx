'use client'

import Link from 'next/link'
import { pricing } from '@/content/trueinventor'

export default function Pricing() {
  const isPilotActive = process.env.NEXT_PUBLIC_PILOT_ACTIVE === 'true'

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your scope. Standard delivery in 24 hours. 12-hour rush available.
          </p>
        </div>

        {/* Pilot Banner */}
        {isPilotActive && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-accent-100 border border-accent-200 rounded-lg p-4 text-center">
              <p className="text-accent-800 font-medium">{pricing.banner}</p>
            </div>
          </div>
        )}

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Card 1: Standard Dossier */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            {/* Title and Price */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {pricing.std.name}
              </h3>
              <p className="text-3xl font-bold text-accent-600 mb-4">
                {pricing.std.price}
              </p>
            </div>

            {/* Scope */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Scope</h4>
              <p className="text-gray-700">{pricing.std.scope}</p>
            </div>

            {/* Includes */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Includes</h4>
              <ul className="space-y-2 text-gray-700">
                {pricing.std.includes.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* SLA */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Delivery</h4>
              <p className="text-gray-700">{pricing.std.sla}</p>
            </div>

            {/* CTA */}
            <div className="mb-4">
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
                aria-label="Order Standard Dossier"
              >
                Order a Dossier
              </Link>
            </div>
          </div>

          {/* Card 2: Extended Dossier */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative ring-2 ring-accent-500">
            {/* Recommended badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                Recommended
              </span>
            </div>

            {/* Title and Price */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {pricing.pro.name}
              </h3>
              <p className="text-3xl font-bold text-accent-600 mb-4">
                {pricing.pro.price}
              </p>
            </div>

            {/* Scope */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Scope</h4>
              <p className="text-gray-700">{pricing.pro.scope}</p>
            </div>

            {/* Includes */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Includes</h4>
              <ul className="space-y-2 text-gray-700">
                {pricing.pro.includes.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* SLA */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Delivery</h4>
              <p className="text-gray-700">{pricing.pro.sla}</p>
            </div>

            {/* CTA */}
            <div className="mb-4">
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
                aria-label="Order Extended Dossier"
              >
                Order a Dossier
              </Link>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Accuracy Guarantee</h3>
            <ul className="space-y-2 text-gray-700">
              {pricing.guarantee.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Shared footnote */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            {pricing.footnote}
          </p>
        </div>
      </div>
    </section>
  )
}