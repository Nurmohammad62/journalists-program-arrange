import React from 'react';
import './Cart.css';
import CartList from './CartList/CartList';

/* cart component starts */
const Cart = props => {
    const {cart} = props;
    let salary = 0;
    for(const journalist of cart){
        salary = salary + journalist.salary;

    }
    return (
        <div>
            <h2>Invite list summery</h2>
            <p>Total invited: {cart.length}</p>
            <p>Total salary: ${salary}</p>
            <h3>Invited journalists name list:</h3>
            <ul className='journalist-list'>
                {
                    cart.map(journalist => <CartList
                    key = {journalist.id}
                    name = {journalist.name}
                    ></CartList>)
                }
            </ul>
        </div>
    );
};
/* cart component ends */

export default Cart;