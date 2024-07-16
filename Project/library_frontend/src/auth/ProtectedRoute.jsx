import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function ProtectedRoute({ children }) {
  const { token, user, status } = useSelector(state => state.auth);

  if (status === 'logged') {
    return children;
  }
  
  return <Navigate to={"/login"} replace /> // Redirect
}

export default ProtectedRoute;
