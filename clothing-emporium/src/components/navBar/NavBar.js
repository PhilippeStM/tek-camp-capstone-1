import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Cart from '../cart/Cart';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import styles from '../../styles/NavBar.module.css';
import inventoryImport from '../../server/Inventory.json';

const NavBar = () => {

    let inventory = inventoryImport;
    let [search, setSearch] = useState("");
    let [returnItem, setReturnItem] = useState([]);


    const inputChange = (e) => {
        setSearch(e.target.value);
    }

    const submitSearchQuery = (e) => {    
        
        let i = 0;
        let array = [];

        while (i < inventory.shirts.length) {
            array.push(inventory.shirts[i].productName)
            if(search == array[i]){
                setReturnItem(inventory.shirts[i].productName + " is available for purchase.");
                return returnItem;
            }
            else{
                setReturnItem("Item not found or not in stock, please check spelling.");
            }
            i++;
        }
        console.log(array);
    }

    // search loop query might be the key to finding all info thru search functionality.

    return (
        <center>
            <h1>Clothing Emporium</h1>
            {/* {console.log(searchLoopQuery)} */}
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
                <Cart className={styles.cart} />
            </Navbar>
    <p>{returnItem}</p>
        </center>
    )
}

export default NavBar;