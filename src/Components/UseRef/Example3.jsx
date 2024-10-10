import { useEffect, useRef, useState } from "react";

const Tracking = () => {
  const [currentValue, setCurrentValue] = useState("");
  const PrevValues = useRef("");

  useEffect(() => {
    PrevValues.current = currentValue;
  });
  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };
  return (
    <div>
      <input value={currentValue} onChange={handleChange} />
      <p>Current Value: {currentValue}</p>
      <p>Previous value : {PrevValues.current}</p>
    </div>
  );
};

export default Tracking;
