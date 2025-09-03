'use client'

import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { Container } from './Container'
import { createMailtoLink } from '@/lib/utils'
import { copy } from '@/content/copy'

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  
  // Handle hash navigation when page loads
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const headerHeight = 64
          const elementPosition = element.offsetTop - headerHeight
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [pathname])
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }
    
    const element = document.getElementById(sectionId)
    
    if (element) {
      // Calculate the exact position with header offset
      const headerHeight = 64
      const elementPosition = element.offsetTop - headerHeight
      
      // Add a small delay to ensure smooth scrolling
      setTimeout(() => {
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }, 50)
    }
  }

  return (
    <header className="bg-white border-b border-primary-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="btn-ghost text-sm"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('whats-inside')}
              className="btn-ghost text-sm"
            >
              What's inside
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="btn-ghost text-sm"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="btn-ghost text-sm"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-ghost text-sm"
            >
              Contact
            </button>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="/#contact?plan=pods"
              className="btn-primary text-sm hidden sm:inline-flex"
              aria-label="Get a report — Pods Report"
            >
              Get a report
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}