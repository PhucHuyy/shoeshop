import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import { ShoeContextProvider } from "./context/ShoeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShoeContextProvider>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </ShoeContextProvider>
    </BrowserRouter>
  </StrictMode>
);
