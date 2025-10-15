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
  twitter: {
    card: 'summary_large_image',
    title: 'TrueInventor™ Public-50 Showcase | Nuvel',
    description: 'Evidence-linked inventor→patent snapshot with verified registry links.',
  },
};

export default function Public50Wrapper() {
  // Renders inside Nuvel's global layout (header/footer/fonts) via your app shell.
  // The showcase itself is isolated in a same-origin iframe to prevent CSS/JS collisions.
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="w-full" style={{ height: '82vh', maxHeight: 'calc(100vh - 200px)' }}>
        <iframe
          src="/public-50/index.html"
          title="TrueInventor Public-50 Showcase"
          style={{ border: 0, width: '100%', height: '100%' }}
          loading="lazy"
        />
        <p style={{ marginTop: 8 }}>
          Prefer a full-screen view?{' '}
          <a href="/public-50/index.html">Open the standalone showcase</a>
        </p>
      </section>
    </main>
  );
}
