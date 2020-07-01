import React, { Component } from "react";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, mints: 0, hour: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1 >= 60 ? this.min() : state.seconds + 1,
    }));
  }
  min() {
    this.setState((state) => ({
      seconds: 0,
      mints: state.mints + 1 >= 60 ? this.hour() : state.mints + 1,
    }));
  }
  hour() {
    this.setState((state) => ({
      mints: 0,
      hour: state.hour + 1 >= 24 ? 0 : state.hour + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Timer: {this.state.hour}:{this.state.mints}:{this.state.seconds}
      </div>
    );
  }
}

export default Timer;
