import React, { useState } from "react";

function olor() {
  const [color, setColor] = useState("#ffffff"); // Initial background color

  // Function to handle color change
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: color, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h2>Pick a Background Color</h2>

      <select onChange={handleColorChange} value={color}>
        <option value="#ffffff">White</option>
        <option value="#ff0000">Red</option>
        <option value="#00ff00">Green</option>
        <option value="#0000ff">Blue</option>
        <option value="#ffff00">Yellow</option>
        <option value="#ff00ff">Magenta</option>
        <option value="#00ffff">Cyan</option>
        <option value="#000000">Black</option>
      </select>
    </div>
  );
}

export default color;
