'use client'

import React, { useState } from 'react'
import { Container } from './Container'
import { createMailtoLink } from '@/lib/utils'

export function EmailCapture() {
  const [formData, setFormData] = useState({
    email: '',
    context: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email.trim()) {
      return
    }
    
    const subject = 'Nuvel briefings signup'
    const body = `Email: ${formData.email}
${formData.context ? `What I'm working on: ${formData.context}` : ''}`
    
    const mailtoLink = createMailtoLink('hello@nuvel.ai', subject, body)
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-16 md:py-24 bg-primary-50">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 bg-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                Deal-grade IP/talent signals, in your inbox
              </h2>
              <p className="text-lg text-primary-600">
                Occasional briefings on how patents + employment signals change technical deals. No spam, no generic 'AI' content.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2 sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your work email"
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="context" className="block text-sm font-medium text-primary-900 mb-2 sr-only">
                  What are you working on?
                </label>
                <input
                  type="text"
                  id="context"
                  name="context"
                  value={formData.context}
                  onChange={handleChange}
                  placeholder="What are you working on? (optional)"
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-3"
              >
                Get briefings
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

