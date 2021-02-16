import React, { useContext } from 'react';
import CartContext from '../cart/CartContext';
import TotalPriceContext from '../cart/TotalPriceContext';
import NavBar from '../navBar/NavBar';

const CheckoutPage = () => {
    return(
        <div>
            <NavBar />
            <h3>This is the checkout page!</h3>
        </div>
    )
}

export default CheckoutPage;