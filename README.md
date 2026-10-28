# Abhinav Srivastava — Portfolio

An editorial, responsive personal portfolio built with React and Vite. The redesigned direction uses a warm paper-and-ink palette, sharp geometry, large type, structured project case studies, and purposeful interactions instead of a grid of rounded cards.

## Run locally

\`\`\`bash
npm install
npm run dev
\`\`\`

## Verify

\`\`\`bash
npm run lint
npm run build
npm run preview
\`\`\`

## Content and configuration

- Portfolio facts and project details live in \`src/data/portfolio.js\`.
- Supplied public images remain under \`public/\`.
- Contact uses a \`mailto:\` link and does not pretend to submit a backend form.
- External links are included only for known public repositories or the live fare-tracker prototype.
- A street address is intentionally not published.
- Google Fonts are loaded remotely with system fallbacks.

## Deployment

The intended production address remains \`https://react-tailwind-personal-portfolio-navy.vercel.app/\`. Keep the existing Vercel project and production domain; do not create a replacement deployment project. Verify the production alias after the approved changes reach the production branch.