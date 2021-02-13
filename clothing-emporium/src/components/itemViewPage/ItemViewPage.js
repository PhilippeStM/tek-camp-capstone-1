import React, { useState, useEffect } from 'react';
import inventoryImport from '../../server/Inventory.json';
import NavBar from '../../components/navBar/NavBar';
import axios from "axios";

const ItemViewPage = (props) => {

    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get(inventoryImport)
        .then((res) => setItem(inventoryImport))
        .catch((err) => console.log(err));
    }, []);

    console.log(inventoryImport);

    return(
        <div>
        <NavBar />
        <h1>This is the Item View Page.</h1>
        <p>{item.productName}</p>
        </div>
    )
}

export default ItemViewPage;