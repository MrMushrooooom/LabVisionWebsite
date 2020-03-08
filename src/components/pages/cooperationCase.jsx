import React, { Component } from "react";
import "../../styles/cooperationCase.css";

class CooperationCase extends Component {
  state = {};
  render() {
    return (
      <div className="cooperationCase">
        {/* part1 */}

        {/* <div className="cooperation-case-part1">
      <div className="container">
        <p className="cooperation-case-part1-primary">合作案例</p>
      </div>
    </div> */}

        {/* part2 */}
        {/* Consists of all units*/}
        <div className="cooperation-trans-bg2">
          <div className="cooperation-case-part2">
            {/* Consists of firt two units*/}
            <div className="cooperation-trans-bg1">
              <div className="cooperation-case-part2-div container text-left">
                <div className="cooperation-case-row row">
                  <div className="col-md-7"></div>
                  <div className="col-12 col-md-5">
                    <img
                      className="cooperation-case-part2-logo"
                      src="/img/cooperation/cooperation_logo_jyb.png"
                      alt="Responsive"
                    ></img>
                  </div>
                </div>
                <div className="cooperation-case-row row">
                  <div className="col-md col-md-6 order-2">
                    <img
                      className="cooperation-case-part2 img-fluid"
                      src="/img/cooperation/cooperation_jyb.png"
                      alt="Responsive"
                      width="100%"
                    ></img>
                  </div>
                  <div className="col-md col-md-5 order-md-2 offset-md-1">
                    <p className="cooperation-case-part2-primary">
                      教育部科研实验室安全检查系统
                    </p>
                    <p className="cooperation-case-part2-content">
                      为预防实验室安全隐患，检查高校实验室的安全管理效果，
                      教育部科技发展中心制定了一套适用于全国高等院校的实验室安全规范及管理流程，嵌入在labvision的巡检系统中，由专家团队进行使用。
                      <br />
                      <br />
                      每年通过对全国的高校巡检来检查发现问题，并监督后续的改善。
                      大幅提高了教育部、专家组、高校之间在安全管理工作上的协同效率。
                    </p>
                  </div>
                </div>
              </div>
              <div className="cooperation-case-part2-div container text-left">
                <div className="cooperation-case-row row">
                  <div className="col-4">
                    <img
                      className="cooperation-case-part2-logo"
                      src="/img/cooperation/cooperation_logo_qh.png"
                      alt="Responsive"
                    ></img>
                  </div>
                  <div className="col-1"></div>
                </div>
                <div className="cooperation-case-row row">
                  <div className="col-md col-md-5">
                    <p className="cooperation-case-part2-primary">
                      清华大学实验室巡检系统
                    </p>
                    <p className="cooperation-case-part2-content">
                      清华大学的实验室，从数量到类别复杂性均位列全国第一。
                      因此清华的实验室管理处非常重视安全管理的信息化建设。从2018年起，LabVision就配合清华建设了全校实验室巡检管理系统。
                      <br />
                      <br />
                      经过两年的不断完善，已经覆盖了全校4000多个实验室的日常管理。同时，也被用作实验室信息化管理的入口，在此之上不断丰富新的安全信息化功能，
                      成为全国高校领先的实验室安全管理平台。
                    </p>
                  </div>
                  <div className="col-md col-md-6 offset-md-1">
                    <img
                      className="img-fluid"
                      src="/img/cooperation/cooperation_qh.png"
                      alt="Responsive"
                      width="100%"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="cooperation-case-part2-div container text-left">
              <div className="cooperation-case-row row">
                <div className="col-md-7"></div>
                <div className="col-12 col-md-5">
                  <img
                    className="cooperation-case-part2-logo"
                    src="/img/cooperation/cooperation_logo_blg.png"
                    alt="Responsive"
                  ></img>
                </div>
              </div>
              <div className="cooperation-case-row row">
                <div className="col-md col-md-6 order-2">
                  <img
                    className="cooperation-case-part2 img-fluid"
                    src="/img/cooperation/cooperation_blg.png"
                    alt="Responsive"
                  ></img>
                </div>
                <div className="col-md col-md-5 order-md-2 offset-md-1">
                  <p className="cooperation-case-part2-primary">
                    北京理工大学实验室巡检系统
                  </p>
                  <p className="cooperation-case-part2-content">
                    北京理工大学实验室众多，管理的危化品品类繁多，因此其安全需求场景也非常多样化。LabVision与北京理工大学安全处管理老师们共同配合，设计开发了适合其特点的全校实验室安全巡检系统。
                    <br />
                    <br />
                    全体师生均可以参与实验室的安全监管，
                    不留下安全死角。大幅提升了安全管理人员的工作效率，降低了安全隐患数量。
                  </p>
                </div>
              </div>
            </div>
            <div className="cooperation-case-part2-div container text-left">
              <div className="cooperation-case-row row">
                <div className="col-4">
                  <img
                    className="cooperation-case-part2-logo"
                    src="/img/cooperation/cooperation_logo_bzy.png"
                    alt="Responsive"
                  ></img>
                </div>
                <div className="col-1"></div>
              </div>
              <div className="cooperation-case-row row">
                <div className="col-md col-md-5">
                  <p className="cooperation-case-part2-primary">
                    北京中医药大学实验室巡检系统
                  </p>
                  <p className="cooperation-case-part2-content">
                    北京中医药大学是全国中医药大学的领军者。经过其安全管理处的严格评估，LabVision为其建设提供了全校实验室安全巡检系统，适应其医科大学的特点。上线之后使用效果良好。
                  </p>
                </div>
                <div className="col-md col-md-6 offset-md-1">
                  <img
                    className="img-fluid"
                    src="/img/cooperation/cooperation_bzy.png"
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

export default CooperationCase;
