import React, { Component } from "react";
import ReactDOM from "react-dom";
class Helmet extends Component {
  render() {
    return (
      <div class="zoom">
        <img
          id="Helm"
          src="https://res.cloudinary.com/muhammederdem/image/upload/v1536405215/starwars/item-4.png"
          height="500px"
          width="500px"
        />
        <p id="about">About</p>
      </div>
    );
  }
}
export default Helmet;
