import React from 'react';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Carousel.css';

function CarouselSlide() {
    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="slide"
                        src="https://www.static-src.com/siva/asset//09_2021/brand-aggre-4sept-desktop.jpg?w=1920"
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="slide"
                        src="https://www.static-src.com/siva/asset//09_2021/IS-4sept-desktop.jpg?w=1920"
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="slide"
                        src="https://www.static-src.com/siva/asset//09_2021/mainpage-4sept-desktop.jpg?w=1920"
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="slide"
                        src="https://www.static-src.com/siva/asset//09_2021/TiVo-6sept-desktop.jpg?w=1920"
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselSlide;
