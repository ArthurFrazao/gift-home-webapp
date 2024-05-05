import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext.tsx";
import { GiftProvider } from "./context/GiftContext.tsx";
import { theme } from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <GiftProvider>
          <App />
        </GiftProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
