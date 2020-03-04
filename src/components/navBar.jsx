import React from "react";
import "../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="sticky-top navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container">
        <div
          className="navbar-header"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
        >
          <Link className="navbar-brand" to="/home">
            <img
              src="/img/logo_labvision.svg"
              className="logo img-fluid"
              alt="logo"
            ></img>
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
          {/* <div className="collapsed-menu d-lg-none"></div> */}
          {/* <div className="d-none d-lg-block"> */}
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
            <div
              className="navlink"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-item nav-link" to="/cooperation-case">
                合作案例
              </NavLink>
            </div>
            <div
              className="navlink"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-item nav-link" to="/partner">
                行业伙伴
              </NavLink>
            </div>
            <div
              className="navlink"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-item nav-link" to="/price">
                价格
              </NavLink>
            </div>
            <div
              className="navlink d-lg-none"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a
                className="nav-item nav-link"
                href="/trail-apply"
                target="_blank"
              >
                免费试用
              </a>
            </div>
          </div>
        </div>
        <div
          className="d-none d-lg-block"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
        >
          <a href="/trail-apply" target="_blank">
            <button
              className="btn btn-outline-primary btn-sm"
              style={{
                borderRadius: "20px",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem"
              }}
            >
              免费试用
            </button>
          </a>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
