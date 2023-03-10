import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app/app";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
