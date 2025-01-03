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
    <div className="space-y-6">
      {fields.map((field) => (
        <div key={field.value} className="space-y-2">
          <label className="text-sm font-medium text-gray-800">
            {field.label}
          </label>
          <div className="relative w-full">
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
                <span className="flex-1 overflow-hidden text-ellipsis whitespace-wrap">
                  {getDisplayText(field.value)}
                </span>
                <Select.Icon>
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content
                  className="z-50 w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg"
                  position="popper"
                  sideOffset={4}
                  style={{ width: 'var(--radix-select-trigger-width)' }}
                >
                  <Select.ScrollUpButton className="flex h-8 items-center justify-center bg-gray-50">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>

                  <Select.Viewport className="p-2">
                    {field.subcategories.map((option) => (
                      <Select.Item
                        key={option.value}
                        value={option.label}
                        className="flex cursor-pointer items-center rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-primary focus:bg-primary focus:text-theme-main"
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

                  <Select.ScrollDownButton className="flex h-8 items-center justify-center bg-gray-50">
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
