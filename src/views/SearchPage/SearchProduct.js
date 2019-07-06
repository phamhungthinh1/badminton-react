import React, { Component } from 'react';
import axios from 'axios';
import product1 from '../../../public/image/product2.jpeg';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import PaginationComponent from '../Pagination/Pagination';
import TopBar from '../TopBar/TopBar';

class SearchProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            maxPage: 0,
            pageSize: 1,
            currentPage: 1,
            keyword: ""
        }
        this.changeKeyword = this.changeKeyword.bind(this);
        this.getSearchProduct = this.getSearchProduct.bind(this);
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
    }

    changeKeyword(value) {
        this.setState({
            keyword: value
        })
    }

    changeCurrentPage(index) {
        this.setState({
            currentPage: index
        })
    }

    getSearchProduct() {
        let pageParam = encodeURIComponent(this.state.currentPage);
        let pageSizeParam = encodeURIComponent(this.state.pageSize);
        let searchValueParam = encodeURIComponent(this.state.keyword);
        console.log(this.state.keyword);
        fetch("http://localhost:8080/products/getProductByName?page=" + pageParam + "&element=" + pageSizeParam + "&searchValue=" + searchValueParam, {
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
                            products: data.data,
                            maxPage: data.maxPage
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

    componentDidMount() {
        this.getSearchProduct();
    }

    render() {
        // this.getSearchProduct();
        // console.log(this.props);
        // console.log(this.props);
        // const { allPromotionProduct } = this.state;
        // console.log("aaa", allPromotionProduct[0].description);
        console.log(this.state.products);
        const listProduct = this.state.products.map((product) =>
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

        return (
            <div>
                <TopBar onChangeKeyword={this.changeKeyword} onChangeData={this.getSearchProduct} />
                <div className="container-fluid col-md-11">

                    <br />
                    <Row>

                        {/* <p className="h3">{this.props.location.state.title}</p> */}
                        {/* <p className="h3">Search for [keyword]</p> */}
                        <p className="h3">Search for [{this.state.keyword}]</p>
                    </Row>
                    {listProduct}
                    <PaginationComponent
                        maxPage={this.state.maxPage}
                        currentPage={this.state.currentPage}
                        onChange={this.getDataFromAPI}
                        changePage={this.changeCurrentPage}
                    ></PaginationComponent>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setKeywordRedux: (keyword) => {
            dispatch({
                type: "SET_KEYWORD",
                payload: keyword
            });
        }
    }
}

export default connect(mapStateToProps)(SearchProduct);