//The useReducerHook allows you to manage complex state in a functional component.

import { useReducer } from "react";

const Counter = () => {
  const intialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increase": {
        return { count: state.count + 1 };
      }
      case "Decrease": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, intialState);
  const handleIncrease = () => {
    dispatch({ type: "Increase" });
  };
  const handleDecrease = () => {
    dispatch({ type: "Decrease" });
  };
  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <p>Count:{state.count}</p>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
