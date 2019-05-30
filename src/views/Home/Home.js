import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel';
import TopBar from '../TopBar/TopBar';
import ProductLine from '../ProductLine/ProductLine';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promotionProduct: Array().fill(null),
            bestSaleProduct: Array().fill(null),
            fourProduct: Array().fill(null)
        }
    }

    componentWillMount() {
        let promotionProductList = Array().fill(null);
        axios.get('http://localhost:8080/products/promotionProduct')
            .then(response => {
                promotionProductList = response.data;
                // console.log("data " + dataProduct);
                this.setState({ promotionProduct: promotionProductList });
                console.log("pro" + this.state.promotionProduct);
            })
            .catch(error => {
                console.log(error);
            });
        let bestSalesProductList = Array().fill(null);
        axios.get('http://localhost:8080/products/bestSalesProduct')
            .then(response => {
                bestSalesProductList = response.data;
                // console.log("data " + dataProduct);
                this.setState({ bestSaleProduct: bestSalesProductList });
                console.log("pro" + this.state.bestSaleProduct);
            })
            .catch(error => {
                console.log(error);
            });
        let fourProductList = Array().fill(null);
        axios.get('http://localhost:8080/products/fourProduct')
            .then(response => {
                fourProductList = response.data;
                // console.log("data " + dataProduct);
                this.setState({ fourProduct: fourProductList });
                console.log("pro" + this.state.fourProduct);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // const person = {
        //     name: "xgqfrms",
        //     age: 23,
        //     country: "China"
        // };

        return (
            <div>
                <Carousel />
                <br />
                <ProductLine data={this.state.promotionProduct} title={"Promotion"}/>
                <br />
                <ProductLine data={this.state.bestSaleProduct} title={"Best Sales"}/>
                <br />
                <ProductLine data={this.state.fourProduct} title={"Racket"}/>
                <br />
            </div>
        )
    }
}

export default Home;