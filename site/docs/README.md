# WebeWizard site

This project contains React About and Repository City pages built with Vite. The About page keeps its supplied biographical statement, “I am a wizard.” The Repository City page uses concise, high-level original copy about human direction, agent employees, authorized work, independent inspection, and pilot limits. The shared design uses system fonts and CSS-only decorative stars, with no external runtime assets or analytics. JavaScript is required; a noscript notice explains this when it is disabled.

## Layout

- `index.html` and `src/` — Vite entry, React pages, and hash-route handling.
- `src/styles.css` — original stylesheet, imported by the React entry.
- `dist/` — generated production website; ignored by Git.
- `tests/` — Node checks of both rendered pages, route/navigation behavior, built assets, CSS, and workflow.
- `docs/` — project notes; excluded from the artifact.
- `../.github/workflows/pages.yml` — main-only Pages workflow that checks and packages the site, then deploys it after the package job succeeds.

## Verify

Use Node.js 22.12 or later. From the repository root:

```sh
npm ci --prefix site
npm run dev --prefix site
```

Open the development URL printed by Vite at `/webe-website/`; use the navigation links to move between About and Repository City. The hash routes (`#/about` and `#/webe-city`) preserve direct loading and refresh beneath the project path without server rewrites. On Windows PowerShell with restricted script execution, use `npm.cmd` instead of `npm`.

For production verification:

```sh
npm run build --prefix site
npm test --prefix site
npm run preview --prefix site
```

Build before testing. Checks validate both rendered pages, route selection and navigation links, landmarks, built JavaScript and CSS beneath `/webe-website/`, focus and reduced-motion styles, responsive CSS, WCAG AA text contrast, workflow permissions, main-only job guards, build/check ordering, deployment wiring, and the artifact allowlist. Browser verification should additionally check About-to-City navigation, direct refresh, keyboard focus, reduced motion, and overflow at 320px and desktop widths when browser tooling is available.

Vite's base is `/webe-website/`, matching the GitHub Pages project root. The workflow installs the lockfile with `npm ci`, builds, and runs checks before uploading only `site/dist`; source, dependencies, documentation, and tests are not published. Both jobs remain restricted to `main`. The deploy job requires successful packaging, uses the `github-pages` environment, and receives only job-scoped `pages: write` and `id-token: write` permissions.

GitHub Pages is configured for the Actions workflow build type. The deployment workflow is included in this feature branch but will not run from it; a push to `main` happens only after the pull request is accepted and merged. Do not manually dispatch the workflow before that acceptance. No merge or deployment is performed as part of this change.
