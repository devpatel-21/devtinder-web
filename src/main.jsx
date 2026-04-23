import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// This is the main entry point of the React application.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* We have rendered the App component inside the StrictMode component */}
    <App />
  </StrictMode>,
);
