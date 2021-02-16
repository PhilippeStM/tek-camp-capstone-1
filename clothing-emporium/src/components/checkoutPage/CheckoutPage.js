import React, { useContext } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CartContext from '../cart/CartContext';
import TotalPriceContext from '../cart/TotalPriceContext';
import NavBar from '../navBar/NavBar';

const CheckoutPage = () => {

    const cartContext = useContext(CartContext);
    const totalPriceContext = useContext(TotalPriceContext);

    return (
        <center>
            <NavBar />

            <Jumbotron>
                <h1>Review Order:</h1>
                {cartContext.cartContext.map(data => (
                    <ul>
                        <li>{data}</li>
                    </ul>
                ))}
    <h2>Total Price: ${totalPriceContext.totalPriceContext.toFixed(2)}</h2>

            </Jumbotron>


        </center>
    )
}

export default CheckoutPage;