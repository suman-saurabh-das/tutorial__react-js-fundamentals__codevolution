import React from "react";

/* -------------------- Section 01 -------------------- */
// import Greet from "./components/Section 01/02_Greet";
import { Greet } from "./components/Section 01/02_Greet";
import Welcome from "./components/Section 01/03_Welcome";

function App() {
  return (
    <div className="App">
      <h1>React JS Fundamentals - Codevolution</h1>

      {/* -------------------- Section 01 -------------------- */}
      <>
        <Greet />
        <Welcome />
      </>
    </div>
  );
}

export default App;
