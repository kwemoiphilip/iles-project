import React, { useEffect, useState } from "react";
import { getPlacements } from "../api/placements";

function Dashboard() {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    getPlacements()
      .then((res) => {
        console.log(res.data); // debug
        setPlacements(res.data);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Internship Placements</h2>

      {placements.length === 0 ? (
        <p>No data found</p>
      ) : (
        placements.map((p) => (
          <div key={p.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
            <p><b>Company:</b> {p.company_name}</p>
            <p><b>Supervisor:</b> {p.supervisor_name}</p>
            <p><b>Start:</b> {p.start_date}</p>
            <p><b>End:</b> {p.end_date}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;