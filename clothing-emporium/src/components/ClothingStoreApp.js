import React, { useState } from 'react';
import { Context } from './cart/CartContext';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './homePage/HomePage';
import OrderPage from './orderPage/OrderPage';
import CheckoutPage from './checkoutPage/CheckoutPage';
import ItemViewPage from './itemViewPage/ItemViewPage';

const ClothingStoreApp = () => {

    const [context, setContext] = useState([]);

    return (
        <Context.Provider value={[context, setContext]}>
        <Router basename="/">
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/order" component={OrderPage}></Route>
                <Route exact path="/checkout" component={CheckoutPage}></Route>
                <Route exact path="/item/:id" component={ItemViewPage}></Route>
        </Router>
        </Context.Provider>
    )
}

export default ClothingStoreApp;