import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';

export default function artikelLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main>
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12'>
					<div className='w-full flex flex-col justify-start gap-8'>
						{children}
						<div className='w-full flex flex-row justify-between items-center gap-2'>
							<hr className='w-full h-1 bg-[#D7AB6C]' />
							<p className='text-sm md:text-md text-[#D7AB6C] font-medium whitespace-nowrap'>Akhir dari Artikel</p>
							<hr className='w-full h-1 bg-[#D7AB6C]' />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
