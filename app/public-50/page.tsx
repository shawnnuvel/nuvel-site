import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TrueInventor™ Public-50 Showcase | Nuvel',
  description: 'Evidence-linked inventor→patent snapshot with verified registry links.',
  openGraph: {
    title: 'TrueInventor™ Public-50 Showcase | Nuvel',
    description: 'Evidence-linked inventor→patent snapshot with verified registry links.',
  },
}

export default function Public50() {
  return (
    <main className="container mx-auto px-4">
      <section 
        className="mx-auto w-full" 
        style={{height: '80vh', maxHeight: 'calc(100vh - 200px)'}}
      >
        <iframe
          src="/public-50/index.html"
          title="TrueInventor Public-50"
          style={{border: 0, width: '100%', height: '100%'}}
          loading="lazy"
        />
      </section>
    </main>
  )
}
