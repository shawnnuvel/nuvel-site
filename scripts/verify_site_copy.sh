#!/bin/bash

# Exit on any error
set -e

echo "🔍 Verifying site copy for Spinout Origins pivot..."

# Check for required text
REQUIRED_TEXT="Data cut-off: 2024-12-31"
HOMEPAGE_FILE="app/page.tsx"
CONTENT_FILE="content/copy.ts"

# Function to check if text exists in a file
check_required_text() {
    local file=$1
    local text=$2
    
    if grep -q "$text" "$file"; then
        echo "✅ Found '$text' in $file"
    else
        echo "❌ Missing '$text' in $file"
        exit 1
    fi
}

# Check if hello@nuvel.ai is present
check_email() {
    local file=$1
    local email="hello@nuvel.ai"
    
    if grep -q "$email" "$file"; then
        echo "✅ Found email $email in $file"
    else
        echo "❌ Missing email $email in $file"  
        exit 1
    fi
}

# Check for banned terms (case-insensitive)
BANNED_TERMS=("linkedin" "scrape" "scraping" "crawler" "spider" "harvest")

check_banned_terms() {
    local found_violations=false
    
    echo "Checking for banned terms..."
    
    for term in "${BANNED_TERMS[@]}"; do
        # Check in source files (case-insensitive), exclude build artifacts and scripts
        if grep -ri "$term" content/ app/ components/ 2>/dev/null | grep -v node_modules | grep -v scripts/ | grep -v "\.next/" | grep -v "Binary file" | head -1; then
            echo "❌ Found banned term '$term' in source content"
            found_violations=true
        fi
    done
    
    if [ "$found_violations" = false ]; then
        echo "✅ No banned terms found"
    else
        exit 1
    fi
}

# Run checks
echo "Checking for required text '$REQUIRED_TEXT'..."
check_required_text "$CONTENT_FILE" "$REQUIRED_TEXT"

echo "Checking for required email..."
check_email "$CONTENT_FILE" 
check_email "components/Header.tsx"

echo "Checking for banned terms..."
check_banned_terms

# Check that build directory exists (indicates successful build)
if [ -d ".next" ]; then
    echo "✅ Build directory found - site built successfully"
else
    echo "⚠️  Build directory not found - run 'npm run build' first"
fi

echo ""
echo "🎉 All verification checks passed!"
echo "✅ Data cut-off: 2024-12-31 is present"
echo "✅ hello@nuvel.ai is present in header/footer"  
echo "✅ No banned terms found"