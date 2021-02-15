import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Cart from './Cart';
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
    let renderSearch = false;

    const inputChange = (e) => {
        setSearch(e.target.value);
    }

    const submitSearchQuery = (e) => {

        let i = 0;
        let arrayShirts = [];
        let arrayPants = [];
        let arrayDresses = [];

        while (i < inventory.shirts.length) {
            arrayShirts.push(inventory.shirts[i].productName);
            arrayPants.push(inventory.pants[i].productName);
            arrayDresses.push(inventory.dresses[i].productName);

            if (search == arrayShirts[i]) {
                setReturnItem(inventory.shirts[i]);
                return returnItem;
            }
            else if (search == arrayDresses[i]) {
                setReturnItem(inventory.dresses[i]);
                return returnItem;
            }
            else if (search == arrayPants[i]) {
                setReturnItem(inventory.pants[i]);
                return returnItem;
            }
            else (setReturnItem("Item not found."))
            i++;
        }
        console.log(arrayDresses);
    }

    return (
        <center>
            <h1>Clothing Emporium</h1>
            <br></br>
            <Navbar bg="dark" variant="dark" className={styles.navBar}>
                <Nav>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/order" className={styles.link}>Order</Link>
                    <Link to="/checkout" className={styles.link}>Checkout</Link>
                </Nav>
                <Form inline>
                    <FormControl className={styles.input} onChange={inputChange} type="text" placeholder="Search" />
                    <Button onClick={submitSearchQuery} variant="outline-info" className={styles.button}>Search</Button>
                </Form>
                <Cart className={styles.cart} />
            </Navbar>
            <section className={styles.searchView}>
                <h5>{returnItem.productName}</h5>
                <h6>{returnItem.price}</h6>
                <img className={styles.searchViewImg} src={returnItem.productImage}></img>
            </section>

        </center>
    )
}

export default NavBar;