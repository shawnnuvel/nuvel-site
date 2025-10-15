/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['react-icons']
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },

  // URL rewrites for Showcase
  async rewrites() {
    return [
      // person pages without .html
      { source: '/public-50/people/:slug', destination: '/public-50/people/:slug.html' },
      
      // sitemap pretty URL
      { source: '/public-50/sitemap.xml', destination: '/public-50/sitemap-public-50.xml' },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/public-50/:path*.html',
        headers: [
          // allow same-origin iframe embedding
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },         // MDN: SAMEORIGIN permits same-site framing
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" }, // MDN: controls allowed parent frames
          { key: 'Cache-Control', value: 'public, max-age=60, s-maxage=60, stale-while-revalidate=300' },
        ],
      },
    ];
  }
}

export default nextConfig