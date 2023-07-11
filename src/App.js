import React from "react";

/* -------------------- Section 01 -------------------- */
// import Greet from "./components/Section 01/02_Greet";
import { Greet } from "./components/Section 01/02_Greet";
import Welcome from "./components/Section 01/03_Welcome";
import Hello from "./components/Section 01/04_Hello";

function App() {
  return (
    <div className="App">
      <h1>React JS Fundamentals - Codevolution</h1>

      {/* -------------------- Section 01 -------------------- */}
      <>
        <Greet />
        <Welcome />
        <Hello />
      </>
    </div>
  );
}

export default App;
