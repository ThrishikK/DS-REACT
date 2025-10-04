import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import "./css/colors.css";
import "./css/breakpoints.css";
import "./css/components.css";

import App from "./App/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
