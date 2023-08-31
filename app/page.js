"use client";
import React from "react";
import ColorSetter from "./components/ColorSetter";
function App() {
  return (
    <div className="App">
      <h1>
        任务：
        <br />
        通过移动三个滑动条改变三原色的比例，合成灯管的新颜色。
      </h1>
      <ColorSetter />
    </div>
  );
}

export default App;
