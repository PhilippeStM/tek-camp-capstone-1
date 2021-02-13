import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import inventoryImport from '../../server/Inventory.json';
import styles from '../../styles/CarouselComponent.module.css';

const CarouselComponent = () => {

    const inventory = inventoryImport;

    return (
        <center>
            <Carousel className={styles.wrapper}>
                <Carousel.Item interval={6000}>
                    <img
                        className={styles.img}
                        src={inventory.shirts[0].productImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className={styles.text}>{inventory.shirts[0].productName}</h3>
                        <br></br>
                        <p className={styles.text}>{inventory.shirts[0].description}</p>
                        <br></br>
                        <p className={styles.text}>$ {inventory.shirts[0].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={6000}>
                    <img
                        className={styles.img}
                        src={inventory.dresses[0].productImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className={styles.text}>{inventory.dresses[0].productName}</h3>
                        <br></br>
                        <p className={styles.text}>{inventory.dresses[0].description}</p>
                        <br></br>
                        <p className={styles.text}>$ {inventory.dresses[0].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={6000}>
                    <img
                        className={styles.img}
                        src={inventory.shirts[1].productImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className={styles.text}>{inventory.shirts[1].productName}</h3>
                        <br></br>
                        <p className={styles.text}>{inventory.shirts[1].description}</p>
                        <br></br>
                        <p className={styles.text}>$ {inventory.shirts[1].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={6000}>
                    <img
                        className={styles.img}
                        src={inventory.pants[1].productImage}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 className={styles.text}>{inventory.pants[1].productName}</h3>
                        <br></br>
                        <p className={styles.text}>{inventory.pants[1].description}</p>
                        <br></br>
                        <p className={styles.text}>$ {inventory.pants[1].price}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </center>
    )
}

export default CarouselComponent;