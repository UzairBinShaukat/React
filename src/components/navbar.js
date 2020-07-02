import React, { Component } from "react";
class Navbar extends Component {
  getTotalCounts = () => {
    let a = 0;
    for (let i = 0; i < this.props.counters.length; i++) {
      a += this.props.counters[i].value;
    }
    console.log(a);
    return a;
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-secondary m-2">
            {this.props.counters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
