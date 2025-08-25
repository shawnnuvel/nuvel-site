# Nuvel Verify Graph

A clean, neutral, enterprise landing site for Nuvel Verify Graph - bulk employment verification for executive search firms.

## Features

- ✅ **Safe, Generic Terminology** - No platform names or scraping references
- ✅ **Email-First CTAs** - Pre-filled mailto links with professional templates
- ✅ **Enterprise Design** - Minimal, neutral palette with generous whitespace
- ✅ **Full SEO** - Complete metadata, OG images, sitemap, robots.txt
- ✅ **WCAG AA Accessibility** - Keyboard navigation, screen reader support
- ✅ **High Performance** - Optimized images, minimal dependencies
- ✅ **Banned Words Guard** - CI pipeline prevents problematic terms
- ✅ **Vercel Ready** - Single-command deployment

## Quick Start

### Local Development

```bash
# Clone and install
git clone <repo-url>
cd nuvel-verify-graph
pnpm install

# Set environment variables (optional)
cp .env.example .env.local
# Edit .env.local with your Calendly URL and analytics domain

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Run full CI checks
pnpm ci

# Or run individual commands
pnpm lint
pnpm type-check  
pnpm check-banned-words
pnpm build
pnpm start
```

## Deployment

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables if needed:
     - `NEXT_PUBLIC_CALENDLY_URL` (optional)
     - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)
   - Deploy

3. **One-click deploy button:**
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fnuvel-verify-graph)

## Content Management

### Editing Copy

All marketing text is centralized in editable files:

- **`content/copy.ts`** - All section text, headlines, descriptions
- **`content/site.json`** - Company info, contact details, URLs

Example: To change the hero headline:
```typescript
// content/copy.ts
export const copy = {
  hero: {
    title: 'Your New Headline Here',
    subtitle: 'Your new subtitle...',
    // ...
  }
}
```

### Brand Customization

Visual identity is configured in:
- **`config/brand.ts`** - Colors, typography, spacing tokens
- **`styles/globals.css`** - Custom CSS utilities
- **`tailwind.config.ts`** - Tailwind theme extensions

### Email Templates

Pre-filled email CTAs use templates from `content/copy.ts`:
```typescript
emails: {
  sampleRequest: {
    subject: 'Your Subject',
    body: 'Your email body...'
  }
}
```

## Safety & Compliance

### Banned Words

The repository includes a banned words checker that prevents deployment if problematic terms are found:

```bash
pnpm check-banned-words
```

**Banned terms include:**
- Platform names (linkedin, facebook, etc.)
- Scraping terminology (scrape, crawl, harvest, etc.)
- Other problematic terms

### Content Guidelines

- ✅ Use "profile links" instead of platform-specific terms
- ✅ Reference "public professional web sources" for data
- ✅ Include compliance disclaimers about data handling
- ❌ Never mention specific platforms or scraping activities

## Performance

### Lighthouse Targets

- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

### Run Lighthouse Locally

```bash
# Install Lighthouse
npm install -g lighthouse

# Audit development build
pnpm dev
lighthouse http://localhost:3000 --output html

# Audit production build
pnpm build && pnpm start
lighthouse http://localhost:3000 --output html
```

## Architecture

### Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS with custom design system
- **TypeScript:** Full type safety
- **Performance:** Optimized images, fonts, and bundles
- **SEO:** Complete metadata and structured data

### File Structure

```
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Homepage
│   ├── investor-cohort-verification/page.tsx
│   ├── sample/page.tsx          
│   └── api/health/route.ts      # Health check endpoint
├── components/                   # Reusable UI components
│   ├── Hero.tsx, Steps.tsx, Benefits.tsx
│   ├── Header.tsx, Footer.tsx
│   └── CTAGroup.tsx, Container.tsx
├── content/                      # Editable content layer
│   ├── copy.ts                  # All marketing text
│   └── site.json                # Company/contact info
├── config/                       # Configuration
│   └── brand.ts                 # Design tokens
├── scripts/                      # Build and CI scripts
│   ├── check-banned-words.mjs   # Content safety check
│   └── audit-lighthouse.md      # Performance guide
└── .github/workflows/ci.yml     # CI/CD pipeline
```

## Environment Variables

```bash
# .env.local (optional)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-calendar
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Support

- **Health Check:** `/api/health` returns service status
- **Monitoring:** Built-in error tracking and performance monitoring
- **Analytics:** Optional Plausible integration

## License

All rights reserved. Proprietary software for Nuvel.

---

**Questions?** Contact [hello@nuvel.ai](mailto:hello@nuvel.ai)