import React, { Component } from "react";
class ServiceAgreement extends Component {
  state = {};
  render() {
    return (
      <div
        className="row align-items-end"
        style={{ height: "30rem", backgroundColor: "green" }}
      >
        <div class="col-md-6">© BusinessName 2017.</div>
        <div class="col-md-2">© BusinessName 2017.</div>
        <div class="col-md-3">© BusinessName 2017.</div>
      </div>
    );
  }
}

export default ServiceAgreement;
