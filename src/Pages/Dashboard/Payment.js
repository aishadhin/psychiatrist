import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LkgWlHeuushmAdprVDAfnhsPKcsJbdJS5iQ1oEz1pJnnvD5CoUYYqDEHRlnWYYYULlnIQg7quTMPdKYY7dxDIDq00SGjkkd5H');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <button className="btn absolute top-[50%] left-[50%] btn-square loading"></button>
    }


    return (
        <div>
            <h2>Please pay for {id}</h2>
            <div className="bg-base-200">
                <div className="p-5">
                    <div className="card w-50 max-w-md bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Pay for {appointment.treatment}</h2>
                            <p>Hello {appointment.patientName}</p>
                            <p>Your appointment on {appointment.date} at {appointment.slot}</p>
                            <p>Amount ${appointment.price}</p>
                            <div className="card-body">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm appointment={appointment}/>
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;