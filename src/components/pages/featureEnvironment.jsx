import React, { Component } from "react";
import "../../styles/feature.css";

class FeatureEnvironment extends Component {
  state = {};
  render() {
    return (
      <div className="feature">
        {/* part1 */}

        <div className="feature-part1">
          <div className="container">
            <p className="feature-part1-primary">安全可靠的环境监测</p>
            <div className="row">
              <p className="feature-part1-content col-10 col-md-5">
                LabVision提供完整的环境监测解决方案，从物联网施工部署，到软件调试，并支持对接实验室已有设备
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
              <div className="col-sm col-9 col-sm-3 offset-sm-1 align-self-center">
                <p className="feature-part2-primary">大屏展示</p>
                <p className="feature-part2-content">
                  图形化展示各项关键数据，全局掌握实验室安全状况
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
