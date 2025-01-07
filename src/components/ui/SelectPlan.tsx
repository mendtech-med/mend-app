import React from 'react';
import { PLAN_OPTIONS } from '../../libs/constants';

interface SelectPlanProps {
    onSelectPlanAndBilling: (plan: string) => void;
    value: string;
}

const SelectPlan: React.FC<SelectPlanProps> = ({ value, onSelectPlanAndBilling }) => {
    const handleSelectPlan = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const val = event.target.value;
        console.log("Inside the select plan", val);
        
        onSelectPlanAndBilling(val);
    };

    return (
        <select
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleSelectPlan}
            defaultValue="" // Ensures a placeholder is shown initially
        >
            <option value={value} disabled>
                Select your plan
            </option>
            {PLAN_OPTIONS.map((planDetails, index) => (
                <option key={index} value={planDetails.value}>
                    {planDetails.label}
                </option>
            ))}
        </select>
    );
};

export default SelectPlan;
