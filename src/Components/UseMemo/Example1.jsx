//The useMemo hook allows you to memoize a value so that it's only recomputed when its dependecies changed.
//This can help improve performance by preventing unnecessary re-computations.

import { useMemo } from "react";

const ExpensiveCalucation = ({ a, b }) => {
  const result = useMemo(() => {
    return a * b;
  }, [a, b]);
  return (
    <div>
      <p>Result: {result} </p>
    </div>
  );
};

export default ExpensiveCalucation;
