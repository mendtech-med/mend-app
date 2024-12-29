import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'; // Size options
  variant?: 'primary' | 'secondary' | 'outline'; // Style variants
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md', // Default size
  variant = 'primary', // Default variant
  className,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-primary text-white focus:outline-none outline-none ring-theme-main focus:ring-0 focus:scale-105',
    secondary:
      'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-0 ring-theme-accent focus:scale-105',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-100 ring-theme-main focus:ring-0 focus:scale-105',
  };

  return (
    <button
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
