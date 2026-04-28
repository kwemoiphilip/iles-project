import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return token ? (
    <Dashboard />
  ) : (
    <Login setToken={setToken} />
  );
}

export default App;