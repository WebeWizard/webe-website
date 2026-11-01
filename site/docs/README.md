# WebeWizard site

This project contains a single static HTML/CSS About page. The only biographical statement is the supplied text, “I am a wizard.” The page uses system fonts and CSS-only decorative stars; it has no scripts, frameworks, external assets, analytics, or runtime dependencies.

## Layout

- `public/` — public website files and the Pages artifact source.
- `tests/` — dependency-free Node checks; excluded from the artifact.
- `docs/` — project notes; excluded from the artifact.
- `../.github/workflows/pages.yml` — main-only Pages artifact packaging workflow; it does not deploy.

## Verify

From the repository root, run `node site/tests/check-site.mjs`. It checks page content and landmarks, local asset resolution beneath `/webe-website/`, focus and reduced-motion styles, responsive CSS, text contrast against WCAG AA thresholds, workflow permissions, and the artifact allowlist.

The stylesheet uses a relative URL (`assets/styles.css`), which resolves to `/webe-website/assets/styles.css` at the GitHub Pages project root. The workflow uploads only `site/public`; documentation and checks are not part of the artifact.

GitHub Pages is configured for the Actions workflow build type. The current workflow only packages an artifact, with no deploy job or deployment action. A deployment must not be added or run before resident acceptance of the final pull request.
