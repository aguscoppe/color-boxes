import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorBoxContainer.css";

class ColorBoxContainer extends Component {
  render() {
    // const arrAmount = [];
    // let i = 0;
    // while (arrAmount.length !== this.props.amount) {
    //   arrAmount.push(i);
    //   i++;
    // }
    const boxes = Array.from({ length: this.props.amount }).map(() => (
      <ColorBox />
    ));

    return <div className="ColorBoxContainer">{boxes}</div>;
  }
}

export default ColorBoxContainer;
