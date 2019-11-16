import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>mattjudge.uk</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header className="App-header">
        <div className="cmd-line">
          <span className="prompt-user">mattjudge</span>
          <span className="prompt-colon">:</span>
          <span className="prompt-dir">~</span>
          <span className="prompt-dollar">$</span>
          <input autoFocus className="cmd-input" />
        </div>
      </header>
    </div>
  );
}

export default App;
