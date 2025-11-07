import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  // componentDidMount فقط یک‌بار بعد از render اولیه اجرا می‌شه، و این دقیقاً همون چیزیه که برای تایمر لازمه
  componentDidMount(){
    this.interval =setInterval(() => {
      this.setState({
        time :new Date().toLocaleTimeString(),
      })
    }, 1000);
  }
  // در componentWillUnmount تایمر پاک می‌شه تا نشت حافظه نداشته باشی.
  componentWillUnmount(){
    clearInterval(this.setInterval);
  }
  render(){
    return(
      <h2 className="timer">
        it is {this.state.time}
      </h2>
    )
  }
}

export default Timer;