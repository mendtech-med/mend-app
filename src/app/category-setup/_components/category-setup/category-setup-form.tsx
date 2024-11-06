// components/CategorySetup/CategorySetupForm.tsx

'use client';

import React, { useState } from 'react';
import TypeCategoryStep from './steps/type-category-step';
import PreferencesStep from './steps/preferences-step';
import ConfirmationStep from './steps/confirmation-step';
import { CategorySetupFormValues, CategorySetupSchema } from './types';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FiArrowLeft } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";



interface CategorySetupFormProps {
    onClose?: () => void;
}

const CategorySetupForm: React.FC<CategorySetupFormProps> = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const router = useRouter();

    const methods = useForm<CategorySetupFormValues>({
        resolver: zodResolver(CategorySetupSchema),
        defaultValues: {
            type: undefined,
            category: undefined,
            preferences: {},
        },
    });

    const { handleSubmit, watch, trigger } = methods;

    const mutation = useMutation((data: CategorySetupFormValues) => {
        return axios.post('/api/category-setup', data); // Adjust API endpoint
    });

    const onSubmit = (data: CategorySetupFormValues) => {
        mutation.mutate(data, {
            onSuccess: (response) => {
                toast.success('Category setup successfully');
                // Redirect or perform any action after success
                router.push(`/category/${response.data.id}/details`);
                if (onClose) onClose();
            },
            onError: (error: any) => {
                toast.error('Something went wrong! Please try again');
                console.error('Error:', error);
            },
        });
    };

    const handleNext = async () => {
        const isValid = await trigger(['type', 'category']);
        if (isValid) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <TypeCategoryStep />;
            case 2:
                return <PreferencesStep />;
            case 3:
                return <ConfirmationStep />;
            default:
                return null;
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {renderStep()}
                    {/* Footer */}
                    <div className="flex w-full justify-between items-center mt-6">

                        {currentStep > 1 && (
                            <button
                                onClick={handleBack}
                                className="flex items-center text-gray-700 hover:text-gray-900"
                            >
                                <FiArrowLeft className="mr-1" /> Back
                            </button>
                        )}
                        <div className="flex space-x-2">
                            {currentStep < 3 && (
                                <button
                                    onClick={handleNext}
                                    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary flex items-center"
                                >
                                    Next <FiArrowRight className="ml-1" />
                                </button>
                            )}

                            {currentStep === 3 && (
                                <button
                                    type="submit"
                                    onClick={handleNext}
                                    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary flex items-center"
                                >
                                    Confirm
                                </button>
                            )}
                        </div>
                    </div>



                </div>
            </form>
        </FormProvider>
    );
};

export default CategorySetupForm;
