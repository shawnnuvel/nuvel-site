'use client'

import React, { useState } from 'react'
import { Container } from './Container'
import { createMailtoLink } from '@/lib/utils'

export function BetaSignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    role: '',
    interest: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = 'TrueGraph Power Semis Beta List Signup'
    const body = `Name: ${formData.name || 'Not provided'}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Role: ${formData.role || 'Not provided'}
What are you most interested in: ${formData.interest || 'Not provided'}

Source: truegraph_beta_list`
    
    const mailtoLink = createMailtoLink('hello@nuvel.ai', subject, body)
    window.location.href = mailtoLink
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <section id="beta-signup" className="py-16 md:py-24 bg-primary-50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 bg-white text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-xl mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                Thanks – you're on the list.
              </h2>
              <p className="text-lg text-primary-600">
                We'll be in touch.
              </p>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section id="beta-signup" className="py-16 md:py-24 bg-primary-50">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Join the TrueGraph Power Semis beta list
            </h2>
            <p className="text-lg text-primary-600">
              We'll send you occasional product updates and invite you to a walkthrough if there's a fit. No spam.
            </p>
          </div>

          {/* Beta signup form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                Work email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-primary-900 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-primary-900 mb-2">
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="e.g., Corp Dev, CVC, PE/VC, IP Strategy"
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-primary-900 mb-2">
                What are you most interested in?
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
              >
                <option value="">Select an option</option>
                <option value="power-semiconductor-devices">Power Semiconductor Devices IP + talent map</option>
                <option value="other-segments">Other segments (e.g., Automotive, Batteries)</option>
                <option value="custom-diligence">Custom diligence use case</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              Join beta list
            </button>
          </form>

          {/* Fallback note */}
          <div className="text-center mt-8">
            <p className="text-sm text-primary-600">
              Or email us directly at
            </p>
            <a
              href="mailto:hello@nuvel.ai"
              className="text-accent-600 hover:text-accent-700 font-medium"
            >
              hello@nuvel.ai
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

