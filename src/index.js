import React from "react";
import ReactDOM from "react-dom/client";


// git add .
// git commit -m "توضیح تغییرات"
// git push 

class Timer extends React.Component {
  render() {
    return <h2>it is {new Date().toLocaleTimeString()}</h2>;
  }
}
class Hello extends React.Component {
  render() {
    return <h1>hello my friends</h1>;
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Timer />
      </div>
    );
  }
}

  const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(()=>{
    root.render(<App/>)
},1000)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render();
