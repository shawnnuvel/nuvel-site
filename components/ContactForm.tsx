'use client'

import React, { useState } from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    technicalDomain: '',
    seedPatents: '',
    timeline: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = 'Patent Expert Maps Request'
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Technical Domain: ${formData.technicalDomain}
Seed Patents: ${formData.seedPatents}
Timeline: ${formData.timeline}
Additional Notes: ${formData.notes}`
    
    const mailtoLink = `mailto:hello@nuvel.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Get Your Patent Expert Map
            </h2>
            <p className="text-lg text-primary-600">
              Request a Research Pack for your technical domain
            </p>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                  Email *
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
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-primary-900 mb-2">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="technicalDomain" className="block text-sm font-medium text-primary-900 mb-2">
                Technical Domain *
              </label>
              <input
                type="text"
                id="technicalDomain"
                name="technicalDomain"
                value={formData.technicalDomain}
                onChange={handleChange}
                required
                placeholder="e.g., AI/ML, Robotics, Biotech, Quantum Computing"
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="seedPatents" className="block text-sm font-medium text-primary-900 mb-2">
                Seed Patents (Optional)
              </label>
              <textarea
                id="seedPatents"
                name="seedPatents"
                value={formData.seedPatents}
                onChange={handleChange}
                rows={3}
                placeholder="Provide specific patent numbers or patent families you'd like us to analyze..."
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-primary-900 mb-2">
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="standard">Standard (24 hours)</option>
                <option value="rush">Rush (12 hours, +30%)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-primary-900 mb-2">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Any specific requirements, focus areas, or questions..."
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              Request Research Pack
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