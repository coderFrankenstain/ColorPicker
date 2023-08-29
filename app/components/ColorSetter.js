import React, { useState } from "react";

function Gap() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "60px",
      }}
    ></span>
  );
}

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

  const colorStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: "500px",
    height: "50px",
    margin: "20px auto",
    border: "2px solid black",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={colorStyle}></div>
      <div>
        <label>R: </label>
        <input
          type="number"
          value={r}
          onChange={(e) => handleInputChange(e, setR)}
        />
        {Gap()}
        <label>R: </label>
        <input
          type="range"
          min="0"
          max="255"
          value={r}
          onChange={(e) => setR(e.target.value)}
        />
      </div>
      <div>
        <label>G: </label>
        <input
          type="number"
          value={g}
          onChange={(e) => handleInputChange(e, setG)}
        />
        {Gap()}
        <label>G: </label>
        <input
          type="range"
          min="0"
          max="255"
          value={g}
          onChange={(e) => setG(e.target.value)}
        />
      </div>
      <div>
        <label>B: </label>
        <input
          type="number"
          value={b}
          onChange={(e) => handleInputChange(e, setB)}
        />
        {Gap()}
        <label>B: </label>
        <input
          type="range"
          min="0"
          max="255"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ColorSetter;
