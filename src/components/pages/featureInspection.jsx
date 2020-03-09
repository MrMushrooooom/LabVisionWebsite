import React, { Component } from "react";
import "../../styles/feature.css";

class FeatureInspection extends Component {
  state = {};
  render() {
    return (
      <div className="feature">
        {/* part1 */}

        <div className="feature-part1 shadow p-3 mb-5 bg-white rounded">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="feature-part1-primary">极致高效的安全检查工具</p>
                <p className="feature-part1-content">
                  从任务下发，到现场检查、整改、复查一系列流程，LabVision带你体验便捷高效的无纸化办公
                </p>
                <a href="/trail-apply" target="_blank">
                  <button className="feature-apply-button btn btn-outline-primary">
                    免费试用
                  </button>
                </a>
              </div>
              <div
                className="col-12 col-md-6 text-right"
                style={{ padding: "0" }}
              >
                <img
                  className="img-fluid banner-bg"
                  src="/img/feature/feature_inspection_banner.png"
                  alt="Responsive"
                ></img>
              </div>
            </div>
          </div>
        </div>

        {/* part2 */}

        <div className="feature-part2">
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-md-6 order-2">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_inspection_01.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-9 col-md-4 offset-md-1 order-1 order-md-2 align-self-center">
                <p className="feature-part2-primary">覆盖多种场景</p>
                <p className="feature-part2-content">
                  校级巡查、学院自查、临时抽查，灵活多样的检查流程，满足各类使用场景
                </p>
              </div>
            </div>
          </div>
          <div className="feature-trans-bg1">
            <div className="feature-part2-div container text-left">
              <div className="row">
                <div className="col-9 col-md-4 offset-md-1 align-self-center">
                  <p className="feature-part2-primary">标准检查项模版</p>
                  <p className="feature-part2-content">
                    提供来自教育部的官方检查项规范，结合高校自身需求，支持检查项自定义扩展
                  </p>
                </div>
                <div className="col-md-6 offset-md-1">
                  <img
                    className="img-fluid"
                    src="/img/feature/feature_inspection_02.png"
                    alt="Responsive"
                    width="100%"
                  ></img>
                </div>
              </div>
            </div>
            <div className="feature-part2-div container text-left">
              <div className="row">
                <div className="col-md-6 order-2">
                  <img
                    className="img-fluid"
                    src="/img/feature/feature_inspection_03.png"
                    alt="Responsive"
                    width="100%"
                  ></img>
                </div>
                <div className="col-9 col-md-4 offset-md-1 order-1 order-md-2 align-self-center">
                  <p className="feature-part2-primary">高效协同</p>
                  <p className="feature-part2-content">
                    以时间流方式组织检查信息，用户只需专注各自业务，多渠道推送确保隐患得到整改
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-9 col-md-4 offset-md-1 align-self-center">
                <p className="feature-part2-primary">离线检查</p>
                <p className="feature-part2-content">
                  高校实验室网络环境存在差异，现场检查、整改全程支持无网操作，确保信息得以方便有效的记录
                </p>
              </div>
              <div className="col-md-6 offset-md-1">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_inspection_04.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
          <div className="feature-trans-bg2">
            <div className="feature-part2-div container text-left">
              <div className="row">
                <div className="col-md-6 order-2">
                  <img
                    className="img-fluid"
                    src="/img/feature/feature_inspection_05.png"
                    alt="Responsive"
                    width="100%"
                  ></img>
                </div>
                <div className="col-9 col-md-4 offset-md-1 order-1 order-md-2 align-self-center">
                  <p className="feature-part2-primary">权限灵活，责任分明</p>
                  <p className="feature-part2-content">
                    采用人房绑定策略，每个环节配有特定角色，清晰的工作划分确保检查工作有序展开
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-part2-div container text-left">
              <div className="row">
                <div className="col-9 col-md-4 offset-md-1 align-self-center">
                  <p className="feature-part2-primary">数据可追溯</p>
                  <p className="feature-part2-content">
                    完整保留全部历史数据，确保检查记录连续可查，帮助用户轻松定位目标信息
                  </p>
                </div>
                <div className="col-md-6 offset-md-1">
                  <img
                    className="img-fluid"
                    src="/img/feature/feature_inspection_06.png"
                    alt="Responsive"
                    width="100%"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureInspection;
