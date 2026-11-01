import { createElement as h } from "react";

export default function App() {
  return h(
    "div",
    null,
    h("a", { className: "skip-link", href: "#main-content" }, "Skip to main content"),
    h(
      "div",
      { className: "site-shell", id: "top" },
      h(
        "header",
        { className: "site-header" },
        h(
          "a",
          { className: "wordmark", href: "#top", "aria-label": "WebeWizard, home" },
          h("span", { className: "wordmark-star", "aria-hidden": true }, "✦"),
          h("span", null, "WebeWizard"),
        ),
        h(
          "nav",
          { "aria-label": "Main navigation" },
          h("a", { className: "nav-link", href: "#about" }, "About"),
        ),
      ),
      h(
        "main",
        { id: "main-content" },
        h(
          "section",
          { className: "hero", id: "about", "aria-labelledby": "page-title" },
          h(
            "div",
            { className: "stars", "aria-hidden": true },
            h("span", { className: "star star-one" }, "✦"),
            h("span", { className: "star star-two" }, "✧"),
            h("span", { className: "star star-three" }, "✦"),
          ),
          h(
            "div",
            { className: "hero-copy" },
            h("p", { className: "eyebrow" }, "About"),
            h("h1", { id: "page-title" }, "WebeWizard"),
            h("p", { className: "bio" }, "I am a wizard"),
          ),
        ),
      ),
    ),
  );
}
