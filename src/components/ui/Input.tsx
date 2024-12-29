import * as React from 'react';
import { cn } from '../../lib/cn';

// const inputVariants = {
//   default: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
//   error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
//   disabled: 'bg-gray-100 text-gray-500 cursor-not-allowed',
//   secondary: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
// };

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={cn(className)} ref={ref} {...props} />;
  }
);
Input.displayName = 'Input';

export { Input };
