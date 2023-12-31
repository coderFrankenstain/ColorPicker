import React, { useState } from "react";
import Image from "next/image";
function ColorSetter() {
  const [r, setR] = useState(255);
  const [g, setG] = useState(255);
  const [b, setB] = useState(255);

  const handleInputChange = (event, setColor) => {
    const value =
      event.target.value === "" ? "" : parseInt(event.target.value, 10);
    if (value === "" || (value >= 0 && value <= 255)) {
      setColor(value);
    }
  };

  const itemStyle = {
    marginBottom: "30px", // 设置每个子项的底部间隔为20px
  };

  const colorStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: "573px",
    height: "66px",
    position: "absolute", // 添加这一行
    top: -4,
    left: 99,
    zIndex: 3,
  };

  const colorPanelStyle = {
    textAlign: "center",
    position: "relative",
    height: "70px",
    margin: "20px auto",
    marginBottom: "60px",
    width: "700px",
  };

  const backgroundStyle = {
    width: "800px",
    height: "104px",
    position: "absolute",
    top: -30, // 添加这一行
    left: -22, // 添加这一行// 使其与 colorStyle div 重叠
    zIndex: 2, // 使其位于 colorStyle div 下方
  };

  const sliderCommonStyle = {
    width: "300px",
  };

  const redLabelStyle = {
    color: `red`,
    fontSize: "25px",
  };

  const greenLabelStyle = {
    color: `green`,
    fontSize: "25px",
  };

  const blueLabelStyle = {
    color: `blue`,
    fontSize: "25px",
  };

  const redSliderStyle = {
    ...sliderCommonStyle,
    // color: `red`, // 添加这一行
  };

  const greenSliderStyle = {
    ...sliderCommonStyle,
    // color: `green`, // 添加这一行
  };

  const blueSliderStyle = {
    ...sliderCommonStyle,
    // color: `blue`, // 添加这一行
  };

  const inputStyle = { fontSize: "25px", width: "90px" };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={colorPanelStyle}>
        <div style={colorStyle}></div>
        <img
          src="/bg.png"
          alt="Background"
          width="700"
          height="70"
          style={backgroundStyle}
        />
      </div>
      <div style={itemStyle}>
        <label style={redLabelStyle}>红色: </label>
        <input
          style={redSliderStyle}
          type="range"
          min="0"
          max="255"
          value={r}
          onChange={(e) => setR(e.target.value)}
        />

        <input
          type="number"
          value={r}
          style={inputStyle}
          onChange={(e) => handleInputChange(e, setR)}
        />
      </div>
      <div style={itemStyle}>
        <label style={greenLabelStyle}>绿色: </label>
        <input
          style={greenSliderStyle}
          type="range"
          min="0"
          max="255"
          value={g}
          onChange={(e) => setG(e.target.value)}
        />
        <input
          style={inputStyle}
          type="number"
          value={g}
          onChange={(e) => handleInputChange(e, setG)}
        />
      </div>
      <div style={itemStyle}>
        <label style={blueLabelStyle}>蓝色: </label>
        <input
          style={blueSliderStyle}
          type="range"
          min="0"
          max="255"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
        <input
          style={inputStyle}
          type="number"
          value={b}
          onChange={(e) => handleInputChange(e, setB)}
        />
      </div>
      {/* <div style={{ marginTop: "30px" }}>
        <div style={itemStyle}>
          <label>R: </label>
          <input
            style={{ width: "300px" }}
            type="range"
            min="0"
            max="255"
            value={r}
            onChange={(e) => setR(e.target.value)}
          />
        </div>
        <div style={itemStyle}>
          <label>G: </label>
          <input
            style={{ width: "300px" }}
            type="range"
            min="0"
            max="255"
            value={g}
            onChange={(e) => setG(e.target.value)}
          />
        </div>
        <div style={itemStyle}>
          <label>B: </label>
          <input
            style={{ width: "300px" }}
            type="range"
            min="0"
            max="255"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
      </div> */}
    </div>
  );
}

export default ColorSetter;
