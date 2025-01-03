import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import subscriptionHandler from '../../../services/handlers/subscription';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const SubscriptionPlans = () => {
    const plans = [
        {
            id: 'pro-plan',
            name: 'Pro',
            monthlyPrice: 125,
            annualPrice: 1200,
            features: ['13 users', 'Up to 5 Reader setups', 'Unlimited Brand Voices'],
        },
        {
            id: 'collaborate-plan',
            name: 'Collaborate',
            monthlyPrice: 245,
            annualPrice: 2352,
            features: ['8 users (additional £55/user)', 'Unlimited Reader setups', 'Unlimited Brand Voices'],
        },
        {
            id: 'enterprise-plan',
            name: 'Enterprise',
            monthlyPrice: 495,
            annualPrice: 4752,
            features: ['Unlimited users', 'Unlimited Reader setups', 'Unlimited Brand Voices'],
        },
    ];

    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handleSubscribeClick = (planId: string) => {
        setSelectedPlan(planId); // Set the selected plan
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <h1 className="text-3xl font-bold text-center mb-10">Subscription Plans</h1>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-center"
                    >
                        <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
                        <p className="text-gray-700">
                            Monthly: <span className="font-bold">£{plan.monthlyPrice}</span>
                        </p>
                        <p className="text-gray-700">
                            Annual: <span className="font-bold">£{plan.annualPrice}</span>
                        </p>
                        <ul className="text-sm text-gray-600 mt-4 space-y-2">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex justify-center items-center gap-2">
                                    ✅ {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                            onClick={() => handleSubscribeClick(plan.id)}
                        >
                            Subscribe
                        </button>
                    </div>
                ))}
            </div>

            {selectedPlan && (
                <Elements stripe={stripePromise}>
                    <SubscriptionForm planId={selectedPlan} closeModal={() => setSelectedPlan(null)} />
                </Elements>
            )}
        </div>
    );
};

const SubscriptionForm = ({
    planId,
    closeModal,
}: {
    planId: string;
    closeModal: () => void;
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const email = localStorage.getItem('email') || '';
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        const cardElement = elements.getElement(CardElement);
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement!,
            billing_details: { email },
        });

        if (error) {
            console.error(error.message);
            setLoading(false);
            return;
        }

        try {
            const response = await subscriptionHandler.subscribe({
                email,
                planId,
                billingCycle: paymentMethod.id,
            });

            console.log('Subscription successful:', response.data);
            alert('Subscription successful!');
            closeModal();
        } catch (error) {
            console.error('Subscription error:', error);
            alert('Failed to subscribe. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">Subscribe to {planId}</h2>
                <form onSubmit={handleSubmit}>
                    <p className="text-sm text-gray-600 mb-2">Plan: {planId}</p>
                    <p className="text-sm text-gray-600 mb-4">Email: {email}</p>
                    <div className="border rounded-md p-4 mb-4">
                        <CardElement className="p-2" />
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!stripe || loading}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                        >
                            {loading ? 'Processing...' : 'Subscribe'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubscriptionPlans;
