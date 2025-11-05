import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import this

const TokenHandler = () => {
  const navigate = useNavigate(); // ✅ get navigator

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const username = params.get("username");
    const email = params.get("email");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("isAuthenticated", "true");
    }

    if (username && email) {
      localStorage.setItem("user", JSON.stringify({ username, email }));
    }

    // ✅ Clean URL
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);

    // ✅ Redirect to dashboard route
    navigate("/");
  }, []);

  return null;
};

export default TokenHandler;