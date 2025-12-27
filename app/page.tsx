import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { EmailCapture } from '@/components/EmailCapture'
import { hero, products, staticDataPhilosophy, socialProof, dualCTA } from '@/content/home'

export const metadata: Metadata = {
  title: 'Nuvel – IP and talent signals for technical deals',
  description: 'Intellectual property and talent signals you can trust for technical deals. Nuvel connects patent filings to real employment histories, producing inventor dossiers and segment-level maps.',
  openGraph: {
    title: 'Nuvel – IP and talent signals for technical deals',
    description: 'Intellectual property and talent signals you can trust for technical deals.',
  },
}

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="pt-20 pb-20 lg:pt-28 lg:pb-28 bg-gradient-to-b from-white to-primary-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 mb-10 text-balance leading-relaxed max-w-3xl mx-auto">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={hero.primaryCtaLink}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {hero.primaryCta}
              </Link>
              {hero.secondaryCtaLink.startsWith('mailto:') ? (
                <a
                  href={hero.secondaryCtaLink}
                  className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-accent-500 text-accent-600 hover:bg-accent-50 font-semibold text-lg transition-colors duration-200"
                >
                  {hero.secondaryCta}
                </a>
              ) : (
                <Link
                  href={hero.secondaryCtaLink}
                  className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-accent-500 text-accent-600 hover:bg-accent-50 font-semibold text-lg transition-colors duration-200"
                >
                  {hero.secondaryCta}
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Products Strip */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                {products.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {products.items.map((product, index) => (
                <div key={index} className="card p-8 card-hover">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-lg text-primary-700 mb-6">
                    {product.summary}
                  </p>
                  {product.bullets && (
                    <ul className="space-y-3 mb-6">
                      {product.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-primary-600">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="space-y-3">
                    <Link
                      href={product.ctaLink}
                      className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
                    >
                      {product.cta}
                    </Link>
                    {product.sampleLink && (
                      <div className="mt-3">
                        <Link
                          href={product.sampleLink}
                          className="text-sm text-accent-600 hover:text-accent-700 font-medium"
                        >
                          {product.sampleText}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {socialProof.title}
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              {socialProof.subtitle}
            </p>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {socialProof.logos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-50 rounded-lg p-6 shadow-sm border border-primary-200 mb-3">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-primary-900 text-sm mb-1">
                    {logo.name}
                  </h3>
                  <p className="text-xs text-primary-500">
                    {logo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-200 max-w-4xl mx-auto">
            <blockquote className="text-lg text-primary-700 italic mb-4">
              "{socialProof.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="font-semibold text-primary-900">
                  {socialProof.testimonial.author}
                </p>
                <p className="text-sm text-primary-500">
                  {socialProof.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Email Capture */}
      <EmailCapture />

      {/* Static Data Philosophy */}
      <section className="py-16 md:py-24 bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                {staticDataPhilosophy.title}
              </h2>
            </div>
            <div className="card p-8 bg-white">
              <p className="text-lg text-primary-700 leading-relaxed mb-4">
                {staticDataPhilosophy.content}
              </p>
              {staticDataPhilosophy.footnote && (
                <p className="text-sm text-primary-500 italic">
                  {staticDataPhilosophy.footnote}
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Dual CTA Strip */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {dualCTA.items.map((item, index) => (
                <div key={index} className="card p-6 bg-white text-center">
                  <p className="text-primary-700 mb-4">
                    {item.text}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    {item.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
