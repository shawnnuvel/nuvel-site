import React from 'react'
import { createMailtoLink, getCalendlyUrl } from '@/lib/utils'
import { copy } from '@/content/copy'
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
  const calendlyUrl = getCalendlyUrl()
  
  // Email links with pre-filled templates
  const sampleEmailLink = createMailtoLink(
    'hello@nuvel.ai',
    copy.emails.sampleRequest.subject,
    copy.emails.sampleRequest.body
  )

  // Remove unused pilot link since we now link to /sample

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
        href={sampleEmailLink}
        className={cn(
          'btn-primary w-full sm:w-auto',
          sizeClasses[size]
        )}
      >
        {primaryText}
      </a>

      {/* Secondary CTA */}
      <a
        href="/sample"
        className={cn(
          'btn-secondary w-full sm:w-auto',
          sizeClasses[size]
        )}
      >
        {secondaryText}
      </a>
    </div>
  )
}