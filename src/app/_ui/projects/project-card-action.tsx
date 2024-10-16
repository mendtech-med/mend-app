// components/ProjectCardAction.tsx
'use client';

import React from 'react';
import { IconType } from 'react-icons';
import Spinner from '../spinner';
import { MdCheck } from 'react-icons/md';
import { cn } from '@/lib/utils';

interface ProjectCardActionProps {
  name: string;
  onClick: () => void;
  icon: IconType;
  color?: string;
  size?: number;
  isLoading?: boolean;
  isSuccess?: boolean;
}

const ProjectCardAction: React.FC<ProjectCardActionProps> = ({
  name,
  onClick,
  icon: Icon,
  color = 'black',
  size = 20,
  isLoading = false,
  isSuccess = false,
}) => {
  return (
    <div onClick={onClick}>
      <div
        className={cn(
          'flex items-center px-3 h-10 py-2 bg-slate-50 text-black cursor-pointer transition-all duration-300 rounded-md hover:bg-slate-100'
        )}
      >
        <span
          className={`text-black text-[14px]`}
          style={{
            color: color,
          }}
        >
          {name}
        </span>
        <div className="flex-1 grid place-content-end">
          {isLoading ? (
            <Spinner size={20} />
          ) : isSuccess ? (
            <MdCheck size={size} color="green" />
          ) : (
            <Icon size={size} color={color} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardAction;
