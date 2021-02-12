import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import shirts from '../../server/ShirtInventory.json';
import dresses from '../../server/DressInventory.json';
import pants from '../../server/PantsInventory.json';
import styles from '../../styles/CarouselComponent.module.css';

const CarouselComponent = () => {

    const shirtInventory = shirts;

    const dressInventory = dresses;

    const pantsInventory = pants;

    return (
        <center>
            <Carousel className={styles.wrapper}>
                <Carousel.Item interval={6000}>
                    <img
                        className={styles.img}
                        src={shirtInventory.shirts[0].productImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className={styles.text}>{shirtInventory.shirts[0].productName}</h3>
                        <br></br>
                        <p className={styles.text}>{shirtInventory.shirts[0].description}</p>
                        <br></br>
                        <p className={styles.text}>$ {shirtInventory.shirts[0].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={6000}>
                    <img
                        className={styles.img}
                        src={dressInventory.dresses[0].productImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className={styles.text}>{dressInventory.dresses[0].productName}</h3>
                        <br></br>
                        <p className={styles.text}>{dressInventory.dresses[0].description}</p>
                        <br></br>
                        <p className={styles.text}>$ {dressInventory.dresses[0].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={6000}>
                    <img
                        className={styles.img}
                        src={shirtInventory.shirts[1].productImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className={styles.text}>{shirtInventory.shirts[1].productName}</h3>
                        <br></br>
                        <p className={styles.text}>{shirtInventory.shirts[1].description}</p>
                        <br></br>
                        <p className={styles.text}>$ {shirtInventory.shirts[1].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={6000}>
                    <img
                        className={styles.img}
                        src={pantsInventory.pants[1].productImage}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 className={styles.text}>{pantsInventory.pants[1].productName}</h3>
                        <br></br>
                        <p className={styles.text}>{pantsInventory.pants[1].description}</p>
                        <br></br>
                        <p className={styles.text}>$ {pantsInventory.pants[1].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </center>
    )
}

export default CarouselComponent;