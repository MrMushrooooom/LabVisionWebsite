import React from "react";
import "../../styles/footerForApply.css";

const FooterForApply = () => {
  return (
    <div className="main footer_for_apply-bg-img">
      <div className="container text-center">
        <p className="footer_for_apply-primary text-center">
          现在就体验LabVision
        </p>
        <p className="footer_for_apply-secondary text-center">
          开启高效实验室管理时代
        </p>
        <a href="/trail-apply" target="_blank">
          <button
            className="btn btn-primary btn-sm"
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
    </div>
  );
};

export default FooterForApply;
