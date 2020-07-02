import React, { Component } from "react";
class Counter extends Component {
  state = { value: this.props.value };

  handleIncrement = (inc) => {
    this.setState({ value: this.state.value + inc });
  };
  handleDecrement = () => {
    this.setState({
      value: this.state.value - 1 < 0 ? 0 : this.state.value - 1,
    });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-danger btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
