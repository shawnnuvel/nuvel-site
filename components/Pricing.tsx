'use client'

import Link from 'next/link'

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose how many verified inventors you need. Standard delivery in 48 hours. 24-hour rush available.
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Card 1: Focused Pack */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            {/* Title and Price */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Focused Pack
              </h3>
              <p className="text-3xl font-bold text-accent-600 mb-4">
                $4,500
              </p>
            </div>

            {/* Value bullets */}
            <div className="mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>• Guaranteed: At least 100 working registry links (EP/USPTO/WIPO etc.)</li>
                <li>• Wider scan: typically ~500–800 relevant patents searched</li>
                <li>• Co-inventor clusters (size ≥ 3 when present)</li>
                <li>• Deliverables: expert_map.csv, clusters_top.csv, edges.csv, methods.pdf</li>
                <li>• Overflow candidates (non-guaranteed) included when signal quality is high</li>
              </ul>
            </div>

            {/* Guarantee & SLA */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Guarantee & SLA</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• If &lt;100 working links, we re-run and add +50 at no cost</li>
                <li>• SLA: 48 hours (business days) • Rush: 24 hours (+30%)</li>
              </ul>
            </div>

            {/* Best for */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Best for</h4>
              <p className="text-gray-700">• Tight scopes and fast advisory shortlists</p>
            </div>

            {/* CTA */}
            <div className="mb-4">
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
                aria-label="Get this pack — Focused"
              >
                Get this pack
              </Link>
            </div>
          </div>

          {/* Card 2: Extended Pack */}
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
                Extended Pack
              </h3>
              <p className="text-3xl font-bold text-accent-600 mb-4">
                $8,500
              </p>
            </div>

            {/* Value bullets */}
            <div className="mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>• Guaranteed: At least 200 working registry links</li>
                <li>• Wider scan for large domains (typically up to ~1,500 relevant patents searched)</li>
                <li>• Larger co-inventor cluster set (deeper network context)</li>
                <li>• Deliverables: expert_map.csv, clusters_top.csv, edges.csv, methods.pdf</li>
                <li>• Overflow candidates (non-guaranteed) included when signal quality is high</li>
              </ul>
            </div>

            {/* Guarantee & SLA */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Guarantee & SLA</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Same guarantee • Same SLA</li>
              </ul>
            </div>

            {/* Best for */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Best for</h4>
              <p className="text-gray-700">• Strategy sprints and market maps</p>
            </div>

            {/* CTA */}
            <div className="mb-4">
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
                aria-label="Get this pack — Extended"
              >
                Get this pack
              </Link>
            </div>
          </div>
        </div>

        {/* Shared footnote */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Designed for research/strategy (R&D/CI). Not a legal product.<br />
            Data cut-off: 2024-12-31. Country coverage varies
          </p>
        </div>
      </div>
    </section>
  )
}