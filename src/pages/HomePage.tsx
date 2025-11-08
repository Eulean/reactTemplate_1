import { userStore } from "@/store/userStore";

function HomePage() {
  const { darkMode, toggleDarkMode, userName, setUserName } = userStore();

  return (
    <div className="text-center mt-6">
      <h2 className="text-2xl font-semibold">🏡 Home Page</h2>
      <p className="text-muted-foreground">This is the Home page content.</p>

      <div
        className={`min-h-screen flex flex-col items-center justify-center ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">Welcome, {userName} 👋</h1>

        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Dark Mode
        </button>

        <input
          type="text"
          placeholder="Change your name"
          className="mt-4 border rounded p-2 text-black"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default HomePage;
