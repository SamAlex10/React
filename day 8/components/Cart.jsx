// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../actions/cartActions';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdate = (id, quantity) => {
        dispatch(updateCartItem(id, quantity));
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                            <input 
                                type="number" 
                                value={item.quantity} 
                                onChange={(e) => handleUpdate(item.id, Number(e.target.value))} 
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
