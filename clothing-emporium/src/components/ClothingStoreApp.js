import React, { useState } from 'react';
import CartContext from './cart/CartContext';
import TotalPriceContext from './cart/TotalPriceContext';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './homePage/HomePage';
import OrderPage from './orderPage/OrderPage';
import CheckoutPage from './checkoutPage/CheckoutPage';
import ItemViewPage from './itemViewPage/ItemViewPage';

const ClothingStoreApp = () => {

    const [cartContext, setCartContext] = useState([]);
    const [totalPriceContext, setTotalPriceContext] = useState("");

    return (
        <CartContext.Provider value={{ cartContext, setCartContext }}>
            <TotalPriceContext.Provider value={{ totalPriceContext, setTotalPriceContext }}>
                <Router basename="/">
                    <Route exact path="/" component={HomePage}></Route>
                    <Route exact path="/order" component={OrderPage}></Route>
                    <Route exact path="/checkout" component={CheckoutPage}></Route>
                    <Route exact path="/item/:id" component={ItemViewPage}></Route>
                </Router>
            </TotalPriceContext.Provider>

        </CartContext.Provider>
    )
}

export default ClothingStoreApp;