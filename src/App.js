import React from "react";

/* -------------------- Section 01 -------------------- */
// import Greet from "./components/Section 01/02_Greet";
// import { Greet } from "./components/Section 01/02_Greet";
// import Welcome from "./components/Section 01/03_Welcome";
// import Hello from "./components/Section 01/04_Hello";
import GreetProps from "./components/Section 01/05_GreetProps";
import WelcomeProps from "./components/Section 01/06_WelcomeProps";

function App() {
  return (
    <div className="App">
      <h1>React JS Fundamentals - Codevolution</h1>

      {/* -------------------- Section 01 -------------------- */}
      <>
        {/* <Greet /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}

        {/* Passing props to functional component */}
        <GreetProps name={"Bruce"} heroName={"Batman"}>
          <p>I believe what doesn't kill you simply makes you, stronger.</p>
        </GreetProps>
        <GreetProps name={"Clark"} heroName={"Superman"}>
          <button>Laser Eyes !</button>
        </GreetProps>
        <GreetProps name={"Diana"} heroName={"Wonder woman"} />

        {/* Passing props to class component */}
        <WelcomeProps name={"Tony"} heroName={"Iron man"} />
        <WelcomeProps name={"Steve"} heroName={"Captain America"} />
        <WelcomeProps name={"Peter"} heroName={"Spider man"} />
      </>
    </div>
  );
}

export default App;
