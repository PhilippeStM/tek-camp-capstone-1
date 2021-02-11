import React from 'react';
import shirts from '../../server/ShirtInventory.json';
import dresses from '../../server/DressInventory.json';
import pants from '../../server/PantsInventory.json';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import styles from '../../styles/ShirtOrderItems.module.css';

const OrderPage = () => {

    const shirtInventory = shirts;
    console.log(shirtInventory);

    const dressInventory = dresses;
    console.log(dressInventory);

    const pantsInventory = pants;
    console.log(pantsInventory);

    return (
        <center>
            <CardDeck className={styles.deck}>
                {shirtInventory.shirts.map(data => (
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
                                <small>ADD TO CART </small>
                                <small>({data.quantity} in stock)</small>
                            </Card.Footer>
                        </Card>
                ))}
            </CardDeck>
        </center>
    )
}

export default OrderPage;