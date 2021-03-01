import React, { Component } from "react";
import "../../styles/trailApply.css";
import { withRouter } from "react-router-dom";
import Input from "../common/input";
import axios from 'axios'

class TrailApply extends Component {
  state = {
    account: { organization: "", email: "", phone: "" },
    errors: {}
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.organization.trim() === "")
      errors.organization = "请填写组织/机构名称";
    if (account.email.trim() === "") errors.email = "请填写邮箱";
    if (account.phone.trim() === "") errors.phone = "请填写手机号";

    return Object.keys(errors).length === 0 ? null : errors;
  };
  validateProperty = ({ name, value }) => {
    const trimedValue = value.trim();

    switch (name) {
      case "organization": {
        if (trimedValue === "") return "请填写组织/机构名称";
        break;
      }
      case "email": {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (trimedValue === "") return "请填写邮箱";
        if (reg.test(trimedValue) === false) {
          return "请输入正确的邮箱格式";
        }
        break;
      }
      case "phone": {
        let reg = /^1[3456789]\d{9}$/;
        if (trimedValue === "") return "请填写手机号";
       if (reg.test(trimedValue) === false) {
          return "请输入正确的手机号";
        }
        break;
      }
      default: {
        return;
      }
    }
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    const {account} = this.state

    axios.post('/resource_api/email', {
     ...account,
    token:'gwunited'
  })
    .then( (response)=> {
      console.log(response)
      this.props.history.replace("/trail-apply-confirm");
    })
    .catch( (error)=> {
      console.log(error);
   
    })



  };

  render() {
    const { account, errors } = this.state;

    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col trail-apply-left d-none d-lg-block"></div>
          <div className="col trail-apply-right">
            <div className="trail-apply-right-part1">
              <div className="trail-apply-logo">
                <img
                  src="/img/logo_labvision.svg"
                  width="200"
                  className="trail-apply-logo img-fluid"
                  alt="logo"
                ></img>
              </div>
            </div>
            <div className="trail-apply-right-part2 row ">
              <div className="col-8 offset-2 col-md-4 offset-md-4">
                <p className="trail-apply-right-part2-primary">
                  欢迎使用小来卫士
                </p>
                <p className="trail-apply-right-part2-content">
                  只需完善简短信息，即刻开启高效实验室管理时代
                </p>
                <form
                  className="trail-apply-right-part2-form"
                  onSubmit={this.handleSubmit}
                >
                  <Input
                    name="organization"
                    label="组织/机构"
                    value={account.organization}
                    placeholder="请输入组织/机构名称"
                    error={errors.organization}
                    onChange={this.handleChange}
                    labelClassName="trail-apply-right-part2-label"
                    inputClassName="trail-apply-right-part2-input form-control"
                    autoFocus={true}
                  />
                  <Input
                    name="email"
                    label="邮箱"
                    value={account.email}
                    placeholder="请输入邮箱"
                    error={errors.email}
                    onChange={this.handleChange}
                    labelClassName="trail-apply-right-part2-label"
                    inputClassName="trail-apply-right-part2-input form-control"
                    autoFocus={false}
                  />
                  <Input
                    name="phone"
                    label="手机号"
                    value={account.phone}
                    placeholder="请输入手机号"
                    error={errors.phone}
                    onChange={this.handleChange}
                    labelClassName="trail-apply-right-part2-label"
                    inputClassName="trail-apply-right-part2-input form-control"
                    autoFocus={false}
                  />
                  {/* <Link to="/trail-apply-confirm"> */}
                  <button className="trail-apply-right-part2-submit btn btn-primary">
                    提交
                  </button>
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TrailApply);
