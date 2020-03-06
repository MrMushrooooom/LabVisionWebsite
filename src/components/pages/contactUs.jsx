import React, { Component } from "react";
import "../../styles/contactUs.css";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div className="contact-us">
        <div className="contact-us-trans-bg">
          <div className="contact-us-part1">
            {/*part1 */}
            <div className="contact-us-part1">
              <div className="container">
                <p className="contact-us-part1-primary">服务咨询</p>
              </div>
            </div>
          </div>
          {/*part2 */}

          <div className="contact-us-part2 container">
            <div className="contact-us-row row justify-content-center">
              <div className="col-12 col-xl-3">
                <div className="contact-us-card  card shadow">
                  <div className="contact-us-card-body card-body text-center">
                    <i className="contact-us-card-icon fa fa-lg fa-envelope" />
                    <p className="contact-us-card-primary text-center">
                      邮件咨询
                    </p>
                    <p className="contact-us-card-content text-center">
                      提供7*24小时购买者咨询服务
                    </p>
                    <button
                      className="contact-us-button btn btn-outline-primary btn-sm"
                      style={{
                        borderRadius: "20px",
                        paddingLeft: "2rem",
                        paddingRight: "2rem"
                      }}
                    >
                      service@labvison.cn
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-3">
                <div className="contact-us-card  card shadow">
                  <div className="contact-us-card-body card-body text-center">
                    <i className="contact-us-card-icon fa fa-lg fa-phone" />
                    <p className="contact-us-card-primary text-center">
                      电话咨询
                    </p>
                    <p className="contact-us-card-content text-center">
                      工作日10:00-19:00为您提供解答
                    </p>
                    <button
                      className="contact-us-button btn btn-outline-primary btn-sm"
                      style={{
                        borderRadius: "20px",
                        paddingLeft: "2rem",
                        paddingRight: "2rem"
                      }}
                    >
                      400-8110-118
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-3">
                <div className="contact-us-card  card shadow">
                  <div className="contact-us-card-body card-body text-center">
                    <i className="contact-us-card-icon fa fa-lg fa-weixin" />
                    <p className="contact-us-card-primary text-center">
                      微信咨询
                    </p>
                    <p className="contact-us-card-content text-center">
                      为您多提供一种沟通方式
                    </p>
                    <img
                      className="contact-us-qrcode img-fluid"
                      src="/img/cat2.png"
                      alt="Responsive"
                      width="100%"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
