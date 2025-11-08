// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import routes from "./routes/routes"; // Import the routes from routes.tsx
import "./index.css";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import { ThemeInitializer } from "./components/ThemeInitializer";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeInitializer />
      <ErrorBoundary>
        <RouterProvider router={routes} />
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
);
