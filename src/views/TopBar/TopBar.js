import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import LoginModal from "../LoginModal/LoginModal";
import ShoppingCartModal from "../ShoppingCartModal/ShoppingCartModal";

class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar bg-dark navbar-dark container-fluid">
        <LoginModal />
        <div className="row w-100">
          {/* <!-- icon or logo --> */}
          <div className="col-md-auto">
            <a className="navbar-brand" href="/">
              Badminton Shop Online
            </a>
          </div>
          {/* <!-- close logo --> */}

          {/* <!-- search bar --> */}
          <div className="col-md-6">
            <form action="" className="form-inline mw-100">
              <div className="input-group w-100">
                <input
                  className="form-control border"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  id="search"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- close search bar --> */}
          <div className="col-md-auto">
          <ShoppingCartModal />
          </div>
          <div className="col-md-auto">
            <a
              href=""
              className="navbar-brand fa fa-user fa-2x"
              role="button"
              data-toggle="modal"
              data-placement="bottom"
              title="Tài khoản"
              data-target="#loginDialog"
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default TopBar;
