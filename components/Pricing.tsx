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
          {/* Tier 1: Core 100 Inventors */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            {/* Title and Price */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Core
              </h3>
              <p className="text-3xl font-bold text-accent-600 mb-4">
                $6,500
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">At least 100 inventors with live links to official patent registers (USPTO/EPO/etc.) or WIPO/Espacenet</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Domain scan scope: up to ~750 patents (your seed list or Nuvel's domain keywords)</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Co-inventor clusters (≥ 3 members when present)</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Deliverables: expert_map.csv (all matched inventors; top 100 guaranteed linked), clusters_top.csv, edges.csv, methods.pdf</p>
              </div>
            </div>

            {/* Guarantee */}
            <div className="mb-6 p-4 bg-accent-50 rounded-lg">
              <p className="text-sm text-accent-800 font-medium">
                Guarantee: 100 working registry links at delivery or we re-run and add +50 working links
              </p>
            </div>

            {/* CTA */}
            <div className="mb-4">
              <Link
                href="mailto:hello@nuvel.ai?subject=Core Request — Patent Expert Maps&body=Company name:%0ATechnical domain:%0ATimeline:"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
                aria-label="Get a report — Core"
              >
                Get a report
              </Link>
            </div>

            {/* Footer note */}
            <div className="border-t pt-4">
              <p className="text-xs text-gray-500">
                Launch pricing. Increases to $7,500 after the first 10 customers.
              </p>
            </div>
          </div>

          {/* Tier 2: Pro 200 Inventors */}
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
                Pro
              </h3>
              <p className="text-3xl font-bold text-accent-600 mb-4">
                $9,500
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">At least 200 inventors with live links to official patent registers (USPTO/EPO/etc.) or WIPO/Espacenet</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Wider scan scope: up to ~1,500 patents for larger domains</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Larger co-inventor cluster set</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Deliverables: expert_map.csv (all matched inventors; top 200 guaranteed linked), clusters_top.csv, edges.csv, methods.pdf</p>
              </div>
            </div>

            {/* Guarantee */}
            <div className="mb-6 p-4 bg-accent-50 rounded-lg">
              <p className="text-sm text-accent-800 font-medium">
                Guarantee: 200 working registry links at delivery or we re-run and add +100 working links
              </p>
            </div>

            {/* CTA */}
            <div className="mb-4">
              <Link
                href="mailto:hello@nuvel.ai?subject=Pro Request — Patent Expert Maps&body=Company name:%0ATechnical domain:%0ATimeline:"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
                aria-label="Get a report — Pro"
              >
                Get a report
              </Link>
            </div>

            {/* Footer note */}
            <div className="border-t pt-4">
              <p className="text-xs text-gray-500">
                Launch pricing. Increases to $12,500 after the first 10 customers.
              </p>
            </div>
          </div>
        </div>

        {/* Verification Clarification */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">What exactly is verified?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              "Verified link" means the inventor appears on a patent page from an official register (USPTO/EPO/EPO Register) or WIPO/Espacenet at the time of delivery. Your CSV often includes more than 100/200 inventors; the tier count is a minimum of verified links. Any additional rows without live links are clearly flagged and included on a best-effort basis.
            </p>
          </div>
        </div>

        {/* Add-ons */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add-ons</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Rush 24-hour delivery</h4>
                <p className="text-accent-600 font-semibold">+30%</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Co-employment overlay</h4>
                <p className="text-sm text-gray-600 mb-1">Optional network layer on top of co-inventors</p>
                <p className="text-accent-600 font-semibold">+$2,000</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Slide-ready IC summary</h4>
                <p className="text-sm text-gray-600 mb-1">2 pages</p>
                <p className="text-accent-600 font-semibold">+$1,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}