import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <ul className="nav footer-ul">
        <li className="footer-li">
          <Link className="footer bordered" to="/contact-us">
            联系我们
          </Link>
        </li>
        <li className="footer-li">
          <Link className="footer bordered" to="service-agreement">
            服务协议
          </Link>
        </li>
        <li className="footer-li">
          <Link className="footer" to="privacy-policy">
            隐私政策
          </Link>
        </li>
      </ul>
      <p className="footer-copyright">
        Copyright © 2020 南京合轻网络技术有限公司 京ICP备15000511
      </p>
    </div>
  );
};

export default Footer;
