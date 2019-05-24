import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import product1 from '../../../public/image/product2.jpeg';
import './product.css';
import axios from 'axios';


class ProductLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: Array().fill(null)
        }

        this.goToDetail = this.goToDetail.bind(this);
    }

    goToDetail(id) {
        window.location = "http://localhost:3000/detail/" + id;
    }

    componentDidMount() {
        axios.get('http://localhost:8080/products/')
            .then(response => {
                const dataProduct = response.data;
                console.log(dataProduct);
                this.setState({ products: dataProduct });
                console.log(this.state.products)
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // const {name, age, country} = {...this.props};
        const listProduct = this.state.products.map((product) =>
            <div className="card product col-md-3 ml-1 mr-1">
                <img className="mt-3 card-img-top" src={product1} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price} VND</p>
                    <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '}
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        );
        return (
            <div className="container-fluid col-md-11">
                <div>
                    <p className="title">Khuyen mai </p>
                    {/* {name} {age} {country} */}
                </div>
                {listProduct}
                {' '}


            </div>
        )
    }
}

export default ProductLine;