import React from 'react'
import { cn } from '@/lib/utils'
 

interface CTAGroupProps {
  primaryText: string
  secondaryText: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function CTAGroup({ 
  primaryText, 
  secondaryText, 
  className,
  size = 'md'
}: CTAGroupProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base', 
    lg: 'text-lg'
  }

  return (
    <div className={cn(
      'flex flex-col sm:flex-row items-center gap-4',
      className
    )}>
      {/* Primary CTA */}
      <a
        href="/#contact?plan=pods"
        className={cn(
          'btn-primary w-full sm:w-auto',
          sizeClasses[size]
        )}
        aria-label="Get a report — Pods Report"
      >
        {primaryText}
      </a>

      {/* Secondary CTA */}
      <a
        href="/#how-it-works"
        className={cn(
          'btn-secondary w-full sm:w-auto',
          sizeClasses[size]
        )}
        aria-label="How it works"
      >
        {secondaryText}
      </a>
    </div>
  )
}