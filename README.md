# Medal.tv Comparison Landing Pages

SEO-optimized static comparison pages for Medal.tv vs competitor game recording tools.

## Stack

- Astro 6 (static site generation)
- TailwindCSS 4
- TypeScript

## Pages

| Route | Status |
|-------|--------|
| `/` | Index with links to all comparisons |
| `/medal-vs-obs/` | Medal vs OBS Studio (live) |
| `/medal-vs-xbox-game-bar/` | Medal vs Xbox Game Bar (live) |
| `/medal-vs-shadowplay/` | Medal vs NVIDIA ShadowPlay (coming soon) |
| `/medal-vs-outplayed/` | Medal vs Outplayed (coming soon) |
| `/medal-vs-insights-capture/` | Medal vs Insights Capture (coming soon) |
| `/medal-vs-amd-relive/` | Medal vs AMD ReLive (coming soon) |

## SEO Features

- Pre-rendered static HTML (no client-side rendering needed for content)
- Proper title tags, meta descriptions, Open Graph, and Twitter Card tags
- FAQ JSON-LD structured data on every comparison page
- Canonical URLs
- Semantic HTML with proper heading hierarchy (h1 > h2 > h3)

## Development

```sh
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build static HTML to ./dist/
npm run preview    # Preview the built site locally
```

## Deploy to Vercel

### Option 1: Git push (recommended)
1. Push this repo to GitHub
2. Import the repo in Vercel dashboard
3. Vercel auto-detects Astro and deploys (zero config)

### Option 2: Vercel CLI
```sh
npx vercel
```

The `vercel.json` is included but optional -- Vercel auto-detects Astro projects.

## Adding a New Comparison Page

1. Add the comparison data to `src/data/comparisons.ts` in the `allComparisons` array
2. Remove the corresponding entry from `placeholderPages` if it exists
3. Create a new page at `src/pages/<slug>/index.astro` following the pattern of existing pages
4. Run `npm run build` to verify

## Project Structure

```
src/
  components/       # Reusable Astro components (Header, Hero, ComparisonTable, etc.)
  data/             # Comparison data and types
  layouts/          # Base HTML layout with SEO tags
  pages/            # File-based routing (each folder = a page)
  styles/           # TailwindCSS config and global styles
```
