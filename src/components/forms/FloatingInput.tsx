'use client';
import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { FloatingLabelInputProps } from '@/utils/types';

export default function FloatingLabelInput({ id = 'example', label = 'Example', value = '', setValue = () => {}, name = 'example', type = 'text', maxLength = 30, required = false, disabled = false }: FloatingLabelInputProps) {
	const [isFocused, setIsFocused] = useState(false);
	const [example, setExample] = useState('');

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => {
		if (!value) setIsFocused(false);
	};

	return (
		<div className='relative w-full'>
			{/* Label */}
			<label
				htmlFor={id}
				className={`absolute left-2 transition-all duration-300 ${isFocused || value || example ? '-top-3 bg-[#f9f2e9] text-sm text-[#D7AB6C] bg-primary px-2' : 'top-2 text-gray-900'}`}
				style={{
					pointerEvents: 'none',
				}}>
				{label}
			</label>

			{/* Input */}
			<Input
				id={id}
				name={name}
				type={type}
				value={value || example}
				onFocus={handleFocus}
				maxLength={maxLength}
				onBlur={handleBlur}
				onChange={(e) => {
					if (setValue) {
						setValue(e.target.value);
					}
					setExample(e.target.value);
				}}
				className={`border-0 border-b-2  focus:outline-[#D7AB6C] border-black bg-transparent placeholder-transparent py-2 pl-4 w-full
          (isFocused || value || example) && ''`}
				disabled={disabled}
				required={required}
			/>
		</div>
	);
}
