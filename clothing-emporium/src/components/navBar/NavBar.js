import React from 'react';
import { Link } from "react-router-dom";
import Cart from '../cart/Cart';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import styles from '../../styles/NavBar.css';

const NavBar = () => {
    return (
        <center>
            <h1>Clothing Emporium</h1>
            
            <Navbar bg="dark" variant="dark" className="navBar">
                {/* <Navbar.Brand>Navigation</Navbar.Brand> */}
                <Nav className="mr-auto">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/order" className="link">Order</Link>
                        <Link to="/checkout" className="link">Checkout</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info" className="button">Search</Button>
                </Form>
                <Cart className="cart"/>
            </Navbar>

        </center>
    )
}

export default NavBar;