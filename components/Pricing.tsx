import React from 'react'
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
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            {copy.pricing.subtitle}
          </p>
        </div>

        {/* Main packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {copy.pricing.packages.map((pkg, index) => (
            <div key={pkg.title} className="card p-8 text-center card-hover">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                {pkg.title}
              </h3>
              <div className="text-3xl font-bold text-accent-600 mb-2">
                {pkg.price}
              </div>
              <p className="text-primary-600 mb-6">
                {pkg.description}
              </p>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary-900 mb-8 text-center">
            Add-ons
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
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
        </div>

        {/* Guarantee */}
        <div className="text-center p-6 bg-success-50 rounded-lg border border-success-200">
          <div className="text-lg font-semibold text-success-700 mb-2">
            Guarantee
          </div>
          <p className="text-success-700">
            {copy.pricing.guarantee}
          </p>
        </div>
      </Container>
    </section>
  )
}