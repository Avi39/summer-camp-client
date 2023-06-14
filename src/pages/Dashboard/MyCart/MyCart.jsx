/* eslint-disable no-unused-vars */
import React from 'react';
import useCart from '../../../hooks/usecart';

const MyCart = () => {
    const [cart] = useCart();
    return (
        <div>
            <h2>My Selected Class</h2>
        </div>
    );
};

export default MyCart;