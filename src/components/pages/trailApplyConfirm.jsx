import React, { Component } from "react";
import "../../styles/trailApplyConfirm.css";

class TrailApplyConfirm extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col trail-apply-left d-none d-lg-block"></div>
          <div className="col trail-apply-right">
            <div className="trail-apply-right-part1">
              <div className="logo">
                <img
                  src="/img/logo_labvision.svg"
                  className="logo img-fluid"
                  alt="logo"
                ></img>
              </div>
            </div>
            <div className="trail-apply-right-part2 row">
              <div className="col-10 offset-1 text-center">
                <img
                  className="successful_icon"
                  src="/img/trail_apply_confirm/trail_apply_confirm_successful.png"
                  alt="successful_icon"
                ></img>
                <p className="trail-apply-right-part2-primary">提交成功</p>
                <p className="trail-apply-right-part2-content">
                  感谢选择LabVision，我们的工作人员将在一个工作日内与您联系。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrailApplyConfirm;
