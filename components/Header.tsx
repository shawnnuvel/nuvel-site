'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { Container } from './Container'
import { createMailtoLink } from '@/lib/utils'
import { copy } from '@/content/copy'

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
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
    <>
      <header className="bg-white border-b border-primary-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo />

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('steps')}
                className="btn-ghost text-sm"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="btn-ghost text-sm"
              >
                What you get
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
          </div>
        </Container>
      </header>

      {/* Sticky CTA */}
      {isScrolled && (
        <div className="fixed top-4 right-4 z-50">
          <a
            href="mailto:hello@nuvel.ai?subject=Request sample pack — Patent Expert Maps&body=Company name:%0ATechnical domain:%0ATimeline:"
            className="inline-flex items-center px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm rounded-lg shadow-lg transition-colors"
            aria-label="Get a report"
          >
            Get a report
          </a>
        </div>
      )}
    </>
  )
}