import React from 'react';
import { PlusIcon } from '@radix-ui/react-icons';

interface ActionCardProps {
  onClick: () => void; // Handler function passed from the parent component
}

export const ActionCard: React.FC<ActionCardProps> = ({ onClick }) => {
  return (
    <div
      className="rounded-lg flex hover:bg-white/50 cursor-pointer flex-col items-center justify-center space-y-4 w-52 h-36 border-dashed border-4 border-gray-400/20"
      onClick={onClick}
    >
      <button
        className="w-10 h-10 bg-primary rounded-full grid place-items-center text-white transition-all duration-300 shadow-main hover:scale-110"
        aria-label="Add"
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
  );
};
