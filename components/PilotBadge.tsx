import React from 'react'

interface PilotBadgeProps {
  text: string
  className?: string
}

export function PilotBadge({ text, className = '' }: PilotBadgeProps) {
  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-accent-100 border border-accent-200 text-accent-800 text-sm font-medium mb-8 ${className}`}>
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {text}
    </div>
  )
}
