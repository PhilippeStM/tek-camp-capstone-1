import React from 'react';
import NavBar from '../navBar/NavBar';
import shirts from '../../server/ShirtInventory.json';
import dresses from '../../server/DressInventory.json';
import pants from '../../server/PantsInventory.json';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import styles from '../../styles/OrderPage.css';

const OrderPage = () => {

    const shirtInventory = shirts;
    console.log(shirtInventory);

    const dressInventory = dresses;
    console.log(dressInventory);

    const pantsInventory = pants;
    console.log(pantsInventory);

    return (
        <center>
            <NavBar />
            <h3>This is the order page!</h3>
            <CardDeck>
                {shirtInventory.shirts.map(data => (
                        <Card className="card">
                            <Card.Img src={data.productImage}></Card.Img>
                            <Card.Title>{data.productName}</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    <p>{data.description}</p>
                                    <p>${data.price}</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">ADD TO CART </small>
                                <small className="text-muted">({data.quantity} in stock)</small>
                            </Card.Footer>
                        </Card>
                ))}
            </CardDeck>
        </center>
    )
}

export default OrderPage;