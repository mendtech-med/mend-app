import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { PLAN_OPTIONS } from '../../libs/constants';

interface SelectPlanProps {
    onSelectPlanAndBilling: (plan: string, billing: string) => void;
}

const SelectPlan: React.FC<SelectPlanProps> = ({ onSelectPlanAndBilling }) => {
    const handleSelect = (value: string) => {
        const [plan, billing] = value.split('-');
        onSelectPlanAndBilling(plan, billing);
    };

    return (
        <Select.Root onValueChange={handleSelect}>
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
    );
};

export default SelectPlan;
