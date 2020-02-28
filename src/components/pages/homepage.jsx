import React, { Component } from "react";

const style = {
  color: "white",
  backgroundColor: "DodgerBlue"
};
const bgStyle = {
  backgroundColor: "green"
};
class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1
          className="d-none d-lg-block"
          style={{
            height: "500px",
            backgroundColor: "black",
            margin: "0px",
            fontSize: "50px",
            fontSize: "10vw"
          }}
        >
          hahahahTest1
        </h1>
        <div class="row">
          <div class="col align-self-start">One of three columns</div>
          <div class="col align-self-center">One of three columns</div>
          <div class="col align-self-end">One of three columns</div>
        </div>
      </div>
    );
  }
}

export default Homepage;
