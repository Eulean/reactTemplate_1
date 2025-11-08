import { userStore } from "@/store/userStore";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute: React.FC<{ redirectTo?: string }> = ({
  redirectTo = "/home",
}) => {
  const { userName } = userStore();

  const isAuthenticated = userName && userName !== "Guest"; // simple placeholder

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} replace />;
};
