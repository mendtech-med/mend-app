import * as Select from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import React from 'react';

interface FieldValueSelectorProps {
  fields: Array<{
    value: string;
    label: string;
    subcategories: Array<{ value: string; label: string }>;
  }>;
  fieldValues: Record<string, string[]>;
  onFieldChange: (fieldName: string, values: string[]) => void;
}

const FieldValueSelector: React.FC<FieldValueSelectorProps> = ({
  fields,
  fieldValues,
  onFieldChange,
}) => {
  const handleValueChange = (fieldName: string, selectedLabel: string) => {
    const currentLabels = fieldValues[fieldName] || [];
    let newLabels: string[];

    if (currentLabels.includes(selectedLabel)) {
      newLabels = currentLabels.filter((label) => label !== selectedLabel);
    } else {
      newLabels = [...currentLabels, selectedLabel];
    }

    onFieldChange(fieldName, newLabels);
  };

  const getDisplayText = (fieldName: string) => {
    const selectedLabels = fieldValues[fieldName] || [];
    return selectedLabels.length > 0
      ? selectedLabels.join(', ')
      : 'Select options...';
  };

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.value} className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <div className="relative">
            <Select.Root
              onValueChange={(label) => handleValueChange(field.value, label)}
            >
              <Select.Trigger
                ref={(ref) => {
                  if (ref) {
                    const content = ref.nextElementSibling;
                    if (content) {
                      const contentElement = content.querySelector('[data-radix-select-content]') as HTMLElement;
                      if (contentElement) {
                        contentElement.style.width = `${ref.clientWidth}px`;
                      }
                    }
                  }
                }}
                className="inline-flex w-full items-center justify-between rounded-xl shadow-sm border border-gray-300 bg-white px-3 py-2 text-sm text-left placeholder:text-gray-400 focus:border-theme-main focus:outline-none focus:ring-1 focus:ring-theme-main disabled:cursor-not-allowed disabled:opacity-50">
                <div className="flex-1 overflow-hidden text-ellipsis whitespace-wrap">
                  {getDisplayText(field.value)}
                </div>
                <Select.Icon className="ml-2">
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content
                  className="z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white text-slate-700 shadow-md animate-in fade-in-80"
                  position="popper"
                  sideOffset={5}
                  style={{ width: 'var(--radix-select-trigger-width)' }}
                >
                  <Select.ScrollUpButton className="flex h-6 items-center justify-center bg-white">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>

                  <Select.Viewport className="p-1">
                    {field.subcategories.map((option) => (
                      <Select.Item
                        key={option.value}
                        value={option.label}
                        className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:text-theme-main"
                      >
                        <div className="flex items-center">
                          <div className="mr-2 h-4 w-4 border rounded flex items-center justify-center">
                            {(fieldValues[field.value] || []).includes(
                              option.label
                            ) && <CheckIcon className="h-3 w-3" />}
                          </div>
                          <Select.ItemText>{option.label}</Select.ItemText>
                        </div>
                      </Select.Item>
                    ))}
                  </Select.Viewport>

                  <Select.ScrollDownButton className="flex h-6 items-center justify-center bg-white">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FieldValueSelector;
