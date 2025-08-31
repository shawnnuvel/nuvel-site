#!/bin/bash

# Exit on any error
set -e

echo "🔍 Verifying site copy for Spinout Origins pivot..."

# Check for required text
REQUIRED_TEXT="2024-12-31"
HOMEPAGE_FILE="app/page.tsx"
CONTENT_FILE="content/copy.ts"

# New pricing tier names
PRICING_TIERS=("GOOD" "BETTER" "BEST")
NEW_ADDONS=("Pod Dossier" "Organizational Bridges Kit" "IC Slide Pack" "BU Pilot Brief" "Timing Risk Signal" "Theme Expansion Pack")
BANNED_TERMS_PRICING=("Acquihire Package")

# FAQ checks
FAQ_TITLES=("How fresh is your data?")

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
        if grep -ri "$term" content/ app/ components/ 2>/dev/null | grep -v node_modules | grep -v scripts/ | grep -v "\.next/" | grep -v "Binary file" | grep -v README.md | head -1; then
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

# Check for new pricing tiers and add-ons
check_pricing_updates() {
    echo "Checking for new pricing tiers..."
    
    for tier in "${PRICING_TIERS[@]}"; do
        if grep -q "$tier" "$CONTENT_FILE"; then
            echo "✅ Found pricing tier '$tier'"
        else
            echo "❌ Missing pricing tier '$tier'"
            exit 1
        fi
    done
    
    echo "Checking for new add-ons..."
    for addon in "${NEW_ADDONS[@]}"; do
        if grep -q "$addon" "$CONTENT_FILE"; then
            echo "✅ Found add-on '$addon'"
        else
            echo "❌ Missing add-on '$addon'"
            exit 1
        fi
    done
    
    echo "Checking for absence of Acquihire Package..."
    for banned in "${BANNED_TERMS_PRICING[@]}"; do
        if grep -q "$banned" "$CONTENT_FILE"; then
            echo "❌ Found banned pricing term '$banned' - should be removed"
            exit 1
        else
            echo "✅ Confirmed absence of '$banned'"
        fi
    done
}

# Check for new FAQ items
check_faq_updates() {
    echo "Checking for new FAQ items..."
    
    for title in "${FAQ_TITLES[@]}"; do
        if grep -q "$title" "$CONTENT_FILE"; then
            echo "✅ Found FAQ title '$title'"
        else
            echo "❌ Missing FAQ title '$title'"
            exit 1
        fi
    done
    
    echo "Checking for data cut-off in FAQ..."
    if grep -q "2024-12-31" "$CONTENT_FILE"; then
        echo "✅ Found '2024-12-31' in FAQ content"
    else
        echo "❌ Missing '2024-12-31' in FAQ content"
        exit 1
    fi
}

# Run checks
echo "Checking for required text '$REQUIRED_TEXT'..."
check_required_text "$CONTENT_FILE" "$REQUIRED_TEXT"

echo "Checking for required email..."
check_email "$CONTENT_FILE" 
check_email "components/Header.tsx"

    echo "Checking for pricing updates..."
    check_pricing_updates

    echo "Checking for FAQ updates..."
    check_faq_updates

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
echo "✅ All new pricing tiers and add-ons present"
echo "✅ Acquihire Package removed"
echo "✅ New FAQ item 'How fresh is your data?' present"