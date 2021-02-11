import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import shirts from '../../server/ShirtInventory.json';
import dresses from '../../server/DressInventory.json';
import pants from '../../server/PantsInventory.json';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/NewestItemCard.module.css';

const NewestItem = () => {

    const shirtInventory = shirts;
    console.log(shirtInventory);

    const dressInventory = dresses;
    console.log(dressInventory);

    const pantsInventory = pants;
    console.log(pantsInventory);

    return (
        <center>
            <CardDeck className={styles.wrapper}>
                <Card>
                    <Card.Img variant="top" src={dressInventory.dresses[4].productImage} />
                    <Card.Body>
                        <Card.Title>{dressInventory.dresses[4].productName}</Card.Title>
                        <Card.Text>
                            <p>{dressInventory.dresses[4].description}</p>
                            <p>${dressInventory.dresses[4].price}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>ADD TO CART </small>
                        <small>({dressInventory.dresses[4].quantity} in stock)</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={shirtInventory.shirts[3].productImage} />
                    <Card.Body>
                        <Card.Title>{shirtInventory.shirts[3].productName}</Card.Title>
                        <Card.Text>
                            <p>{shirtInventory.shirts[3].description}</p>
                            <p>${shirtInventory.shirts[3].price}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>ADD TO CART </small>
                        <small>({shirtInventory.shirts[3].quantity} in stock)</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={pantsInventory.pants[4].productImage} />
                    <Card.Body>
                        <Card.Title>{pantsInventory.pants[4].productName}</Card.Title>
                        <Card.Text>
                            <p>{pantsInventory.pants[4].description}</p>
                            <p>${pantsInventory.pants[4].price}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>ADD TO CART </small>
                        <small>({pantsInventory.pants[4].quantity} in stock)</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={shirtInventory.shirts[4].productImage} />
                    <Card.Body>
                        <Card.Title>{shirtInventory.shirts[4].productName}</Card.Title>
                        <Card.Text>
                            <p>{shirtInventory.shirts[4].description}</p>
                            <p>${shirtInventory.shirts[4].price}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>ADD TO CART </small>
                        <small>({shirtInventory.shirts[4].quantity} in stock)</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </center>
    )
}

export default NewestItem;