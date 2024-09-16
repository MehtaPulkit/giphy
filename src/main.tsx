import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GifProvider } from "./context/GifContext.tsx";

const renderApp = () => {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found");
    return;
  }
  
  createRoot(rootElement).render(
    <StrictMode>
      <GifProvider>
        <App />
      </GifProvider>
    </StrictMode>
  );
};

renderApp();
