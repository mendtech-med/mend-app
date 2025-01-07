import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';
import subscriptionHandler from '../../../services/handlers/subscription';
import { Box, Button, Flex, Text } from '@radix-ui/themes';
import { Input } from '@headlessui/react';
import { SubscriptionPlan } from '../constants/plan';

interface SubscriptionFormProps {
  planId: string;
  billingCycle: 'monthly' | 'annually';
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ planId, billingCycle }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { plan, billing, email: userEmail } = state;

  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState(userEmail);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // 1. Create Subscription on Backend
      const { data } = await subscriptionHandler.subscribe({
        email,
        planId,
        billingCycle
      });

      // 2. Confirm Payment Intent
      if (data.clientSecret) {
        const result = await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              email: email
            }
          }
        });
        console.log("RESULT PaymentForm.tsx", result);
        
        if (result.error) {
          setError(result.error.message || 'Payment failed');
          setIsProcessing(false);
          return;
        } else {
          // Payment successful
          const paymentMethodId = result.paymentIntent?.payment_method;
          console.log('Payment method ID:', paymentMethodId);
          if (typeof (paymentMethodId) === 'string') {
            await subscriptionHandler.attachMethod({ email, paymentMethodId });
          }
        }

        // 3. Handle Successful Subscription
        if (result.paymentIntent?.status === 'succeeded') {
          alert('Subscription created successfully!');
          navigate('/login')
        }

        return;
      }

      if (data.trialDays) {
        alert('Subscription created successfully!');
        navigate('/login')
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const pricing = SubscriptionPlan[billing as 'monthly' | 'annually'][plan as 'pro' | 'collaborate' | 'enterprise']

  return (
    <Flex className="max-w-4xl mx-auto bg-white h-full rounded-lg shadow-md">
      <Flex direction="column" className="bg-white p-6 rounded-bl-lg flex-1">
        <Text className="text-2xl mb-4">Try {plan}</Text>
        <Text className="text-4xl mb-2">7 days free</Text>
        <Text className="text-gray-500 mb-4">Then {pricing} {billing}</Text>
        <Text className="mb-4">The basic subscription plan contains one {billing} subscription, {pricing} / {billing} after</Text>
        <Text as="p" className="text-2xl mb-4">Subtotal {pricing}</Text>
      </Flex>

      <Flex direction="column" className="bg-white p-6 border-l shadow rounded-tr-lg flex-1">
        <Text className="text-2xl mb-4">Enter payment details</Text>
        <Box className="mb-4">
          <Text className="block mb-2">Email</Text>
          <Input
            type="email"
            value={userEmail}
            readOnly
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </Box>
        <Box className="mb-4">
          <Text className="block mb-2">Card information</Text>
          <Flex className="px-4 py-2 border rounded-md">
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
              className="flex-1"
            />
          </Flex>
        </Box>
        {error && (
          <Box className="text-theme-accent mb-4">
            {error}
          </Box>
        )}
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={isProcessing || !stripe}
          className="w-full !bg-theme-main text-white py-3 px-4 rounded-md"
        >
          {isProcessing ? 'Processing...' : 'Start trial'}
        </Button>
      </Flex>
    </Flex>
  );
};

export default SubscriptionForm;