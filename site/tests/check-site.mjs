import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const html = await readFile(resolve(siteRoot, "public/index.html"), "utf8");
const css = await readFile(resolve(siteRoot, "public/assets/styles.css"), "utf8");
const workflow = await readFile(resolve(siteRoot, "../.github/workflows/pages.yml"), "utf8");

assert.match(html, /<html lang="en">/);
assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
assert.match(html, /<title>WebeWizard — About<\/title>/);
assert.match(html, /<h1 id="page-title">WebeWizard<\/h1>/);
assert.match(html, /<p class="bio">I am a wizard<\/p>/);
assert.doesNotMatch(html, /<script\b|\son[a-z]+=/i, "The page must remain static HTML/CSS without script or inline handlers");
assert.doesNotMatch(html, /https?:\/\//i, "No external assets or links are permitted");
assert.match(html, /<main id="main-content">/);
assert.match(html, /class="skip-link" href="#main-content"/);
assert.match(html, /<nav aria-label="Main navigation">/);
assert.match(html, /href="#about"/);
assert.match(html, /class="stars" aria-hidden="true"/);

const stylesheet = html.match(/<link rel="stylesheet" href="([^"]+)">/);
assert.ok(stylesheet, "A local stylesheet link is required");
assert.ok(!stylesheet[1].startsWith("/"), "The stylesheet path must be relative");
const deployedAsset = new URL(stylesheet[1], "https://webeWizard.github.io/webe-website/");
assert.ok(deployedAsset.pathname.startsWith("/webe-website/"), `Asset must resolve under project path, got ${deployedAsset.pathname}`);
assert.equal(deployedAsset.pathname, "/webe-website/assets/styles.css");

function colorFrom(token) {
  const match = css.match(new RegExp(`${token}:\\s*(#[0-9a-f]{6})`, "i"));
  assert.ok(match, `Missing color token ${token}`);
  return match[1];
}
function luminance(hex) {
  const channels = hex.slice(1).match(/.{2}/g).map((part) => parseInt(part, 16) / 255);
  const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}
function contrast(foreground, background) {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}
const page = colorFrom("--color-page");
const card = colorFrom("--color-card");
const text = colorFrom("--color-text");
const muted = colorFrom("--color-muted");
const accent = colorFrom("--color-accent");
for (const [label, foreground, background] of [
  ["body text on page", text, page],
  ["muted bio on card", muted, card],
  ["accent eyebrow on card", accent, card],
]) {
  const ratio = contrast(foreground, background);
  assert.ok(ratio >= 4.5, `${label} contrast ${ratio.toFixed(2)}:1 is below WCAG AA 4.5:1`);
  console.log(`PASS ${label}: ${ratio.toFixed(2)}:1`);
}
assert.match(css, /a:focus-visible\s*\{[^}]*outline:\s*3px solid/i);
assert.match(css, /\.skip-link:focus\s*\{[^}]*transform:\s*translateY\(0\)/);
assert.match(css, /@media\s*\(max-width:\s*40rem\)/, "A narrow/mobile responsive breakpoint is required for 320px layouts")
assert.match(css, /font-size:\s*clamp\(2rem,\s*9\.5vw,\s*5\.5rem\)/, "The heading size must fit a 320px viewport");
assert.match(css, /width:\s*min\(100% - 2rem, 70rem\)/, "Content must fit within narrow viewports without horizontal overflow");
assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
assert.match(css, /scroll-behavior:\s*auto/);

assert.match(workflow, /branches:\s*\[main\]/);
assert.match(workflow, /workflow_dispatch:/);
assert.match(workflow, /if:\s*github\.ref == .refs\/heads\/main./, "Manual dispatch must be restricted to main");
assert.match(workflow, /permissions:\s*\n\s+contents:\s+read/);
assert.match(workflow, /actions\/upload-pages-artifact@/);
assert.match(workflow, /path:\s*site\/public/);
assert.doesNotMatch(workflow, /path:\s*site\s*$/m, "Docs and tests must not be included in the published artifact");

function workflowJob(name) {
  const start = workflow.indexOf(`  ${name}:\n`);
  assert.notEqual(start, -1, `Missing ${name} workflow job`);
  const contentStart = start + `  ${name}:\n`.length;
  const nextJob = workflow.slice(contentStart).search(/^  [\w-]+:\s*$/m);
  return workflow.slice(contentStart, nextJob === -1 ? undefined : contentStart + nextJob);
}
const packageJob = workflowJob("package-site");
const deployJob = workflowJob("deploy");
for (const [name, job] of [["package-site", packageJob], ["deploy", deployJob]]) {
  assert.match(job, /if:\s*github\.ref == .refs\/heads\/main./, `${name} must run only on main, including manual dispatch`);
}
assert.match(packageJob, /run:\s*node site\/tests\/check-site\.mjs/);
assert.ok(packageJob.indexOf("node site/tests/check-site.mjs") < packageJob.indexOf("actions/upload-pages-artifact@"), "Site checks must pass before artifact upload");
assert.match(deployJob, /needs:\s*package-site/);
assert.match(deployJob, /permissions:\s*\n\s+pages:\s*write\s*\n\s+id-token:\s*write/);
assert.doesNotMatch(deployJob, /contents:\s*write|write-all/i, "Deployment permissions must remain job-scoped and minimal");
assert.match(deployJob, /environment:\s*\n\s+name:\s*github-pages\s*\n\s+url:\s*\$\{\{\s*steps\.deployment\.outputs\.page_url\s*\}\}/);
assert.match(deployJob, /id:\s*deployment\s*\n\s+uses:\s*actions\/deploy-pages@/);
console.log("PASS semantic HTML, keyboard/focus hooks, project-relative asset, responsive CSS, reduced motion, WCAG contrast, and guarded Pages deployment workflow checks");
