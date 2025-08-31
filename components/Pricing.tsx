import React from 'react'
import Link from 'next/link'
import { Container } from './Container'
import { copy } from '@/content/copy'

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
            {copy.pricing.subtitle}
          </p>
        </div>

        {/* Main packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {copy.pricing.packages.map((pkg, index) => (
            <div key={pkg.title} className={`card p-8 text-center card-hover relative ${pkg.popular ? 'bg-accent-50 border-accent-200' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                {pkg.title}
              </h3>
              <div className="text-3xl font-bold text-accent-600 mb-4">
                {pkg.price}
              </div>
              <p className="text-primary-600 mb-8">
                {pkg.description}
              </p>
              <Link 
                href={`/sample?plan=${pkg.plan}`}
                className="w-full px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors inline-block text-center"
                aria-label={`Get sample — ${pkg.title}`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary-900 mb-8 text-center">
            Add-ons
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {copy.pricing.addOns.map((addon) => (
              <div key={addon.title} className="card p-6 text-center">
                <h4 className="text-lg font-semibold text-primary-900 mb-1">
                  {addon.title}
                </h4>
                <div className="text-xl font-bold text-accent-600 mb-2">
                  {addon.price}
                </div>
                <p className="text-sm text-primary-600">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* More add-ons */}
          <details className="group">
            <summary className="text-center cursor-pointer text-accent-600 hover:text-accent-700 font-medium mb-6">
              More add-ons (3)
            </summary>
            <div className="grid md:grid-cols-3 gap-6">
              {copy.pricing.moreAddOns.map((addon) => (
                <div key={addon.title} className="card p-6 text-center">
                  <h4 className="text-lg font-semibold text-primary-900 mb-1">
                    {addon.title}
                  </h4>
                  <div className="text-xl font-bold text-accent-600 mb-2">
                    {addon.price}
                  </div>
                  <p className="text-sm text-primary-600">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </details>
        </div>

        {/* Guarantee */}
        <div className="text-center p-6 bg-accent-50 rounded-lg border border-accent-200">
          <div className="text-lg font-semibold text-accent-700 mb-2">
            Guarantee
          </div>
          <p className="text-accent-700">
            {copy.pricing.guarantee}
          </p>
        </div>
      </Container>
    </section>
  )
}