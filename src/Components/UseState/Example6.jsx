//Build a component where the background color changes every time a button is clicked.
//Use an array of predefined colors and change the background color sequentially using useState.

import { useState } from "react";

const BgChanger = () => {
  const [bgcolor, setBgColor] = useState({ background: "white" });
  const handleRed = () => {
    setBgColor({ background: "red" });
  };
  const handleGreen = () => {
    setBgColor({ background: "green" });
  };
  const handleYellow = () => {
    setBgColor({ background: "yellow" });
  };
  return (
    <div style={{ height: "100vh", ...bgcolor }}>
      <button onClick={handleRed}>Red</button>
      <button onClick={handleYellow}>Yellow</button>
      <button onClick={handleGreen}>Green</button>
    </div>
  );
};

export default BgChanger;
