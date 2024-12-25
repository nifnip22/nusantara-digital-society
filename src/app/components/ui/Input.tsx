import React from 'react';

interface InputProps {
	label: string;
	inputName: string;
	type?: string;
	placeholder?: string;
	maxLength?: number;
	value?: string | number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	required?: boolean;
	disabled: boolean;
}

const Input: React.FC<InputProps> = ({ label, inputName, type = 'text', placeholder = '', maxLength = 30, value, onChange, onBlur, required = false, disabled = false }) => {
	return (
		<div className='flex flex-col gap-4'>
			<label htmlFor={inputName} className='text-lg'>
				{label}
			</label>
			<input
				id={inputName}
				name={inputName}
				type={type}
				placeholder={placeholder}
				maxLength={maxLength}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				required={required}
				disabled={disabled}
				className={`w-full h-12 px-4 text-lg rounded-lg border border-gray-300 outline-none focus:ring-4 focus:ring-[#D7AB6C] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
			/>
		</div>
	);
};

export default Input;
