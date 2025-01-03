import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SubscriptionForm from './components/PaymentForm';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51NJrnZKZf5473iGvC39n3K5o5Mx6LfQdZHpr2fcEgEKxLvHqN1KnSmTEFREzqFF0NRTwNeu05GjbtiXOwNrIa7kg00aPiHMqFu');

const PaymentPage: React.FC = () => {
    const { state } = useLocation();
    const { plan, billing } = state;
    return (
        <Elements stripe={stripePromise}>
            <div className="h-screen p-8">
                <SubscriptionForm
                    planId={plan}
                    billingCycle={billing}
                />
            </div>
        </Elements>
    );
};

export default PaymentPage;
