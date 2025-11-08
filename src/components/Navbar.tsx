import { userStore } from "@/store/userStore";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { userName, toggleDarkMode, darkMode } = userStore();

  return (
    <header className="flex justify-between items-center p-4 bg-muted border-b">
      <h1 className="text-lg font-semibold">Welcome, {userName} 👋</h1>
      <div>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded border hover:bg-accent"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
