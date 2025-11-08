// src/routes.ts
import App from "@/App";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "@/pages/DashboardPage";
import NotFoundPage from "@/pages/NotFoundPages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />, // guard wrapper
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: "overview", element: <DashboardPage /> },
          { path: "", element: <DashboardPage /> }, // /dashboard -> overview
        ],
      },
    ],
  },
  // catch all
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
