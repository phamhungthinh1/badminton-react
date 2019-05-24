import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slideshow_1 from '../../../public/image/slideshow_1.jpg';
import './product.css';

class ProductLine extends Component {    

    render() {
        const {name, age, country} = {...this.props};
        return (
            <div className="container-fluid col-md-11">
                <div>
                    <p className="title">Khuyen mai {name} {age} {country}</p>
                </div>
                <div className="card product col-md-3 ml-1 mr-1">
                    <img className="mt-3 card-img-top" src={slideshow_1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Vot 1</h5>
                            <p className="card-text">15.000 VND</p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                </div>{' '}
                <div className="card product col-md-3 ml-1 mr-1">
                    <img className="mt-3 card-img-top" src={slideshow_1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Vot 1</h5>
                            <p className="card-text">15.000 VND</p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                </div>{' '}
                <div className="card product col-md-3 ml-1 mr-1">
                    <img className="mt-3 card-img-top" src={slideshow_1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Vot 1</h5>
                            <p className="card-text">15.000 VND</p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                </div>{' '}
                <div className="card product col-md-3 ml-1 mr-1">
                    <img className="mt-3 card-img-top" src={slideshow_1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Vot 1</h5>
                            <p className="card-text">15.000 VND</p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                </div>
            </div>
        )
    }
}
        
export default ProductLine;