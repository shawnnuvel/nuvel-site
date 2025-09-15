import React from 'react'
import { Container } from './Container'
import { problemSolution } from '@/content/trueinventor'

export function ProblemSolution() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Problem */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
                {problemSolution.problem.title}
              </h2>
              <ul className="space-y-4">
                {problemSolution.problem.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span className="text-primary-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
                {problemSolution.solution.title}
              </h2>
              <ul className="space-y-4">
                {problemSolution.solution.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-success-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span className="text-primary-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
