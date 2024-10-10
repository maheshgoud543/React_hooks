import { useRef, useState } from "react";

const CounterUsingref = () => {
  const Incrementref = useRef(0);
  const handleIncrement = () => {
    Incrementref.current += 1;
    console.log(`${Incrementref.current}`);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterUsingref;
