import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WeeklyLogbook from "./pages/WeeklyLogbook";
import Placements from "./pages/Placements";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={<Login setToken={setToken} />}
        />

        {/* DASHBOARD (PROTECTED) */}
        <Route
          path="/dashboard"
          element={
            token ? <Dashboard /> : <Navigate to="/" />
          }
        />

        {/* PLACEMENTS */}
        <Route
          path="/placements"
          element={
            token ? <Placements /> : <Navigate to="/" />
          }
        />

        {/* WEEKLY LOGBOOK */}
        <Route
          path="/logs"
          element={
            token ? <WeeklyLogbook /> : <Navigate to="/" />
          }
        />

      </Routes>
    </Router>
  );
}

export default App;