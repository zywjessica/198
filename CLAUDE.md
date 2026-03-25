# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `ng serve` (localhost:4200, auto-reloads)
- **Build:** `node node_modules/.bin/ng build` (static prerendered output to `dist/198/browser/`)
- **Test:** `ng test` (Vitest runner, `--watch=false` for single run)
- **Scaffold:** `ng generate component component-name` (use standalone components only)
- **Package manager:** Bun (`bun.lock`), but build must run under Node.js (Bun has `memory:///` module issue with Angular prerendering)

## Architecture

- **Angular 21** standalone components with static prerendering for GitHub Pages
- **Styling:** Tailwind CSS 4 via PostCSS with custom theme vars (`--color-spa-*`, `--font-heading`, `--font-body`) in `src/styles.css`
- **Fonts:** Lato (body) + Raleway (headings) via Google Fonts
- **Routing:** 7 lazy-loaded page routes in `src/app/app.routes.ts`, prerendered via `RenderMode.Prerender` in `app.routes.server.ts`
- **Data layer:** TypeScript constants in `src/app/data/` (business-info, services, reviews, gallery) — no NgRx
- **Shared components:** `src/app/shared/` — header, nav (with responsive hamburger + dropdown), footer (3-column), sidebar (hours table)
- **Page components:** `src/app/pages/` — home, about, services, reflexology, gallery (with lightbox), contact (Formspree form + Google Maps), reviews
- **Deployment:** GitHub Pages via Actions (`.github/workflows/deploy.yml`), custom domain `www.thefootcarespa.net` (`public/CNAME`)

## Code Style

- **Prettier:** 100 char print width, single quotes, Angular HTML parser (`.prettierrc`)
- **TypeScript:** Strict mode with `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`
- **Indentation:** 2 spaces (`.editorconfig`)
- **Iframe URLs** must use `DomSanitizer.bypassSecurityTrustResourceUrl()` to avoid NG0904 during prerendering
