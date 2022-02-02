import React from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";
import "./styles.css";

//----MY Imports Below this Line----
import { greeting } from "./greet.js";


//----MY Imports Above this Line----
const GreetingMessage = "";

function App() {
  return (
    <div className="App">
      <h1>{GreetingMessage}</h1>
      <Confetti />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
