import React from 'react';
import OrderItems from './OrderItems';
import NavBar from '../navBar/NavBar';

const OrderPage = () => {

    return (
<div>

    <NavBar />
    <h3>Welcome to the order page:</h3>
    <p>Select any items you wish to add to your cart, then proceed to checkout when complete.</p>
    <OrderItems />
</div>
    )
}

export default OrderPage;