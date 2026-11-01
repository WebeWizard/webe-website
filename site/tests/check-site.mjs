import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import App, { skipToMain } from "../src/App.js";
import { routeFromHash } from "../src/routes.js";

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const document = await readFile(resolve(siteRoot, "dist/index.html"), "utf8");
const html = renderToStaticMarkup(createElement(App));
const cityHtml = renderToStaticMarkup(createElement(App, { initialHash: "#/webe-city" }));
const css = await readFile(resolve(siteRoot, "src/styles.css"), "utf8");
const workflow = (await readFile(resolve(siteRoot, "../.github/workflows/pages.yml"), "utf8")).replace(/\r\n/g, "\n");

assert.match(document, /<html lang="en">/);
assert.match(document, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
assert.match(document, /<title>WebeWizard — About<\/title>/);
assert.match(document, /<div id="root"><\/div>/);
assert.match(document, /<noscript>.+<\/noscript>/);
assert.match(html, /<h1 id="page-title" class="page-title" tabindex="-1">WebeWizard<\/h1>/);
assert.match(html, /<p class="bio">I am a wizard<\/p>/);
assert.equal(routeFromHash("#/about"), "about");
assert.equal(routeFromHash("#/webe-city"), "webe-city");
assert.equal(routeFromHash("#main-content"), null);
let skipPreventedDefault = false;
let skipFocusedMain = false;
skipToMain({ preventDefault() { skipPreventedDefault = true; } }, { focus() { skipFocusedMain = true; } });
assert.equal(skipPreventedDefault, true, "Skip navigation must not replace the active hash route");
assert.equal(skipFocusedMain, true, "Skip navigation must move keyboard focus to main content");
assert.match(html, /href="#\/webe-city"[^>]*>Repository City<\/a>/);
assert.match(html, /href="#\/about"[^>]*>About<\/a>/);
assert.match(cityHtml, /<h1 id="page-title" class="page-title" tabindex="-1">A thoughtful way to build together<\/h1>/);
assert.match(cityHtml, /<nav class="main-nav" aria-label="Main navigation">/);
assert.match(cityHtml, /href="#\/about">About<\/a>/);
assert.match(cityHtml, /href="#\/webe-city" aria-current="page">Repository City<\/a>/);
assert.match(cityHtml, /<ol class="city-steps">[\s\S]*?A person describes a desired outcome[\s\S]*?applicable authorization[\s\S]*?agent employee implements[\s\S]*?separate reviewer inspects/);
assert.match(cityHtml, /municipality/);
assert.match(cityHtml, /early pilot/);
assert.doesNotMatch(html, /<script\b|\son[a-z]+=/i, "React content must not inject scripts or inline handlers");
assert.doesNotMatch(cityHtml, /<script\b|\son[a-z]+=/i, "City content must not inject scripts or inline handlers");
assert.doesNotMatch(html, /https?:\/\//i, "No external assets or links are permitted");
assert.doesNotMatch(cityHtml, /https?:\/\//i, "City content must not use external assets or links");
assert.match(html, /<main id="main-content" tabindex="-1">/);
assert.match(html, /class="skip-link" href="#main-content"/);
assert.match(cityHtml, /<main id="main-content" tabindex="-1">/);
assert.match(cityHtml, /class="skip-link" href="#main-content"/);
assert.match(html, /<nav class="main-nav" aria-label="Main navigation">/);
assert.match(html, /class="stars" aria-hidden="true"/);

const assets = [...document.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1]);
assert.ok(assets.some((asset) => asset.endsWith(".js")), "Built React JavaScript is required");
assert.ok(assets.some((asset) => asset.endsWith(".css")), "Built CSS is required");
for (const asset of assets) {
  assert.ok(asset.startsWith("/webe-website/assets/"), `Unexpected asset path: ${asset}`);
  const deployedAsset = new URL(asset, "https://webeWizard.github.io/webe-website/");
  assert.ok(deployedAsset.pathname.startsWith("/webe-website/"));
  const content = await readFile(resolve(siteRoot, "dist", asset.slice("/webe-website/".length)), "utf8");
  assert.ok(content.length > 0, `Built asset is empty: ${asset}`);
}
const builtFiles = await readdir(resolve(siteRoot, "dist"), { recursive: true });
assert.ok(builtFiles.every((file) => file === "index.html" || file === "assets" || file.startsWith("assets/") || file.startsWith("assets\\")), "Only website assets may be published");

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
assert.match(css, /\.page-title:focus\s*\{[^}]*outline:\s*3px solid/i);
assert.match(css, /\.main-nav\s*\{[^}]*flex-wrap:\s*wrap/i);
assert.match(css, /\.city-steps\s*\{[^}]*max-width:\s*62ch/i);
assert.match(css, /\.skip-link:focus\s*\{[^}]*transform:\s*translateY\(0\)/);
assert.match(css, /@media\s*\(max-width:\s*40rem\)/, "A narrow/mobile responsive breakpoint is required for 320px layouts")
assert.match(css, /font-size:\s*clamp\(2rem,\s*9\.5vw,\s*5\.5rem\)/, "The heading size must fit a 320px viewport");
assert.match(css, /width:\s*min\(100% - 2rem, 70rem\)/, "Content must fit within narrow viewports without horizontal overflow");
assert.doesNotMatch(css, /(?:^|[},])\s*(?:html|body)\s*\{[^}]*\bmin-width\s*:\s*320px/i, "The document must fit the viewport's available width, including when a vertical scrollbar reduces the layout viewport below 320px");
assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
assert.match(css, /scroll-behavior:\s*auto/);

assert.match(workflow, /branches:\s*\[main\]/);
assert.match(workflow, /workflow_dispatch:/);
assert.match(workflow, /if:\s*github\.ref == .refs\/heads\/main./, "Manual dispatch must be restricted to main");
const workflowPermissions = workflow.match(/^permissions:\r?\n((?:  [\w-]+:\s*[\w-]+\r?\n)+)/m);
assert.ok(workflowPermissions, "Workflow-level permissions must be explicitly declared");
assert.deepEqual(workflowPermissions[1].trim().split(/\r?\n/).map((line) => line.trim()), ["contents: read"]);
assert.match(workflow, /actions\/upload-pages-artifact@/);
assert.match(workflow, /path:\s*site\/dist/);
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
assert.match(packageJob, /cache-dependency-path:\s*site\/package-lock\.json/);
assert.match(packageJob, /run:\s*npm ci --prefix site/);
assert.match(packageJob, /run:\s*npm run build --prefix site/);
assert.match(packageJob, /run:\s*npm test --prefix site/);
const steps = ["npm ci --prefix site", "npm run build --prefix site", "npm test --prefix site", "actions/upload-pages-artifact@"];
for (let index = 1; index < steps.length; index++) {
  assert.ok(packageJob.indexOf(steps[index - 1]) < packageJob.indexOf(steps[index]), "Install, build, checks, and upload must run in order");
}
assert.match(deployJob, /needs:\s*package-site/);
const deployPermissions = deployJob.match(/^    permissions:\r?\n((?:      [\w-]+:\s*[\w-]+\r?\n)+)/m);
assert.ok(deployPermissions, "Deployment permissions must be explicitly job-scoped");
assert.deepEqual(deployPermissions[1].trim().split(/\r?\n/).map((line) => line.trim()), ["pages: write", "id-token: write"]);
assert.match(deployJob, /environment:\s*\n\s+name:\s*github-pages\s*\n\s+url:\s*\$\{\{\s*steps\.deployment\.outputs\.page_url\s*\}\}/);
assert.match(deployJob, /id:\s*deployment\s*\n\s+uses:\s*actions\/deploy-pages@/);
console.log("PASS About and Repository City routes, navigation, production assets, accessibility hooks, contrast, and guarded Pages build/deployment checks");
