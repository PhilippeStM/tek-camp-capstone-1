import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Cart from '../cart/Cart';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import styles from '../../styles/NavBar.module.css';

const NavBar = () => {

    return (
        <center>
            <h1>Clothing Emporium</h1>
            
            <Navbar bg="dark" variant="dark" className={styles.navBar}>
                <Nav>
                        <Link to="/" className={styles.link}>Home</Link>
                        <Link to="/order" className={styles.link}>Order</Link>
                        <Link to="/checkout" className={styles.link}>Checkout</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" />
                    <Button variant="outline-info" className={styles.button}>Search</Button>
                </Form>
                <Cart className={styles.cart}/>
            </Navbar>

        </center>
    )
}

export default NavBar;