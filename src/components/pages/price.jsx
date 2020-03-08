import React, { Component } from "react";
import "../../styles/price.css";
import PriceCard from "../priceCard";
import "../../styles/priceTable.css";
import "font-awesome/css/font-awesome.css";

const priceCardsProp = [
  {
    primary: "试用版",
    content: "免费体验标准版30天",
    num: "1",
    buttonLabel: "免费试用",
    href: "/trail-apply"
  },
  {
    primary: "标准版",
    content: "提供专业服务与支持的标准实验室安全管理套件，适合小型团",
    num: "2",
    buttonLabel: "联系我们",
    href: "/contact-us"
  },
  {
    primary: "高级版",
    content:
      "提供标准管理功能和更大使用容量的企业级实验室安全管理套件，适合中大型团队",
    num: "3",
    buttonLabel: "联系我们",
    href: "/contact-us"
  },
  {
    primary: "定制版",
    content: "在实现标准管理功能的基础上，提供定制化开发服务，适合超大型团队",
    num: "4",
    buttonLabel: "联系我们",
    href: "/contact-us"
  }
];
// const priceTableProp = [
//   {
//     title: "用户与权限",
//     otherRows: [
//       {
//         inro: "最大支持用户数",
//         beta: "20人",
//         standard: "100人",
//         professional: "无限制",
//         custom: "无限制"
//       },
//       {
//         inro: "用户自定义权限",
//         beta: "—",
//         standard: "—",
//         professional: "yes",
//         custom: "yes"
//       }
//     ]
//   },
//   {}
// ];

class Price extends Component {
  state = {};
  render() {
    return (
      <div className="price">
        {/* part1 */}
        <div className="price-part1">
          <p className="price-part1-primary">
            LabVision为你提供多版本，多功能的
            <br />
            实验室管理解决方案
          </p>
        </div>
        {/* Consists of part2 and part3 */}
        <div className="price-trans-bg">
          {/* part2 */}
          <div className="price-part2 container">
            <div className="price-part2-row row justify-content-center">
              <div className="price-part2-colume col-6 col-md-3">
                <PriceCard
                  primary={priceCardsProp[0]["primary"]}
                  content={priceCardsProp[0]["content"]}
                  num={priceCardsProp[0]["num"]}
                  buttonLabel={priceCardsProp[0]["buttonLabel"]}
                  href={priceCardsProp[0]["href"]}
                />
              </div>
              <div className="price-part2-colume col-6 col-md-3 ">
                <PriceCard
                  primary={priceCardsProp[1]["primary"]}
                  content={priceCardsProp[1]["content"]}
                  num={priceCardsProp[1]["num"]}
                  buttonLabel={priceCardsProp[1]["buttonLabel"]}
                  href={priceCardsProp[1]["href"]}
                />
              </div>
              <div className="price-part2-colume col-6 col-md-3">
                <PriceCard
                  primary={priceCardsProp[2]["primary"]}
                  content={priceCardsProp[2]["content"]}
                  num={priceCardsProp[2]["num"]}
                  buttonLabel={priceCardsProp[2]["buttonLabel"]}
                  href={priceCardsProp[2]["href"]}
                />
              </div>
              <div className="price-part2-colume col-6 col-md-3">
                <PriceCard
                  primary={priceCardsProp[3]["primary"]}
                  content={priceCardsProp[3]["content"]}
                  num={priceCardsProp[3]["num"]}
                  buttonLabel={priceCardsProp[3]["buttonLabel"]}
                  href={priceCardsProp[3]["href"]}
                />
              </div>
            </div>
          </div>
          {/* part3 */}
          <div className="price-part3 d-none d-md-block">
            <table className="price-table table table-hover table-borderless container">
              <thead className="price-table-head">
                <tr className="price-table-head">
                  <th
                    className="price-table-head  sticky-top sticky-offset"
                    scope="col"
                  ></th>
                  <th
                    className="price-table-head  sticky-top sticky-offset"
                    scope="col"
                  >
                    试用版
                  </th>
                  <th
                    className="price-table-head  sticky-top sticky-offset"
                    scope="col"
                  >
                    标准版
                  </th>
                  <th
                    className="price-table-head  sticky-top sticky-offset"
                    scope="col"
                  >
                    高级版
                  </th>
                  <th
                    className="price-table-head  sticky-top sticky-offset"
                    scope="col"
                  >
                    定制版
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" price-table-body-primay">
                  <th className="price-table-body-primary" scope="row">
                    用户与权限
                  </th>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    最大支持用户数
                  </th>
                  <td className="price-table-body">20人</td>
                  <td className="price-table-body">100人</td>
                  <td className="price-table-body">无限制</td>
                  <td className="price-table-body">无限制</td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    用户自定义权限
                  </th>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body-primay">
                  <th className="price-table-body-primary" scope="row">
                    存储空间
                  </th>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    最大存储空间
                  </th>
                  <td className="price-table-body">2G</td>
                  <td className="price-table-body">10G</td>
                  <td className="price-table-body">50G</td>
                  <td className="price-table-body">无限制</td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    生成文档数量
                  </th>
                  <td className="price-table-body">Max 100个 /月</td>
                  <td className="price-table-body">Max 100个 /月</td>
                  <td className="price-table-body">Max 500个 /月</td>
                  <td className="price-table-body">无限制</td>
                </tr>
                <tr className=" price-table-body-primay">
                  <th className="price-table-body-primary" scope="row">
                    产品功能
                  </th>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    标准功能套件
                  </th>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    App与Web多终端支持
                  </th>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    个性化首页定制
                  </th>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body-primay">
                  <th className="price-table-body-primary" scope="row">
                    数据安全
                  </th>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    端到端数据加密
                  </th>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    数据备份
                  </th>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    管理员日志导出
                  </th>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    误删数据恢复
                  </th>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body-primay">
                  <th className="price-table-body-primary" scope="row">
                    服务与支持
                  </th>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                  <td className="price-table-body"></td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body align-middle" scope="row">
                    支持响应
                  </th>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">1个工作日内响应</td>
                  <td className="price-table-body">
                    1个工作日内响应
                    <br />
                    (优先支持)
                  </td>
                  <td className="price-table-body">
                    1个工作日内响应
                    <br />
                    (7*24小时支持)
                  </td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    远程初始化与培训服务
                  </th>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    现场培训服务
                  </th>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    专属客户经理
                  </th>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="price-table-body">
                    <i
                      className="fa fa-check fa-lg"
                      style={{ color: "#007BFE" }}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                <tr className=" price-table-body">
                  <th className="price-table-body" scope="row">
                    定期回访
                  </th>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">—</td>
                  <td className="price-table-body">季度</td>
                  <td className="price-table-body">月度</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Price;
