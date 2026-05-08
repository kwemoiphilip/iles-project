import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Internship System</h1>
        <p style={styles.subtitle}>Dashboard</p>

        <div style={styles.links}>
          <Link style={styles.link} to="/placements">
            📍 View Placements
          </Link>

          <Link style={styles.link} to="/logs">
            📘 Weekly Logbook
          </Link>
        </div>

        <button style={styles.logout} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "5px",
  },
  subtitle: {
    color: "gray",
    marginBottom: "20px",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    padding: "10px",
    background: "#f0f0f0",
    borderRadius: "8px",
    color: "#333",
  },
  logout: {
    padding: "10px",
    background: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Dashboard;