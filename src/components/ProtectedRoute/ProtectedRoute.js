import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../providers/CurrentUserContext";

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { user } = useContext(CurrentUserContext);
  return user ? <Component {...props} /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
