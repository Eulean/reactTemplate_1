// src/pages/NotFoundPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="mb-6 text-muted-foreground">
      Sorry — we couldn't find that page.
    </p>
    <Link to="/home" className="px-4 py-2 rounded border hover:bg-accent">
      Go home
    </Link>
  </div>
);

export default NotFoundPage;
