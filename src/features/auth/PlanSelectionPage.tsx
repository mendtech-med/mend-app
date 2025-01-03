import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Heading, Text } from '@radix-ui/themes';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { LogoSVG } from '../../assets/images/svgs';
import { PLAN_OPTIONS } from '../../libs/constants';

const PlanSelectionPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email ?? ''; 

    const [selectedPlan, setSelectedPlan] = useState('');
    const [selectedBilling, setSelectedBilling] = useState('');

    const handleSubmit = () => {
        if (!selectedPlan || !selectedBilling) {
            alert('Please select a plan and billing cycle.');
            return;
        }
      
        navigate('/payment', {
            state: {
                plan: selectedPlan,
                billing: selectedBilling,
                email,
            },
            replace: true,
        });
    };

    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-col flex-1 justify-center items-center space-y-5">
                <header className="h-12 px-4 flex items-center">
                    <img src={LogoSVG} alt="Company logo" className="h-8" />
                </header>

                <div className="w-full max-w-md bg-white p-6 border rounded-lg">
                    <Heading size="6" weight="medium">
                        Select a Subscription Plan
                    </Heading>

                    <div className="space-y-4 mt-5">
                        {/* Plan Selector */}
                        <div>
                            <Text as="label" weight="medium" size="2">
                                Choose a plan
                            </Text>
                            <Select.Root
                                onValueChange={(value) => {
                                    const [plan, billing] = value.split('-');
                                    setSelectedPlan(plan);
                                    setSelectedBilling(billing);
                                }}
                            >
                                <Select.Trigger
                                    className="flex items-center justify-between w-full bg-gray-50 border border-gray-300 p-2 rounded-lg"
                                    aria-label="Select plan"
                                >
                                    <Select.Value placeholder="Select your plan" />
                                    <Select.Icon>
                                        <ChevronDownIcon />
                                    </Select.Icon>
                                </Select.Trigger>

                                <Select.Content className="bg-white rounded-md shadow-lg">
                                    <Select.ScrollUpButton className="flex items-center justify-center">
                                        <ChevronUpIcon />
                                    </Select.ScrollUpButton>
                                    <Select.Viewport className="p-2">
                                        {PLAN_OPTIONS.map((option) => (
                                            <Select.Item
                                                key={option.value}
                                                value={option.value}
                                                className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                                            >
                                                <Select.ItemText>{option.label}</Select.ItemText>
                                            </Select.Item>
                                        ))}
                                    </Select.Viewport>
                                    <Select.ScrollDownButton className="flex items-center justify-center">
                                        <ChevronDownIcon />
                                    </Select.ScrollDownButton>
                                </Select.Content>
                            </Select.Root>
                        </div>

                        {/* Action Button */}
                        <div>
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-theme-main text-white px-4 py-2 rounded-lg hover:bg-theme-accent"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanSelectionPage;
