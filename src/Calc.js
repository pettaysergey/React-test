import React, { Component } from "react";
export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.start
    };
    this.calculate = this.calculate.bind(this)
  }

  calculate() {
      this.setState({value: this.state.value + 1})
  }

  render() {
    return (
    <div>
        <button onClick={this.calculate}>Посчитать</button>
        <p>Значение счетчика: {this.state.value}</p>
    </div>
    );
  }
}
