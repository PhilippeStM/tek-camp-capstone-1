import React, { useContext } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CartContext from '../cart/CartContext';
import TotalPriceContext from '../cart/TotalPriceContext';
import NavBar from '../navBar/NavBar';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51ILKulHGmYCTG2lvG66yryF8WTREJXkpXB9Qznl6e8DTw60lhNnKnBnug8HSPyAmUcNO8xz01eFFt5DxvBRwH6XH00d4hhNtOu');

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
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </center>
    )
}

export default CheckoutPage;