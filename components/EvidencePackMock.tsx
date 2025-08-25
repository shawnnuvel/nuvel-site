import React from 'react'

export function EvidencePackMock() {
  return (
    <div className="max-w-md mx-auto">
      {/* Document mockup */}
      <div className="relative">
        {/* Main document */}
        <div className="bg-white rounded-lg shadow-lg border border-primary-200 p-6 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary-200">
            <div>
              <div className="w-20 h-4 bg-primary-800 rounded mb-2"></div>
              <div className="text-xs text-primary-500 font-medium">EVIDENCE PACK</div>
            </div>
            <div className="text-right">
              <div className="w-16 h-3 bg-primary-200 rounded mb-1"></div>
              <div className="w-12 h-3 bg-primary-200 rounded"></div>
            </div>
          </div>

          {/* Content rows */}
          <div className="space-y-4">
            {/* Table header */}
            <div className="flex justify-between items-center pb-2 border-b border-primary-100">
              <div className="w-16 h-3 bg-primary-300 rounded"></div>
              <div className="w-12 h-3 bg-primary-300 rounded"></div>
              <div className="w-20 h-3 bg-primary-300 rounded"></div>
            </div>

            {/* Data rows */}
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    i <= 2 ? 'bg-success-500' : 'bg-warning-500'
                  }`}></div>
                  <div className="w-24 h-2 bg-primary-200 rounded"></div>
                </div>
                <div className="w-16 h-2 bg-primary-200 rounded"></div>
                <div className="w-14 h-2 bg-primary-200 rounded"></div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-primary-100 flex justify-between items-center">
            <div className="w-20 h-2 bg-primary-200 rounded"></div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success-500 rounded-full"></div>
              <div className="w-8 h-2 bg-primary-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Background documents */}
        <div className="absolute inset-0 z-0">
          <div className="bg-white rounded-lg shadow-md border border-primary-200 transform translate-x-2 translate-y-2"></div>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="bg-white rounded-lg shadow-sm border border-primary-200 transform translate-x-4 translate-y-4"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="mt-6 text-center">
        <div className="flex justify-center items-center space-x-4 text-sm text-primary-600">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-success-500 rounded-full mr-2"></div>
            <span>Verified</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-warning-500 rounded-full mr-2"></div>
            <span>Flagged</span>
          </div>
        </div>
      </div>
    </div>
  )
}