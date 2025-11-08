import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 10,
    };
  }
  // componentDidMount فقط یک‌بار بعد از render اولیه اجرا می‌شه، و این دقیقاً همون چیزیه که برای تایمر لازمه
  componentDidMount(){
    this.interval =setInterval(() => {
      this.setState({
        time :this.state.time - 1 
      })
    }, 1000);
  }
  // در componentWillUnmount تایمر پاک می‌شه تا نشت حافظه نداشته باشی.
  componentDidUpdate(){
    if (this.state.time === 0){
      clearInterval(this.interval);
    }
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render(){
    return(
      <>
      <h2 className="timer">
        it is {this.state.time}
      </h2>
      <button onClick={this.props.HandleSetTitle}>change the title</button>
      </>
    )
  }
}

export default Timer;