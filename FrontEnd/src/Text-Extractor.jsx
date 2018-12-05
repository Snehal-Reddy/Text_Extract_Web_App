import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
class TextExtract extends Component {
  render() {
    return (
      <div class="embossed">
        <InputBox />
        <OutputBox />
      </div>
    );
  }
}

export default TextExtract;
