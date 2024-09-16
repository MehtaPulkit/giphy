import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const renderApp = () => {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found");
    return;
  }
  
  createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
  );
};

renderApp();
