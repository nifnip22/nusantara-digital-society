import Navbar from '@/components/navigation/Navbar';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='w-full h-screen overflow-hidden bg-[#f9f2e9]'>
			<Navbar />
			<div className='mt-20 flex flex-col justify-center items-center gap-y-6'>
				<h1 className='text-[8rem] font-bold text-[#D7AB6C]'>404</h1>
				<p className='text-lg'>Halaman Tidak Ditemukan</p>
				<Link href={'/'}>
					<Button label='Kembali ke Beranda' variant='dark' className='rounded-full before:content-["←_"]' />
				</Link>
			</div>
		</div>
	);
}
