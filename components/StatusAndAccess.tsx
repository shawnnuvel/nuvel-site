import React from 'react'
import Link from 'next/link'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function StatusAndAccess() {
  return (
    <section id="status-and-access" className="py-16 md:py-24 bg-white">
      <Container size="sm">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            {copy.statusAndAccess.title}
          </h2>
          <p className="text-lg text-primary-600 mb-8 leading-relaxed">
            {copy.statusAndAccess.description}
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            aria-label="Request early access"
          >
            {copy.statusAndAccess.cta}
          </Link>
        </div>
      </Container>
    </section>
  )
}

