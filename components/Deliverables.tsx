import React from 'react'
import { whatsInside } from '@/content/trueinventor'

export default function Deliverables() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{whatsInside.title}</h3>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            {whatsInside.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>

          <p className="text-sm text-gray-600">
            {whatsInside.note}
          </p>
        </div>
      </div>
    </section>
  )
}
