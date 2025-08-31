'use client'

import React, { useState } from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" className="section-padding bg-primary-50">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {copy.faq.title}
          </h2>
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {copy.faq.items.map((item: any, index: number) => (
            <div key={index} className={`card overflow-hidden ${item.question === 'Do you offer any guarantees?' ? 'scroll-mt-20' : ''}`} id={item.question === 'Do you offer any guarantees?' ? 'guarantee' : undefined}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-25 transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary-900 pr-4">
                  {item.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-primary-500 transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-primary-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}