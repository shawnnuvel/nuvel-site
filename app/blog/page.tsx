import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { blogPosts } from '@/content/blog'

export const metadata: Metadata = {
  title: 'Nuvel Notes | Deal-grade IP & talent signals',
  description: 'Short, practical pieces on using IP + talent signals in deals.',
  openGraph: {
    title: 'Nuvel Notes | Deal-grade IP & talent signals',
    description: 'Short, practical pieces on using IP + talent signals in deals.',
  },
}

export default function BlogPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-b from-white to-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6 text-balance">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 mb-10 text-balance leading-relaxed max-w-3xl mx-auto">
              Short, practical pieces on using IP + talent signals in deals, strategy, and deal sourcing.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts List */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className={`card p-8 ${
                    post.status === 'coming_soon' ? 'opacity-75' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                        {post.title}
                      </h2>
                      <p className="text-lg text-primary-600 mb-4">
                        {post.tagline}
                      </p>
                    </div>
                    {post.status === 'coming_soon' && (
                      <span className="ml-4 px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full whitespace-nowrap">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-primary-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

