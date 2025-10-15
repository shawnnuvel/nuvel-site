// app/public-50/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrueInventor™ Public-50 Showcase | Nuvel',
  description: 'Evidence-linked inventor→patent snapshot with verified registry links.',
  openGraph: {
    title: 'TrueInventor™ Public-50 Showcase | Nuvel',
    description: 'Evidence-linked inventor→patent snapshot with verified registry links.',
    url: 'https://nuvel.ai/public-50',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

// Server Component: emits <iframe> in SSR output
export default function Public50Wrapper() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="w-full" style={{ height: '82vh', maxHeight: 'calc(100vh - 200px)' }}>
        <iframe
          src="/public-50/index.html"
          title="TrueInventor Public-50 Showcase"
          style={{ border: 0, width: '100%', height: '100%' }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p style={{ marginTop: 8 }}>
          Prefer a full-screen view? <a href="/public-50/index.html">Open the standalone showcase</a>
        </p>
        <noscript>
          JavaScript is disabled; open the standalone version:{' '}
          <a href="/public-50/index.html">/public-50/index.html</a>
        </noscript>
      </section>
    </main>
  );
}
