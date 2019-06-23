import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import product1 from '../../../public/image/product2.jpeg';
import './product.css';
import axios from 'axios';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class ProductLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

        this.goToDetail = this.goToDetail.bind(this);
        this.viewAll = this.viewAll.bind(this);
        this.setTitle = this.setTitle.bind(this);
    }

    setTitle(title) {
        // alert("title " + title);
        // console.log(this.props);
        this.props.setTitleRedux(title);
    }

    goToDetail(id) {
        window.location = "http://localhost:3000/detail/" + id;
    }

    viewAll(title) {
        // this.props.history.push({
        //     pathname: '/product',
        //     state: { title: this.props.title }
        // })
        // console.log(this.props.title);
        window.location = "http://localhost:3000/product?title=" + title;
        // return "http://localhost:3000/product?title=" + title;
    }

    componentDidMount() {
    }

    render() {
        const listProduct = this.props.data.map((product) =>
            <div className="card product col-md-3 ml-1 mr-1">
                <img className="mt-3 card-img-top" src={product.image[0].url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price} VND</p>
                    <button onClick={() => this.goToDetail(product.id)} className="btn btn-primary">View detail</button>{' '}
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        );
        // console.log(this.props.title);
        return (
            <div className="container-fluid col-md-11">
                <div>
                    <Row className="row">
                        <Col className="col-md-3">
                            <p className="title">{this.props.title}</p>
                        </Col>
                        <Col className="offset-md-7">
                            {/* <Redirect to={{
                                pathname: "/product",
                                state: { title: this.props.title }
                            }}> */}
                            <Link to="/product" onClick={() => this.setTitle(this.props.title)}>view all</Link>
                            {/* view all</Link> */}
                            {/* <a href="" onClick={() => this.viewAll(this.props.title)}>aaaa</a> */}
                            {/* <button className="offset-md-9" onClick={this.viewAll}>view all</button> */}
                            {/* </Redirect> */}
                        </Col>
                    </Row>
                    {/* {name} {age} {country} */}
                </div>
                {listProduct}
                {' '}


            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      setTitleRedux: (title) => {
        dispatch({
          type: "SET_TITLE",
          payload: title
        });
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductLine);
