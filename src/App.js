import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";
import Timer from "./Timer.js"; 
import Hello from "./Hello.js"; 

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Hello />
        <Timer />
      </div>
    );
  }
}

export default App;