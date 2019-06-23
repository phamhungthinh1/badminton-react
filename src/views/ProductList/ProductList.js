import React, { Component } from 'react';
import axios from 'axios';
import product1 from '../../../public/image/product2.jpeg';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // promotionProduct: Array().fill(null),
            // bestSaleProduct: Array().fill(null),
            // fourProduct: Array().fill(null)
        }
        this.getAllPromotionProduct = this.getAllPromotionProduct.bind(this);
        // this.getAllBestSalesProduct = this.getAllPromotionProduct.bind(this);
        // this.getAllProduct = this.getAllProduct.bind(this);
    }

    getAllPromotionProduct() {
        fetch("http://localhost:8080/products/allPromotionProduct", {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
            //   "Authorization": localStorage.getItem("token")
              // "Authorization": this.props.tokenReducer.token
              // 'Access-Control-Allow-Origin': '*'
            }
            // ,
            // body: JSON.stringify({
            //   amount: this.state.amount,
            //   duration: this.state.borrowDuration,
            //   interestRate: 18,
            //   createDate: this.state.createDate
            // })
      
          }).then(
            (result) => {
                console.log(result);
            //   if (result.status === 200) {
            //     alert("create success");
            //     this.props.history.push('view-new-request');
            //   } else if(result.status === 401) {
            //     localStorage.setItem("isLoggedIn", false);
            //     this.props.history.push('/login-page')
            //   }
      
            }
          )
        //   event.preventDefault();
    }

    // componentWillMount() {
        // let promotionProductList = Array().fill(null);
        // axios.get('http://localhost:8080/products/promotionProduct')
        //     .then(response => {
        //         promotionProductList = response.data;
        //         // console.log("data " + dataProduct);
        //         this.setState({ promotionProduct: promotionProductList });
        //         console.log("pro" + this.state.promotionProduct);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        // let bestSalesProductList = Array().fill(null);
    // }

    componentDidMount() {
        console.log(this.props.product.title);
        
        // console.log(this.props.location.state.title);
    }

    render() {
        // console.log(this.props);
        // console.log(this.props);
        // console.log(this.state);
        return (
            <div className="container-fluid col-md-11">
            <br />
                <Row>
                    
                {/* <p className="h3">{this.props.location.state.title}</p> */}
                    <p className="h3">Search for [keyword]</p>
                </Row>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    <img className="mt-3 card-img-top" src={product1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">111111111</h5>
                        <p className="card-text">111111111 VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    <img className="mt-3 card-img-top" src={product1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">111111111</h5>
                        <p className="card-text">111111111 VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    <img className="mt-3 card-img-top" src={product1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">111111111</h5>
                        <p className="card-text">111111111 VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    <img className="mt-3 card-img-top" src={product1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">111111111</h5>
                        <p className="card-text">111111111 VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    <img className="mt-3 card-img-top" src={product1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">111111111</h5>
                        <p className="card-text">111111111 VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    <img className="mt-3 card-img-top" src={product1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">111111111</h5>
                        <p className="card-text">111111111 VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    <img className="mt-3 card-img-top" src={product1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">111111111</h5>
                        <p className="card-text">111111111 VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    <img className="mt-3 card-img-top" src={product1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">111111111</h5>
                        <p className="card-text">111111111 VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setToken: (token) => {
//       dispatch({
//         type: "SET_TOKEN",
//         payload: token
//       });
//     }
//   }
// }

export default connect(mapStateToProps)(ProductList);
// export default ProductList;