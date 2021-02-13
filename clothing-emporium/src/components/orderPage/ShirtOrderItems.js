import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import inventoryImport from "../../server/Inventory.json";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import styles from '../../styles/ShirtOrderItems.module.css';

const OrderPage = () => {

const inventory = inventoryImport;

    return (
        <center>
                <input
                type="text"
                placeholder="Search"
            />
            <CardDeck className={styles.deck}>
                {inventory.shirts.map(data => (
                        <Card>
                            <Card.Img src={data.productImage}></Card.Img>
                            <Card.Title>{data.productName}</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    <p>{data.description}</p>
                                    <p>${data.price}</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button>Add to Cart</Button>
                                <small>({data.quantity} in stock)</small>
                            </Card.Footer>
                        </Card>
                ))}
            </CardDeck>
        </center>
    )
}

export default OrderPage;