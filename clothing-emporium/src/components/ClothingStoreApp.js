import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from './homePage/HomePage';
import OrderPage from './orderPage/OrderPage';
import CheckoutPage from './checkoutPage/CheckoutPage';

const ClothingStoreApp = () => {

    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
                <Route path="/order">
                    <OrderPage />
                </Route>
                <Route path="checkout">
                    <CheckoutPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default ClothingStoreApp;