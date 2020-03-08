import React, { Component } from "react";
import "../../styles/feature.css";

class FeatureEnvironment extends Component {
  state = {};
  render() {
    return (
      <div className="feature">
        {/* part1 */}

        <div className="feature-part1 shadow p-3 mb-5 bg-white rounded">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="feature-part1-primary">安全可靠的环境监测</p>
                <p className="feature-part1-content">
                  LabVision提供完整的环境监测解决方案，从物联网施工部署到系统软件调试，同时支持对接实验室现有设备
                </p>
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
              <div
                className="col-12 col-md-6 text-right"
                style={{ padding: "0" }}
              >
                <img
                  className="img-fluid banner-bg"
                  src="/img/feature/feature_environment_banner.png"
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
              <div className="col-md col-md-7 order-2">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_environment_01.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-md col-9 col-md-3 offset-md-1 order-1 order-md-2 align-self-center">
                <p className="feature-part2-primary">标准参数</p>
                <p className="feature-part2-content">
                  根据实验室类型与规格，系统提供不同条件下各项环境参数的安全指标，辅助管理者合理配置
                  设备
                </p>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-md col-9 col-md-3 offset-md-1 align-self-center">
                <p className="feature-part2-primary">大屏展示</p>
                <p className="feature-part2-content">
                  图形化展示各项关键数据，全局掌握实验室安全状况
                </p>
              </div>
              <div className="col-md col-md-7 offset-md-1">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_environment_02.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-md col-md-7 order-2">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_environment_03.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-md col-9 col-md-3 offset-md-1 order-1 order-md-2 align-self-center">
                <p className="feature-part2-primary">多渠道推送</p>
                <p className="feature-part2-content">
                  邮件、短信、APP消息推送，多渠道并行确保用户第一时间收到通知
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureEnvironment;
