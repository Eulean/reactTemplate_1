import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-background text-foreground bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 flex-1">
          <div className="bg-white p-6 rounded shadow">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
