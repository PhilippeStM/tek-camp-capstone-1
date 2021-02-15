import React, { useContext } from 'react';
import CartContext from '../cart/CartContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Cart = () => {

    const cartContext = useContext(CartContext);
    const displayContext = cartContext;


    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    View Cart
                </Dropdown.Toggle>
                    <Dropdown.Menu>

                {displayContext.cartContext.map(data => (
                        <Dropdown.Item>{data}</Dropdown.Item>
                ))}
                    </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Cart;