import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import slideshow_1 from '../../../public/image/slideshow_1.jpg';
import slideshow_2 from '../../../public/image/slideshow_2.jpg';
import slideshow_3 from '../../../public/image/slideshow_3.jpg';

class Carousel extends Component {

    render() {
        return(
            <div class="container carousel-holder">
                <div id="banner" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li class="active" data-target="#banner" data-slide-to="0"></li>
                        <li data-target="#banner" data-slide-to="1"></li>
                        <li data-target="#banner" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-interval="3000">
                            <img src={slideshow_1} alt="Sale" class="d-block w-100" />
                        </div>

                        <div class="carousel-item" data-interval="3000">
                            <img src={slideshow_2} alt="Sale" class="d-block w-100" />
                        </div>

                        <div class="carousel-item" data-interval="3000">
                            <img src={slideshow_3} alt="Sale" class="d-block w-100" />
                        </div>
                    </div>

                    <a href="#banner" class="carousel-control-prev" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon fa-border border-dark bg-dark" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a href="#banner" class="carousel-control-next" role="button" data-slide="next">
                        <span class="carousel-control-next-icon fa-border border-dark bg-dark" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Carousel;