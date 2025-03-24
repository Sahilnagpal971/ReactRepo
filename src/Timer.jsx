import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <h1>Current Time: {time.toLocaleTimeString()}</h1>;
}

export default Timer;
