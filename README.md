# QUANTUMGRID ENERGY - Next.js Integration

This project has been successfully integrated with Next.js while maintaining all existing functionality.

## Project Structure

- `/app` - Next.js App Router pages and components
- `/public/js` - JavaScript files (copied from `/js`)
- `/html` - Original HTML files (kept for reference)
- `/js` - Original JavaScript files (kept for reference)
- `styles.css` - Global styles (imported in layout)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

All pages have been converted to Next.js:
- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/blog` - Blog page
- `/news` - News & Insights page
- `/contact` - Contact page
- `/testimonials` - Testimonials page
- `/careers` - Careers page
- `/quote` - Get A Quote page
- `/projects` - Projects page

## Key Features

- ✅ All existing JavaScript functionality preserved
- ✅ All CSS styles maintained
- ✅ Navigation updated to use Next.js routing
- ✅ Scripts loaded dynamically per page
- ✅ No changes to existing code logic

## Build for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

1) Set environment variables in Vercel (Project Settings → Environment Variables):
   - `DATABASE_URL`: Postgres connection string (Vercel Postgres or your own).
   - `BLOB_READ_WRITE_TOKEN`: Vercel Blob token for resume uploads.
2) Import the repo into Vercel. Defaults are fine:
   - Build command: `npm run build`
   - Output directory: `.next`
3) Deploy. The API routes (`/api/contact`, `/api/quote`, `/api/careers/apply`) require the database to be reachable with the credentials in `DATABASE_URL`.
4) Optional: run `npm run build` locally before deploying to catch issues early.

### Local development env
Create a `.env.local` file with:
```
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DBNAME
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
```

