import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Email utilities
export function createMailtoLink(to: string, subject: string, body: string): string {
  // Properly encode the body with newlines converted to %0A
  const encodedBody = body.trim().replace(/\n/g, '%0A')
  const encodedSubject = subject.trim()
  
  return `mailto:${to}?subject=${encodeURIComponent(encodedSubject)}&body=${encodedBody}`
}

// Environment utilities
export function getCalendlyUrl(): string | null {
  return process.env.NEXT_PUBLIC_CALENDLY_URL || null
}

export function getPlausibleDomain(): string | null {
  return process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || null
}