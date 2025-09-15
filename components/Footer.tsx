import React from 'react'
import { Container } from './Container'
import { Logo } from './Logo'
import { copy } from '@/content/copy'

export function Footer() {
  return (
    <footer className="bg-primary-50 border-t border-primary-200">
      <Container>
        <div className="py-12">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
            {/* Logo and company info */}
            <div className="flex flex-col space-y-4 max-w-md">
              <Logo />
            </div>

            {/* Quick links */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm font-semibold text-primary-900">
                Quick Links
              </h3>
              <div className="flex flex-col space-y-2">
                <a 
                  href="/sample"
                  className="text-sm text-primary-600 hover:text-primary-800 transition-colors"
                >
                  Sample Report
                </a>
                <a 
                  href="mailto:hello@nuvel.ai"
                  className="text-sm text-primary-600 hover:text-primary-800 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Compliance disclaimer */}
          <div className="mt-12 pt-8 border-t border-primary-200">
            <p className="text-xs text-primary-500 leading-relaxed max-w-4xl">
              Patents publish ~18 months after filing; we provide a forensic snapshot of the public record.
            </p>
            <p className="text-xs text-primary-500 leading-relaxed max-w-4xl mt-2">
              Based on historical public web sources. Supporting evidence only. Client owns decisions. Data cut-off: 2024-12-31.
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-primary-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-primary-500">
              © {new Date().getFullYear()} Nuvel. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:hello@nuvel.ai"
                className="text-xs text-primary-500 hover:text-primary-700 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}