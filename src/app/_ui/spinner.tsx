// components/_ui/common/spinner.tsx
'use client';

import React from 'react';
import { FaSpinner } from 'react-icons/fa';

interface SpinnerProps {
    size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 20 }) => {
    return (
        <FaSpinner
            className="animate-spin"
            size={size}
            color="gray"
            aria-label="Loading"
        />
    );
};

export default Spinner;
