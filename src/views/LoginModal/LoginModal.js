import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  login() {
    const { userName, password } = this.state;
    let account = {};
    account.email = userName;
    account.password = password;
    console.log(account);
    fetch("http://localhost:8080/user/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(account)
    })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(res) {
        console.log(res);
      });
  }

  render() {
    return (
      <div className="container">
        <div
          className="modal fade align-items-center"
          data-backdrop="static"
          data-keyboard="false"
          id="loginDialog"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Login</h3>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form action="/login" method="post" id="login_form">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user-o" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control w-75"
                      placeholder="Username"
                      required="required"
                      name="username"
                      value={this.state.userName}
                      onChange={text =>
                        this.setState({ userName: text.target.value })
                      }
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock" />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control w-75"
                      placeholder="Password"
                      required="required"
                      value={this.state.password}
                      onChange={text =>
                        this.setState({ password: text.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="button"
                      className="btn btn-primary btn-block btn-lg"
                      value="Login"
                      id="login_button"
                      onClick={() => this.login()}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="button"
                      className="btn btn-danger btn-block btn-lg"
                      value="Create New Account"
                      id="register_button"
                    />
                  </div>
                </form>
              </div>
              {/* <div className="modal-footer">
                <a href="#">Forgot Password?</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
