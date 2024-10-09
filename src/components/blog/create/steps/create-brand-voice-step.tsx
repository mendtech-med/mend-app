import React, { useState } from 'react';
import { FiX, FiArrowRight } from 'react-icons/fi';
import {
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { FaRegEye } from "react-icons/fa6";
import { AudienceLevel, AudienceTarget, BrandVoice } from '@/constants/project';
import { AiOutlineSound } from "react-icons/ai";
import { useMutation } from 'react-query';
import axios from 'axios';
import { generateBrandVoiceNonStream } from '@/actions/brand-voice';
import toast from 'react-hot-toast';

const CreateBrandVoiceStep: React.FC<{
    handleCreateBrandVoiceBack: () => void;
    handleCreateBrandVoiceCancel: () => void;
    onSuccess?: () => void; // Optional callback after successful creation
}> = ({
    handleCreateBrandVoiceBack,
    handleCreateBrandVoiceCancel,
    onSuccess
}) => {
        const [name, setName] = useState('');
        const [content, setContent] = useState('');
        const [isCreated, setIsCreated] = useState(false);

        // Define the mutation using React Query
        const mutation = useMutation(
            async (newBrandVoice: { name: string; content: string }) => {
                // Replace with your actual API endpoint
                const response = await generateBrandVoiceNonStream({ name: newBrandVoice.name, content: newBrandVoice.content });
                console.log('response : ', response);
                if (!response) {
                    toast.error('Something went wrong! Please try again');
                }
                return response;
            },
            {
                onSuccess: () => {
                    setIsCreated(true);
                    if (onSuccess) {
                        onSuccess();
                    }
                    toast.success('Brand voice created successfully');
                },
                onError: (error: any) => {
                    // Handle error appropriately
                    console.error('Error creating brand voice:', error);
                    toast.error('Something went wrong! Please try again');
                    // Optionally, you can set an error state to display a message to the user
                },
            }
        );

        const handleCreateBrandVoice = () => {
            mutation.mutate({ name, content });
        }

        const stepData = {
            title: `New Brand Voice`,
            icon: AiOutlineSound,
            voiceNameLabel: 'Brand Voice Name',
            contentLabel: 'Content',
        };

        const Icon = stepData.icon;

        return (
            <>
                {/* Header */}
                <DialogHeader className=''>
                    <DialogTitle className='p-0 m-0 py-2'>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <h2 className="text-xl font-semibold mr-2 m-0 p-0">{stepData.title}</h2>
                                <Icon className="text-indigo-500" />
                            </div>
                        </div>
                    </DialogTitle>
                </DialogHeader>

                {/* Body */}
                <div className="flex-1 py-4">
                    <div className='mb-4'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {stepData.voiceNameLabel}
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter brand voice name'
                            className="mt-1 text-[14px] block w-full rounded-md border-gray-300 shadow-sm h-12 px-4"
                            disabled={mutation.isLoading || isCreated}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {stepData.contentLabel}
                        </label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder='Add your content here to analyze the brand voice'
                            className="mt-1 py-2 text-[14px] block w-full rounded-md border-gray-300 shadow-sm h-24 px-4"
                            disabled={mutation.isLoading || isCreated}
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-6">
                    {!isCreated ? (
                        <div className="flex space-x-2">
                            <button
                                onClick={handleCreateBrandVoiceCancel}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 flex items-center disabled:opacity-50"
                                disabled={mutation.isLoading}
                            >
                                <FiX className="mr-1" /> Cancel
                            </button>
                            <button
                                onClick={handleCreateBrandVoice}
                                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary flex items-center disabled:opacity-50"
                                disabled={mutation.isLoading || !name || !content}
                            >
                                {mutation.isLoading ? 'Creating...' : 'Create'} <FiArrowRight className="ml-1" />
                            </button>
                        </div>
                    ) : (
                        <div className="w-full flex justify-center">
                            <button
                                onClick={() => {
                                    handleCreateBrandVoiceBack();
                                    // Optionally, you can reset the form here
                                    setName('');
                                    setContent('');
                                    setIsCreated(false);
                                }}
                                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center"
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>
            </>
        );
    };

export default CreateBrandVoiceStep;
