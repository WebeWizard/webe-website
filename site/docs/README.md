# WebeWizard site

This project contains a single static HTML/CSS About page. The only biographical statement is the supplied text, “I am a wizard.” The page uses system fonts and CSS-only decorative stars; it has no scripts, frameworks, external assets, analytics, or runtime dependencies.

## Layout

- `public/` — public website files and the Pages artifact source.
- `tests/` — dependency-free Node checks; excluded from the artifact.
- `docs/` — project notes; excluded from the artifact.
- `../.github/workflows/pages.yml` — main-only Pages workflow that checks and packages the site, then deploys it after the package job succeeds.

## Verify

From the repository root, run `node site/tests/check-site.mjs`. It checks page content and landmarks, local asset resolution beneath `/webe-website/`, focus and reduced-motion styles, responsive CSS, text contrast against WCAG AA thresholds, workflow permissions, main-only job guards, the required pre-upload site check, deployment wiring, and the artifact allowlist.

The stylesheet uses a relative URL (`assets/styles.css`), which resolves to `/webe-website/assets/styles.css` at the GitHub Pages project root. The workflow runs on pushes to `main` and manual dispatches on `main`; both jobs are guarded to that branch. It uploads only `site/public`, so documentation and checks are not part of the artifact. The deploy job requires the package job to succeed, uses the `github-pages` environment, and receives only job-scoped `pages: write` and `id-token: write` permissions.

GitHub Pages is configured for the Actions workflow build type. The deployment workflow is included in this feature branch but will not run from it; a push to `main` happens only after the pull request is accepted and merged. Do not manually dispatch the workflow before that acceptance. No merge or deployment is performed as part of this change.
