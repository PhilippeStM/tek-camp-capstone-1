import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../../styles/CarouselComponent.css';

const CarouselComponent = () => {
    return(
        <center>
        <Carousel>
            <Carousel.Item>
                <img
                    className="carouselImg"
                    src="https://cdn.shopify.com/s/files/1/1368/3463/products/HONEYCOMB-CURVE-HEM.jpg?v=1590011077"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <br></br>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselImg"
                    src="https://cdn.shopify.com/s/files/1/1368/3463/products/CUTS-2020-05-11_On-Model_Video_4122.jpg?v=1590011077"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselImg"
                    src="https://cdn.shopify.com/s/files/1/1368/3463/products/CUTS-2020-05-11_On-Model_Video_4115.jpg?v=1590011076"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <br></br>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </center>
    )
}

export default CarouselComponent;