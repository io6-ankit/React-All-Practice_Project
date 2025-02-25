import React, { useReducer } from "react";
const UseReducerComponent = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
};
export default UseReducerComponent;
