import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/authentication/AuthProvider";
import Header from "../components/header/Header";

export const ProtectedLayout = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Header user={user} logout={logout} />
      <Outlet />
    </div>
  )
};