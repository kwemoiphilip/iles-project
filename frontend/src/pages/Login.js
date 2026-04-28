import React, { useState } from "react";
import axios from "axios";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios.post("http://127.0.0.1:8000/api/token/", {
      username,
      password,
    })
    .then((res) => {
  const token = res.data.access;

  // decode token
  const payload = JSON.parse(atob(token.split('.')[1]));

  localStorage.setItem("token", token);
  localStorage.setItem("role", payload.role);
  localStorage.setItem("username", payload.username);

  setToken(token);
});
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <br /><br />

      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;