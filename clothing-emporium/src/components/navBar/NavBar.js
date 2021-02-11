import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
        <center>
            <h1>Clothing Emporium</h1>
            <h3>Links: Home / Order / Checkout</h3>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        <Link to="order">Order</Link>
                        <Link to="checkout">Checkout</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

        </center>
    )
}

export default NavBar;