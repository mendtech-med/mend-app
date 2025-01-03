import * as Popover from '@radix-ui/react-popover';
import { InfoCircledIcon } from '@radix-ui/react-icons';

const PLAN_FEATURES = {
    pro: [
        "1 User Seat",
        "Up to 5 Reader Setups",
        "Up to 3 Category Setups",
        "Unlimited Brand Voices",
        "30 Articles",
        "Unlimited Words in Chat",
        "Editorial Refer allowed",
        "Editorial Find allowed",
    ],
    collaborate: [
        "3 User Seats",
        "Unlimited Reader Setups",
        "Unlimited Category Setups",
        "Unlimited Brand Voices",
        "100 Articles",
        "Unlimited Words in Chat",
        "Editorial Refer allowed",
        "Editorial Find allowed",
    ],
    enterprise: [
        "8 User Seats (additional £55/user)",
        "Unlimited Reader Setups",
        "Unlimited Category Setups",
        "Unlimited Brand Voices",
        "Unlimited Articles",
        "Unlimited Words in Chat",
        "Editorial Refer allowed",
        "Editorial Find allowed",
    ],
};

type Props = {
    billing: 'pro' | 'collaborate' | 'enterprise'
}
const PlanInfoPopover: React.FC<Props> = ({ billing }) => {
    const planFeatures = PLAN_FEATURES[billing]
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Plan Information"
                >
                    <InfoCircledIcon className="w-5 h-5" />
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    className="bg-white rounded-lg shadow-lg p-6 w-64 z-50 border"
                    sideOffset={5}
                >
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Current Plan Features</h3>
                    <ul className="space-y-2">
                        {planFeatures.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-center text-sm text-gray-700"
                            >
                                <svg
                                    className="w-4 h-4 mr-2 text-theme-main"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <Popover.Arrow className="fill-white" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

export default PlanInfoPopover;