# Personal portfolio

A React and TypeScript portfolio covering my software engineering experience, coursework and current projects.

## Development

```bash
npm ci
npm run dev
```

`npm run lint` checks source code. `npm run build` compiles TypeScript and creates the production site in `dist/`. `npm run preview` serves that build locally.

## Content

Project summaries, original dates, later milestones and Samsung experience live in `src/data/portfolio.ts`. Both the home page and detail pages use that data. Completed work should have a fixed end date; later extensions should not replace the original course dates. Add a project’s public repository URL to its `link` field when it becomes accessible.

The resume download is `public/Resume.pdf`. Update it from the approved private resume source and verify the copied PDF checksum. Personal preparation and application tracking stay in private repositories.

## Deployment

This Vite SPA builds with `npm run build`, publishes `dist/`, and uses `public/_redirects` for client-side routes. The deployed site is https://rikan47.netlify.app/. Feature branches are used for review before merging to the production branch.
