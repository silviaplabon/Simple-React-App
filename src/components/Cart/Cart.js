import React from 'react';
import './Cart.css';
import {ListGroup} from 'react-bootstrap';

const Cart = (props) => {
    const carts = props.cart;//destructuring cart
    const total = carts.reduce((sum, player) => sum + player.salary, 0)//using reduce ,ethod for calculating sum
    return (

        <div className="mx-3 text-center cartDesign">
            <h1>Player List</h1>
            <h5>Total Number Of Players: {carts.length}</h5>
            <h5>Total Salary: ${total.toFixed(2)}</h5>
            {/* showing cart name and cart salary as list type */}
            <ListGroup className="w-100 fs-1 mt-3" >
                {
                    carts.map(cart => <ListGroup.Item>{cart.name} - ${cart.salary}</ListGroup.Item>)
                }
            </ListGroup>
        </div>
    );
};

export default Cart;