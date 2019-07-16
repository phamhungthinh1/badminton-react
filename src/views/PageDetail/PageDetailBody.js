import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageDetailBody.css";
import axios from "axios";
import Constant from "../../constants/config";
import { connect } from "react-redux";
class PageDetailBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    axios
      .get("http://localhost:8080/products/" + id)
      .then(response => {
        const dataProduct = response.data;
        console.log(dataProduct);
        this.setState({ product: dataProduct });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="card mt-3 mb-3 p-4">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img
                        alt=""
                        src="data:image/jpeg;base64,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"
                      />
                    </div>
                    <div className="tab-pane" id="pic-2"><img alt="" src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-3"><img alt="" src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-4"><img alt="" src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-5"><img alt="" src="http://placekitten.com/400/252" /></div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img alt="" src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-2" data-toggle="tab"><img alt="" src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-3" data-toggle="tab"><img alt="" src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-4" data-toggle="tab"><img alt="" src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-5" data-toggle="tab"><img alt="" src="http://placekitten.com/200/126" /></a></li>
                  </ul>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{this.state.product.name}</h3>
                  <br/>
                  <p><b>Shaft:</b> {this.state.product.shaft}</p>
                  <p><b>Flex:</b> {this.state.product.flex}</p>
                  <p><b>Weigh:</b> {this.state.product.weigh}</p>
                  <h5 className="price">
                    current price: <span>{this.state.product.price}</span>
                  </h5>

                  <div className="action">
                    <button
                      className="add-to-cart btn btn-default mt-1"
                      type="button"
                      onClick={() => {
                        this.props.addToCart(this.state.product);
                      }}
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="card-header">Description</div>
            <div className="card-body">{this.state.product.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      product: state.product
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      setTitleRedux: title => {
        dispatch({
          type: "SET_TITLE",
          payload: title
        });
      },
      addToCart: product => {
        dispatch({
          type: "ADD_QUANTITY_ITEM_SHOPPING",
          product: product
        });
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PageDetailBody);
