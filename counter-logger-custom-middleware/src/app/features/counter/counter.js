import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Decrement,
  decrementByAmount,
  Increment,
  IncrementByAmount,
} from "./counterAction";

function Counter() {
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const counter = useSelector((count) => count);

  const onAmountChanged = (e) =>{
    const amt=parseInt(e.target.value)
    setAmount(amt)
  }

  return (
    <div>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={onAmountChanged}
        placeholder="Enter Amount"
      />{" "}
      <br />
      <button onClick={() => dispatch(IncrementByAmount(amount))}>
        Increment By {amount}
      </button>
      <button onClick={() => dispatch(Increment())}>+</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(Decrement())}>-</button>
      <button onClick={() => dispatch(decrementByAmount(amount))}>
        Decrement By {amount}
      </button>
    </div>
  );
}

export default Counter;
