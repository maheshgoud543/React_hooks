//Build a component that listens for window resize events using useEffect and displays the current window width.
//Update the displayed width in real time when the window is resized.

import { useEffect, useState } from "react";

const WindpwWidth = () => {
  const [windowWidth, setWindpwWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindpwWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div>
      <p>Width : {windowWidth}</p>
    </div>
  );
};

export default WindpwWidth;
