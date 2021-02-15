import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import inventoryImport from "../../server/Inventory.json";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import styles from '../../styles/OrderItems.module.css';

const OrderItems = () => {

    const inventory = inventoryImport;

    return (
        <center>
            <CardDeck className={styles.deck}>
                {inventory.shirts.map(data => (
                    <Card>
                        <Card.Img className={styles.img} src={data.productImage}></Card.Img>
                        <Card.Title>{data.productName}</Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <p className={styles.desc}>{data.description}</p>
                                <p>({data.category})</p>
                                <p className={styles.price}>Price: ${data.price}</p>
                                <p>Manufacturer: {data.manufacturer}</p>
                                <p className={styles.smaller}>SN#: {data.serialNumber}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button>Add to Cart</Button>
                            <br></br>
                            <small>({data.quantity} in stock)</small>
                        </Card.Footer>
                    </Card>
                ))}
            </CardDeck>
            <br></br>
            <CardDeck className={styles.deck}>
                {inventory.dresses.map(data => (
                    <Card>
                        <Card.Img className={styles.img} src={data.productImage}></Card.Img>
                        <Card.Title>{data.productName}</Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <p className={styles.desc}>{data.description}</p>
                                <p>({data.category})</p>
                                <p className={styles.price}>Price: ${data.price}</p>
                                <p>Manufacturer: {data.manufacturer}</p>
                                <p className={styles.smaller}>SN#: {data.serialNumber}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button>Add to Cart</Button>
                            <br></br>
                            <small>({data.quantity} in stock)</small>
                        </Card.Footer>
                    </Card>
                ))}
            </CardDeck>
            <br></br>
            <CardDeck className={styles.deck}>
                {inventory.pants.map(data => (
                    <Card>
                        <Card.Img className={styles.img} src={data.productImage}></Card.Img>
                        <Card.Title>{data.productName}</Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <p className={styles.desc}>{data.description}</p>
                                <p>({data.category})</p>
                                <p className={styles.price}>Price: ${data.price}</p>
                                <p>Manufacturer: {data.manufacturer}</p>
                                <p className={styles.smaller}>SN#: {data.serialNumber}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button>Add to Cart</Button>
                            <br></br>
                            <small>({data.quantity} in stock)</small>
                        </Card.Footer>
                    </Card>
                ))}
            </CardDeck>

        </center>
    )
}

export default OrderItems;