import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
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
