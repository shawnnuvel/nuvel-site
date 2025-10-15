'use client';

// app/public-50/page.tsx
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
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p style={{ marginTop: 8 }}>
          Prefer full screen? <a href="/public-50/index.html">Open the standalone showcase</a>
        </p>
        <noscript>
          JavaScript is disabled; open the standalone version:{' '}
          <a href="/public-50/index.html">/public-50/index.html</a>
        </noscript>
        <script dangerouslySetInnerHTML={{__html: `
          (function(){
            var f=document.querySelector('iframe[title="TrueInventor Public-50 Showcase"]');
            if(!f){console.warn('Public-50: iframe not found');return;}
            f.addEventListener('error', function(){ console.error('Public-50: iframe load error'); });
          })();
        `}} />
      </section>
    </main>
  );
}
