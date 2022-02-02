import React from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";
import "./styles.css";

//My Imports below this line//
import { greeting } from "./greet.js";
  //console.log(greeting("hia"));

//My Imports above this line//

const GreetingMessage = greeting("Aleia"); //should diplay as "Hello, Aleia" on page


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
