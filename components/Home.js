import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import ProtectedRoute from "./ProtectedRoute";
import TokenHandler from "./TokenHandler";

const Home = () => {
  return (
    <>
      <TokenHandler />
      <TopBar />
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    </>
  );
};

export default Home;