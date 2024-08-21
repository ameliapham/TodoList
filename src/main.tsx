import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { OidcProvider } from "./oidc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OidcProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </OidcProvider>
  </React.StrictMode>,
)
