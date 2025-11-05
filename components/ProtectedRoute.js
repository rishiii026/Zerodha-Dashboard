import React, { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const auth = localStorage.getItem("isAuthenticated") === "true";

    if (!token || !auth) {
      setTimeout(() => {
        window.location.href = "http://localhost:5000/login";
      }, 100);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated === null) return null;

  return children;
};

export default ProtectedRoute;