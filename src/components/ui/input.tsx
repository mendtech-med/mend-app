import React from 'react';
import { Text } from '@radix-ui/themes';

interface InputProps {
  id?: string;
  label?: string;
  type?:
    | 'number'
    | 'text'
    | 'search'
    | 'time'
    | 'hidden'
    | 'tel'
    | 'url'
    | 'email'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'password'
    | 'week'
    | undefined;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <Text className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </Text>
      )}

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full py-2 px-3 text-sm border border-gray-300 rounded-xl
          border-theme-accent/20 bg-white shadow-sm focus:border-theme-main focus:outline-none focus:ring-1 focus:ring-theme-main
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50
          ${className}
        `}
      />
    </div>
  );
};

export default Input;
