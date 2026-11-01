import { createElement as h, useEffect, useRef, useState } from "react";
import { ABOUT_ROUTE, CITY_ROUTE, routeFromHash } from "./routes.js";

function DecorativeStars() {
  return h(
    "div",
    { className: "stars", "aria-hidden": true },
    h("span", { className: "star star-one" }, "✦"),
    h("span", { className: "star star-two" }, "✧"),
    h("span", { className: "star star-three" }, "✦"),
  );
}

function PageHeading({ headingRef, children }) {
  return h("h1", { id: "page-title", className: "page-title", ref: headingRef, tabIndex: -1 }, children);
}

export function skipToMain(event, mainContent) {
  event.preventDefault();
  mainContent?.focus();
}

function AboutPage({ headingRef }) {
  return h(
    "section",
    { className: "hero", id: "about", "aria-labelledby": "page-title" },
    h(DecorativeStars),
    h(
      "div",
      { className: "hero-copy" },
      h("p", { className: "eyebrow" }, "About"),
      h(PageHeading, { headingRef }, "WebeWizard"),
      h("p", { className: "bio" }, "I am a wizard"),
    ),
  );
}

function CityPage({ headingRef }) {
  return h(
    "section",
    { className: "hero", id: "webe-city", "aria-labelledby": "page-title" },
    h(DecorativeStars),
    h(
      "div",
      { className: "hero-copy city-copy" },
      h("p", { className: "eyebrow" }, "Repository City"),
      h(PageHeading, { headingRef }, "A thoughtful way to build together"),
      h("p", { className: "bio" }, "A software project can work a little like a municipality: people set direction, while agent employees help with authorized tasks."),
      h(
        "section",
        { className: "city-section", "aria-labelledby": "workflow-title" },
        h("h2", { id: "workflow-title" }, "How work moves"),
        h(
          "ol",
          { className: "city-steps" },
          h("li", null, "A person describes a desired outcome."),
          h("li", null, "The team plans the work and records the applicable authorization."),
          h("li", null, "An agent employee implements within that scope."),
          h("li", null, "A separate reviewer inspects the result before the resident decides whether to accept it."),
        ),
      ),
      h("p", { className: "pilot-note" }, "People direct the agents; agents do not set policy or authorize their own work. This is an early pilot: its records describe decisions but do not authenticate who made them. Human judgment remains essential."),
    ),
  );
}

export default function App({ initialHash } = {}) {
  const browserHash = typeof window === "undefined" ? "" : window.location.hash;
  const [page, setPage] = useState(() => routeFromHash(initialHash ?? browserHash) ?? ABOUT_ROUTE);
  const headingRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = routeFromHash(window.location.hash);
      if (nextPage) setPage(nextPage);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.title = page === CITY_ROUTE ? "WebeWizard — Repository City" : "WebeWizard — About";
    headingRef.current?.focus({ preventScroll: true });
  }, [page]);

  const isCity = page === CITY_ROUTE;
  return h(
    "div",
    null,
    h(
      "a",
      {
        className: "skip-link",
        href: "#main-content",
        onClick: (event) => skipToMain(event, document.getElementById("main-content")),
      },
      "Skip to main content",
    ),
    h(
      "div",
      { className: "site-shell", id: "top" },
      h(
        "header",
        { className: "site-header" },
        h(
          "a",
          { className: "wordmark", href: "#/about", "aria-label": "WebeWizard, About" },
          h("span", { className: "wordmark-star", "aria-hidden": true }, "✦"),
          h("span", null, "WebeWizard"),
        ),
        h(
          "nav",
          { className: "main-nav", "aria-label": "Main navigation" },
          h("a", { className: "nav-link", href: "#/about", "aria-current": isCity ? undefined : "page" }, "About"),
          h("a", { className: "nav-link", href: "#/webe-city", "aria-current": isCity ? "page" : undefined }, "Repository City"),
        ),
      ),
      h(
        "main",
        { id: "main-content", tabIndex: -1 },
        isCity ? h(CityPage, { headingRef }) : h(AboutPage, { headingRef }),
      ),
    ),
  );
}
