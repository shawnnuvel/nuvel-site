import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getPlausibleDomain } from '@/lib/utils'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Nuvel Verify Graph - Bulk Employment Verification for Executive Search',
  description: 'White-label Evidence Packs powered by the Nuvel Verify Graph. 24-48h SLA with standardized methodology for executive search firms.',
  keywords: ['employment verification', 'executive search', 'evidence packs', 'verification graph', 'white-label'],
  authors: [{ name: 'Nuvel' }],
  creator: 'Nuvel',
  publisher: 'Nuvel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nuvel-verify-graph.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Nuvel Verify Graph - Bulk Employment Verification for Executive Search',
    description: 'White-label Evidence Packs powered by the Nuvel Verify Graph. 24-48h SLA with standardized methodology for executive search firms.',
    siteName: 'Nuvel Verify Graph',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Nuvel Verify Graph',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const plausibleDomain = getPlausibleDomain()

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to optimize font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Plausible Analytics */}
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Skip link for accessibility */}
        <a 
          href="#main-content" 
          className="skip-link"
        >
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}