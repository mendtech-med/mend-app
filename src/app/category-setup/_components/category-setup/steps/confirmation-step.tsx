import React from 'react';
import { useFormContext } from 'react-hook-form';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { FiCheckCircle } from 'react-icons/fi';

const ConfirmationStep: React.FC = () => {
    const { getValues } = useFormContext();
    const { type, category, preferences } = getValues();

    return (
        <>
            <DialogHeader>
                <DialogTitle className="p-0 m-0 py-2">
                    <div className="flex items-center">
                        <h2 className="text-xl font-semibold mr-2">Confirm Your Setup</h2>
                        <FiCheckCircle className="text-primary" />
                    </div>
                </DialogTitle>
                <DialogDescription>
                    <p className="text-gray-600 mb-4 text-[14px]">
                        Please review your selections before confirming.
                    </p>
                </DialogDescription>
            </DialogHeader>

            {/* Body */}
            <div className="flex-1 py-0 max-h-56 overflow-scroll">
                <div className="mb-2 space-y-2">
                    <p className="text-[15px] !m-0 !p-0 !leading-0 font-medium">Type: {"  "} <span className="text-gray-700 text-[14px]">{type}</span>  </p>
                    <p className="text-[15px] mt-2 !p-0 !leading-0 font-medium">Category : {"  "} <span className="text-gray-700 text-[14px]">{category}</span>  </p>
                </div>
                <div className="mb-4">
                    <p className="text-[16px] py-2 font-medium">Preferences:</p>
                    <ul className="list-disc list-inside">
                        {Object.entries(preferences).map(([key, value]) => (
                            <li key={key} className="text-[14px]">
                                <strong className="text-[14px] font-medium">{key}:</strong> {value as string}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ConfirmationStep;
