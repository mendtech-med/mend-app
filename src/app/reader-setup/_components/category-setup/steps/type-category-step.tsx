// components/CategorySetup/steps/TypeCategoryStep.tsx

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Types, Categories, ITypes } from '../data';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { FiType } from 'react-icons/fi';

const TypeCategoryStep: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedType = watch('type') as ITypes | undefined;

  return (
    <>
      {/* Header */}
      <DialogHeader>
        <DialogTitle className="p-0 m-0 py-2">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold mr-2">Select News Type and News Category</h2>
            <FiType className="text-primary" size={24} />
          </div>
        </DialogTitle>
        <DialogDescription>
          <p className="text-gray-600 mb-4 text-sm">
            Please select the type and category that best fits your setup.
          </p>
        </DialogDescription>
      </DialogHeader>

      {/* Body */}
      <div className="flex-1 py-4">
        {/* Type Select */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="type">
            Type
          </label>
          <select
            id="type"
            {...register('type')}
            className={`mt-1 block w-full rounded-md border ${
              errors.type ? 'border-red-500' : 'border-gray-300'
            } shadow-sm h-12 px-3 focus:outline-none focus:ring-primary focus:border-primary`}
          >
            <option value="">Select Type...</option>
            {Types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {/* {errors.type && (
            <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
          )} */}
        </div>

        {/* Category Select */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            {...register('category')}
            className={`mt-1 block w-full rounded-md border ${
              errors.category ? 'border-red-500' : 'border-gray-300'
            } shadow-sm h-12 px-3 focus:outline-none focus:ring-primary focus:border-primary`}
            disabled={!selectedType}
          >
            <option value="">Select Category...</option>
            {selectedType &&
              Categories[selectedType].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
          {/* {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
          )} */}
        </div>
      </div>
    </>
  );
};

export default TypeCategoryStep;
