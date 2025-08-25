# Lighthouse Audit Guide

This document explains how to run Lighthouse audits locally to ensure performance, accessibility, SEO, and best practices compliance.

## Prerequisites

Install Lighthouse globally:
```bash
npm install -g lighthouse
```

## Running Audits

1. **Start the development server:**
   ```bash
   pnpm dev
   ```

2. **Run Lighthouse audit:**
   ```bash
   lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
   ```

3. **For production build audit:**
   ```bash
   pnpm build
   pnpm start
   lighthouse http://localhost:3000 --output html --output-path ./lighthouse-prod-report.html
   ```

## Target Scores

We aim for the following minimum Lighthouse scores:

- **Performance:** ≥90
- **Accessibility:** ≥90  
- **Best Practices:** ≥90
- **SEO:** ≥90

## Common Optimizations

### Performance
- Use `next/image` for optimized images
- Minimize bundle size 
- Use proper caching headers
- Optimize fonts with `next/font`

### Accessibility
- Ensure proper heading hierarchy
- Add alt text to images
- Use sufficient color contrast
- Include skip links
- Test keyboard navigation

### SEO
- Include proper meta tags
- Use structured data
- Optimize page titles and descriptions
- Ensure mobile-friendly design

### Best Practices
- Use HTTPS in production
- Avoid deprecated APIs
- Implement proper security headers
- Use modern image formats

## Automated Testing

The CI pipeline includes Lighthouse CI for automated testing. Configure thresholds in `.lighthouserc.json`:

```json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance": ["warn", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["warn", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```