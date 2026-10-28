# Abhinav Srivastava — Portfolio

A guided, interactive portfolio built with React and Vite. The visual system uses deep plum, coral, marigold, and acid-lime with a clear sequence: introduction, selected work, method, professional path, and contact.

## Run locally

```bash
npm install
npm run dev
```

## Verify before deploying

```bash
npm run lint
npm run build
npm run preview
```

## Content and assets

- Profile details, project case studies, outcome labels, tools, experience and recognition live in `src/data/portfolio.js`.
- Bespoke project illustrations are in `public/projects/art/`. They are explanatory visual summaries, not claimed live product screenshots.
- External links appear only for known public repositories or the provided fare-tracker prototype.
- Contact uses a direct `mailto:` link, rather than a fake form submission.
- No private street address is published.
- The layout includes responsive navigation, focus styles, and reduced-motion support.

## Production URL

The existing Vercel production alias is intended to remain `https://react-tailwind-personal-portfolio-navy.vercel.app/`. Keep the existing Vercel project and domain; do not create a replacement project.