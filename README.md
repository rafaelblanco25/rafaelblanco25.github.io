# Rafael Blanco — Personal Website

Personal portfolio and academic/professional profile hosted at [rafaelblanco25.github.io](https://rafaelblanco25.github.io).

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS 3 + Material Tailwind
- **Linting:** ESLint 9
- **Deployment:** GitHub Pages (`gh-pages` branch via GitHub Actions)

## Project Structure

```text
├── .github/workflows/deploy.yml   # CI (lint + build) and automated GitHub Pages deploy
├── public/                        # Static assets (icon.png, robots.txt, sitemap.xml)
├── src/
│   ├── assets/                    # Optimized WebP images, SVG icons, and CV PDF
│   ├── components/                # UI sections (NavBar, IdBanner, AboutMeBanner, etc.)
│   ├── data/profile.js            # Centralized content (bio, skills, experience, research)
│   ├── index.css                  # Tailwind directives and smooth scrolling
│   └── main.jsx                   # App entry point
├── index.html                     # Document shell & SEO/Open Graph metadata
├── tailwind.config.js             # Custom theme colors and background utilities
└── vite.config.js                 # Vite configuration
```

## Updating Content

All profile information, skills, services, work experience, education, courses, and scientific publications are defined in `src/data/profile.js`.

## Scripts

```bash
npm install      # Install dependencies
npm run dev      # Start local dev server
npm run lint     # Run ESLint
npm run build    # Build production bundle into dist/
npm run preview  # Preview production build locally
npm run deploy   # Manual deploy to gh-pages branch (handled automatically by CI on push to master)
```
