// components/MultiStepForm/steps/PersonaStep.tsx

import React from 'react';
import { FiUser, FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { TitleStepProps, StepData } from '../types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaRegEye } from "react-icons/fa6";
import { AudienceLevel, AudienceTarget, BrandVoice } from '@/constants/project';
import { AiOutlineSound } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";


const TitleStep: React.FC<TitleStepProps> = ({
  data,
  updateFormData,
  handleNext,
  handleBack,
  handleCancel,
  isSubmitting
}) => {
  const stepData = {
    title: `News Title`,
    icon: IoDocumentTextOutline,
    blogTitleLabel: 'Enter the title of the news',
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
              <Icon className="text-primary" />
            </div>
          </div>
        </DialogTitle>
      </DialogHeader>


      {/* Body */}
      <div className="flex-1 py-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {stepData.blogTitleLabel}
          </label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => updateFormData('title', e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleNext();
              }
            }}
            placeholder='UK Budget 2024: budget will raise taxes by £40 billion'
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 px-4"
          />
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
            disabled={!data.title || isSubmitting}
          >
            {
              !isSubmitting ? (
                <>
                  Create
                </>
              ) : (
                <>
                  Creating ...
                </>
              )
            }
          </button>
        </div>
      </div>
    </>
  );
};

export default TitleStep;
