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
	const baseStyles = 'text-[1.5rem] font-medium rounded-lg px-4 py-2 transition duration-300';

	const variants = {
		primary: 'bg-[#D7AB6C] text-gray-100 hover:bg-gray-900 hover:text-[#D7AB6C]',
		secondary: 'bg-gray-800 text-[#D7AB6C] hover:bg-gray-900',
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
