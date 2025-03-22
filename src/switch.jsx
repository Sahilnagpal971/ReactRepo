import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false); // Initial state is "Off"

  const toggle = () => {
    setIsOn(!isOn); // Toggle between true and false
  };

  return (
    <div>
      <p>Button is: {isOn ? "On" : "Off"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ToggleButton;
