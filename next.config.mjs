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
      // pretty URL for the Showcase entrypoint
      { source: '/public-50', destination: '/public-50/index.html' },

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
        source: '/public-50/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

export default nextConfig