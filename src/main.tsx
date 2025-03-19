import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { FeatureFlagProvider, UserContextProvider } from "./ccontext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FeatureFlagProvider>
      <UserContextProvider userDetails={{ name: "Eric" }}>
        <App />
      </UserContextProvider>
    </FeatureFlagProvider>
  </StrictMode>,
);
