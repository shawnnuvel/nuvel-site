'use client'

import React, { useEffect, useState } from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'
import { pricingPlans, addOns, calculatePrice } from '@/lib/pricing'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    theme: '',
    anchors: '',
    regions: '',
    identityMode: 'anchors',
    rolesFocus: 'technical',
    rush: false,
    notes: ''
  })
  const [selectedPlan, setSelectedPlan] = useState<string>('pods')
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [totalPrice, setTotalPrice] = useState(4000)

  // Prefill plan from query string
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.hash.split('?')[1] || window.location.search)
    const plan = params.get('plan')
    if (plan && ['pods', 'custom'].includes(plan)) {
      setSelectedPlan(plan)
    }
  }, [])

  // Calculate price when plan or add-ons change
  useEffect(() => {
    const price = calculatePrice(selectedPlan, selectedAddOns, formData.rush)
    setTotalPrice(price)
  }, [selectedPlan, selectedAddOns, formData.rush])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track selectedPlan (hidden) then navigate to thank-you
    if (selectedPlan) {
      // no-op placeholder: selectedPlan would be sent along with form in real backend
    }
    window.location.href = '/thank-you'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    }))
  }

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    setSelectedAddOns(prev => 
      checked ? [...prev, addOnId] : prev.filter(id => id !== addOnId)
    )
  }

  const selectedPlanData = pricingPlans.find(p => p.id === selectedPlan)

  return (
    <section id="contact" className="section-padding bg-white">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {copy.contact.title}
            </h2>
          </div>

          {/* Plan selection */}
          <div className="mb-8 p-6 bg-primary-50 rounded-lg">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">Selected Plan</h3>
            <div className="grid grid-cols-2 gap-4">
              {pricingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-colors ${
                    selectedPlan === plan.id 
                      ? 'border-accent-500 bg-accent-50' 
                      : 'border-primary-200 bg-white hover:border-primary-300'
                  }`}
                >
                  <div className="font-semibold text-primary-900">{plan.name}</div>
                  <div className="text-sm text-primary-600">{plan.subtitle}</div>
                  <div className="text-lg font-bold text-accent-600">US${plan.price.toLocaleString()}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {selectedPlan && (
              <input type="hidden" name="selectedPlan" value={selectedPlan} />
            )}
            
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
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                  Email
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
                Company
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
              <label htmlFor="theme" className="block text-sm font-medium text-primary-900 mb-2">
                Theme
              </label>
              <input
                type="text"
                id="theme"
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                placeholder="e.g., Vision/AR, AI infra, Robotics, Biotech"
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
              />
              <p className="text-xs text-primary-500 mt-1">
                Scope: {selectedPlanData?.scope.themes} theme{selectedPlanData?.scope.themes && selectedPlanData.scope.themes > 1 ? 's' : ''}, up to {selectedPlanData?.scope.anchors} anchor employer{selectedPlanData?.scope.anchors && selectedPlanData.scope.anchors > 1 ? 's' : ''}, {selectedPlanData?.scope.regions === 999 ? 'global' : selectedPlanData?.scope.regions + ' region' + (selectedPlanData?.scope.regions && selectedPlanData.scope.regions > 1 ? 's' : '')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="anchors" className="block text-sm font-medium text-primary-900 mb-2">
                  Anchor Employers
                </label>
                <input
                  type="text"
                  id="anchors"
                  name="anchors"
                  value={formData.anchors}
                  onChange={handleChange}
                  placeholder="e.g., OpenAI, Google, Microsoft"
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="regions" className="block text-sm font-medium text-primary-900 mb-2">
                  Regions
                </label>
                <input
                  type="text"
                  id="regions"
                  name="regions"
                  value={formData.regions}
                  onChange={handleChange}
                  placeholder="e.g., US, EU, APAC"
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="identityMode" className="block text-sm font-medium text-primary-900 mb-2">
                  Identity Mode
                </label>
                <select
                  id="identityMode"
                  name="identityMode"
                  value={formData.identityMode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                >
                  <option value="anchors">Identity anchors (default)</option>
                  <option value="links">Public profile links (NDA required)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="rolesFocus" className="block text-sm font-medium text-primary-900 mb-2">
                  Roles Focus
                </label>
                <select
                  id="rolesFocus"
                  name="rolesFocus"
                  value={formData.rolesFocus}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                >
                  <option value="technical">Technical (default)</option>
                  <option value="business">Business</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rush"
                  checked={formData.rush}
                  onChange={handleChange}
                  className="mr-3"
                />
                <span className="text-sm font-medium text-primary-900">
                  24h rush delivery (+${selectedPlanData?.rushCost?.toLocaleString() || 0})
                </span>
              </label>
            </div>

            {/* Add-ons */}
            <div>
              <h4 className="text-lg font-semibold text-primary-900 mb-4">Add-ons</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {addOns.map((addon) => (
                  <label key={addon.id} className="flex items-center p-3 border border-primary-200 rounded-lg hover:bg-primary-50">
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addon.id)}
                      onChange={(e) => handleAddOnChange(addon.id, e.target.checked)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-primary-900">{addon.name}</div>
                      <div className="text-sm text-primary-600">{addon.description}</div>
                      <div className="text-sm font-semibold text-accent-600">+${addon.price.toLocaleString()}</div>
                    </div>
                  </label>
                ))}
              </div>
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
                placeholder="Any specific requirements or questions..."
                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
              />
            </div>

            {/* Price display */}
            <div className="p-4 bg-accent-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary-900">Total Price:</span>
                <span className="text-2xl font-bold text-accent-600">US${totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              Submit Request
            </button>
          </form>

          {/* Fallback note */}
          <div className="text-center mt-8">
            <p className="text-sm text-primary-600">
              {copy.contact.form.fallbackNote}
            </p>
            <a
              href={`mailto:${copy.contact.email}`}
              className="text-accent-600 hover:text-accent-700 font-medium"
            >
              {copy.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}