import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import slideshow_1 from '../../../public/image/slideshow_1.jpg';
import slideshow_2 from '../../../public/image/slideshow_2.jpg';
import slideshow_3 from '../../../public/image/slideshow_3.jpg';

class Carousel extends Component {

    render() {
        return(
            <div className="container carousel-holder">
                <div id="banner" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li className="active" data-target="#banner" data-slide-to="0"></li>
                        <li data-target="#banner" data-slide-to="1"></li>
                        <li data-target="#banner" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="3000">
                            <img src={slideshow_1} alt="Sale" className="d-block w-100" />
                        </div>

                        <div className="carousel-item" data-interval="3000">
                            <img src={slideshow_2} alt="Sale" className="d-block w-100" />
                        </div>

                        <div className="carousel-item" data-interval="3000">
                            <img src={slideshow_3} alt="Sale" className="d-block w-100" />
                        </div>
                    </div>

                    <a href="#banner" className="carousel-control-prev" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon fa-border border-dark bg-dark" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a href="#banner" className="carousel-control-next" role="button" data-slide="next">
                        <span className="carousel-control-next-icon fa-border border-dark bg-dark" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Carousel;