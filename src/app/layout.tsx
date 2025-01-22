import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const font = Plus_Jakarta_Sans({
	variable: '--font-default',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Nusantara Digital Society',
	description: 'Website Resmi mengenai Wawasan, Aktivitas, dan Pembaruan dari Komunitas Nusantara Digital Society.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${font.variable} antialiased`}>
				<div className='font-geist-sans overflow-x-hidden'>{children}</div>
			</body>
		</html>
	);
}
