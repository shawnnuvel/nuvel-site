#!/usr/bin/env bash
set -euo pipefail
ROOT="${0%/*}/.."
cd "$ROOT"

miss=0

req=(
  "Management Team Overlap Analysis for PE & Corp Dev"
  "Attachable, auditable co-employment evidence delivered in 24 hours."
  "Get a watermarked sample"
  "Verified Overlaps (entity/same-country)"
  "Brand-level Overlaps (different/unknown office)"
  "Supporting evidence only; not a consumer report."
  "historical public web sources"
)
ban=("linkedin" "scrape" "scraping" "crawler" "spider" "harvest" "lawfully obtained")

check_files=$(git ls-files | grep -v node_modules | grep -v README.md | grep -v check-banned-words.mjs | tr '\n' ' ')
for s in "${req[@]}"; do
  if ! LC_ALL=C grep -Rqs -- "${s}" $check_files; then
    echo "MISSING: ${s}"; miss=1
  fi
done
for b in "${ban[@]}"; do
  if LC_ALL=C grep -Rqi -- "${b}" $check_files; then
    echo "BANNED TERM FOUND: ${b}"; miss=1
  fi
done

if [[ $miss -eq 0 ]]; then
  echo "PASS: NVG ICP copy present; no banned terms."
else
  echo "FAIL: See messages above."; exit 1
fi