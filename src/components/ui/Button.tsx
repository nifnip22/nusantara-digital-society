import React from 'react';

interface ButtonProps {
	label: string;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'secondary' | 'outline' | 'danger';
	className?: string; 
	onClick?: () => void; 
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	label,
	type = 'button',
	variant = 'primary',
	className = '',
	onClick,
	disabled = false,
}) => {
	const baseStyles = 'text-sm md:text-md xl:text-xl font-medium px-6 py-3 transition duration-300 shadow-md';

	const variants = {
		primary: 'bg-white text-gray-900 hover:text-[#D7AB6C]',
		secondary: 'bg-[#D7AB6C] hover:bg-gray-900 text-gray-100 hover:text-[#D7AB6C]',
		outline: 'border-4 border-[#D7AB6C] text-[#D7AB6C] hover:bg-[#D7AB6C] hover:text-white',
		danger: 'bg-red-500 text-white hover:bg-red-700',
	};

	const disabledStyles = 'opacity-50 cursor-not-allowed';

	return (
		<button type={type} className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? disabledStyles : ''}`} onClick={onClick} disabled={disabled}>
			{label}
		</button>
	);
};

export default Button;
