/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const CheckOutForm = ({cart, price}) => {
    const {id} = useParams();
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret,setClientSecret] = useState('');
    const [processing,setProcessing] = useState(false);
    const [transactionId,setTransactionId] = useState('');

    useEffect(()=>{
        console.log(price);
        if(!price) return ;
        axiosSecure.post('/create-payment-intent',{price})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        } )
    },[price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }
        console.log('card', card);
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true);

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'anonymous',
                  name: user?.displayName || 'anonymous'
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError);
          }
          console.log(paymentIntent);

          setProcessing(false);

          if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id);
            const payment = {
                email:user?.email,
                transactionId: paymentIntent.id,
                price,
                class_details: cart.find(item => item._id === id),
                date: new Date()
            }
            axiosSecure.post('/payments',payment)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Payment has been done',
                        showConfirmButton: false,
                        timer: 1500
                      }) 
                }
            })
          }
    }
    return (
        <>
            <form className='w-full m-8' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
            {transactionId && <p className='text-green-500'>Transaction complete with transactionId:{transactionId}</p>} 
        </>
    );
};

export default CheckOutForm;