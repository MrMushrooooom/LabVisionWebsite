import React, { Component } from "react";
import "../../styles/feature.css";

class FeatureTraining extends Component {
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
                  强大便捷的培训与准入系统
                </p>
                <p className="feature-part1-content">
                  在LabVision，你可以轻松制作各类考题与课件，通过与实验室信息联动，实现培训、考试、准入环节的无缝衔接
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
                  src="/img/feature/feature_training_banner.png"
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
              <div className="col-sm col-sm-7 order-2">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_training_01.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-sm col-9 col-sm-3 offset-sm-1 order-1 order-sm-2 align-self-center">
                <p className="feature-part2-primary">分级建设</p>
                <p className="feature-part2-content">
                  通过共享基础课件与题库，快速实现校级课程、学院级课程、实验室级课程的多层建设
                </p>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-9 col-sm-3 offset-sm-1 align-self-center">
                <p className="feature-part2-primary">内容形态丰富</p>
                <p className="feature-part2-content">
                  支持文章、ppt、音频、视频等各类多媒体形式，在线留言功能让师生可以轻松互动
                </p>
              </div>
              <div className="col-sm col-sm-7 offset-sm-1">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_training_02.png"
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
                  src="/img/feature/feature_training_03.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-sm col-9 col-sm-3 offset-sm-1 order-1 order-sm-2 align-self-center">
                <p className="feature-part2-primary">发放证书</p>
                <p className="feature-part2-content">
                  根据不同等级的安全要求，系统生成相应虚拟证书，与门禁实时联动
                </p>
              </div>
            </div>
          </div>
          <div className="feature-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-9 col-sm-3 offset-sm-1 align-self-center">
                <p className="feature-part2-primary">试卷一键生成</p>
                <p className="feature-part2-content">
                  通过考题参数模版化，系统快速生成试卷，大幅压缩传统的试卷制作时间
                </p>
              </div>
              <div className="col-sm col-sm-7 offset-sm-1">
                <img
                  className="img-fluid"
                  src="/img/feature/feature_training_04.png"
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
                  src="/img/feature/feature_training_05.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-sm col-9 col-sm-3 offset-sm-1 order-1 order-sm-2 align-self-center">
                <p className="feature-part2-primary">资源共享</p>
                <p className="feature-part2-content">
                  知识无边界，各个高校可在线分享课件与考题，让更多师生享有最优质的教学内容
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureTraining;
