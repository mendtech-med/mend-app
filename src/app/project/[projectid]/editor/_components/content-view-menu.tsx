// components/ui/Header.tsx

import React from 'react';
import { IconType } from 'react-icons';

interface HeaderProps {
    title: string;
    buttonLabel: string;    
    onButtonClick: () => void;
    buttonIcon: IconType;
    buttonClassName?: string; // Optional prop for additional button styling
    isUpdating?: boolean; // Optional prop to show a loading state
}

const ContentViewMenu: React.FC<HeaderProps> = ({
    title,
    buttonLabel,
    onButtonClick,
    buttonIcon: ButtonIcon,
    buttonClassName = '',
    isUpdating = false,
}) => {
    return (
        <header className="flex justify-between items-center  px-4 py-4 bg-white ">
            {/* Title */}
            <p className="text-xl !font-normal text-gray-800 p-0 m-0">{title}</p>

            {/* Button */}
            <button
                onClick={onButtonClick}
                className={`flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${buttonClassName}`}
            >
                {
                    isUpdating ? 'Loading...' : buttonLabel
                }
            </button>
        </header>
    );
};

export default ContentViewMenu;
