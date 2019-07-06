import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import product1 from '../../../public/image/product2.jpeg';
import './product.css';
import axios from 'axios';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from "jquery";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
} from "mdbreact";


class ProductLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }

        this.goToDetail = this.goToDetail.bind(this);
        this.viewAll = this.viewAll.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.handleCarouselItem = this.handleCarouselItem.bind(this);
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

    handleCarouselItem() {
        let listProduct = this.props.data;
        let listProductTemp = [];
        let listThreeItem = [];
        let size = 3;
        for (let i = 0; i < listProduct.length; i++) {
            for (let j = 1; j <= size; j++) {
                if (listProduct[i] !== null && (listProduct[i]) !== undefined) {
                    listThreeItem.push(listProduct[i]);
                    if (!(j === size)) {
                        i++;
                    }
                }
            }
            listProductTemp.push(listThreeItem);
            listThreeItem = [];
        }
        console.log(listProductTemp)
        return listProductTemp;
    }

    componentDidMount() {
        // this.handleCarouselItem();
    }

    render() {
        let listProduct = this.handleCarouselItem();
        const length = listProduct.length;
        let position = 1;
        console.log(listProduct.length)
        let render = listProduct.map((product, index) =>
            <MDBCarouselItem itemId={index + 1} key={index}>
            <MDBRow>
                <MDBCol md="4">
                    <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src={product[0].image[0].url} />
                        <MDBCardBody>
                            <MDBCardTitle>{product.name}</MDBCardTitle>
                            <MDBCardText>
                                {product.price}
                            </MDBCardText>
                            <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                    <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src={product[1].image[0].url} />
                        <MDBCardBody>
                            <MDBCardTitle>{product.name}</MDBCardTitle>
                            <MDBCardText>
                                {product.price}
                            </MDBCardText>
                            <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* <MDBCol md="4">
                    <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src={product[2].image[0].url} />
                        <MDBCardBody>
                            <MDBCardTitle>{product.name}</MDBCardTitle>
                            <MDBCardText>
                                {product.price}
                            </MDBCardText>
                            <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol> */}
                </MDBRow>
            </MDBCarouselItem>
        );

        return (

            <div className="container-fluid col-md-11">

                <div>
                    <Row className="row">
                        <Col className="col-md-3">
                            <p className="title">{this.props.title}</p>
                        </Col>
                        <Col className="offset-md-7">
                            <Link to="/product" onClick={() => this.setTitle(this.props.title)}>view all</Link>
                        </Col>
                    </Row>
                </div>
                {' '}
                <MDBContainer>
                    <MDBCarousel activeItem={1} length={4} slide={true} showControls={true} showIndicators={true} multiItem>
                        <MDBCarouselInner>
                            <MDBRow>
                                {render}
                            </MDBRow>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
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
