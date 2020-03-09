import React, { Component } from "react";
import "../../styles/feature.css";

class FeatureLedger extends Component {
  state = {};
  render() {
    return (
      <div className="feature">
        {/* part1 */}
        <div className="feature-part1 shadow p-3 mb-5 bg-white rounded">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="feature-part1-primary">灵活可扩展的动态台账</p>
                <p className="feature-part1-content">
                  LabVision以实验室为单位，通过与现有系统对接，将动态台账全方位地展示与用户
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
                  src="/img/feature/feature_ledger_banner.png"
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
              <div className="col-9 col-md-4 align-self-center offset-md-1">
                <p className="feature-part2-primary">全方位掌握实验室动态</p>
                <p className="feature-part2-content">
                  通过搜索、GPS定位、二维码扫描进入实验室主页，人员、设备、试剂、科研项目、历史隐患等一系列相关数据会清晰的呈现于眼前
                </p>
              </div>
              <div className="col-md-6 offset-md-1">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_ledger_01.png"
                  alt="Responsive"
                  width="80%"
                ></img>
              </div>
            </div>
          </div>
          <div className="feature-trans-bg3">
            <div className="feature-part2-div container text-left">
              <div className="row">
                <div className="col-md-6 order-2">
                  <img
                    className="img-fluid"
                    src="/img/feature/feature_ledger_02.png"
                    alt="Responsive"
                    width="100%"
                  ></img>
                </div>
                <div className="col-9 col-md-4 offset-md-1 order-1 order-md-2 align-self-center">
                  <p className="feature-part2-primary">灵活扩展</p>
                  <p className="feature-part2-content">
                    系统保持高度的可扩展性，可根据需求，以多种方式与其他现有系统进行数据对接
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-part2-div container text-left">
              <div className="row">
                <div className="col-9 col-md-4 offset-md-1 align-self-center">
                  <p className="feature-part2-primary">在线预约</p>
                  <p className="feature-part2-content">
                    在线查询实验室的空闲状态，一键预约实验室，避免因无法获取实验室使用状态所带来的时间损失
                  </p>
                </div>
                <div className="col-md-6 offset-md-1">
                  <img
                    className="img-fluid"
                    src="/img/feature/feature_ledger_03.png"
                    alt="Responsive"
                    width="100%"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-md-6 order-2">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_ledger_04.png"
                  alt="Responsive"
                  width="90%"
                ></img>
              </div>
              <div className="col-9 col-md-4 offset-md-1 order-1 order-md-2 align-self-center">
                <p className="feature-part2-primary">全生命周期管理</p>
                <p className="feature-part2-content">
                  从实验室的建立，到期间人员、动态台账的变更，到数据资料的产生，全生命周期维护信息
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureLedger;
