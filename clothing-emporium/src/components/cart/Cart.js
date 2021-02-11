import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Cart = () => {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Cart
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Item 1</Dropdown.Item>
                    <Dropdown.Item>Item 2</Dropdown.Item>
                    <Dropdown.Item>Total</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Cart;