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
  title: 'TrueInventor™ Dossier | Nuvel',
  description: 'Stop cleaning patent exports. Get a decision-ready inventor dossier in 24 hours. Verified, disambiguated people–patent–company dossier you can trust.',
  keywords: ['patent analysis', 'inventor dossier', 'patent export', 'registry links', 'disambiguation'],
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
    title: 'TrueInventor™ Dossier | Nuvel',
    description: 'Stop cleaning patent exports. Get a decision-ready inventor dossier in 24 hours. Verified, disambiguated people–patent–company dossier you can trust.',
    siteName: 'TrueInventor™ Dossier',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'TrueInventor™ Dossier',
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
        
        {/* Organization + Logo JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nuvel",
              "url": "https://nuvel.ai",
              "logo": "https://nuvel.ai/icon.svg",
              "sameAs": [
                "https://www.linkedin.com/company/nuvel-ai"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "hello@nuvel.ai"
              }]
            })
          }}
        />
        
        {/* Plausible Analytics */}
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}

        {/* Cloudflare Web Analytics (free, privacy-first) */}
        {process.env.NEXT_PUBLIC_CFWA_TOKEN && (
          <script 
            defer 
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CFWA_TOKEN}"}`}
          />
        )}

        {/* GA4 (free) basic pageview */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { anonymize_ip: true });
              `
            }} />
          </>
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