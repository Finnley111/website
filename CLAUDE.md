# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

Single-page personal portfolio site built with **Astro 5** + **React 19** + **Tailwind CSS v4**, deployed to GitHub Pages at `finnley111.github.io/website/`.

The entire site lives in `src/pages/index.astro`. There are no other pages. All styling is in `src/styles/global.css` (~750 lines of custom CSS). Static assets (images, videos, PDF resume) live in `public/`.

## Deployment

- Deployed automatically via `.github/workflows/deploy.yml` on push to `main`
- Astro is configured with `base: "/website/"` — all asset paths must use Astro's `import` or the `base` helper to resolve correctly under the subdirectory
- Site URL in `astro.config.mjs` is `https://finnley111.github.io`

## Known Issues

- `src/components/Sticker.jsx` is imported in `index.astro` but the file does not exist — the component is not currently used anywhere functional, so the import should either be removed or the component created.
