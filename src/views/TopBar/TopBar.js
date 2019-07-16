import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import LoginModal from "../LoginModal/LoginModal";
import ShoppingCartModal from "../ShoppingCartModal/ShoppingCartModal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      products: [],
      maxPage: 0
    };
    this.setKeyword = this.setKeyword.bind(this);
    this.changeKeyword = this.changeKeyword.bind(this);
    this.getSearchProduct = this.getSearchProduct.bind(this);
  }

  changeKeyword(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  getSearchProduct() {
    let pageParam = encodeURIComponent(this.state.currentPage);
    let pageSizeParam = encodeURIComponent(this.state.pageSize);
    let searchValueParam = encodeURIComponent(this.state.keyword);
    fetch(
      "http://localhost:8080/products/getProductByName?page=" +
        pageParam +
        "&element=" +
        pageSizeParam +
        "&searchValue=" +
        searchValueParam,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(result => {
      console.log(result);
      if (result.status === 200) {
        // alert("create success");
        // this.props.history.push('view-new-request');
        result.json().then(data => {
          this.setState({
            products: data.data,
            maxPage: data.maxPage
          });
        });
      }
      //    else if(result.status === 401) {
      //     localStorage.setItem("isLoggedIn", false);
      //     this.props.history.push('/login-page')
      //   }
    });
    //   event.preventDefault();
  }

  async setKeyword() {
    if (this.state.keyword !== "") {
      // this.props.setKeywordRedux(this.state.keyword);
      await this.props.onChangeKeyword(this.state.keyword);
      this.props.onChangeData();
    }
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
            <div className="input-group w-100">
              <input
                className="form-control border"
                type="text"
                placeholder="Search"
                aria-label="Search"
                id="search"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  onClick={() => this.setKeyword()}
                >
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
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

const mapStateToProps = state => {
  return {
    search: state.search
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setKeywordRedux: keyword => {
      dispatch({
        type: "SET_KEYWORD",
        payload: keyword
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
