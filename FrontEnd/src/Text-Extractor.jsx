import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
import Helmet from "./Helmet";
class TextExtract extends Component {
  render() {
    return (
      <div class="embossed">
        <InputBox />
        <OutputBox />
        <Helmet />
      </div>
    );
  }
}

export default TextExtract;
