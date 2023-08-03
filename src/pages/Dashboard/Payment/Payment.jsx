/* eslint-disable no-unused-vars */
import React from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const {id} = useParams();
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=> sum + item.price, 0);
    const price = cart?.find(product=> product._id === id)
    console.log(total,cart,price);
    // const price = parseFloat(total.toFixed(2))
    return (
        <div className='-mt-32'>
            <p className='text-3xl text-center ml-4 text-neutral-500 mb-4'>--please provide--</p>
            <h2 className='text-4xl text-center font-bold text-emerald-900'>Payment</h2>
            <Elements stripe={stripePromise}>
            <CheckOutForm cart={cart} price={price.price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;