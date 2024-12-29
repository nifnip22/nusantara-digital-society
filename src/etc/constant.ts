import { FloatingLabelInputProps } from '@/utils/types';

export const JoinUsInput : FloatingLabelInputProps[] = [
    {
        id: 'full_name',
        label: 'Nama Lengkap',
        name: 'full_name',
        type: 'text',
        maxLength: 60,
    },
    {
        id: 'email',
        name: 'email',
        label: 'Alamat Surel',
        type: 'email',
        required: true,
        disabled: false,
    },
    {
        id: 'work',
        name: 'work',
        label: 'Pekerjaan',
        type: 'text',
        maxLength: 30,
        required: true,
        disabled: false,
    },
    {
        id: 'contact',
        name: 'contact',
        label: 'Nomor Telepon',
        type: 'text',
        maxLength: 30,
        required: true,
        disabled: false,
    },
]