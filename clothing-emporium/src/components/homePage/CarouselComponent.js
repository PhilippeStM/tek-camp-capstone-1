import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import shirts from '../../server/shirts/ShirtInventory.json';
import styles from '../../styles/CarouselComponent.css';

const CarouselComponent = () => {

    const shirtInventory = shirts;
    console.log(shirtInventory.shirts[0].productImage);

    return (
        <center>
            <Carousel className="carouselWrapper">
                <Carousel.Item interval={6000}>
                    <img
                        className="carouselImg"
                        src={shirtInventory.shirts[0].productImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{shirtInventory.shirts[0].productName}</h3>
                        <br></br>
                        <p>{shirtInventory.shirts[0].description}</p>
                        <br></br>
                        <p>$ {shirtInventory.shirts[0].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                        className="carouselImg"
                        src={shirtInventory.shirts[1].productImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>{shirtInventory.shirts[1].productName}</h3>
                        <br></br>
                        <p>{shirtInventory.shirts[1].description}</p>
                        <br></br>
                        <p>$ {shirtInventory.shirts[1].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
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