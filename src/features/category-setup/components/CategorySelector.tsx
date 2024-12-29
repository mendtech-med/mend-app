import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import Input from '../../../components/ui/Input';

interface CategorySelectorProps {
  categories: Array<{
    value: string;
    label: string;
    subcategories: Array<{ value: string; label: string }>;
  }>;
  selectedTitle: string;
  selectedCategory: string;
  selectedSubcategory: string;
  onTitleChange: (title: string) => void;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedTitle,
  selectedCategory,
  selectedSubcategory,
  onTitleChange,
  onCategoryChange,
  onSubcategoryChange,
}) => {
  const selectedCategoryData = categories.find(
    (cat) => cat.value === selectedCategory
  );

  return (
    <div className="space-y-6">
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          News Type
        </label>

        <Input
          placeholder="Enter title"
          value={selectedTitle}
          onChange={(e : React.ChangeEvent<HTMLInputElement>) => onTitleChange(e.target.value)}
        />
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          News Type
        </label>
        <Select.Root value={selectedCategory} onValueChange={onCategoryChange}>
          <Select.Trigger className="inline-flex w-full items-center justify-between rounded-xl border border-theme-accent/20 bg-white py-2 px-3 text-sm shadow-sm focus:border-theme-main focus:outline-none focus:ring-1 focus:ring-theme-main">
            <Select.Value placeholder="Select a news type" />
            <Select.Icon>
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              className="overflow-hidden rounded-md bg-white shadow-lg z-50"
              position="popper"
              sideOffset={5}
            >
              <Select.ScrollUpButton className="flex h-6 items-center justify-center bg-white">
                <ChevronUpIcon />
              </Select.ScrollUpButton>

              <Select.Viewport className="p-1">
                <Select.Group>
                  {categories.map((category) => (
                    <Select.Item
                      key={category.value}
                      value={category.value}
                      className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <Select.ItemText>{category.label}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Viewport>

              <Select.ScrollDownButton className="flex h-6 items-center justify-center bg-white">
                <ChevronDownIcon />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          News Category
        </label>
        <Select.Root
          value={selectedSubcategory}
          onValueChange={onSubcategoryChange}
          disabled={!selectedCategory}
        >
          <Select.Trigger className="inline-flex w-full items-center justify-between rounded-2xl border border-theme-accent/20 bg-white py-2 px-3 text-sm shadow-sm focus:border-theme-main focus:outline-none focus:ring-1 focus:ring-theme-main disabled:bg-gray-100 disabled:cursor-not-allowed">
            <Select.Value placeholder="Select a news category" />
            <Select.Icon>
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              className="overflow-hidden rounded-md bg-white shadow-lg z-50"
              position="popper"
              sideOffset={5}
            >
              <Select.ScrollUpButton className="flex h-6 items-center justify-center bg-white">
                <ChevronUpIcon />
              </Select.ScrollUpButton>

              <Select.Viewport className="p-1">
                <Select.Group>
                  {selectedCategoryData?.subcategories.map((sub) => (
                    <Select.Item
                      key={sub.value}
                      value={sub.value}
                      className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <Select.ItemText>{sub.label}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Viewport>

              <Select.ScrollDownButton className="flex h-6 items-center justify-center bg-white">
                <ChevronDownIcon />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  );
};

export default CategorySelector;
