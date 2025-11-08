import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./style.css";
import Timer from "./Timer.js";
import Hello from "./Hello.js";

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       title:"helllo world"
//     }
//   }
//   HandleSetTitle =()=>{
//     this.setState({
//       title:"wellcome back"
//     })
//   }
//   render() {
//     return (
//       <div className="main">
//         <Hello title={this.state.title}/>
//         <Timer x={this.HandleSetTitle}/>
//       </div>
//     );
//   }
// }

const App = () => {
  const [title, setTitle] = useState("hello world");

  const HandleSetTitle = () => {
    setTitle("welcome back");
  };
  return (
    <div className="main">
      <Hello title={title} />
      <Timer HandleSetTitle={HandleSetTitle} />
    </div>
  );
};

export default App;
