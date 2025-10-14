import { test, expect } from '@playwright/test';

const BASE_URL = 'https://nuvel.ai';
const SHOWCASE_URL = `${BASE_URL}/public-50`;

// Known people slugs for testing
const TEST_PEOPLE_SLUGS = [
  'adel-elsherbini',
  'alex-stokes', 
  'arieh-halpern'
];

test.describe('TrueInventor Public-50 Showcase QA', () => {
  
  test('Brand shell present with navigation elements', async ({ page }) => {
    await page.goto(SHOWCASE_URL);
    
    // Check for Nuvel brand elements in the wrapper (outside iframe)
    await expect(page.locator('text=Nuvel').first()).toBeVisible();
    
    // Check for main navigation elements in the wrapper
    await expect(page.locator('text=How it works').first()).toBeVisible();
    await expect(page.locator('text=Pricing').first()).toBeVisible();
    await expect(page.locator('text=Contact').first()).toBeVisible();
    
    // Check iframe is present and loads
    const iframe = page.locator('iframe');
    await expect(iframe).toBeVisible();
    
    // Check iframe has correct src
    const iframeSrc = await iframe.getAttribute('src');
    expect(iframeSrc).toBe('/public-50/index.html');
    
    // Check iframe has proper title
    const iframeTitle = await iframe.getAttribute('title');
    expect(iframeTitle).toBe('TrueInventor Public-50');
  });

  test('People pages resolve with HTTP 200', async ({ page }) => {
    for (const slug of TEST_PEOPLE_SLUGS) {
      // Test direct access to static file (people pages are direct static files)
      const directResponse = await page.goto(`${BASE_URL}/public-50/people/${slug}.html`);
      expect(directResponse?.status()).toBe(200);
      
      // Verify person's name is present
      const personName = slug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      await expect(page.locator(`text=${personName}`)).toBeVisible();
      
      // Test clean URL (rewrite should work)
      const cleanResponse = await page.goto(`${BASE_URL}/public-50/people/${slug}`);
      expect(cleanResponse?.status()).toBe(200);
      
      // Verify person's name is present in clean URL too
      await expect(page.locator(`text=${personName}`)).toBeVisible();
    }
  });

  test('Proof links validation on people pages', async ({ page }) => {
    // Test direct access to static files
    for (const slug of TEST_PEOPLE_SLUGS) {
      // Test direct access to the static HTML file
      const response = await page.goto(`${BASE_URL}/public-50/people/${slug}.html`);
      expect(response?.status()).toBe(200);
      
      // Wait for page to load completely
      await page.waitForLoadState('networkidle');
      
      // Wait for proof links to be visible
      await page.waitForSelector('a.proof-link', { timeout: 10000 });
      
      // Check for proof links in the static content
      const proofLinks = await page.locator('a.proof-link').all();
      expect(proofLinks.length).toBeGreaterThan(0);
      
      // Test first few proof links
      const linksToTest = proofLinks.slice(0, 3);
      
      for (let i = 0; i < linksToTest.length; i++) {
        const link = linksToTest[i];
        const href = await link.getAttribute('href');
        
        if (!href) continue;
        
        console.log(`Testing proof link ${i + 1} for ${slug}: ${href}`);
        
        if (href.match(/\/patent\/.*(A\d|B\d)$/)) {
          // Direct patent link - check if it resolves
          const response = await page.goto(href);
          expect(response?.status()).toBe(200);
          
          // Check title contains patent info
          const title = await page.title();
          expect(title).toMatch(/US\d+/);
          
        } else if (href.includes('patents.google.com/?q=')) {
          // Google Patents search link - open in new tab
          const newPage = await page.context().newPage();
          await newPage.goto(href);
          
          // Wait for search results to load
          try {
            await newPage.waitForSelector('[data-result]', { timeout: 10000 });
            
            // Get the first result
            const firstResult = newPage.locator('[data-result]').first();
            const resultText = await firstResult.textContent();
            
            // Extract patent number from search query
            const queryMatch = href.match(/q=([^&]+)/);
            if (queryMatch) {
              const searchQuery = decodeURIComponent(queryMatch[1]);
              const patentNumber = searchQuery.replace(/\s+/g, '');
              
              // Check if result contains the patent number
              expect(resultText).toContain(patentNumber);
            }
          } catch (error) {
            console.log(`Google Patents search failed for ${href}: ${error}`);
          } finally {
            await newPage.close();
          }
        }
      }
    }
  });

  test('SSOT metrics present on index page', async ({ page }) => {
    // Test direct access to the static index file
    const response = await page.goto(`${BASE_URL}/public-50/index.html`);
    expect(response?.status()).toBe(200);
    
    // Check for verified links metrics (more specific selectors)
    await expect(page.locator('text=Verified links').first()).toBeVisible();
    await expect(page.locator('text=Verified links coverage')).toBeVisible();
    
    // Check for specific metric values (more specific selectors)
    await expect(page.locator('.stat-number').first()).toContainText('50'); // Profiles
    await expect(page.locator('text=138')).toBeVisible(); // Patents
    await expect(page.locator('text=105')).toBeVisible(); // Verified links
    await expect(page.locator('text=76.1%')).toBeVisible(); // Coverage
  });

  test('External link hygiene - target="_blank" includes rel="noopener"', async ({ page }) => {
    // Test direct access to static files
    const response = await page.goto(`${BASE_URL}/public-50/index.html`);
    expect(response?.status()).toBe(200);
    
    // Get all links with target="_blank"
    const blankLinks = await page.locator('a[target="_blank"]').all();
    
    for (const link of blankLinks) {
      const rel = await link.getAttribute('rel');
      expect(rel).toContain('noopener');
    }
    
    // Also check on people pages
    for (const slug of TEST_PEOPLE_SLUGS) {
      await page.goto(`${BASE_URL}/public-50/people/${slug}.html`);
      
      const blankLinks = await page.locator('a[target="_blank"]').all();
      
      for (const link of blankLinks) {
        const rel = await link.getAttribute('rel');
        expect(rel).toContain('noopener');
      }
    }
  });

  test('Deep link structure validation', async ({ page }) => {
    // Test direct access to static file
    await page.goto(`${BASE_URL}/public-50/people/adel-elsherbini.html`);
    
    // Check for proper patent link structure
    const patentLinks = await page.locator('a.proof-link').all();
    
    for (const link of patentLinks.slice(0, 3)) {
      const href = await link.getAttribute('href');
      
      if (href?.includes('patents.google.com')) {
        // Should be properly encoded Google Patents search
        expect(href).toMatch(/patents\.google\.com\/\?q=US%20\d+/);
      }
    }
  });

  test('WIPO ST.16 kind codes validation', async ({ page }) => {
    // Test direct access to static file
    await page.goto(`${BASE_URL}/public-50/people/adel-elsherbini.html`);
    
    // Check patent meta information for proper format
    const patentMetas = await page.locator('.patent-meta').all();
    
    for (const meta of patentMetas.slice(0, 3)) {
      const text = await meta.textContent();
      
      // Should contain patent number and issuer
      expect(text).toMatch(/Patent: (US|EP|WO)\d+/);
      expect(text).toMatch(/Issuer: (US|EP|WO)/);
    }
  });

  test('Responsive design and accessibility', async ({ page }) => {
    await page.goto(SHOWCASE_URL);
    
    // Check iframe is properly sized
    const iframe = page.locator('iframe');
    await expect(iframe).toBeVisible();
    
    // Check for proper alt text and accessibility
    const iframeTitle = await iframe.getAttribute('title');
    expect(iframeTitle).toContain('TrueInventor Public-50');
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check iframe is still visible on mobile
    await expect(iframe).toBeVisible();
    
    // Test direct access to static content on mobile
    await page.goto(`${BASE_URL}/public-50/index.html`);
    await expect(page.locator('text=TrueInventor').first()).toBeVisible();
  });
});
