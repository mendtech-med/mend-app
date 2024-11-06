// components/CategorySetup/steps/PreferencesStep.tsx

import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Preferences, ITypes } from '../data';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { FiSettings } from 'react-icons/fi';

const PreferencesStep: React.FC = () => {
  const { register, watch, setValue, formState: { errors } } = useFormContext();
  const selectedType = watch('type') as ITypes;
  const [preferenceList, setPreferenceList] = useState<{ key: string; options: string[] }[]>([]);

  useEffect(() => {
    if (selectedType && Preferences[selectedType]) {
      setPreferenceList(Preferences[selectedType]!);
      // Initialize preferences if not already set
      const existingPrefs = watch('preferences');
      if (Object.keys(existingPrefs).length === 0) {
        const initialPrefs: Record<string, string> = {};
        Preferences[selectedType]!.forEach((pref) => {
          initialPrefs[pref.key] = '';
        });
        setValue('preferences', initialPrefs);
      }
    } else {
      setPreferenceList([]);
      setValue('preferences', {});
    }
  }, [selectedType, setValue, watch]);

  return (
    <>
      {/* Header */}
      <DialogHeader>
        <DialogTitle className="p-0 m-0 py-2">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold mr-2">Set Your Preferences</h2>
            <FiSettings className="text-primary" />
          </div>
        </DialogTitle>
        <DialogDescription>
          <p className="text-gray-600 mb-4 text-[14px]">
            Please set your preferences based on the selected type.
          </p>
        </DialogDescription>
      </DialogHeader>

      {/* Body */}
      <div className="flex-1 py-4 overflow-y-auto max-h-96">
        {preferenceList.length === 0 ? (
          <p>No preferences available for the selected type.</p>
        ) : (
          preferenceList.map((pref) => (
            <div key={pref.key} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {pref.key}
              </label>
              <select
                {...register(`preferences.${pref.key}`)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 px-3"
              >
                <option value="">Select...</option>
                {pref.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PreferencesStep;
