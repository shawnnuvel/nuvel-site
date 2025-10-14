import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TrueInventor™ Public-50 Showcase | Nuvel',
  description: 'Evidence-linked inventor→patent snapshot with verified registry links.',
  openGraph: {
    title: 'TrueInventor™ Public-50 Showcase | Nuvel',
    description: 'Evidence-linked inventor→patent snapshot with verified registry links.',
  },
}

export default function Public50Page() {
  return (
    <main className="container" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      <section className="mx-auto w-full" style={{height: '80vh', maxHeight: 'calc(100vh - 200px)'}}>
        <iframe
          src="/public-50/index.html"
          title="TrueInventor Public-50"
          style={{border: 0, width: '100%', height: '100%'}}
          loading="lazy"
        />
        <p style={{marginTop: 8}}>
          Can't see the showcase? <a href="/public-50/index.html">Open full screen</a>
        </p>
      </section>
    </main>
  );
}
