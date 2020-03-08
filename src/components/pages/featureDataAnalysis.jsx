import React, { Component } from "react";
import "../../styles/feature.css";

class FeatureDataAnalysis extends Component {
  state = {};
  render() {
    return (
      <div className="feature">
        {/* part1 */}

        <div className="feature-part1 shadow p-3 mb-5 bg-white rounded">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="feature-part1-primary">
                  专家指导设计的数据分析模块
                </p>
                <p className="feature-part1-content">
                  丰富直观的数据分析模块，快速聚焦关键问题，LabVision为管理者提供决策支持
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
                  src="/img/feature/feature_data_analysis_banner.png"
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
                  src="/img/feature/feature_data_analysis_01.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-md col-9 col-md-3 offset-md-1 order-1 order-md-2 align-self-center">
                <p className="feature-part2-primary">多角度分析</p>
                <p className="feature-part2-content">
                  按时间、区域、学院、楼宇、安全规范多角度观测数据，对实验室安全状况进行全面分析
                </p>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-md col-9 col-md-3 offset-md-1 align-self-center">
                <p className="feature-part2-primary">完整历史数据</p>
                <p className="feature-part2-content">
                  系统自动保存备份全部历史数据，确保信息的连续性
                </p>
              </div>
              <div className="col-md col-md-7 offset-md-1">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_data_analysis_02.png"
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
                  src="/img/feature/feature_data_analysis_03.png"
                  alt="Responsive"
                  width="80%"
                ></img>
              </div>
              <div className="col-md col-9 col-md-3 offset-md-1 order-1 order-md-2 align-self-center">
                <p className="feature-part2-primary">快速响应</p>
                <p className="feature-part2-content">
                  支持多人同时在线操作，批量处理任务，系统可快速响应百万级别的数据查询
                </p>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-md col-9 col-md-3 offset-md-1 align-self-center">
                <p className="feature-part2-primary">定期生成报告</p>
                <p className="feature-part2-content">
                  系统定期生成月度报告、年度报告，全方位描绘实验室各项信息并推送给指定用户
                </p>
              </div>
              <div className="col-md col-md-7 offset-md-1">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_data_analysis_04.png"
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

export default FeatureDataAnalysis;
