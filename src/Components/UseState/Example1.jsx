import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            return count;
          }
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
