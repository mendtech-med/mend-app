// components/ui/Spinner.tsx

import React from 'react';

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
    className?: string;
}

const ContentViewGenerating: React.FC<SpinnerProps> = ({
    size = 'medium',
    color = 'text-primary', // Tailwind CSS color class
    className = '',
}) => {


    return (
        <div
            className={``}
        >
            <span >Generating...</span>
        </div>
    );
};

export default ContentViewGenerating;
