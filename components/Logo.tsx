import React from 'react'
import Link from 'next/link'

interface LogoProps {
  className?: string
  showProduct?: boolean
}

export function Logo({ className = '', showProduct = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className} hover:opacity-80 transition-opacity`}>
      <div className="flex items-center space-x-2">
        {/* Simple geometric logo mark */}
        <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm transform rotate-45" />
        </div>
        
        {/* Company name */}
        <div className="flex flex-col">
          <span className="text-xl font-bold text-primary-900 tracking-tight">
            Nuvel
          </span>
          {showProduct && (
            <span className="text-sm text-primary-600 font-medium -mt-1">
              Verify Graph
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}