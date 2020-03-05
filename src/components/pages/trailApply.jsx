import React, { Component } from "react";
import "../../styles/trailApply.css";

class TrailApply extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-md-4 col-12 sidebar">
            <div class="card card-body p-2">
              <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Active
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md col-12 main pa-1">
            <div class="alert alert-danger" role="alert"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrailApply;
