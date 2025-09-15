import React from 'react'

export function StaticWebBriefTeaser() {
  return (
    <div className="card p-6 border border-accent-200 bg-accent-50">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-primary-900 mb-2">Web Brief</h4>
          <p className="text-primary-600 text-sm">
            A read-only, shareable HTML link perfect for quick stakeholder reviews. 
            No downloads needed—just send the link.
          </p>
        </div>
      </div>
    </div>
  )
}
