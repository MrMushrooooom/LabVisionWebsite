import React, { Component } from "react";
import "../../styles/trailApply.css";
import { Link } from "react-router-dom";

class TrailApply extends Component {
  state = {};

  onSubmit = () => {};
  validate = () => {
    return "true";
  };

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
            <div className="trail-apply-right-part2 row ">
              <div className="col-8 offset-2 col-md-4 offset-md-4">
                <p className="trail-apply-right-part2-primary">
                  欢迎使用LabVision
                </p>
                <p className="trail-apply-right-part2-content">
                  只需完善简短信息，即刻开启高效实验室管理时代
                </p>
                <form className="trail-apply-right-part2-form">
                  <div className="form-group">
                    <label
                      className="trail-apply-right-part2-label"
                      htmlFor="organization"
                    >
                      组织/机构
                    </label>
                    <input
                      id="organization"
                      type="text"
                      className="trail-apply-right-part2-input form-control"
                      placeholder="请输入组织/机构名称"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      className="trail-apply-right-part2-label"
                      htmlFor="email"
                    >
                      邮箱
                    </label>
                    <input
                      id="email"
                      type="text"
                      className="trail-apply-right-part2-input form-control"
                      placeholder="请输入邮箱"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      className="trail-apply-right-part2-label"
                      htmlFor="phone"
                    >
                      手机号
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="trail-apply-right-part2-inpu form-control"
                      placeholder="请输入手机号"
                    />
                  </div>
                  <Link to="/trail-apply-confirm">
                    <button className="trail-apply-right-part2-submit btn btn-primary">
                      提交
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrailApply;
