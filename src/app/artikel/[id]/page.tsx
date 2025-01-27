import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';
import Image from 'next/image';

export default function DetailArtikel() {
	return (
		<>
			<Navbar />
			<main>
				<div className='px-6 md:px-16 2xl:px-40 pt-6 py-12'>
					<div className='w-full flex flex-col justify-start gap-8'>
						<div className={'text-gray-900 flex flex-col justify-start items-start gap-6'}>
							<h1 className='text-4xl md:text-5xl font-bold leading-normal tracking-wide'>Judul Artikel</h1>
							<div className='flex items-center gap-2 text-xs md:text-sm xl:text-md line-clamp-1 leading-relaxed tracking-wide'>
								<b>21 Desember 2024</b>
								<p className='text-gray-900/50'>•</p>
								<p>Artikel Dibuat oleh <span className='text-[#D7AB6C]'>Author</span></p>
							</div>
						</div>
						<div className='bg-zinc-300 w-full rounded-3xl overflow-hidden'>
							<Image src={'/img/image_placeholder.png'} alt={'Judul Artikel'} width={1500} height={1500} className={'object-cover object-center w-full h-full'} />
						</div>
						<p className='text-sm md:text-md font-medium leading-relaxed tracking-normal'>
							Deskripsi
						</p>
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
