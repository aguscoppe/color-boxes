import React, { Component } from "react";
import "./ColorBox.css";
import { choice } from "./helpers";

class ColorBox extends Component {
  static defaultProps = {
    colors: [
      "#66023C",
      "#7851A9",
      "#C71585",
      "#BF00FF",
      "#800080",
      "#A020F0",
      "#9370DB",
      "#663399",
      "#9F00C5",
      "#C54B8C",
      "#E0B0FF",
      "#D8BFD8",
      "#DA70D6",
      "#DF73FF",
      "#DF00FF",
      "#B768A2",
    ],
  };
  constructor(props) {
    super(props);
    this.state = { currentColor: choice(this.props.colors) };
    this.handleClick = this.handleClick.bind(this);
  }
  changeColor() {
    let newColor = choice(this.props.colors);
    while (newColor === this.state.currentColor) {
      newColor = choice(this.props.colors);
    }
    this.setState({ currentColor: newColor });
  }
  handleClick(e) {
    this.changeColor();
  }
  render() {
    return (
      <div
        className="ColorBox"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.currentColor }}
      ></div>
    );
  }
}

export default ColorBox;
