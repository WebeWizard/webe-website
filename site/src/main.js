import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./styles.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("The React mount element #root is missing.");
}
createRoot(root).render(createElement(App));
