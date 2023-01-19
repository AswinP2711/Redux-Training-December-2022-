import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, decrementByAmount, Increment, IncrementByAmount } from "./counterAction";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((count) => count);

  return (
    <div>
      <button onClick={() => dispatch(IncrementByAmount(10))}>
        Increment By 10
      </button>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(decrementByAmount(10))}>
        Increment By 10
      </button>
    </div>
  );
}

export default Counter;
