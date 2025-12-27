export type PostStatus = 'coming_soon' | 'published'

export interface BlogPost {
  slug: string
  title: string
  tagline: string
  date: string
  status: PostStatus
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'patent-signals-in-diligence',
    title: 'How patent signals change technical due diligence',
    tagline: 'Why inventor dossiers beat patent counts in deal sourcing',
    date: '2024-01-15',
    status: 'coming_soon'
  },
  {
    slug: 'segment-level-ip-maps',
    title: 'Segment-level IP maps for deal teams',
    tagline: 'Using company × country views to assess technical depth',
    date: '2024-01-22',
    status: 'coming_soon'
  },
  {
    slug: 'employment-patent-signals',
    title: 'Employment + patent signals: what you can trust',
    tagline: 'What static data can and cannot tell you about technical teams',
    date: '2024-01-29',
    status: 'coming_soon'
  }
]

