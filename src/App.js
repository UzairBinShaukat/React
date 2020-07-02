import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
    totalCounts: 0,
  };
  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) => {
      if (c.id === counter.id) {
        c.value += 1;
        this.state.totalCounts += 1;
      }
      return c;
    });
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = this.state.counters.map((c) => {
      if (c.id === counter.id) {
        if (c.value - 1 < 0) c.value = 0;
        else {
          c.value -= 1;
          this.state.totalCounts -= 1;
        }
      }
      return c;
    });
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      this.state.totalCounts = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar counters={this.state.totalCounts} />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
