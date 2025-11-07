import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";
// import App from "./App";
// git add .
// git commit -m "توضیح تغییرات"
// git push

class Countdown extends React.Component{
  constructor(){
    super();
    this.state={
      count : 20,
    };
  }
  
componentDidMount(){
  this.interval=setInterval(()=>{
    this.setState(pervstate=>{
      if (pervstate.count<=0){
        clearInterval(this.interval);
        return {count:0};
      }
      return {count:pervstate.count-1}
    })
  },1000)
}

componentWillUnmount(){
  clearInterval(this.interval);
}

render(){
  return(
    <h2>
      count is {this.state.count}
    </h2>
  );
}

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Countdown/>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render();
