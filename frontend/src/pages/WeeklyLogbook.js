import React, { useState } from "react";
import axios from "axios";

function WeeklyLogbook() {
  const [weekNumber, setWeekNumber] = useState("");
  const [workDone, setWorkDone] = useState("");
  const [challenges, setChallenges] = useState("");
  const [lessons, setLessons] = useState("");

  const submitLog = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/logs/",
        {
          week_number: weekNumber,
          work_done: workDone,
          challenges: challenges,
          lessons_learned: lessons,
          status: "draft",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Log submitted successfully!");

      setWeekNumber("");
      setWorkDone("");
      setChallenges("");
      setLessons("");
    } catch (error) {
      alert("Error submitting log");
      console.log(error.response?.data);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={submitLog}>
        <h2>Weekly Logbook</h2>

        <input
          style={styles.input}
          placeholder="Week Number"
          value={weekNumber}
          onChange={(e) => setWeekNumber(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Work Done"
          value={workDone}
          onChange={(e) => setWorkDone(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Challenges"
          value={challenges}
          onChange={(e) => setChallenges(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Lessons Learned"
          value={lessons}
          onChange={(e) => setLessons(e.target.value)}
        />

        <button style={styles.button} type="submit">
          Submit Log
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
    background: "#f4f6f8",
    minHeight: "100vh",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "400px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "60px",
  },
  button: {
    padding: "10px",
    background: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default WeeklyLogbook;