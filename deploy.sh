#!/bin/bash
set -e

echo "🚀 Starting TACTEC deployment..."

# 1. Install dependencies
echo "📦 Installing dependencies..."
npm install

# 2. Export environment variables (edit these before running!)
export SITE_URL="https://your-domain.com"
export NEXT_PUBLIC_SITE_URL="https://your-domain.com"
export NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# 3. Build
echo "🏗️  Building project..."
npm run build

# 4. Start server
echo "✅ Build complete. Starting server on http://localhost:3000 ..."
npm start
