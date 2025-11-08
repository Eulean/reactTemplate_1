// src/main.tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import routes from "./routes/routes"; // Import the routes from routes.tsx
import "./index.css";
import { useThemeStore } from "./store/themeStore";
import { ErrorBoundary } from "./pages/ErrorBoundary";

const queryClient = new QueryClient();

function ThemeInitializer() {
  const { theme } = useThemeStore();

  useEffect(() => {
    // ensure theme class matches stored theme at startup
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return null;
}

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
