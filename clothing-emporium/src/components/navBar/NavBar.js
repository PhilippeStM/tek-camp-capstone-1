import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Cart from '../cart/Cart';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import styles from '../../styles/NavBar.module.css';
import shirts from '../../server/ShirtInventory.json';

const NavBar = () => {

    let shirtInventory = shirts;
    let [search, setSearch] = useState("");

    const inputChange = (e) => {
        setSearch(e.target.value);
    }

    console.log(search);
    console.log(shirtInventory);
    console.log(shirtInventory.shirts[0].productName);

    const submitSearchQuery = (e) => {
        if(search === shirtInventory.shirts[0].productName) {
            console.log("your search is working for array 0");
        }
    }

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
                    <FormControl onChange={inputChange} type="text" placeholder="Search" />
                    <Button onClick={submitSearchQuery} variant="outline-info" className={styles.button}>Search</Button>
                </Form>
                <Cart className={styles.cart}/>
            </Navbar>

        </center>
    )
}

export default NavBar;