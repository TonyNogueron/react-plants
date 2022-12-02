import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn) return <Navigate to="/Login" />;
  return children;
};

export default ProtectedRoute;
