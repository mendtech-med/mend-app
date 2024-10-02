import React from 'react';
import { CgSpinner } from 'react-icons/cg';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center">
            <CgSpinner className="animate-spin text-primary h-8 w-8" />
        </div>
    );
};

export default Spinner;
