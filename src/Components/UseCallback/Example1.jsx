//The useCallback hook allows you to memoize a function so that it's only recreated when its depenedcies change. This can help improve
//performance by preventing unneccsary rerenders

import { useCallback, useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickCounter;
