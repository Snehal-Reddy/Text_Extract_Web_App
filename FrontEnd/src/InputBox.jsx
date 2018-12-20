import React, { Component } from "react";
class InputBox extends Component {
  state = {
    count: 0
  };

  //constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind(this);
  //}

  handleIncrement = () => {
    console.log("Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

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
              <div
                onClick={this.handleIncrement}
                class="mask flex-center rgba-black-light"
              >
                <input id="selectedImage" type="file" class="button" />
                <p class="white-text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InputBox;
