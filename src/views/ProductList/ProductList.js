import React, { Component } from 'react';
import axios from 'axios';
import product1 from '../../../public/image/product2.jpeg';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPromotionProduct: [],
            allBestSaleProduct: [],
            allProduct: []
        }
        this.getAllPromotionProduct = this.getAllPromotionProduct.bind(this);
        this.getAllBestSalesProduct = this.getAllPromotionProduct.bind(this);
        this.getAllProduct = this.getAllProduct.bind(this);
    }

    getAllPromotionProduct() {
        fetch("http://localhost:8080/products/allPromotionProduct", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }

        }).then(
            (result) => {
                console.log(result);
                if (result.status === 200) {
                    // alert("create success");
                    // this.props.history.push('view-new-request');
                    result.json().then((data) => {
                        this.setState({
                            allPromotionProduct: data
                        })
                    }
                    )
                }
                //    else if(result.status === 401) {
                //     localStorage.setItem("isLoggedIn", false);
                //     this.props.history.push('/login-page')
                //   }

            }
        )
        //   event.preventDefault();
    }

    getAllBestSalesProduct() {
        fetch("http://localhost:8080/products/allBestSalesProduct", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }

        }).then(
            (result) => {
                console.log(result);
                if (result.status === 200) {
                    // alert("create success");
                    // this.props.history.push('view-new-request');
                    result.json().then((data) => {
                        this.setState({
                            allBestSaleProduct: data
                        })
                    }
                    )
                }
                //    else if(result.status === 401) {
                //     localStorage.setItem("isLoggedIn", false);
                //     this.props.history.push('/login-page')
                //   }

            }
        )
        //   event.preventDefault();
    }

    getAllProduct() {
        fetch("http://localhost:8080/products/", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }

        }).then(
            (result) => {
                console.log(result);
                if (result.status === 200) {
                    // alert("create success");
                    // this.props.history.push('view-new-request');
                    result.json().then((data) => {
                        this.setState({
                            allProduct: data
                        })
                    }
                    )
                }
                //    else if(result.status === 401) {
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
        // console.log(this.state.allProduct);
        if (this.props.product.title === "Promotion") {
            this.getAllPromotionProduct();
        } else if (this.props.product.title === "Best Sales") {
            this.getAllBestSalesProduct();
        } else {
            this.getAllProduct();
        }

        // console.log(this.props.location.state.title);
    }

    render() {
        // console.log(this.props);
        // console.log(this.props);
        // const { allPromotionProduct } = this.state;
        // console.log("aaa", allPromotionProduct[0].description);
        console.log(this.state.allPromotionProduct);
        let listProduct
        if (this.state.allPromotionProduct.length !== 0) {
            listProduct = this.state.allPromotionProduct.map((product) =>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    {/* product.map() */}
                    <img className="mt-3 card-img-top" src={product.image[0].url} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price} VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            )
        } else if (this.state.allBestSaleProduct.length !== 0) {
            listProduct = this.state.allBestSaleProduct.map((product) =>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    <img className="mt-3 card-img-top" src={product.image[0].url} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price} VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            )
        } else if (this.state.allProduct.length !== 0) {
            listProduct = this.state.allProduct.map((product) =>
                <div className="card product col-md-3 ml-1 mr-1 mb-1 mt-1">
                    <img className="mt-3 card-img-top" src={product.image[0].url} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price} VND</p>
                        {/* <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '} */}
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            )
        }
        
        return (
            <div className="container-fluid col-md-11">
                <br />
                <Row>

                    {/* <p className="h3">{this.props.location.state.title}</p> */}
                    {/* <p className="h3">Search for [keyword]</p> */}
                    <p className="h3">{this.props.product.title} list</p>
                </Row>
                {listProduct}
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