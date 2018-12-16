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
                src="https://static.thenounproject.com/png/1555256-200.png"
                width="150px"
                height="150px"
              />
              <div class="mask flex-center rgba-black-light">
                <p class="white-text">Click to Choose Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InputBox;
