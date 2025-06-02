import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* StrictMode is used to highlight potential problems in an application. */}
    {/* It activates additional checks and warnings for its descendants. */}
    {/* It does not render any visible UI. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
