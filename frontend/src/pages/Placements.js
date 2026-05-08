import React, { useEffect, useState } from "react";
import axios from "axios";

function Placements() {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/placements/")
      .then((res) => setPlacements(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Internship Placements</h2>

      {placements.map((p) => (
        <div key={p.id} style={{ marginBottom: "15px" }}>
          <p>Company: {p.company}</p>
          <p>Supervisor: {p.supervisor}</p>
          <p>Start: {p.start_date}</p>
          <p>End: {p.end_date}</p>
        </div>
      ))}
    </div>
  );
}

export default Placements;