#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from 'fs'
import { join, extname } from 'path'

// Banned words and terms that must not appear in content
const BANNED_TERMS = [
  // Platform names
  'linkedin',
  'facebook', 
  'twitter',
  'instagram',
  'tiktok',
  'youtube',
  'github',
  
  // Scraping/crawling terms
  'scrape',
  'scraping',
  'scraper',
  'crawl',
  'crawling',
  'crawler',
  'bot',
  'spider',
  'harvest',
  'harvesting',
  'harvester',
  
  // Other problematic terms
  'extract',
  'extracting',
  'extractor'
]

// File extensions to check
const TEXT_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.html']

// Files to ignore (documentation and generated files)
const IGNORE_FILES = ['README.md', 'package-lock.json', 'pnpm-lock.yaml', '.lighthouserc.json']

// Directories to ignore
const IGNORE_DIRS = ['node_modules', '.next', '.git', 'dist', 'build', 'coverage', 'scripts']

class BannedWordsChecker {
  constructor() {
    this.violations = []
    this.filesChecked = 0
  }

  checkFile(filePath) {
    try {
      const content = readFileSync(filePath, 'utf-8').toLowerCase()
      this.filesChecked++

      for (const term of BANNED_TERMS) {
        // Check for whole word matches to avoid false positives
        const regex = new RegExp(`\\b${term}\\b`, 'gi')
        const matches = content.match(regex)
        
        if (matches) {
          // Find line numbers for better reporting
          const lines = readFileSync(filePath, 'utf-8').split('\n')
          const lineNumbers = []
          
          lines.forEach((line, index) => {
            if (line.toLowerCase().includes(term)) {
              lineNumbers.push(index + 1)
            }
          })

          this.violations.push({
            file: filePath,
            term: term,
            count: matches.length,
            lines: lineNumbers
          })
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read file ${filePath}: ${error.message}`)
    }
  }

  checkDirectory(dirPath) {
    try {
      const items = readdirSync(dirPath)
      
      for (const item of items) {
        const itemPath = join(dirPath, item)
        
        try {
          const stats = statSync(itemPath)
          
          if (stats.isDirectory()) {
            // Skip ignored directories
            if (IGNORE_DIRS.includes(item) || item.startsWith('.')) {
              continue
            }
            this.checkDirectory(itemPath)
          } else if (stats.isFile()) {
            // Skip ignored files
            if (IGNORE_FILES.includes(item)) {
              continue
            }
            // Check text files
            const ext = extname(item).toLowerCase()
            if (TEXT_EXTENSIONS.includes(ext)) {
              this.checkFile(itemPath)
            }
          }
        } catch (error) {
          // Skip files/dirs that can't be accessed
          continue
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read directory ${dirPath}: ${error.message}`)
    }
  }

  run() {
    console.log('🔍 Checking for banned words and terms...')
    console.log(`Banned terms: ${BANNED_TERMS.join(', ')}`)
    console.log('')

    // Check current directory
    this.checkDirectory('.')

    console.log(`📊 Checked ${this.filesChecked} files`)
    console.log('')

    if (this.violations.length === 0) {
      console.log('✅ No banned words found!')
      return true
    } else {
      console.log(`❌ Found ${this.violations.length} violations:`)
      console.log('')

      for (const violation of this.violations) {
        console.log(`📄 File: ${violation.file}`)
        console.log(`🚫 Term: "${violation.term}" (${violation.count} occurrence${violation.count > 1 ? 's' : ''})`)
        console.log(`📍 Lines: ${violation.lines.join(', ')}`)
        console.log('')
      }

      console.log('❌ Build failed due to banned words. Please remove or replace these terms.')
      return false
    }
  }
}

// Run the checker
const checker = new BannedWordsChecker()
const success = checker.run()

process.exit(success ? 0 : 1)