import React, { Component } from "react";
import { connect } from "react-redux";
import { Decrement, decrementByAmount, Increment, IncrementByAmount } from "./counterAction";

class Counter extends Component {
  render() {
    const {count,dispatch} = this.props;
    return (
      <div>
      <button onClick={() => dispatch(IncrementByAmount(10))}>
        Increment By 10
      </button>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(decrementByAmount(10))}>
        Increment By 10
      </button>
    </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    count:state
  };
}

export default connect(mapStateToProps)(Counter);
