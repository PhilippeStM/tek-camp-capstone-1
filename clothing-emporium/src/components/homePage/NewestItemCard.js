import React from 'react';
import { Link } from "react-router-dom";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import inventoryImport from '../../server/Inventory.json';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/NewestItemCard.module.css';

const NewestItem = (props) => {

    const inventory = inventoryImport;

    return (
        <center>
            <CardDeck className={styles.wrapper}>
                <Card>
                    <Card.Img variant="top" src={inventory.dresses[4].productImage} />
                    <Card.Body>
                        <Card.Title>{inventory.dresses[4].productName}</Card.Title>
                        <Card.Text>
                            <p>{inventory.dresses[4].description}</p>
                            <p>${inventory.dresses[4].price}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={inventory.shirts[3].productImage} />
                    <Card.Body>
                        <Card.Title>{inventory.shirts[3].productName}</Card.Title>
                        <Card.Text>
                            <p>{inventory.shirts[3].description}</p>
                            <p>${inventory.shirts[3].price}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={inventory.pants[4].productImage} />
                    <Card.Body>
                        <Card.Title>{inventory.pants[4].productName}</Card.Title>
                        <Card.Text>
                            <p>{inventory.pants[4].description}</p>
                            <p>${inventory.pants[4].price}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={inventory.shirts[4].productImage} />
                    <Card.Body>
                        <Card.Title>{inventory.shirts[4].productName}</Card.Title>
                        <Card.Text>
                            <p>{inventory.shirts[4].description}</p>
                            <p>${inventory.shirts[4].price}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </center>
    )
}

export default NewestItem;