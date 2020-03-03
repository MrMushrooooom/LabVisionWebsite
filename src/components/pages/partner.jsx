import React, { Component } from "react";
import "../../styles/partner.css";

class Partner extends Component {
  state = {};
  render() {
    return (
      <div className="partner">
        {/* part1 */}

        {/* <div className="partner-part1">
          <div className="container">
            <p className="partner-part1-primary">行业伙伴</p>
          </div>
        </div> */}

        {/* part2 */}

        <div className="partner-part2">
          <div className="partner-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-sm-5">
                <img
                  className="partner-part2-logo"
                  src="/img/partener_logo.png"
                  alt="Responsive"
                ></img>
                <p className="partner-part2-content">
                  辰安科技是国内领先的校园安全产品与服务供应商，专注为高校提供校园安全管控与应急管理等解决方案。
                  <br /> <br />
                  辰安科技以检查整改、风险评估、保险保障为切入点，配合全国公共安全技术标准委，依托教育部公共安全与应急管理工程中心，打造了平安实验室平台，平台覆盖实验室的安全教育、隐患排查、安全督导、安全巡查、风险评估、综合治理等业务。
                </p>
              </div>
              <div className="col-sm col-sm-6 offset-sm-1">
                <img
                  className="img-fluid"
                  src="/img/cat1.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
          <div className="partner-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-sm-6 order-2">
                <img
                  className="img-fluid"
                  src="/img/cat2.png"
                  alt="Responsive"
                  width="100%"
                ></img>
              </div>
              <div className="col-sm col-sm-5 offset-sm-1 order-1 order-sm-2 align-self-center">
                <img
                  className="partner-part2-logo"
                  src="/img/partener_logo.png"
                  alt="Responsive"
                ></img>
                <p className="partner-part2-content">
                  国科智慧是中国科学院大学直属的混合所有制企业，由国科大发起，中国科学院大学智慧城市协同创新与产业联盟推进。
                  <br />
                  <br />
                  国科智慧为高校统筹解决实验室安全管理风险评估问题，结合安全风控管理需求，定制专属的保险产品。通过线上线下结合的方式，为高校客户提供实验室安全培训相关服务，普及安全知识，提升安全技能。通过提供安全箱、洗消剂、应急医疗包等系列防护产品，为实验室提供一个安全的工作环境。
                </p>
              </div>
            </div>
          </div>
          <div className="partner-part2-div container text-left">
            <div className="row">
              <div className="col-sm col-sm-5">
                <img
                  className="partner-part2-logo"
                  src="/img/partener_logo.png"
                  alt="Responsive"
                ></img>
                <p className="partner-part2-content">
                  涵然科技为高校客户提供实验室室内环境品质在线监测系统。
                  <br />
                  <br />
                  通过实验室内安装的各类监测传感器，持续采集实验室内空气质量数据（温度、湿度、氢气、氧气、噪音、颗粒物含量、特殊气体等），并将接收到的数据进行解析过滤，筛选出价值信息进行封装，通过校园网上传至院校级实验室智能安全平台，由平台统一存储、分析、呈现、预警及辅助应急调度指挥。
                </p>
              </div>
              <div className="col-sm col-sm-6 offset-sm-1">
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

export default Partner;
