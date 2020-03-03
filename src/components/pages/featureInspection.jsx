import React, { Component } from "react";
import "../../styles/feature.css";

class FeatureInspection extends Component {
  state = {};
  render() {
    return (
      <div className="feature">
        {/* part1 */}

        <div className="feature-part1">
          <div className="container">
            <p className="feature-part1-primary">极致高效的安全检查工具</p>
            <div className="row">
              <p className="feature-part1-content col-10 col-md-5">
                从任务下发，到现场检查、整改、复查一系列流程labvision带你体验便捷高效的无纸化办公
              </p>
            </div>
            <a href="/trail-apply" target="_blank">
              <button
                className="btn btn-outline-primary"
                style={{
                  borderRadius: "20px",
                  paddingLeft: "2rem",
                  paddingRight: "2rem"
                }}
              >
                免费试用
              </button>
            </a>
          </div>
        </div>

        {/* part2 */}

        <div className="feature-part2">
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-sm-7 order-2">
                <img
                  className="img-fluid"
                  src="/img/cat2.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-sm col-9 col-sm-3 offset-sm-1 order-1 order-sm-2 align-self-center">
                <p className="feature-part2-primary">覆盖多种场景</p>
                <p className="feature-part2-content">
                  校级巡查、学院自查、临时抽查，灵活多样的检查流程，满足各类使用场景
                </p>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-9 col-sm-3 offset-sm-1 align-self-center">
                <p className="feature-part2-primary">标准检查项模版</p>
                <p className="feature-part2-content">
                  提供来自教育部的官方检查项规范，结合高校自身需求，支持检查项自定义扩展
                </p>
              </div>
              <div className="col-sm col-sm-7 offset-sm-1">
                <img
                  className="img-fluid"
                  src="/img/cat1.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-sm-7 order-2">
                <img
                  className="img-fluid"
                  src="/img/cat2.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-sm col-9 col-sm-3 offset-sm-1 order-1 order-sm-2 align-self-center">
                <p className="feature-part2-primary">高效协同</p>
                <p className="feature-part2-content">
                  以时间流方式组织检查信息，用户只需专注各自业务，多渠道推送确保隐患得到整改
                </p>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-9 col-sm-3 offset-sm-1 align-self-center">
                <p className="feature-part2-primary">离线检查</p>
                <p className="feature-part2-content">
                  高校实验室网络环境存在差异，现场检查、整改全程支持无网操作，确保信息得以方便有效的记录
                </p>
              </div>
              <div className="col-sm col-sm-7 offset-sm-1">
                <img
                  className="img-fluid"
                  src="/img/cat1.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-sm-7 order-2">
                <img
                  className="img-fluid"
                  src="/img/cat2.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-sm col-9 col-sm-3 offset-sm-1 order-1 order-sm-2 align-self-center">
                <p className="feature-part2-primary">权限灵活，责任分明</p>
                <p className="feature-part2-content">
                  采用人房绑定策略，每个环节配有特定角色，清晰的工作划分确保检查工作有序展开
                </p>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-9 col-sm-3 offset-sm-1 align-self-center">
                <p className="feature-part2-primary">数据可追溯</p>
                <p className="feature-part2-content">
                  完整保留全部历史数据，确保检查记录连续可查，帮助用户轻松定位目标信息
                </p>
              </div>
              <div className="col-sm col-sm-7 offset-sm-1">
                <img
                  className="img-fluid"
                  src="/img/cat1.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureInspection;
