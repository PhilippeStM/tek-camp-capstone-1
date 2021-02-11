import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import shirts from '../../server/ShirtInventory.json';
import dresses from '../../server/DressInventory.json';
import pants from '../../server/PantsInventory.json';
import styles from '../../styles/CarouselComponent.css';

const CarouselComponent = () => {

    const shirtInventory = shirts;
    console.log(shirtInventory);

    const dressInventory = dresses;
    console.log(dressInventory);

    const pantsInventory = pants;
    console.log(pantsInventory);

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
                        src={dressInventory.dresses[0].productImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>{dressInventory.dresses[0].productName}</h3>
                        <br></br>
                        <p>{dressInventory.dresses[0].description}</p>
                        <br></br>
                        <p>$ {dressInventory.dresses[0].price}</p>
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
                        src={pantsInventory.pants[1].productImage}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>{pantsInventory.pants[1].productName}</h3>
                        <br></br>
                        <p>{pantsInventory.pants[1].description}</p>
                        <br></br>
                        <p>$ {pantsInventory.pants[1].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </center>
    )
}

export default CarouselComponent;