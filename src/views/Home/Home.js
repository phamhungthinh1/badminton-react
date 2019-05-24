import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel';
import TopBar from '../TopBar/TopBar';
import ProductLine from '../ProductLine/ProductLine';

class Home extends Component {

    render() {
        const person = {
            name: "xgqfrms",
            age: 23,
            country: "China"
        };

        return(
            <div>
                <Carousel />
                <br />
                <ProductLine {...person}/>
                <br />
                <ProductLine />
                <br />
                <ProductLine />
                <br />
            </div>
        )
    }
}

export default Home;