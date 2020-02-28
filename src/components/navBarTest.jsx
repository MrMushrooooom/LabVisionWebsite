import React from "react";
import { Link, NavLink } from "react-router-dom";
import CommonButton from "./common/commonButton";

const NavBarTest = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Link className="navbar-brand" to="/home">
          LabVision
        </Link>

        <button
          type="button"
          class="navbar-toggler d-lg-none"
          data-toggle="modal"
          data-target="#exampleModal"
          aria-controls="exampleModal"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mr-auto">
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
                <Link
                  className="dropdown-item justify-content-center"
                  to="/feature/inspection"
                >
                  安全检查
                </Link>
                <Link className="dropdown-item" to="/feature/training">
                  培训与准入
                </Link>
                <Link className="dropdown-item" to="/feature/ledger">
                  动态台账
                </Link>
                <Link className="dropdown-item" to="/feature/environment">
                  环境监测
                </Link>
                <Link className="dropdown-item" to="/feature/data-analysis">
                  数据分析
                </Link>
              </div>
            </div>
            <NavLink className="nav-item nav-link" to="/cooperation-case">
              合作案例
            </NavLink>
            <NavLink className="nav-item nav-link" to="/partner">
              行业伙伴
            </NavLink>
            <NavLink className="nav-item nav-link" to="/price">
              价格aaa
            </NavLink>
          </div>
        </div>
        <a href="/trail-apply" target="_blank" className="d-none d-lg-block">
          <CommonButton
            label="免费试用"
            style={{
              marginRight: "20px",
              borderRadius: "5px"
            }}
          ></CommonButton>
        </a>
      </nav>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarTest;
