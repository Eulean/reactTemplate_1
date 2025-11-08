import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import ThemeToggle from "./components/ThemeToggle";
import { userStore } from "./store/userStore";

function App() {
  const { count, increment, decrement } = useStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <h1 className="text-4xl font-bold mb-4">🚀 My React Template</h1>

      <div className="flex space-x-4 mb-6">
        <ThemeToggle />

        <Link to="/home">
          <Button variant="outline">Home</Button>
        </Link>
        <Link to="/about">
          <Button variant="outline">About</Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="default">Dashboard Layout</Button>
        </Link>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Button onClick={decrement}>-</Button>
        <p className="text-2xl w-10 text-center">{count}</p>
        <Button onClick={increment}>+</Button>
      </div>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}

export default App;
