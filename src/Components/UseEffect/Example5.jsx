//Using useEffect, create a component that updates the document title to display the current count from a counter component.
// The title should change whenever the count changes.

import { useEffect, useState } from "react";

const CounterWithTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default CounterWithTitle;
