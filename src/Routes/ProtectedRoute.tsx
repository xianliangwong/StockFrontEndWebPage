import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Compoments/Context/useAuth";

type Props = { children: React.ReactNode };

const ProtectedRoute = (props: Props) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn() ? (
    <>{props.children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }}></Navigate>
  );
};

export default ProtectedRoute;
