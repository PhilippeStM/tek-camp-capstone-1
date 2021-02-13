import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './homePage/HomePage';
import OrderPage from './orderPage/OrderPage';
import CheckoutPage from './checkoutPage/CheckoutPage';
import ItemViewPage from './itemViewPage/ItemViewPage';

const ClothingStoreApp = () => {

    return (
        <Router basename="/">
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/order" component={OrderPage}></Route>
                <Route exact path="/checkout" component={CheckoutPage}></Route>
                <Route exact path="/item/:serialNumber" component={ItemViewPage}></Route>
        </Router>
    )
}

export default ClothingStoreApp;