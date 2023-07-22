// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivetRoutes = ({ children }) => {
  const location = useLocation();
  // @ts-ignore
  const { user, loading } = useState(AuthContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoutes;
