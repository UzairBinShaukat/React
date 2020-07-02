import React, { Component } from "react";
import Counter from "./counter";
const Counters = ({ onReset, counters, onIncrement, onDecrement }) => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
