"use client";
import React from "react";
import ColorSetter from "./components/ColorSetter";

function App() {
  // 定义样式对象，其中包含背景图片的URL
  const style = {
    backgroundImage: 'url("/border.png")', // 替换为您的图片路径
    backgroundSize: "cover", // 使背景图片覆盖整个元素
    backgroundPosition: "center", // 将背景图片居中
    backgroundRepeat: "no-repeat", // 防止背景图片重复
    height: "800px",
    width: "1200px", 
  };

  return (
    <div className="App">
      <div style={style}>
        <h1
          style={{
            marginTop: "200px",
            marginLeft: "100px",
          }}
        >
          任务：
          <br />
          通过移动三个滑动条改变三原色的比例，合成灯管的新颜色。
        </h1>
        <div
          style={{
            marginTop: "100px",
          }}
        >
          {" "}
          <ColorSetter />
        </div>
      </div>
    </div>
  );
}

export default App;
