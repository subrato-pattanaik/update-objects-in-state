import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

const rootElm = document.getElementById("root");
if (!rootElm) {
  throw new Error("Root element not found");
}

createRoot(rootElm).render(
  <StrictMode>
    <App />
  </StrictMode>
);
