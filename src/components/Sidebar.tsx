import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: "Overview", path: "/dashboard/overview" },
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Dashbaord", path: "/dashboard" },
  ];

  return (
    <aside className="w-64 h-screen bg-muted text-foreground p-4 border-r">
      <h2 className="text-xl font-bold mb-6">MyApp</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`p-2 rounded hover:bg-accent ${
              location.pathname === link.path ? "bg-accent font-semibold" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
