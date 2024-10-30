// components/MultiStepForm/steps/BrandVoiceStep.tsx

import React, { use, useEffect } from 'react';
import { FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import {  BrandVoiceStepProps } from '../types';
import {
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AiOutlineSound } from "react-icons/ai";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { useQuery } from 'react-query';
import axios from 'axios';

// Define the shape of a Brand Voice object
interface BrandVoice {
  id: string;
  name: string;
  // Add other relevant fields if necessary
}

const fetchBrandVoices = async (): Promise<BrandVoice[]> => {
  const response = await axios.get('/api/brand-voices');
  return response.data;
};

const BrandVoiceStep: React.FC<BrandVoiceStepProps> = ({
  data,
  updateFormData,
  handleNext,
  handleBack,
  handleCancel,
  handleCreateBrandVoiceStep,
  forceRefetch
}) => {
  const stepData = {
    title: `Brand Voice`,
    icon: AiOutlineSound,
    brandVoiceSelectLabel: 'Select the brand voice for this news',
  };

  const Icon = stepData.icon;

  // Use React Query's useQuery to fetch brand voices
  const {
    data: brandVoices,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<BrandVoice[], Error>(
    ['brandVoices'],
    fetchBrandVoices,
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 2, // Retry failed requests up to 2 times
    }
  );

  useEffect(() => {
    if (forceRefetch) {
      refetch();
    }
  }, [forceRefetch, refetch]);

  // Optional: Refetch brand voices when a new brand voice is created
  // You can call refetch() in the onSuccess callback of the create mutation

  return (
    <>
      {/* Header */}
      <DialogHeader className=''>
        <DialogTitle className='p-0 m-0 py-2'>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold mr-2 m-0 p-0">{stepData.title}</h2>
              <Icon className="text-primary" />
            </div>
            <button
              onClick={handleCreateBrandVoiceStep}
              className="p-0 m-0 px-4 py-2 font-normal bg-primary-lowcontrast text-[16px] text-primary rounded flex items-center"
            >
              <HiOutlinePlusSmall size={22} className="mr-1" /> Create New
            </button>
          </div>
        </DialogTitle>
      </DialogHeader>

      {/* Body */}
      <div className="flex-1 py-4">
        <div className="mb-0">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {stepData.brandVoiceSelectLabel}
          </label>

          {isLoading ? (
            <select
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 px-3 bg-gray-100 cursor-not-allowed"
            >
              <option>Loading...</option>
            </select>
          ) : isError ? (
            <select
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 px-3 bg-gray-100 cursor-not-allowed"
            >
              <option>Error loading brand voices</option>
            </select>
          ) : (
            <select
              value={data.id}
              onChange={(e) => updateFormData('id', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 px-3"
            >
              <option value="">Select...</option>
              {brandVoices && brandVoices.length > 0 ? (
                brandVoices.map((voice) => (
                  <option key={voice.id} value={voice.id}>
                    {voice.name}
                  </option>
                ))
              ) : (
                <option disabled>No brand voices available</option>
              )}
            </select>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <FiArrowLeft className="mr-1" /> Back
        </button>

        <div className="flex space-x-2">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 flex items-center"
          >
            <FiX className="mr-1" /> Cancel
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary flex items-center"
            disabled={!data.id}
          >
            Next <FiArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BrandVoiceStep;
