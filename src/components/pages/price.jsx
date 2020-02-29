import React, { Component } from "react";
class Price extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightGrey"
        }}
      >
        <div className="container">
          <h1
            className=" d-none d-lg-block"
            style={{
              backgroundColor: "black",
              margin: "0px",
              fontSize: "5vw",
              wordWrap: "break-word",
              whiteSpace: "normal"
            }}
          >
            实验室安全管理
          </h1>
        </div>
        <div className="container">
          <img
            class="img-fluid"
            src="/img/logo.png"
            alt="Bootstrap Themes"
            width="50%"
          ></img>
        </div>
      </div>
    );
  }
}

export default Price;
