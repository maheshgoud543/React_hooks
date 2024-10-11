//Create a timer using useEffect that starts counting up as soon as the component mounts.
//Display the current time in seconds, and include a button to pause/resume the timer.

import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };
  return (
    <div>
      <p>Timer: {time}</p>
      <button onClick={handleToggle}>{isRunning ? "pause" : "Resume"}</button>
    </div>
  );
};

export default Timer;
