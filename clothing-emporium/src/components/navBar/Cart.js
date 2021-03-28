import React, { useContext } from 'react';
import CartContext from '../cart/CartContext';
import TotalPriceContext from '../cart/TotalPriceContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Cart = () => {

    const cartContext = useContext(CartContext);
    const totalPriceContext = useContext(TotalPriceContext);

    // const displayContext = cartContext;


    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    View Cart
                </Dropdown.Toggle>
                    <Dropdown.Menu>

                {cartContext.cartContext.map(data => (
                        <Dropdown.Item>{data}</Dropdown.Item>
                ))}
                <hr></hr>
                <Dropdown.Item>
                    <p>Total Price: ${totalPriceContext.totalPriceContext.toFixed(2)}</p>
                </Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Cart;