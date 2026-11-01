# WebeWizard site

This project contains a React About page built with Vite. The only biographical statement is the supplied text, “I am a wizard.” The original design uses system fonts and CSS-only decorative stars, with no external runtime assets or analytics. JavaScript is required; a noscript notice explains this when it is disabled.

## Layout

- `index.html` and `src/` — Vite entry and React components.
- `src/styles.css` — original stylesheet, imported by the React entry.
- `dist/` — generated production website; ignored by Git.
- `tests/` — Node checks of React-rendered markup, built assets, CSS, and workflow.
- `docs/` — project notes; excluded from the artifact.
- `../.github/workflows/pages.yml` — main-only Pages workflow that checks and packages the site, then deploys it after the package job succeeds.

## Verify

Use Node.js 22.12 or later. From the repository root:

```sh
npm ci --prefix site
npm run dev --prefix site
```

Open the development URL printed by Vite at `/webe-website/`. On Windows PowerShell with restricted script execution, use `npm.cmd` instead of `npm`.

For production verification:

```sh
npm run build --prefix site
npm test --prefix site
npm run preview --prefix site
```

Build before testing. Checks validate React-rendered content and landmarks, built JavaScript and CSS beneath `/webe-website/`, focus and reduced-motion styles, responsive CSS, WCAG AA text contrast, workflow permissions, main-only job guards, build/check ordering, deployment wiring, and the artifact allowlist. Browser verification additionally checks client mounting, keyboard navigation, and overflow at 320px and desktop widths.

Vite's base is `/webe-website/`, matching the GitHub Pages project root. The workflow installs the lockfile with `npm ci`, builds, and runs checks before uploading only `site/dist`; source, dependencies, documentation, and tests are not published. Both jobs remain restricted to `main`. The deploy job requires successful packaging, uses the `github-pages` environment, and receives only job-scoped `pages: write` and `id-token: write` permissions.

GitHub Pages is configured for the Actions workflow build type. The deployment workflow is included in this feature branch but will not run from it; a push to `main` happens only after the pull request is accepted and merged. Do not manually dispatch the workflow before that acceptance. No merge or deployment is performed as part of this change.
