// components/MultiStepForm/steps/PersonaStep.tsx

import React from 'react';
import { FiUser, FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { PersonaStepProps, StepData } from '../types';
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


const PersonaStep: React.FC<PersonaStepProps> = ({
  data,
  updateFormData,
  handleNext,
  handleBack,
  handleCancel,
}) => {
  const stepData = {
    title: `Reader's Persona`,
    icon: FaRegEye,
    description: 'Mend want to understand your ideal reader to create content that is super relevant.',
    targetSelectLabel: 'What industry is your target audience from?',
    targetSelectOptions: AudienceLevel,
    levelSelectLabel: 'What is the experience level of your target audience?',
    levelSelectOptions: AudienceTarget
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
        <DialogDescription>
          <p className="text-gray-600 mb-4 text-[14px]">{stepData.description}</p>
        </DialogDescription>
      </DialogHeader>


      {/* Body */}
      <div className="flex-1 py-4">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {stepData.targetSelectLabel}
          </label>
          <select
            value={data.target}
            onChange={(e) => updateFormData('target', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 px-3"
          >
            <option value="">Select...</option>
            {Object.entries(stepData.levelSelectOptions).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {stepData.levelSelectLabel}
          </label>
          <select
            value={data.level}
            onChange={(e) => updateFormData('level', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 px-3"
          >
            <option value="">Select...</option>
            {Object.entries(stepData.targetSelectOptions).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleBack}
          disabled={true} // Back button disabled on first step
          className={`flex items-center text-gray-700 opacity-50 cursor-not-allowed`}
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
            disabled={!data.target || !data.level}
          >
            Next <FiArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonaStep;
