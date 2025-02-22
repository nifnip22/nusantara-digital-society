import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Top from '@/components/navigation/Top';

const font = Plus_Jakarta_Sans({
	variable: '--font-default',
	subsets: ['latin'],
});

const siteName = 'Nusantara Digital Society';

export const metadata: Metadata = {
	title: {
		template: `%s | ${siteName}`,
		default: siteName,
	},
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
				<div className='font-geist-sans overflow-x-hidden'>
					{children}
					<Top />
				</div>
			</body>
		</html>
	);
}
