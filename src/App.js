import React from "react";

/* -------------------- Section 01 -------------------- */
// import Greet from "./components/Section 01/02_Greet";
// import { Greet } from "./components/Section 01/02_Greet";
// import Welcome from "./components/Section 01/03_Welcome";
// import Hello from "./components/Section 01/04_Hello";
// import GreetProps from "./components/Section 01/05_GreetProps";
// import WelcomeProps from "./components/Section 01/06_WelcomeProps";
// import Message from "./components/Section 01/07_Message";

/* -------------------- Section 02 -------------------- */
// import Counter from "./components/Section 02/08_Counter";
// import GreetPropsDestructuring from "./components/Section 02/09_GreetPropsDestructuring";
// import WelcomePropsDestructuring from "./components/Section 02/10_WelcomePropsDestructuring";
// import FunctionClick from "./components/Section 02/11_FunctionClick";
// import ClassClick from "./components/Section 02/12_ClassClick";
// import EventBind from "./components/Section 02/13_EventBind";
import ParentComponent from "./components/Section 02/14_ParentComponent";

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
        {/* <GreetProps name={"Bruce"} heroName={"Batman"}>
          <p>I believe what doesn't kill you simply makes you, stronger.</p>
        </GreetProps>
        <GreetProps name={"Clark"} heroName={"Superman"}>
          <button>Laser Eyes !</button>
        </GreetProps>
        <GreetProps name={"Diana"} heroName={"Wonder woman"} /> */}

        {/* Passing props to class component */}
        {/* <WelcomeProps name={"Tony"} heroName={"Iron man"} />
        <WelcomeProps name={"Steve"} heroName={"Captain America"} />
        <WelcomeProps name={"Peter"} heroName={"Spider man"} /> */}

        {/* <Message /> */}
      </>

      {/* -------------------- Section 02 -------------------- */}
      <>
        {/* <Counter /> */}
        {/* <GreetPropsDestructuring name="Tony Stark" heroName="Ironman" /> */}
        {/* <WelcomePropsDestructuring name="Steve Rogers" heroName="Captain America" /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        <ParentComponent />
      </>
    </div>
  );
}

export default App;
