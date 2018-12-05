import React, { Component } from "react";
class InputBox extends Component {
  render() {
    return (
      <div id="I-outer">
        Upload Image
        <div class="view zoom">
          <div id="I-inner">
            <div class="view overlay">
              <img
                src="https://png.pngtree.com/svg/20161117/live__plus_icon_1099279.png"
                width="150px"
                height="150px"
              />
              <div class="mask flex-center rgba-black-light">
                <p class="white-text">Click to Upload</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InputBox;
