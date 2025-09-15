'use client'

import Link from 'next/link'
import { copy } from '@/content/copy'

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing
          </h2>
        </div>

        {/* Pilot Banner */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-accent-100 border border-accent-200 rounded-lg p-4 text-center">
            <p className="text-accent-800 font-medium">{copy.pricing.subtitle}</p>
          </div>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Card 1: Standard Dossier */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            {/* Title and Price */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {copy.pricing.std.name}
              </h3>
              <p className="text-3xl font-bold text-accent-600 mb-4">
                {copy.pricing.std.price}
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700">{copy.pricing.std.description}</p>
            </div>

            {/* Footnote */}
            <div className="mb-6">
              <p className="text-sm text-gray-500">{copy.pricing.std.footnote}</p>
            </div>

            {/* CTA */}
            <div className="mb-4">
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
                aria-label="Order Standard Dossier"
              >
                Request a dossier
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
                {copy.pricing.pro.name}
              </h3>
              <p className="text-3xl font-bold text-accent-600 mb-4">
                {copy.pricing.pro.price}
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700">{copy.pricing.pro.description}</p>
            </div>

            {/* CTA */}
            <div className="mb-4">
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
                aria-label="Order Extended Dossier"
              >
                Request a dossier
              </Link>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            {copy.pricing.guarantee}
          </p>
        </div>
      </div>
    </section>
  )
}