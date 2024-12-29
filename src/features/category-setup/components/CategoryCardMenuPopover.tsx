import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import {
  EyeOpenIcon,
  TrashIcon,
  DotsVerticalIcon,
} from '@radix-ui/react-icons';
import { Text } from '@radix-ui/themes';

interface CategoryCardMenuProps {
  onView: () => void;
  onDelete: () => void;
}

export const CategoryCardMenuPopover: React.FC<CategoryCardMenuProps> = ({
  onView,
  onDelete,
}) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <DotsVerticalIcon className="w-5 h-5" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="z-50 min-w-48 space-y-3 bg-white rounded-xl shadow-md p-3 border border-gray-200"
          sideOffset={5}
        >
          <Text size="2">Actions</Text>
          <div className="flex flex-col space-y-2 w-full">
            <button
              onClick={onView}
              className="flex items-center justify-between gap-2 py-2 px-3 rounded-xl bg-theme-main/5 hover:bg-theme-main/20 text-left text-sm"
            >
              View
              <EyeOpenIcon className="w-5 h-5" />
            </button>

            <button
              onClick={onDelete}
              className="flex items-center justify-between gap-2 py-2 px-3 rounded-xl bg-theme-main/5 hover:bg-theme-main/20 text-left text-sm text-theme-base"
            >
              Delete
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
