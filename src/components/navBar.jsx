import React from "react";
import { Link, NavLink } from "react-router-dom";
import CommonButton from "./common/commonButton";

const NavBar = () => {
  return (
    <div className="sticky-top" style={{ "background-color": "#e3f2fd" }}>
      <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
        <div
          className="navbar-header"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
        >
          <Link className="navbar-brand" to="/home">
            LabVision
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
            <div className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                功能介绍
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="dropdown-item" to="/feature/inspection">
                    安全检查
                  </Link>
                </div>
                <div data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="dropdown-item" to="/feature/training">
                    培训与准入
                  </Link>
                </div>
                <div data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="dropdown-item" to="/feature/ledger">
                    动态台账
                  </Link>
                </div>
                <div data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="dropdown-item" to="/feature/environment">
                    环境监测
                  </Link>
                </div>

                <div data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="dropdown-item" to="/feature/data-analysis">
                    数据分析
                  </Link>
                </div>
              </div>
            </div>
            <div data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink className="nav-item nav-link" to="/cooperation-case">
                合作案例
              </NavLink>
            </div>
            <div data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink className="nav-item nav-link" to="/partner">
                行业伙伴
              </NavLink>
            </div>
            <div data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink className="nav-item nav-link" to="/price">
                价格
              </NavLink>
            </div>
          </div>
          <div data-toggle="collapse" data-target=".navbar-collapse.show">
            <a href="/trail-apply" target="_blank">
              <CommonButton
                label="免费试用"
                style={{
                  marginRight: "20px",
                  borderRadius: "5px"
                }}
              ></CommonButton>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
