import React, { useState, useEffect } from 'react';
import inventoryImport from '../../server/Inventory.json';
import NavBar from '../../components/navBar/NavBar';
import { useParams } from 'react-router-dom';
// import axios from "axios";

const ItemViewPage = (props) => {

    const inventory = props;

    const {id} = useParams()
    // const inventory = inventoryImport + props.id;
    // const [item, setItem] = useState({});

    // useEffect(() => {
    //     axios.get(inventory)
    //     .then((res) => setItem(inventory))
    //     .catch((err) => console.log(err));
    // }, []);

    // useEffect(() => {
    //     setItem(inventory)
    // })

    // console.log(inventory);
    console.log(inventory);

    return(
        <div>
        <NavBar />
        <h1>This is the Item View Page.</h1>
        <h2>{inventory.id}</h2>
        {/* <h2>for {inventory.id}</h2>
        <p>{item.productName}</p> */}
        </div>
    )
}

export default ItemViewPage;