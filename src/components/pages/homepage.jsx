import React, { Component } from "react";
import "../../styles/homepage.css";

class Homepage extends Component {
  state = {};

  render() {
    return (
      <div className="homepage">
        {/* part1 */}

        <div className="homepage-part1 shadow p-3 mb-5 bg-white rounded">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="homepage-part1-primary">实验室安全管理</p>
                <p className="homepage-part1-secondary">从未如此简单</p>
                <p className="homepage-part1-content">
                  依靠高效、便捷的解决方案
                  <br /> 让任何人都可以轻松完成实验室管理工作
                </p>
                <a href="/trail-apply" target="_blank">
                  <button className="homepage-part1-apply-button btn btn-outline-primary">
                    免费试用
                  </button>
                </a>
              </div>
              <div
                className="col-12 col-md-6 text-right"
                style={{ padding: "0" }}
              >
                <img
                  className="img-fluid home-banner-bg"
                  src="/img/home/home_banner.png"
                  alt="Responsive"
                ></img>
              </div>
            </div>
          </div>
        </div>

        {/* part2 */}

        <div className="homepage-part2">
          <div className="container">
            <p className="homepage-part2-primary text-center">
              覆盖实验室安全管理工作的各个环节
            </p>
            <p className="homepage-part2-secondary text-center">
              助力每一位参与者
            </p>
          </div>
        </div>

        {/* part3 */}

        <div className="homepage-part3">
          <div className="homepage-part3-div container text-left">
            <div className="row">
              <div className="col-md col-9 col-md-5 align-self-center">
                <p className="homepage-part3-primary">安全检查</p>
                <p className="homepage-part3-secondary">多场景</p>
                <p className="homepage-part3-content">
                  校级巡查、学院自查、临时抽查多种场景
                </p>
                <p className="homepage-part3-secondary">检查模版</p>
                <p className="homepage-part3-content">教育部官方检查标准</p>
                <p className="homepage-part3-secondary">工作留存</p>
                <p className="homepage-part3-content">
                  计划、检查、整改、复查的完整闭环并留存
                </p>
              </div>
              <div className="col-md col-md-6 text-right">
                <img
                  className="homepage-part3-img img-fluid"
                  src="/img/home/home_feature_01.png"
                  alt="Responsive"
                ></img>
              </div>
            </div>
          </div>
          <div className="homepage-part3-div container text-left">
            <div className="row">
              <div className="col-md col-md-6 order-2 text-right">
                <img
                  className="homepage-part3-img img-fluid"
                  src="/img/home/home_feature_02.png"
                  alt="Responsive"
                ></img>
              </div>
              <div className="col-md col-9 col-md-5 offset-md-1 order-1 order-md-2 align-self-center">
                <p className="homepage-part3-primary">培训与准入</p>
                <p className="homepage-part3-secondary">分级建设</p>
                <p className="homepage-part3-content">
                  校级、学院级分级建设课程与题库
                </p>
                <p className="homepage-part3-secondary">学习与考试</p>
                <p className="homepage-part3-content">
                  在线学习课件，并生成试卷完成考试
                </p>
                <p className="homepage-part3-secondary">发放证书</p>
                <p className="homepage-part3-content">
                  完成培训计划，获取准入资格
                </p>
              </div>
            </div>
          </div>
          <div className="homepage-part3-div container text-left">
            <div className="row">
              <div className="col-md col-9 col-md-5 align-self-center">
                <p className="homepage-part3-primary">动态台账</p>
                <p className="homepage-part3-secondary">全面涵盖</p>
                <p className="homepage-part3-content">
                  以实验室为中心，全面涵盖实验室的人、设备、试剂、科研项目等各种重要信息
                </p>
                <p className="homepage-part3-secondary">灵活扩展</p>
                <p className="homepage-part3-content">
                  对接现有系统，对接数据，提高管理效率
                </p>
              </div>
              <div className="col-md col-md-6 offset-md-1 text-right">
                <img
                  className="homepage-part3-img img-fluid"
                  src="/img/home/home_feature_03.png"
                  alt="Responsive"
                ></img>
              </div>
            </div>
          </div>
          <div className="homepage-part3-div container text-left">
            <div className="row">
              <div className="col-md col-md-6 order-2 text-right">
                <img
                  className="homepage-part3-img img-fluid"
                  src="/img/home/home_feature_04.png"
                  alt="Responsive"
                ></img>
              </div>
              <div className="col-md col-9 col-md-5 offset-md-1 order-1 order-md-2 align-self-center">
                <p className="homepage-part3-primary">环境监测</p>
                <p className="homepage-part3-secondary">标准参数</p>
                <p className="homepage-part3-content">
                  提供不同环境下，各类环境参数的安全区间
                </p>
                <p className="homepage-part3-secondary">多渠道推送</p>
                <p className="homepage-part3-content">
                  app、短信、邮件多渠道推送，确保第一时间接收报警信息
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* part4 */}

        <div className="homepage-part4">
          <div className="container">
            <p className="homepage-part4-primary text-center">
              众多企业的信赖选择
            </p>
            <p className="homepage-part4-secondary text-center">
              针对不同企业的规模与需求，提供多元化产品
            </p>
            <div className="row">
              <div className="homepage-part4-img col-md text-center">
                <img
                  className="homepage-part4-img img-fluid"
                  src="/img/home/home_cooperation_jyb.png"
                  alt="Responsive"
                ></img>
              </div>
              <div className="homepage-part4-img col-md text-center">
                <img
                  className="homepage-part4-img img-fluid"
                  src="/img/home/home_cooperation_qh.png"
                  alt="Responsive"
                ></img>
              </div>
              <div className="homepage-part4-img col-md text-center">
                <img
                  className="homepage-part4-img img-fluid"
                  src="/img/home/home_cooperation_blg.png"
                  alt="Responsive"
                ></img>
              </div>
              <div className="homepage-part4-img col-md text-center">
                <img
                  className="homepage-part4-img img-fluid"
                  src="/img/home/home_cooperation_sjd.png"
                  alt="Responsive"
                ></img>
              </div>
              <div className="homepage-part4-img col-md text-center">
                <img
                  className="homepage-part4-img img-fluid"
                  src="/img/home/home_cooperation_bzy.png"
                  alt="Responsive"
                ></img>
              </div>
            </div>
          </div>
        </div>

        {/* part5 */}

        <div className="homepage-part5">
          <div className="container">
            <p className="homepage-part5-primary text-center">
              全方位的解决方案
            </p>
            <div className="row homepage-part5-row justify-content-center">
              <div className="col-5 col-md-4">
                <div className="row">
                  <div className="col-md homepage-part5-cell">
                    <div className="homepage-part5-img text-center">
                      <img
                        className="home-part5-img img-fluid"
                        src="/img/home/home_solution_01.png"
                        alt="Responsive"
                      ></img>
                    </div>
                    <p className="homepage-part5-secondary text-center">
                      高效协作
                    </p>
                    <p className="homepage-part5-content text-center">
                      预置多种模版
                      <br />
                      工作流方式协同办公
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-5 col-md-4">
                <div className="row">
                  <div className="col-md homepage-part5-cell">
                    <div className="homepage-part5-img text-center">
                      <img
                        className="home-part5-img img-fluid"
                        src="/img/home/home_solution_02.png"
                        alt="Responsive"
                      ></img>
                    </div>
                    <p className="homepage-part5-secondary text-center">
                      责任分明
                    </p>
                    <p className="homepage-part5-content text-center">
                      人房绑定
                      <br />
                      工作权限清晰划分
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-5 col-md-4">
                <div className="row">
                  <div className="col-md homepage-part5-cell">
                    <div className="homepage-part5-img text-center">
                      <img
                        className="home-part5-img img-fluid"
                        src="/img/home/home_solution_03.png"
                        alt="Responsive"
                      ></img>
                    </div>
                    <p className="homepage-part5-secondary text-center">
                      智能升级
                    </p>
                    <p className="homepage-part5-content text-center">
                      数据学习给出建议提醒
                      <br />
                      有效降低工作成本
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-5 col-md-4">
                <div className="row">
                  <div className="col-md homepage-part5-cell">
                    <div className="homepage-part5-img text-center">
                      <img
                        className="home-part5-img img-fluid"
                        src="/img/home/home_solution_04.png"
                        alt="Responsive"
                      ></img>
                    </div>
                    <p className="homepage-part5-secondary text-center">
                      愉悦体验
                    </p>
                    <p className="homepage-part5-content text-center">
                      以极致产品体验为目标
                      <br />
                      让用户轻松上手
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-5 col-md-4">
                <div className="row">
                  <div className="col-md homepage-part5-cell">
                    <div className="homepage-part5-img text-center">
                      <img
                        className="home-part5-img img-fluid"
                        src="/img/home/home_solution_05.png"
                        alt="Responsive"
                      ></img>
                    </div>
                    <p className="homepage-part5-secondary text-center">
                      开放兼容
                    </p>
                    <p className="homepage-part5-content text-center">
                      支持系统对接
                      <br />
                      满足不同组织需求
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-5 col-md-4">
                <div className="row">
                  <div className="col-md homepage-part5-cell">
                    <div className="homepage-part5-img text-center">
                      <img
                        className="home-part5-img img-fluid"
                        src="/img/home/home_solution_06.png"
                        alt="Responsive"
                      ></img>
                    </div>
                    <p className="homepage-part5-secondary text-center">
                      信息安全
                    </p>
                    <p className="homepage-part5-content text-center">
                      国际权威安全认证
                      <br />
                      全生命周期安全保障
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* part6 */}

        <div className="home-part6-trans-bg">
          <div className="homepage-part6">
            <div className="container">
              <p className="homepage-part6-primary text-center">数据驱动</p>
              <div className="row">
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-3 align-self-center">
                  <p className="homepage-part6-secondary text-center text-md-left">
                    通过分析数据
                  </p>
                  <p className="homepage-part6-secondary text-center text-md-center">
                    全局掌握现状
                  </p>
                  <p className="homepage-part6-secondary text-center text-md-right">
                    寻找最有效策略
                  </p>
                </div>
                <div className="homepage-part6-img text-center col-12 col-md-8 ">
                  <img
                    className="img-fluid"
                    src="/img/home/home_data_analysis.png"
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

export default Homepage;
