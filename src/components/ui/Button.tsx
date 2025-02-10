import { ButtonProps } from '@/utils/types';
import React from 'react';

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    'text-sm md:text-md lg:text-lg font-medium px-6 py-3 transition duration-300 hover:shadow-md';

  const variants = {
    primary:
      'bg-white text-gray-900 hover:text-[#D7AB6C] border border-gray-300',
    secondary:
      'bg-[#D7AB6C] hover:bg-gray-900 text-gray-100 hover:text-[#D7AB6C]',
    dark: 'bg-gray-800 text-white hover:bg-gray-900 hover:text-[#D7AB6C]',
    outline:
      'border-2 border-[#D7AB6C] text-[#D7AB6C] hover:bg-[#D7AB6C] hover:text-white',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className} ${
        disabled ? disabledStyles : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
