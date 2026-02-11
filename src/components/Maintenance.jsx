import React from "react";

const Maintenance = () => (
  <main style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center",
    background: "#fafafa",
    color: "#222"
  }}>
    <div>
      <h1>Diese Website befindet sich derzeit in Bearbeitung</h1>
      <p style={{opacity: 0.8, marginTop: "1rem"}}>
        Vielen Dank für Ihr Interesse.
      </p>
    </div>
  </main>
);

export default Maintenance;