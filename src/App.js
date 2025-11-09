import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./style.css";
import Timer from "./Timer.js";
import Hello from "./Hello.js";
import TimeList from "./TimeList.jsx";

const App = () => {
  const [title, setTitle] = useState("hello world");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState(["00 : 05 : 17","00 : 07 : 32"]);

  useEffect(() => {
    console.log(useEffect); //  مقادیری که میخاهیم برای اولین بار اجرا بشن اینجا نوشته میشه
    return () => {
      // و اگر  بخایم بعد از بسته شدن اتفاق بیفتند به ریترن
    };
  }, [isLight]); //حالا اگر قرار باشه با تغییر استیت اتفاق بیفتن باید اینحا لیستشون کنیم

  const HandleSetIsLight = () => {
    setIsLight(!isLight);
  };
  return (
    <div className="main" style={{ background: isLight ? "white" : "black" }}>
      <Hello title={title} />
      <Timer isLight={isLight} HandleSetIsLight={HandleSetIsLight} />
      {/* اگر به صورت تگ باز و بسته ارسال شودذ باید به صوردت چیلدرن دریافت شود */}
      <TimeList>
        {timeArr}
      </TimeList>
    </div>
  );
};

export default App;
