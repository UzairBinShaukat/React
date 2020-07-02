import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) => {
      c.value = c.id === counter.id ? c.value + 1 : c.value;
      return c;
    });
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = this.state.counters.map((c) => {
      c.value =
        c.id === counter.id ? (c.value - 1 < 0 ? 0 : c.value - 1) : c.value;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
