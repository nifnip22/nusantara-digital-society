import type { Config } from 'tailwindcss';

export default {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			screens: {
				'3xl': '1920px',
				'4xl': '2560px',
			},
		},
	},
	plugins: [],
} satisfies Config;
