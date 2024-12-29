export interface FloatingLabelInputProps {
    id: string;
    label: string;
    value?: string;
    setValue?: (value: string) => void;
    name: string;
    type: string;
    maxLength?: number;
    required?: boolean;
    disabled?: boolean;
  }
  